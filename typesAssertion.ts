/**
 * TYPE ASSERTIONS
 * Tells typescript the type a variable holds
 * it use prefix <type>
 * or (variable as type)
 */

//@types-ignore
let message1;
message1 = "abc";
let endsWithC = (<string>message1).endsWith("c");
let alternativeWay = (message1 as string).endsWith("c");
