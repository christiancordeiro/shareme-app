import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"
import { useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { jwtDecode } from "jwt-decode"
import shareVideo from "../assets/share.mp4"
import logo from "../assets/logowhite.png"
import { client } from "../client"

const Login = () => {
  const navigate = useNavigate()

  const responseGoogle = (response) => {
    const decodedHeader = jwtDecode(response.credential)

    localStorage.setItem("user", JSON.stringify(decodedHeader))

    const { name, sub, picture } = decodedHeader

    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    }

    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true })
    })
  }

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} alt="Logo" width="130px" />
          </div>
          <div className="shadow-2xl">
            <GoogleOAuthProvider
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
            >
              <GoogleLogin
                render={(renderProps) => (
                  <button
                    type="button"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <FcGoogle className="mr-4" />
                    Sign in with Google
                  </button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
