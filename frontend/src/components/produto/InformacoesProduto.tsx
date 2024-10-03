import { Produto } from "@/core";
import Image from "next/image";
import Especificacoes from "./Especificacoes";

export interface InformacoesProdutoProps {
  produto: Produto;
}

export default function InformacoesProduto(props: InformacoesProdutoProps) {
  const { produto } = props;
  return produto ? (
    <div className="flex items-center bg-violet-dark rounded-xl p-5">
      <div className="flex-1 relative flex justify-center h-96">
        <Image
          src={produto.imagem!}
          fill
          className="object-contain "
          alt="Imagem do Produto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw "
        />
      </div>
      <Especificacoes produto={produto!} />
    </div>
  ) : null;
}
