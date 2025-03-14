export default function page () {
  return (
   <main className="flex flex-col">
    <section className="flex justify-center">
     <div className="w-300 flex flex-col h-full items-center gap-3">
         <h2 className="text-4xl font-bold">PROYECTS</h2>
      <div className="grid grid-cols-6 grid-rows-2 gap-5 bg-gray-500">
         <div className="col-span-3 row-span-3 rounded-3xl">
           <img className="w-screen h-50 object-cover rounded-3xl" src="https://cdn.zendalibros.com/wp-content/uploads/tommy-shelby-peaky-blinders-serie.jpg" alt="" />
         </div>
         <div className="">
           <img className="rounded-2xl w-screen h-[240px]" src="https://m.media-amazon.com/images/I/61aPzScmLoS._AC_SL1024_.jpg" alt="" />
         </div>
         <div className="col-span-2">
          <img className="rounded-2xl h-60" src="https://media.revistagq.com/photos/5d6cd46531110c0008799216/16:9/w_2560%2Cc_limit/1464198499-peaky.jpg" alt="" />
         </div>
         <div className="col-span-2">
            <img className="rounded-2xl h-60" src="https://www.clarin.com/2018/10/10/aEVd_1EAY_1256x620__1.jpg" alt="" />
         </div>
         <div>5</div>
         <div>6</div>
       </div>
      </div>
    </section>
  </main>
  )
}
