import Logo from "../../components/Logo.tsx";

export default function Footer() {

  return (
    <div className="flex justify-around items-center w-full h-36 bg-mygray bottom-0">
      <Logo />
      <div className="flex flex-col text-sm text-white font-WorkSans">
        <span>Created by Mateus Leiros</span>
        <span>mateusleiros@gmail.com</span>
      </div>
    </div>
  );
}
