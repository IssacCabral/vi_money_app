import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Container } from "./styles";
import { access_token } from "../../../../env";

interface Category {
  id: string;
  userId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CategorySelectProps {
  onSelectCategory: (categoryName: string) => void;
}

const CategorySelect = (props: CategorySelectProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  function handleSelectCategory(event: any) {
    setSelectedCategory(event.target.value);
    props.onSelectCategory(event.target.value);
  }

  useEffect(() => {
    const token = access_token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    api.get("/categories/user?page=1&limit=20", config).then((response) => {
      const categoriesData = response.data.data;
      setCategories(categoriesData);
      props.onSelectCategory(categoriesData[0].name);
    });
  }, []);

  return (
    <Container
      name="select"
      value={selectedCategory}
      onChange={(event) => handleSelectCategory(event)}
    >
      {categories.map((category) => {
        return (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        );
      })}
    </Container>
  );
};

export default CategorySelect;
