type SelectedItem = {
  title: string;
  size: string;
  price: { actualPrice: number; offerPrice: number };
  color: string;
  count: number;
};

type CartList = SelectedItem[];
