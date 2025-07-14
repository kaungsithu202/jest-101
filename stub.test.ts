export const fetchUser =(id:string)=>{
  return fetch(`http://localhost:3000/users/${id}`)
}


describe('mock API Call',()=>{
  const user ={
    name:"Juntao"
  }

  it('mock fetch',()=>{
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ user }));
    // const process = jest.fn()

    fetchUser("111").then(x => console.log(x))
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/users/111')
  })
})
