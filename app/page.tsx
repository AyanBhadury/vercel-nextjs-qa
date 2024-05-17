export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Vercel Exercise</h1>

        <section className="mb-6">
          <h2 className="text-l font-semibold mb-2">1. From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a
            brief explanation for each.</h2>
          <div className="text-s">Here are my top 5 most favorites - </div>
          <br />
          <li><b>Work with engineering teams during incidents and provide updates to internal and external stakeholders</b> - This is very crucial since when a bug is seen in production environment,
            the customer are highly affected for which they needs a an update of the current status, there should be oncall support engineer who would
            join a incident slack channel or collaborate in the github issue and share the overview and current status to the engineering team and how it affects them,
            as a support engineer, we should ensure that its not affecting other customers (if yes we need to reach out to them proactively) if the bug is on the product side
            we should be making updates on a STATUS page (https://www.vercel-status.com/), once there are any updates or worarounds from the engineering team it should be
            updated back to the customer over the ticket thread that is earlier created, incase customer is requesting for a live call, we should be engaging in the call and share the next course of action there.
            Incase of large contracted customers its advisible to inform the account manager that an incident has happened and we are working on the fix.
            Lastly incase the incident is taking longer to resolve the current on-call support engineer should handoff the case to the next on-call support engineer by adding a summarised note of what all happened.
          </li>
          <br />
          <li><b>Write and maintain support articles and docs pages</b>- Yes creating a knowledge base is helpful for team members to refer while solving an support ticket at the later stage. Also support team memebers can participate in docs evaluation and create/notify docs teams in case it require any changes.</li>
          <br />
          <li><b>Run ticket review sessions to make sure tone is consistent</b> -  It is ideal to have office hours on a daily basis where support team menber can review/collaborate together on the cases that needs investigation and come up with an optimal solution.</li>
          <br />
          <li><b>Dig through logs to troubleshoot a customer's broken project</b> -  I think this is the most fundamental skill that is required to be a successful support engineer, an error/issue can be best observed from the logs we should be accustomed reading error logs from browser console, network tabs, command line errors, checking server error logs, and also utlise log reading tools like elastic or grafana to quick scan and filter large log base.</li>
          <br />
          <li><b>Work with the product team to develop a new feature based on feedback from customers</b> - Support team should log a feature request received from the customer and check the fesibility with the product team and if possible work on the expected timeline for the same.</li>
          <br />
          <div className="text-s">Here are my top 5 least favorites - </div>
          <br />
          <li><b>Manage a support team</b> - I believe support managers are best suited for this role.</li>

          <li><b>Help resolve billing issues for customers</b> -  I think sales team or a separate team should be handling these requests.</li>

          <li><b>Create video tutorials to help teach users a specific feature or use case</b>- I think developer advocate are best suited for these roles.</li>

          <li><b>Find and recruit teammates for the support team</b>- This should be support managers and other team leads should collaborate on.</li>

          <li><b>Analyze hundreds of support tickets to spot trends the product team can use</b>- This would be a very special edge case and may not be suited for support engineers who are actively working with customer crtical issues.</li>
        </section>

        <section className="mb-6">
          <h2 className="text-l font-semibold mb-2">2. What do you want to learn or do more of at work?</h2>
          <div className="text-m"><li>I want to learn more about all the products Vercel offers the various functions & features.</li>
            <li>The support process & the release cycle that we follow.</li>
            <li>Make the customer staified with the solutions and maintaining SLA's & customer satisfaction CSAT score</li>
            <li>I want to contribute to the knowledgebase that support team uses</li>
            <li>I want to stay up-to-date with all the latest javascript/react trend, current cloud technologies etc.</li>
            <li>I want to ensure that we make less number of engineering escalations and investigate from our side if we need to report something to the engineering team.</li></div>
        </section >

        <section className="mb-6">
          <h2 className="text-l font-semibold mb-2">3. Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role).
            How did you determine that your solution was successful?</h2>
          <div className="text-m">Here is a short summary that discuss how I solved technical challenge -
          </div>
          <br />
          Grafana offers a frontend observability tool where the customer can monitor the frond applications, one of our high contracted customer was integrating this SDK in their front end application and was facing issue
          while integrating it, the customer was using nextjs in the frontend now since nextjs uses server side rendering by default our package was unable to render since it has a document or a window object dependency.
          <br />
          <br />
          By reading the error 'document is undefined' I was able to determine we need to somehow make the window object available by making ssr rendering as false or atleast add a check that if window object is available.
          Before sharing a solution to the customer I created scale down example at myside and rendered from my end the app as well as published the code to github so that the customer can use it as a reference.
          <br />
          <br />
          Resolution - The customer was happy with the solution and the issue was resolved.

        </section>

        <section className="mb-6">
          <h2 className="text-l font-semibold mb-2">4. When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?</h2>
          <div className="text-m">Here are the detailed observations for the above features
            <br />
            <br />
            <b>Edge Functions</b> - These are serverless function and is mostly deployed close to the location where your primary data resides for example database so that the data fetching is easier, the implementation is similar like node js api but its light weight and does not have all the api methods nodejs has, they can be deployed with out next js dependency in the app, they are fast, reliable & have high availability since they can be deployed almost anywhere in the globe in their available datacenters.
            Few drawbacks could be memory limits, rate limit& wrong selection of regions & costs.
            <br />
            <br />
            <b>Serverless functions</b> - Like the above these functions offers access to all the Node.js APIs that you can utilise while implementing an api, you can deploy as well, like the edge functions.
            <br />
            <br />
            <b>Edge Middleware</b> - These are used to manage web requests. For example a user sends first request to a web page the user enters the address in the browser which will send a request to the IP address of the server hosting the site now the server has to do two things first it has to read the request and parse it this request can be an API call
            a request for an image or a request to render a page the second step for the server is to produce an answer and ship it back to the browser Vercel middleware sits between those two steps essentially, it is a function that intercepts a request and can act on it
            example it can intercept the request and modify the response sending something completely different like an image a Json file or even adding cookies to the response another example is that it can redirect the request to a completely different location
            for example imagine you are in maintenance mode and you want to redirect your users to your maintenance page.
          </div>
        </section>


        <section className="mb-6">
          <h2 className="text-l font-semibold mb-2">5. Imagine a customer writes in requesting help with a build issue on a framework or technology that you've not seen before. How would you begin troubleshooting this, and what questions would you ask the customer to understand the situation better?</h2>
          <div className="text-m"> Yes there could be cases where the tech stack is not known, the steps of troubleshooting such issues would be like below
            <li>First its essential to grab the logs so that we can ensure whether the errors are coming from Vercel side or from any third party dependency </li>
            <li>Internally will quickly scan our knowledgebase as well as existing support tickets also check with team if anyone has worked or experience on this before, if yes will collaborate accordingly. </li>
            <li>If the above does not retrieve any results I will reach out to customer would request the steps to replicate the issue and also ask on which lifecycle events they are getting this problem (since mostly all tech stacks has their own life cycle methods)</li>
            <li>Once I get a solution I will try to replicate the issue from my side by creating a small mockup demo so that we can confirm there is a problem with the product</li>
            <br />

            Here is a drafted answer below for such tickets.
            <br />
            <br />
            <i>
              Hi X,
              <br />
              <br />
              Thanks for getting in touch. Sad to see that you are facing issues while integrating with Vercel.
              <br />
              <br />
              Could you please share the following details -
              <br />
              <li>Can you please share the complete error logs (possibly in debug mode) so that we can take a look at them accordingly.</li>
              <li>Could you please share us the steps on how to replicate the error also if possible please highlight the lifecycle event stage where the build breaks.</li>
              <li> Also can you share the version details of the dependencies that you are using as well. </li>
              <br />
              Looking forward to your input.
              <br />
              <br />
              Thanks,
              <br />
              Ayan </i>
          </div>
        </section>



        <section className="mb-6">
          <h2 className="text-l font-semibold mb-2">6. The customer from question 5 replies to your response with the below:
            “I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it
            out. It must be a platform issue so just fix it for me instead of asking me questions.”
            Please write a follow-up reply to the customer.</h2>
          <div className="text-m">
            Hi X,
            <br />
            <br />
            I understand the frustration here, I assure you that I will try to find a resolution on a priority basis also I am bumping the case priority as high so that it can be worked on a priority basis accorss all the regions, & we assure to send regular updates on thsi.
            With that said could you please share me the details that I requested earlier, as we need to review it from our side in order to move ahead with the next steps.
            Incase there are any bugs on the vercel side and we esclate the issue to our engineering team we want to pass on all the necessary details so that they can immediately start working on the fix.
            <br />
            <br />
            I hope this helps, appreciate your patience in advance.
            <br />
            <br />
            Thanks,
            <br />
            Ayan
          </div>
        </section>




        <section className="mb-6">
          <h2 className="text-l font-semibold mb-2">7. A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog
            path to https://example.com?" Please write a reply to the customer. Feel free to add any
            information about your decision making process after the reply.</h2>
          <div className="text-m">Hi X,
            <br />
            <br />
            Thanks for getting in touch.

            To redirect your /blog page it to a different path https://example.com? you can use either of the approaches -
            <br />
            <br />
            1- If you want to configure next.config.js file you can include it the below way -
            <br />
            <pre className="bg-gray-800 text-white p-4 rounded-lg">
              <code>
                {`module.exports = {
      redirects: async () => {
      return [
      {
      source: '/blog',
      destination: 'https://example.com',
      permanent: true,
      },
      ];
      },
      };`}
              </code>
            </pre>
            <br />
            Here it returns an object which takes three parameters, source, destination & permarent (boolean) if you need a permarent redirection otherwise, set it as false if there are any maintenance mode.

            <br />
            <br />
            2 - In this approach, we use the redirect function from next/navigation and call the redirect method both on the server side & client side and pass the redirected url in the function.
            <pre className="bg-gray-800 text-white p-4 rounded-lg">
              <code>
                redirect(`https://example.com`)
              </code>
            </pre>

            <br />
            Hope this helps, feel free to revert back if you have any questions.
            <br />
            <br />
            Thanks,
            <br />
            Ayan
          </div>
        </section>


        <section className="mb-6">
          <h2 className="text-l font-semibold mb-2">8. A customer is creating a site and would like their project not to be indexed by search
            engines. Please write a reply to the customer. Feel free to add any information about
            your decision making process after the reply.</h2>
          <div className="text-m">Hi X,
            <br />
            <br />
            Hope you are doing well. To disable or stop your site from not indexed by search engines, you can follow these steps:
            <br />
            <br />
            <li>Create a robots.txt file in the root directory of your project with the following content:
              <br />
              <br />
              <pre className="bg-gray-800 text-white p-4 rounded-lg">
                <code>
                  User-agent: *
                  <br />
                  Disallow: /
                </code>
              </pre>
            </li>
            <li>
              <br />
              Adding meta tag in the root HTML file or at the layout file in case of nextjs -
              <br />
              <pre className="bg-gray-800 text-white p-4 rounded-lg">
                <code>
                  meta name='robots' content='noindex, nofollow'
                </code>
              </pre>
            </li>
            <br />
            By combining these approaches, you can remove unwanted indexing, feel free to revert back if you need any assistance.
            <br />
            <br />
            Thanks,
            <br />
            Ayan
          </div>
        </section>


        <section className="mb-6">
          <h2 className="text-l font-semibold mb-2">9. What do you think is one of the most common problems which customers ask Vercel for
            help with? How would you help customers to overcome common problems, short-term
            and long-term?</h2>
          <div className="text-m">I think based on the product get help page in Vercel website, the most common issues are build orientended, issues related to CORS, bundle size issue, next js library packages dependency, nest js feature related problems, security or CVE related for any particula packages that is used by vercel, issue with frontend observability the metrics data are not accurate, issues related to caching, DNS resolve problems, and CDN related.</div>
          <div className="text-m">These above issues can be solved by creating proper documentation, internal knowledge articles (by collaborating with developers & from support case resolutions), blog posts showing inside an example, youtube tutorials</div>
        </section>
        <section className="mb-6">
          <h2 className="text-l font-semibold mb-2">10. How could we improve or alter this familiarisation exercise?</h2>
          <div className="text-m">I think a few of the questions could be better discussed face to face, rest all looks fine so far.</div>
        </section>

      </div >
    </main >
  );
}
