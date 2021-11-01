import CardProduto from "../components/CardProduto";
import CardProdutoHorizontal from "../components/CardProdutoHorizontal";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineShoppingCart,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ribeirania</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-cinza">
        <div className="container">
          <div className="row py-1">
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start align-items-center mt-2 mt-md-0">
              <span className="mr-2">
                <AiOutlineShoppingCart color="#e91223" size={24} />
              </span>
              Frete GRÁTIS nas compras acima de R$100,00
            </div>
            <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-start align-items-center mt-2 mt-md-0">
              <ul className="d-flex flex-wrap list-unstyled justify-content-center justify-content-md-start">
                <li className="mr-2">Home</li>
                <li className="mr-2">Sobre nós</li>
                <li className="mr-2">Contato</li>
              </ul>
            </div>
            <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-start align-items-center mt-2 mt-md-0">
              <ul className="d-flex flex-nowrap list-unstyled justify-content-center justify-content-md-start">
                <li style={{ marginRight: 35 }}>
                  <AiOutlineInstagram size={20} />
                </li>
                <li style={{ marginRight: 35 }}>
                  <AiOutlineFacebook size={20} />
                </li>
                <li style={{ marginRight: 35 }}>
                  <AiOutlineWhatsApp size={20} />
                </li>
              </ul>
            </div>
            {/* <div className="col-12 col-md-6 justify-content-center justify-content-md-start align-items-center mt-3 mt-md-0">
              <div className="col-12 col-md-6 ">
                <ul className="d-flex flex-wrap list-unstyled justify-content-center justify-content-md-start">
                  <li className="mr-2">Home</li>
                  <li className="mr-2">Sobre nós</li>
                  <li className="mr-2">Contato</li>
                </ul>
              </div>
              <div className="col-12 col-md-6 ">
                <ul className="d-flex flex-nowrap list-unstyled justify-content-center justify-content-md-start">
                  <li style={{ marginRight: 35 }}>
                    <AiOutlineInstagram size={20} />
                  </li>
                  <li style={{ marginRight: 35 }}>
                    <AiOutlineFacebook size={20} />
                  </li>
                  <li style={{ marginRight: 35 }}>
                    <AiOutlineWhatsApp size={20} />
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-2 justify-content-center align-items-center">
          <div className="col-12 col-md-3 text-center">
            <img style={{ width: 120, height: 75 }} src="logo.png" />
          </div>
          <div className="col-12 col-md-6 my-4">
            <input
              placeholder="O que você procura?"
              className="p-2 border rounded mr-4"
              style={{ width: "100%" }}
            ></input>
          </div>
          <div className="col-12 col-md-3 d-flex flex-wrap justify-content-center align-items-center">
            <span style={{ textAlign: "center" }} className="mr-3">
              Entre ou cadastre-se
            </span>
            <button className="btn-carrinho btn-vermelho">
              <span className="mr-2">
                <BsHandbag color="#fff" size={20} />
              </span>
              Carrinho
            </button>
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="col-12">
          <div
            className="col-12 col-md-6 d-flex flex-wrap justify-content-center align-items-center text-white"
            style={{ height: 424 }}
          >
            <div className="container text-center">
              <h1 style={{ whiteSpace: "pre-line" }}>
                Aqui você encontra tudo {"\n"} para por a mão na massa.
              </h1>
              <div className="col-12 d-flex flex-wrap justify-content-center mt-4">
                <button className="btn-vermelho">
                  VISUALIZAR TODOS OS PRODUTOS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5">
        <section className="container">
          <div>
            <span className="d-flex align-items-center mt-3">
              <h1 className="titulo-sessao mr-2">Conserva</h1>
              <hr className="mr-2 linha-sessao" />
              <small>Ver todos</small>
              <div className="d-none d-md-flex">
                <IoIosArrowBack color="#e91223" size={32} />
                <IoIosArrowForward color="#e91223" size={32} />
              </div>
            </span>

            <div className="row justify-content-center justify-content-md-between">
              <CardProduto prod="conserva" />
              <CardProduto prod="conserva" />
              <CardProduto prod="conserva" />
              <CardProduto prod="conserva" />
            </div>
          </div>

          <div>
            <span className="d-flex align-items-center mt-3">
              <h1 className="titulo-sessao mr-2">Carnes</h1>
              <hr className="mr-2 linha-sessao" />
              <small>Ver todos</small>
              <div className="d-none d-md-flex">
                <IoIosArrowBack color="#e91223" size={32} />
                <IoIosArrowForward color="#e91223" size={32} />
              </div>
            </span>

            <div className="row justify-content-center justify-content-md-between">
              <CardProduto prod="carne" />
              <CardProduto prod="carne" />
              <CardProduto prod="carne" />
              <CardProduto prod="carne" />
            </div>
          </div>
        </section>
      </div>

      <div className="banner2 mt-5">
        <div className="col-12">
          <div
            className="col-12 col-md-8 d-flex flex-wrap justify-content-center align-items-center text-white"
            style={{ height: 424 }}
          >
            <div className="container d-flex justify-content-center text-center">
              <div style={{ width: "40vw" }}>
                <h4>Experiências Memoráveis</h4>
                <div
                  className=" d-flex flex-wrap justify-content-start"
                  style={{ width: "fit-content", marginBottom: "-10vh" }}
                >
                  <h1 style={{ fontSize: "8em" }}>“</h1>
                </div>

                <h1 style={{ whiteSpace: "pre-line" }}>
                  Nossa diversidade de produtos vão {"\n"} te inspirar a criar
                  pratos iniguáleveis!
                </h1>
                <div className="col-12 d-flex flex-wrap justify-content-end">
                  <h1 style={{ fontSize: "8em", marginTop: "-3vh" }}>”</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container">
        <div className="row justify-content-center my-5">
          <div className="col-12 col-lg-4">
            <div>
              <span className="d-flex align-items-center mt-3">
                <h1
                  className="titulo-sessao mr-2"
                  style={{ fontSize: "2.5em" }}
                >
                  Sugestões
                </h1>
                <hr className="mr-2 linha-sessao" />
                <small>Ver todos</small>
              </span>
            </div>
            <div>
              <CardProdutoHorizontal />
              <CardProdutoHorizontal />
              <CardProdutoHorizontal />
              <CardProdutoHorizontal />
            </div>
          </div>
          <div className="col-12 col-lg-4 text-center">
            <h1 className="titulo-sessao" style={{ fontSize: "2.5em" }}>
              Ofertas especiais
            </h1>
            <div
              className="text-center"
              style={{ height: 250, width: "100%", backgroundColor: "#ccc" }}
            />
            <div className=" d-flex justify-content-center">
              <h1
                className="mt-4 mr-4"
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#222529",
                }}
              ></h1>
              <h1
                className="mt-4"
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  border: "1px solid #787a7d",
                }}
              ></h1>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div>
              <span className="d-flex align-items-center mt-3">
                <h1
                  className="titulo-sessao text-nowrap mr-2"
                  style={{ fontSize: "2.5em" }}
                >
                  Mais comprados
                </h1>
                <hr className="mr-2 linha-sessao" />
                <small>Ver todos</small>
              </span>
            </div>

            <div>
              <CardProdutoHorizontal />
              <CardProdutoHorizontal />
              <CardProdutoHorizontal />
              <CardProdutoHorizontal />
            </div>
          </div>
        </div>
      </section>

      <section className="container text-center my-4">
        <h1 className="titulo-sessao">
          As melhores e mais tradicionais marcas do mercado
        </h1>
        <div className="row justify-content-center align-items-center">
          <img
            className="img-fluid logo-apagado"
            src="/logomarcas/bb.png"
            style={{ height: 50, width: 150 }}
          ></img>
          <img
            className="img-fluid logo-apagado"
            src="/logomarcas/demarchi.png"
            style={{ height: 50, width: 150 }}
          ></img>
          <img
            className="img-fluid logo-apagado"
            src="/logomarcas/kraft.jpg"
            style={{ height: 50, width: 150 }}
          ></img>
          <img
            className="img-fluid"
            src="/logomarcas/seara.jfif"
            style={{ height: 75, width: 150 }}
          ></img>
          <img
            className="img-fluid logo-apagado"
            src="/logomarcas/predilecta.png"
            style={{ height: 50, width: 150 }}
          ></img>
          <img
            className="img-fluid logo-apagado"
            src="/logomarcas/rezende.png"
            style={{ height: 75, width: 150 }}
          ></img>

          <img
            className="img-fluid logo-apagado"
            src="/logomarcas/vigor.png"
            style={{ height: 50, width: 150 }}
          ></img>
        </div>
        <div className=" d-flex justify-content-center">
          <h1
            className="mt-4 mr-4"
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#222529",
            }}
          ></h1>
          <h1
            className="mt-4"
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              border: "1px solid #787a7d",
            }}
          ></h1>
        </div>
      </section>

      <div className="bg-black py-3 mt-4">
        <section className="container">
          <div className="row align-items-center bg-black">
            <div className="col-12 col-md-8 mb-3 mb-md-0 text-center">
              <h2 className="text-white">
                Increva-se e receba promoções, novidades e muito mais!
              </h2>
            </div>
            <div className="col-12 col-md-4">
              <input
                placeholder="Digite seu email"
                className="p-2 border rounded mr-4"
                style={{ width: "100%" }}
              ></input>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-cinza pb-5 text-cinza">
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-lg-start">
            <div className="col-12 col-lg-3 pt-4 text-center">
              <img style={{ width: 200, height: 125 }} src="logo.png" />
            </div>

            <div className="col-6 col-md-3">
              <ul className="list-unstyled">
                <li className="texto-vermelho-footer mb-2">Institucional</li>
                <li className="mb-2">A Empresa</li>
                <li className="mb-2">Trocas e condições</li>
                <li className="mb-2">Entregas e Fretes</li>
              </ul>
            </div>

            <div className="col-6 col-md-3">
              <ul className="list-unstyled ">
                <li className="texto-vermelho-footer mb-2">Contato</li>
                <li className="mb-2">SAC</li>
                <li className="mb-2">Fale Conosco</li>
                <li className="mb-2">contato@gmail.com</li>
              </ul>
            </div>

            <div className="col-12 col-md-3 mt-5 mt-md-0">
              <div className="texto-vermelho-footer mb-2">Midias sociais</div>
              <div className="d-flex">
                <div className="mr-4">
                  <img
                    src="icons/insta.png"
                    style={{ height: 30, width: 30 }}
                  />
                </div>
                <div className="mr-4">
                  <img src="icons/face.png" style={{ height: 30, width: 30 }} />
                </div>
                <div className="mr-4">
                  <img
                    src="icons/whats.png"
                    style={{ height: 30, width: 30 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 text-center">
          <hr className="linha-footer" />
          Ribeirânia - 2021. Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
}
