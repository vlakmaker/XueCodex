"use strict";(self.webpackChunkxuecodex=self.webpackChunkxuecodex||[]).push([[1119],{127:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"topics/machine-learning/broadcasting-python","title":"Broadcasting in Python and Deep Learning","description":"Broadcasting is a powerful feature in NumPy (and many deep learning libraries) that lets you perform operations on arrays of different shapes without writing explicit for loops. This makes your code simpler, faster, and more readable.","source":"@site/docs/topics/machine-learning/broadcasting-python.md","sourceDirName":"topics/machine-learning","slug":"/topics/machine-learning/broadcasting-python","permalink":"/docs/topics/machine-learning/broadcasting-python","draft":false,"unlisted":false,"editUrl":"https://github.com/vlakmaker/XueCodex/tree/main/docs/topics/machine-learning/broadcasting-python.md","tags":[{"inline":true,"label":"machine-learning","permalink":"/docs/tags/machine-learning"},{"inline":true,"label":"logistic regression","permalink":"/docs/tags/logistic-regression"},{"inline":true,"label":"maths","permalink":"/docs/tags/maths"}],"version":"current","frontMatter":{"id":"broadcasting-python","title":"Broadcasting in Python and Deep Learning","tags":["machine-learning","logistic regression","maths"]},"sidebar":"tutorialSidebar","previous":{"title":"Binary Classification and Associated Concepts","permalink":"/docs/topics/machine-learning/binary-classification"},"next":{"title":"Computing Derivatives with a Computation Graph","permalink":"/docs/topics/machine-learning/computation-derivatives"}}');var s=i(4848),a=i(8453);const t={id:"broadcasting-python",title:"Broadcasting in Python and Deep Learning",tags:["machine-learning","logistic regression","maths"]},o="Broadcasting in Python and Deep Learning",l={},c=[{value:"\ud83c\udf4e Broadcasting Example: Calories Matrix",id:"-broadcasting-example-calories-matrix",level:2},{value:"Task:",id:"task",level:3},{value:"\u2705 Vectorized Solution (No for-loop)",id:"-vectorized-solution-no-for-loop",level:2},{value:"\ud83e\udd39 General Principle of Broadcasting",id:"-general-principle-of-broadcasting",level:2},{value:"Scalar Broadcasting Examples:",id:"scalar-broadcasting-examples",level:3},{value:"\ud83e\udde0 Why It Matters in Deep Learning",id:"-why-it-matters-in-deep-learning",level:2},{value:"Summary",id:"summary",level:2},{value:"\ud83e\uddea Challenge",id:"-challenge",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"broadcasting-in-python-and-deep-learning",children:"Broadcasting in Python and Deep Learning"})}),"\n",(0,s.jsxs)(n.p,{children:["Broadcasting is a powerful feature in NumPy (and many deep learning libraries) that lets you perform operations on arrays of ",(0,s.jsx)(n.strong,{children:"different shapes"})," without writing explicit ",(0,s.jsx)(n.code,{children:"for"})," loops. This makes your code simpler, faster, and more readable."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-broadcasting-example-calories-matrix",children:"\ud83c\udf4e Broadcasting Example: Calories Matrix"}),"\n",(0,s.jsxs)(n.p,{children:["We have a matrix ",(0,s.jsx)(n.code,{children:"A"})," of calories from ",(0,s.jsx)(n.strong,{children:"Carbs, Proteins, and Fats"})," in different foods:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"         Apples   Beef   Eggs   Potatoes\nCarbs     56.0     0.0    4.4     68.0\nProtein    1.2   104.0   52.0      8.0\nFat        1.8   135.0   99.0      0.9\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Each ",(0,s.jsx)(n.strong,{children:"column"})," is a food. Each ",(0,s.jsx)(n.strong,{children:"row"})," is a macronutrient."]}),"\n",(0,s.jsx)(n.h3,{id:"task",children:"Task:"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Calculate the percentage of calories in each food that comes from Carbs, Protein, Fat \u2014 without using a loop."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-vectorized-solution-no-for-loop",children:"\u2705 Vectorized Solution (No for-loop)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"import numpy as np\n\nA = np.array([[56.0,   0.0,  4.4, 68.0],\n              [ 1.2, 104.0, 52.0,  8.0],\n              [ 1.8, 135.0, 99.0,  0.9]])\n\ncal = A.sum(axis=0)  # Total calories per column (food)\npercentage = 100 * A / cal  # Broadcasting divides each column by its total\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"axis=0"})," tells NumPy to sum ",(0,s.jsx)(n.strong,{children:"down the rows"})," for each column (i.e., per food)."]}),"\n",(0,s.jsxs)(n.li,{children:["Broadcasting handles the division of a ",(0,s.jsx)(n.code,{children:"(3,4)"})," matrix by a ",(0,s.jsx)(n.code,{children:"(1,4)"})," vector \u2014 applies elementwise!"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-general-principle-of-broadcasting",children:"\ud83e\udd39 General Principle of Broadcasting"}),"\n",(0,s.jsx)(n.p,{children:"NumPy automatically adjusts dimensions during operations. These rules apply:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"(m, n)"})," + ",(0,s.jsx)(n.code,{children:"(1, n)"})," -> result is ",(0,s.jsx)(n.code,{children:"(m, n)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"(m, n)"})," * ",(0,s.jsx)(n.code,{children:"(m, 1)"})," -> result is ",(0,s.jsx)(n.code,{children:"(m, n)"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"scalar-broadcasting-examples",children:"Scalar Broadcasting Examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"np.array([[1], [2], [3]]) + 100\n# Output: [[101], [102], [103]]\n\nnp.array([1, 2, 3]) + 100\n# Output: [101, 102, 103]\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-why-it-matters-in-deep-learning",children:"\ud83e\udde0 Why It Matters in Deep Learning"}),"\n",(0,s.jsx)(n.p,{children:"Broadcasting lets us:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Add biases to all training examples at once."}),"\n",(0,s.jsx)(n.li,{children:"Subtract labels from predictions in logistic regression."}),"\n",(0,s.jsx)(n.li,{children:"Perform matrix-based calculations for forward and backward propagation without explicit loops."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For example, in logistic regression:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Z = np.dot(w.T, X) + b  # Broadcasting b across all examples\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Without broadcasting, you\u2019d need a loop to add ",(0,s.jsx)(n.code,{children:"b"})," to each column of ",(0,s.jsx)(n.code,{children:"Z"}),". \ud83d\ude05"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Concept"}),(0,s.jsx)(n.th,{children:"Meaning"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Broadcasting"}),(0,s.jsx)(n.td,{children:"Applying operations across mismatched shapes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"axis=0"})," in sum"]}),(0,s.jsx)(n.td,{children:"Sum over rows (per column)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Avoid for-loops"}),(0,s.jsx)(n.td,{children:"Vectorized ops are faster and more readable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Used in"}),(0,s.jsx)(n.td,{children:"Neural nets, regression, backprop, numpy tricks"})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-challenge",children:"\ud83e\uddea Challenge"}),"\n",(0,s.jsxs)(n.p,{children:["Recreate the example using your own ",(0,s.jsx)(n.code,{children:"3x4"})," matrix \u2014 try using different ",(0,s.jsx)(n.code,{children:"axis"})," values and observe the results."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var r=i(6540);const s={},a=r.createContext(s);function t(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);