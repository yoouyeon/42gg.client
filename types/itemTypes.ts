export interface Item {
  itemId: number;
  itemName: string;
  content: string;
  itemType: string;
  imageUri: string;
  originalPrice: number;
  discount: number;
  salePrice: number;
}

export interface ItemList {
  itemList: Item[];
}

export interface Gift {
  itemId: number;
  ownerId: string;
}

export interface GiftRequest {
  ownerId: string;
}

export interface Purchase {
  itemId: number;
}
