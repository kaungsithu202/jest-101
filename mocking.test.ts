it('create a callable function',()=>{
  const mock =jest.fn()
  mock('hello')

  expect(mock).toHaveBeenCalled()
  expect(mock).toHaveBeenCalledWith('hello')
  expect(mock).toHaveBeenCalledTimes(1)
})


it('mock implementation',()=>{
  const fakeAdd =jest.fn().mockImplementation((a,b)=>5)
  expect(fakeAdd(1,1)).toBe(5)
  expect(fakeAdd).toHaveBeenCalledWith(1,1)
})
