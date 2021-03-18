import {createStrore} from "./createStore";

describe('TEST',()=>{
  test('test',()=>{
    const store = createStrore(()=>{},{})
    expect(store).toBeDefined()
  })
})