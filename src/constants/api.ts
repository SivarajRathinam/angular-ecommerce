export const baseUrl = 'https://api.escuelajs.co/api/v1'

export const categoriesApi = `${baseUrl}/categories`

export const singleCategoryApi = (categoryId: string|null):string => {return `${baseUrl}/categories/${categoryId}/products`};
export const getProductById = (propertyId:string|null):string => `${baseUrl}/products/${propertyId}`