//testes em breve

test("Deve retornar uma lista de imagens", async () =>{

    axios.get = jest.fn (async () => ({
        data: ["https://images.dog.ceo/breeds/chihuahua/n02085620_13151.jpg", "https://images.dog.ceo/breeds/chihuahua/n02085620_1321.jpg", "https://images.dog.ceo/breeds/chihuahua/n02085620_13383.jpg"]
        
    }))
    const dispatch = jest.fn();
    await getList()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
        type: "GET_LIST",
        payload: {data: ["https://images.dog.ceo/breeds/chihuahua/n02085620_13151.jpg", "https://images.dog.ceo/breeds/chihuahua/n02085620_1321.jpg", "https://images.dog.ceo/breeds/chihuahua/n02085620_13383.jpg"]}
    });

});