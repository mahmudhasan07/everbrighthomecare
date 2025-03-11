import Image from "next/image";

const Logo = () => {
  return (
            <div className="flex justify-center items-center">
              <Image
                alt="logo"
                src="https://everbrighthomecare.co.uk/wp-content/uploads/2023/08/20240426_124633_0000-e1714395307274.png"
                width={200}
                height={100}
                className="justify-center items-center"
              />
            </div>
  );
};

export default Logo;