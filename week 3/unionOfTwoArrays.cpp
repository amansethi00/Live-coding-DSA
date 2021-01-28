int doUnion(int a[], int n, int b[], int m)
{
    //code here

    set<int, greater<int>> unionSet;
    for (int num = 0; num < n; num++)
    {
        unionSet.insert(a[num]);
    }
    for (int num = 0; num < m; num++)
    {
        unionSet.insert(b[num]);
    }
    return unionSet.size();
}