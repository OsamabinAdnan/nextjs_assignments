import Navbar from "./OtherComponents/Navbar";
import Form from "./OtherComponents/Form";
import { auth } from "./lib/auth";
import { SessionWrapper } from "@/components/SessionWrapper";
import SignInPage from "@/components/login/SignInComponent";





export default async function Home() {
    const session = await auth();
    const isAuthenticated = !!session?.user
  return (
    <>
      <main className=" bgmain bgmainSecond shadow-2xl bg-center bg-cover bx-shadow rounded-2xl w-9/12 h-[85%] max-h-[100%] overflow-hidden">

        <Navbar/>
        <div className="grid grid-col-1 lg:grid-cols-3 items-start ">
          <div>
          {isAuthenticated ? (
              // Content for authenticated users
              <div>
                <h1 className="text-2xl font-bold ml-5">Welcome, {session?.user?.name || 'User'}!</h1>
                {/* Add authenticated user content here */}
                <p className="text-xl font-semibold ml-5">You are logged in.</p>
              </div>
            ) : (
                  // Content for unauthenticated users
                  <div>
                    <Form/>
            
                    <div className="flex flex-col justify-center items-center">
                      <SessionWrapper>
                      <SignInPage/>
                      </SessionWrapper>
                    </div>
                  </div>
                )
            }
            
          
          </div>
        </div>

      </main>
    </>
  );
}
