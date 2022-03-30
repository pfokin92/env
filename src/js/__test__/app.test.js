import demo from "../app";

test('test demo',()=>{
    expect(demo('hi')).toEqual('hi');
})