// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }





import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <Image
              src="/logo.jpeg"
              alt="Farm2Family"
              width={50}
              height={50}
            />
            <span className="ms-2 fw-bold text-success fs-4">
              Farm2Family
            </span>
          </a>

          <div className="d-flex gap-2">
            <Link href="/farmer/login" className="btn btn-outline-success">
              Farmer Login
            </Link>

            <Link href="/customer/login" className="btn btn-success">
              Customer Login
            </Link>
          </div>
        </div>
      </nav>

  
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">
              Connecting Farmers Directly With Customers
            </h1>

            <p className="lead text-muted mt-3">
              Buy fresh products directly from farmers and help them earn
              better profits without middlemen.
            </p>

            <div className="mt-4 d-flex flex-wrap gap-3">
              <Link
                href="/register"
                className="btn btn-success btn-lg"
              >
                Register as Farmer
              </Link>

              <Link
                href="/customer/register_cust"
                className="btn btn-primary btn-lg"
              >
                Register as Customer
              </Link>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <Image
              src="/far.jpg"
              alt="Farmer"
              width={600}
              height={500}
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>

   
      <section className="container py-5">
        <h2 className="text-center mb-5">Why Choose Farm2Family?</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h4>🚜 Direct Selling</h4>
                <p>
                  Farmers can sell products directly without middlemen.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h4>🛒 Easy Ordering</h4>
                <p>
                  Customers can browse and order fresh products online.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h4> Better Earnings</h4>
                <p>
                  Fair pricing ensures better income for farmers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>How It Works</h2>

          <div className="row mt-5">
            <div className="col-md-3">
              <h4>1️ Register</h4>
              <p>Create your account.</p>
            </div>

            <div className="col-md-3">
              <h4>2 Add Products</h4>
              <p>Farmers list their products.</p>
            </div>

            <div className="col-md-3">
              <h4>3️ Place Orders</h4>
              <p>Customers purchase fresh products.</p>
            </div>

            <div className="col-md-3">
              <h4>4️ Delivery</h4>
              <p>Products delivered to customers.</p>
            </div>
          </div>
        </div>
      </section>

  
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <h4>Farm2Family</h4>

          <p>
            Connecting Farmers and Customers through technology.
          </p>

          <p className="mb-0">
            © 2026 Farm2Family. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}