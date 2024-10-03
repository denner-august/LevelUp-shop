import Especificacoes from "./especificacoes";
import Precificavel from "./precificavel";

export default interface Produto extends Precificavel {
  id: number;
  nome: string;
  descricao: string;
  marca: string;
  modelo: string;
  imagem: string;
  nota: number;
  videoReview: string;
  tags: string[];
  especificacoes: Especificacoes;
}
