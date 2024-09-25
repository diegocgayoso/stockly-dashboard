interface Params {
    id: string
}
const ProductDetaails = ({params : {id}}: {params : Params}) => {
  return (
    <>
      <h1 className="text-sky-700">Product Details</h1>
      <p>{id}</p>
      <p>bla bla bla preco $50</p>
    </>
  );
};

export default ProductDetaails;
