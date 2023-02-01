import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

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
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NjY2ZGNjMC00NmQ3LTRmOTQtOGE5YS02MTFhMDgzNGRlZTgiLCJlbWFpbCI6Imlzc2FjQGVtYWlsLmNvbSIsImlhdCI6MTY3NTIwNDM3NywiZXhwIjoxNjc1MjkwNzc3fQ.8Da_2trJ-VLHYWEvLr7N2EOYZt7RRSYG9LFNhdZi57o";
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
