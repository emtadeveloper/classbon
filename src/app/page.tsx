import Image from "next/image";
import { Button } from "./_components/button";

export default function Home() {
  return (
    <>
      <section className="bg-hero-pattern bg-no-repeat bg-center h-80  mt-5 xl:mt-20 xl:bg-left">
        <div className="container flex flex-col-reverse items-center xl:flex-row">
          <div className=" flex  flex-col  gap-5 mt-12  pb-5 text-center  xl:text-right">
            <h3 className="text-xl dark:text-info xl:text-2xl">خوش اومدی ...</h3>
            <h1 className="text-3xl  font-black lg:text-5xl  xl:text-5xl gradient">
              مسیر صعود به قله های برنامه نویسی
            </h1>
            <p className="text-lg font-bold  leading-8">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
              کاربردهای متنوع طراحی اساسا مورد استفاده قرار گیرد
            </p>
            <Image
              src="/images/frameworks.png"
              className="grayscale mt-4 opacity-70  m-auto xl:m-0"
              width={412}
              height={39}
              alt=""
            />
          </div>
          <Image src="/images/programmer-landing.svg" width={702} height={521} alt="کلاسبن" />
        </div>
      </section>
      <div className="container">
        <Button variant="info" size="large" shape="wide" animatedIcon={true}>
          ثبت نام
        </Button>
      </div>
    </>
  );
}
