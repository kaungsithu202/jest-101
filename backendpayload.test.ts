import jsonpath from 'jsonpath'

declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchJsonPath(jsonPath: string): R;
    }
  }
}

interface User{
  name:string
  address:string
  projects:Project[]
}

interface Project{
  name:string
}


const user:User={
  name:"Juntao Qiu",
  address:"123 Main St",
  projects:[{name:"ThoughtWorks University"},{name:"ThoughtWorks Core Business Beach"}]
}

const result = jsonpath.query(user,'$.projects')

expect.extend({
  toMatchJsonPath(received: any, argument: string) {
    const result: any[] = jsonpath.query(received, argument);
    const pass = result.length > 0;

    return {
      pass,
      message: () => pass
        ? `expected ${JSON.stringify(received)} not to match JSONPath ${argument}`
        : `expected ${JSON.stringify(received)} to match JSONPath ${argument}, but got no results`
    };
  }
});

test('should match user object with expected properties', () => {
  const matcher = expect.objectContaining({
    name: expect.stringContaining("Juntao"),
    projects: expect.arrayContaining([
      { name: expect.stringContaining('ThoughtWorks') }
    ])
  })

  expect(user).toEqual(matcher)


})

describe('jsonpath',()=>{
  it('matches jsonpath',()=>{
    const user={
      name:"Juntao Qiu",
    }
  })

  it('does not match jsonpath',()=>{
    const user={
      name:"Juntao Qiu",
      address:'ThoughtWorks'
    }
  })
  expect(user).not.toMatchJsonPath('$.age')
}
)
