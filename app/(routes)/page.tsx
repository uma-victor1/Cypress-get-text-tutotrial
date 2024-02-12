import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Products from "@/data/product";

export const revalidate = 0;

const HomePage = async () => {
  const products = Products;

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
