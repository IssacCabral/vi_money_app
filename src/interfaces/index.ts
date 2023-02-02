export interface ICategory {
  id: string;
  userId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITransaction {
  id: string;
  userId: string;
  categoryId: string;
  title: string;
  type: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  Category: ICategory;
}
