const data = [
    "<div class='sc-4rj1g9-0 bmoonI'><p>there is no accepted industry-wise benchmark fixed for a good credit score for a car loan. lenders may have different parameters for what they require as a minimum score for car loan approval. generally, a score of 750 and above is accepted as a good score, while a score lower than 600 could reduce the chances of getting a loan sanctioned. </p><p>apart from that, what role does your credit rating play in getting approval for a car loan? read on to understand the importance of being credit healthy?</p><p>a good credit rating can help you in buying a car in the following ways:</p></div>",
    "<div class='sc-4rj1g9-0 bmoonI'><h2>1. loan approval</h2><p>the credit score is not the only factor when it comes to loan approval. many aspects impact your loan eligibility and approval. use a <a href='https://cred.club/calculators/car-loan-calculator'>car loan eligibility calculator</a> to find out if you fulfil the eligibility criteria laid down by the lender for getting a car loan. a credit score is an indicator of your creditworthiness; a good rating will help hassle-free and quick loan approval. those between 600 and 750 might face some challenges in loan approval, depending on a host of other factors.</p></div>",
    "<div class='sc-4rj1g9-0 bmoonI'><h2>2. interest rate</h2><p>credit rating also impacts the car loan <a href='#interest'>interest</a> rate. a high rating indicates that you are creditworthy and pose a lower risk of default for the lender. lenders charge interest for the risk they undertake when extending a loan and for the opportunity cost of using the funds. a good rating means lesser risk, which means you can avail of a loan at a lower interest rate than someone with a lower rating.</p></div>",
    "<div class='sc-4rj1g9-0 bmoonI'><h2>3. loan amount</h2><p>when you buy a car, you need to make a down payment; the remaining amount can be availed as a loan. a low rating will reduce the amount of loan you can get, and as a result, you will have to shell out more from your pocket. if you have to pay more as a down payment, then either you will have to dip into your savings or postpone your plans of buying a car till you can save enough for the down payment. applicants with a healthy score are preferred over those with lower scores; banks or nbfcs are likely to offer them bigger loans. a<strong> </strong>car loan calculator can help you calculate the loan amount for which you are eligible.</p></div>",
    "<div class='sc-4rj1g9-0 bmoonI'><h2>4. wider choice of lenders</h2><p>a low credit score limits your options when it comes to lenders. few banks are willing to extend a loan to those with low credit ratings. a good score ensures that you have more choice and can approach a lender who offers you the most favourable terms like low processing fees, longer tenures, higher ltv ratio and competitive interest rates. </p></div>",
    "<div class='sc-4rj1g9-0 bmoonI'><h2>conclusion</h2><p>when you do your homework before taking a loan, remember to focus on the fine print, your requirements and your repayment capacity. compare products offered by lenders on various parameters and use a car loan emi calculator to calculate your monthly outflow. being sure of your emis helps you in better financial planning and staying in good credit health.</p></div>",
    "<a href='cred.club'> someValue</a>"
]


const keywords = [
    {
        "keyword": "interest",
        "url": "cred.club/interest"
    },
    {
        "keyword": "car",
        "url": "cred.club/car"
    }
]

const wrapperComponent = (keyword, url) => `<a href="${url}">${keyword}</a>`


// multiple occurences
// already a tag wrappping around it - //

const matches = []

// const regexMatcher = new RegExp('/<a href=\'(.*?)<\/a>$')
// const regex = new RegExp(<(scsvdjkb)\s+[^>]*href\s*=\s*["']([^"']+)["'][^>]*</(scsvdjkb) >)


// data -> keyword(hashed) O(1) =>

const res = data.map((str) => {
    keywords.forEach((obj) => {
        const keyword = obj['keyword']
        const isRegexMatch = regex.test(str)
        if (isRegexMatch) {
            matches.push(regex.exec[1])
        }
        console.log(isRegexMatch)
        if (str.includes(keyword)) {
            const idx = str.indexOf(keyword)
            // console.log('keyword', keyword, str.indexOf(keyword))
            // console.log(str.slice(idx, idx + keyword.length))
            const newStr = str.substring(0, idx) + wrapperComponent(keyword, obj['url']) + str.substring(idx + keyword.length)
            // console.log(newStr)

        }
    })
})

consoel