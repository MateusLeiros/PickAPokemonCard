import Button from "./components/Button";
import "./test.css";

export default function Test() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button
        className="class-small-width"
        label={"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa assssssssssssss 1283019283"}
        onClick={function (): void {
          console.log("texto longo botão pequeno");
        }}
      />
      <Button
        className="class-full-width"
        label={"width override"}
        onClick={function (): void {
          console.log("texto longo");
        }}
      />
      <Button
        className="class-fixed-width"
        label={"fixed width override"}
        onClick={function (): void {
          console.log("tamanho fixo");
        }}
      />
      <Button
        disabled={true}
        className="class-disabled"
        label={"disabled-override"}
        onClick={function (): void {
          console.log("sobreeescrever disables");
        }}
      />
      {/* <Button
        isLoading={true}
        label={"loading"}
        onClick={function (): void {
          console.log("ativar loading");
        }}
      />
      <Button
        image={} //novo icone
        label={"loading"}
        onClick={function (): void {
          console.log("sobrrescrever icone");
        }}
      /> */}
    </div>
  );
}
