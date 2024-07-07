export default function Footer() {
  return (
    <section className=" px-20  opacity-80 bg-gray-800">
      <div className="grid grid-cols-4 gap-4 text-start px-6">
        <div className="pt-12 pb-10">
          <h2 className="text-4xl font-bold ">Swapno Mondol</h2>
          <p className="text-xl pt-4 font-semibold text-gray-100">
            I have expertise in frontend development using React.js and Next.js.
            For backend development, I have strong knowledge of Django,
            including both MVT and DRF, and
          </p>
        </div>
        <div className="pt-12 pb-10 mx-auto">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-md pt-3 font-semibold text-xl">
            <a
              className="text-blue-500 underline"
              href="https://lwskart-nine.vercel.app/en"
            >
              Blogify (React js + Django)
            </a>
          </p>
          <p className="text-md pt-3 font-semibold text-xl">
            <a
              className="text-blue-500 underline"
              href="https://blogify-teal-three.vercel.app/"
            >
              LwsCart (Next js + Tailwind css)
            </a>
          </p>
          <p className="text-md pt-3 font-semibold text-xl">
            <a
              className="text-blue-500 underline"
              href="https://readers-realm.onrender.com/"
            >
              Readers Realm (Django-MVT)
            </a>
          </p>
        </div>
        <div className="pt-12 pb-10 mx-auto">
          <h2 className="text-3xl font-bold">Links</h2>
          <p className="text-md pt-3 font-semibold text-xl">
            <a
              className="text-blue-500 underline"
              href="https://www.linkedin.com/in/swapno-mondol/"
            >
              Linkdin
            </a>
          </p>
          <p className="text-md pt-3 font-semibold text-xl">
            <a
              className="text-blue-500 underline"
              href="https://github.com/Swapno963"
            >
              Git Hub
            </a>
          </p>
          <p className="text-md pt-3 font-semibold text-xl">
            <a
              className="text-blue-500 underline "
              href="https://www.facebook.com/profile.php?id=100090206887787"
            >
              Facebook
            </a>
          </p>{" "}
        </div>
        <div className="pt-12 pb-10 mx-auto">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-md pt-3 font-semibold text-xl  text-gray-100">
            Dhanmondi, Dhaka 1207
          </p>
          <p className="text-md pt-3 font-semibold text-xl text-gray-100">
            (+880) 017091 - 12230
          </p>
          <p className="text-md pt-3 font-semibold text-xl text-gray-100">
            swapno963@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
