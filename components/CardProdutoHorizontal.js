export default function CardProdutoHorizontal() {
  return (
    <>
      <div className="card mt-2">
        <div className="card-body d-flex p-2">
          <div className="mr-2">
            <div
              style={{ height: "100%", width: 80, backgroundColor: "#ccc" }}
            />
          </div>
          <div className="w-100 ">
            <span className="d-block">PRODUTO NOME</span>
            <span>R$30,00</span>
          </div>
        </div>
      </div>
    </>
  );
}
