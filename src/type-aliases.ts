export {}

type Mojiretsu = string;

const fooString: string = 'Hello World!';
const fooMojiretsu: Mojiretsu = 'Hello World!';

const example1 = {
    name: 'Ham',
    age: 43
};

type Profile = {
    name: string,
    age: number
};

const example2: Profile = {
    name: 'ham',
    age: 33
}

//すでに宣言した変数から型を指定できる。
//example1に変更があったとき、その変更に追従することができるため有用である。
type Profile2 = typeof example1;
