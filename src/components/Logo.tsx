import PokemonIcon from "../assets/pbIcon.svg?react";

export default function Logo() {

  return (
    <div>
      <div className="flex items-center gap-x-2.5 cursor-pointer">
        <PokemonIcon className="w-8 h-8" />
        <span className="font-WorkSansSemiBold text-white text-xl">Pick a Pokemon Card</span>
      </div>
    </div>
  );
}
