﻿
class A 
{
    string Y;

    public A(string y)
    {
        Y = y;
    }

    public string X(string a)
    {
        TestLog.Log(a);
        return Y + a;
    }
}

// TODO: we need to test - virtual methods, value type parameters

class Program
{
    public static void Main()
    {
        var m = typeof(A).GetMethods()[0];
        TestLog.Log(m.Invoke(new A("Hello"), new object[] { "World" }));
    }
}