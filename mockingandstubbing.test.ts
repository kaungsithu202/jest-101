it('create a callable function',()=>{
  const mock =jest.fn()
  mock('hello')

  expect(mock).toHaveBeenCalled()
  expect(mock).toHaveBeenCalledWith('hello')
  expect(mock).toHaveBeenCalledTimes(1)
})
