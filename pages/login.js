import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img
        className="w-48 mb-8"
        src="https://links.papareact.com/9xl"
        alt="spotify-logo"
      />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: "/",
              })
            }
            className="bg-[#14bd55] text-white py-4 px-6 rounded-full"
          >
            Login With {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
