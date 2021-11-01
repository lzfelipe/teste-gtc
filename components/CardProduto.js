export default function CardProduto(props) {
  return (
    <>
      <div
        className="card mr-2 mb-2 p-0 border-card shadow"
        style={{ width: 250 }}
      >
        <div className="">
          <span className="card-title d-flex justify-content-center bg-produto border-produto">
            <img
              src={props.prod == "carne" ? "produto2.png" : "produto.png"}
              className="img-fluid p-2"
              style={{ height: 200 }}
            />
          </span>
          <p className="card-text p-3 text-center">
            <span className="d-block nome-produto">NOME DO PRODUTO</span>
            <small className="d-block ">215g</small>
            <bold className="d-block preco-produto">R$ 20,00</bold>
          </p>
        </div>
      </div>
    </>
  );
}
