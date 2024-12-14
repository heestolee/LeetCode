<h2><a href="https://leetcode.com/problems/continuous-subarrays/">2762. Continuous Subarrays</a></h2><h3>Medium</h3><hr><div><p>You are given a <strong>0-indexed</strong> integer array <code>nums</code>. A subarray of <code>nums</code> is called <strong>continuous</strong> if:<sider-trans data-url-id="955532190"><sider-trans-block><sider-trans-text data-display="none"><strong>0으로 인덱싱된</strong> 정수 배열 <code>nums</code>가 제공됩니다. <code>nums</code>의 부분 배열은 다음과 같은 경우 <strong>연속</strong>이라고 합니다.</sider-trans-text></sider-trans-block></sider-trans></p>

<ul>
	<li>Let <code>i</code>, <code>i + 1</code>, ..., <code>j</code><sub> </sub>be the indices in the subarray. Then, for each pair of indices <code>i &lt;= i<sub>1</sub>, i<sub>2</sub> &lt;= j</code>, <code><font face="monospace">0 &lt;=</font> |nums[i<sub>1</sub>] - nums[i<sub>2</sub>]| &lt;= 2</code>.<sider-trans data-url-id="955532190"><sider-trans-block><sider-trans-text data-display="none"><code>i</code>, <code>i + 1</code>, ..., <code>j</code>를 서브 어레이의 인덱스라고합시다. 그런 다음 각 인덱스 쌍에 대해 i &lt;= i<sub>1</sub>, i<sub>2</sub> &lt;= j, <font face="monospace">0 &lt;=</font> |nums[i<sub>1</sub>] - nums[i<sub>2</sub>]| &lt;= 2입니다.</sider-trans-text></sider-trans-block></sider-trans></li>
</ul>

<p>Return <em>the total number of <strong>continuous</strong> subarrays.</em></p>

<p>A subarray is a contiguous <strong>non-empty</strong> sequence of elements within an array.<sider-trans data-url-id="955532190"><sider-trans-block><sider-trans-text data-display="none">subarray는 배열 내에서 <strong>비어 있지 않은</strong> 연속적인 요소 시퀀스입니다.</sider-trans-text></sider-trans-block></sider-trans></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [5,4,2,4]
<strong>Output:</strong> 8
<strong>Explanation:</strong> 
Continuous subarray of size 1: [5], [4], [2], [4].
Continuous subarray of size 2: [5,4], [4,2], [2,4].
Continuous subarray of size 3: [4,2,4].
Thereare no subarrys of size 4.
Total continuous subarrays = 4 + 3 + 1 = 8.
It can be shown that there are no more continuous subarrays.
</pre>

<p>&nbsp;</p>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> 6
<strong>Explanation:</strong> 
Continuous subarray of size 1: [1], [2], [3].
Continuous subarray of size 2: [1,2], [2,3].
Continuous subarray of size 3: [1,2,3].
Total continuous subarrays = 3 + 2 + 1 = 6.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>
</div>