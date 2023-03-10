import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Container } from "./styles";
import { access_token } from "../../../../env";
import { ICategory } from "../../../interfaces";

interface CategorySelectProps {
  onSelectCategory: (categoryName: string, categoryId: string) => void;
}

const CategorySelect = (props: CategorySelectProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  function handleSelectCategory(event: any) {
    const [name, id] = event.target.value.split(",");
    props.onSelectCategory(name, id);
  }

  useEffect(() => {
    const token = access_token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    api.get("/categories/user?page=1&limit=20", config).then((response) => {
      const categoriesData = response.data.data;
      setCategories(categoriesData);
      props.onSelectCategory(categoriesData[0].name, categoriesData[0].id);
    });
  }, []);

  return (
    <Container name="select" onChange={(event) => handleSelectCategory(event)}>
      {categories.map((category) => {
        return (
          <option key={category.id} value={[category.name, category.id]}>
            {category.name}
          </option>
        );
      })}
    </Container>
  );
};

export default CategorySelect;
