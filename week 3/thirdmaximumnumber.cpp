class Solution
{
public:
    int thirdMax(vector<int> &nums)
    {

        priority_queue<int> g;
        unordered_map<int, int> m;
        for (int i = 0; i < nums.size(); i++)
        {
            if (!m[nums[i]])
            {
                g.push(nums[i]);
                m[nums[i]]++;
            }
        }
        if (g.size() < 3)
        {
            return g.top();
        }
        g.pop();
        g.pop();
        return g.top();
    }
};
