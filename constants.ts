export const categories: Category[] = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

// const response: Article[] = [
//   {
//     author: "Clark Packard",
//     category: "general",
//     country: "us",
//     description:
//       "The Missouri senator’s bill would harm Missourians and further weaken the separation of powers.",
//     image:
//       "https://www.nationalreview.com/wp-content/uploads/2023/03/josh-hawley.jpg?fit=796%2C464",
//     language: "en",
//     published_at: "2023-03-24T10:30:54Z",
//     source: "nationalreview",
//     title: "Josh Hawley’s China-Trade Bill Misses the Mark",
//     url: "https://www.nationalreview.com/2023/03/josh-hawleys-china-trade-bill-misses-the-mark/",
//   },
//   {
//     author: "Armond White",
//     category: "general",
//     country: "us",
//     description:
//       "Keanu’s spectacular ‘gun-fu’ fulfills a primal need, guiltlessly.",
//     image:
//       "https://www.nationalreview.com/wp-content/uploads/2023/03/john-wick-2.jpg?fit=796%2C464",
//     language: "en",
//     published_at: "2023-03-24T10:30:42Z",
//     source: "nationalreview",
//     title: "John Wick 4’s Violent Vision of Hell",
//     url: "https://www.nationalreview.com/2023/03/john-wick-4s-violent-vision-of-hell/",
//   },
//   {
//     author: "Michael Brendan Dougherty",
//     category: "general",
//     country: "us",
//     description: "Trump’s fighting DeSantis, not reasoning with us.",
//     image:
//       "https://www.nationalreview.com/wp-content/uploads/2023/03/trump-rally-davenport.jpg?fit=796%2C464",
//     language: "en",
//     published_at: "2023-03-24T10:30:36Z",
//     source: "nationalreview",
//     title: "Seriously, Not Literally, for 2024",
//     url: "https://www.nationalreview.com/2023/03/seriously-not-literally-for-2024/",
//   },
//   {
//     author: "Manan Goel",
//     category: "sports",
//     country: "us",
//     description:
//       "How the tables have turned quickly at McLaren! Lando Norris recently confessed on a live stream that he misses his former teammate Daniel Ricciardo, and we believe that. But missing Ricciardo, in this case, could come from two places. One is as a teammate, and the other could be him finally understanding what the Aussie&#8230;The post 8X F1 Winner Daniel Ricciardo’s Abilities Overshadowed by McLaren F1 Rookie as “Tougher” Lando Norris Shows Teetering Signs appeared first on EssentiallySports.",
//     image:
//       "https://image-cdn.essentiallysports.com/wp-content/uploads/Daniel-Ricciardo-and-Lando-Norris-394x315.jpeg",
//     language: "en",
//     published_at: "2023-03-24T10:30:33Z",
//     source: "Essentially Sports",
//     title:
//       "8X F1 Winner Daniel Ricciardo’s Abilities Overshadowed by McLaren F1 Rookie as “Tougher” Lando Norris Shows Teetering Signs",
//     url: "https://www.essentiallysports.com/f1-news-x-f1-winner-daniel-ricciardos-abilities-overshadowed-by-mclaren-f1-rookie-as-tougher-lando-norris-shows-teetering-signs/",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. acquired a new stake in iShares S&P 500 Value ETF (NYSEARCA:IVE &#8211; Get Rating) in the fourth quarter, according to the company in its most recent 13F filing with the SEC. The institutional investor acquired 1,297 shares of the company&#8217;s stock, valued at approximately $188,000. Other hedge funds also recently made [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:42Z",
//     source: "americanbankingnews",
//     title:
//       "Armstrong Advisory Group Inc. Takes $188,000 Position in iShares S&P 500 Value ETF (NYSEARCA:IVE)",
//     url: "https://www.americanbankingnews.com/2023/03/24/armstrong-advisory-group-inc-takes-188000-position-in-ishares-sp-500-value-etf-nysearcaive.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. acquired a new position in shares of Activision Blizzard, Inc. (NASDAQ:ATVI &#8211; Get Rating) in the 4th quarter, according to its most recent filing with the Securities and Exchange Commission (SEC). The institutional investor acquired 2,431 shares of the company&#8217;s stock, valued at approximately $186,000. A number of other large investors [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "Armstrong Advisory Group Inc. Invests $186,000 in Activision Blizzard, Inc. (NASDAQ:ATVI)",
//     url: "https://www.americanbankingnews.com/2023/03/24/armstrong-advisory-group-inc-invests-186000-in-activision-blizzard-inc-nasdaqatvi.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. acquired a new stake in iShares MSCI EAFE Growth ETF (BATS:EFG &#8211; Get Rating) during the fourth quarter, according to its most recent filing with the Securities and Exchange Commission (SEC). The institutional investor acquired 1,967 shares of the company&#8217;s stock, valued at approximately $165,000. A number of other large investors [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "Armstrong Advisory Group Inc. Acquires New Shares in iShares MSCI EAFE Growth ETF (BATS:EFG)",
//     url: "https://www.americanbankingnews.com/2023/03/24/armstrong-advisory-group-inc-acquires-new-shares-in-ishares-msci-eafe-growth-etf-batsefg.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. acquired a new position in shares of NorthWestern Co. (NASDAQ:NWE &#8211; Get Rating) during the 4th quarter, according to the company in its most recent 13F filing with the Securities and Exchange Commission. The fund acquired 2,364 shares of the company&#8217;s stock, valued at approximately $140,000. Several other institutional investors and [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "Armstrong Advisory Group Inc. Invests $140,000 in NorthWestern Co. (NASDAQ:NWE)",
//     url: "https://www.americanbankingnews.com/2023/03/24/armstrong-advisory-group-inc-invests-140000-in-northwestern-co-nasdaqnwe.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. acquired a new position in Sprott Physical Gold Trust (NYSEARCA:PHYS &#8211; Get Rating) in the 4th quarter, according to the company in its most recent filing with the Securities and Exchange Commission (SEC). The institutional investor acquired 8,553 shares of theexchange traded fund&#8217;s stock, valued at approximately $121,000. Several other [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "Armstrong Advisory Group Inc. Makes New Investment in Sprott Physical Gold Trust (NYSEARCA:PHYS)",
//     url: "https://www.americanbankingnews.com/2023/03/24/armstrong-advisory-group-inc-makes-new-investment-in-sprott-physical-gold-trust-nysearcaphys.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. purchased a new stake in Shell plc (NYSE:SHEL &#8211; Get Rating) in the 4th quarter, according to the company in its most recent 13F filing with the SEC. The fund purchased 2,982 shares of the energy company&#8217;s stock, valued at approximately $170,000. Other institutional investors and hedge funds have also recently [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "Armstrong Advisory Group Inc. Purchases New Position in Shell plc (NYSE:SHEL)",
//     url: "https://www.americanbankingnews.com/2023/03/24/armstrong-advisory-group-inc-purchases-new-position-in-shell-plc-nyseshel.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. acquired a new stake in Vanguard Mid-Cap Value ETF (NYSEARCA:VOE &#8211; Get Rating) in the 4th quarter, according to its most recent Form 13F filing with the Securities & Exchange Commission. The institutional investor acquired 881 shares of the company&#8217;s stock, valued at approximately $119,000. Several other large investors have also [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "Armstrong Advisory Group Inc. Takes $119,000 Position in Vanguard Mid-Cap Value ETF (NYSEARCA:VOE)",
//     url: "https://www.americanbankingnews.com/2023/03/24/armstrong-advisory-group-inc-takes-119000-position-in-vanguard-mid-cap-value-etf-nysearcavoe.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. bought a new stake in NovoCure Limited (NASDAQ:NVCR &#8211; Get Rating) during the fourth quarter, HoldingsChannel.com reports. The fund bought 2,420 shares of the medical equipment provider&#8217;s stock, valued at approximately $178,000. A number of other institutional investors and hedge funds also recently added to or reduced their stakes in NVCR. [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "Armstrong Advisory Group Inc. Buys Shares of 2,420 NovoCure Limited (NASDAQ:NVCR)",
//     url: "https://www.americanbankingnews.com/2023/03/24/armstrong-advisory-group-inc-buys-shares-of-2420-novocure-limited-nasdaqnvcr.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. acquired a new stake in shares of ProShares S&P 500 Aristocrats ETF (BATS:NOBL &#8211; Get Rating) in the fourth quarter, Holdings Channel reports. The firm acquired 1,510 shares of the company&#8217;s stock, valued at approximately $136,000. A number of other institutional investors and hedge funds also recently added to or reduced [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "Armstrong Advisory Group Inc. Acquires New Position in ProShares S&P 500 Aristocrats ETF (BATS:NOBL)",
//     url: "https://www.americanbankingnews.com/2023/03/24/armstrong-advisory-group-inc-acquires-new-position-in-proshares-sp-500-aristocrats-etf-batsnobl.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. purchased a new position in Invesco S&P 500 Low Volatility ETF (NYSEARCA:SPLV &#8211; Get Rating) during the 4th quarter, according to its most recent filing with the Securities and Exchange Commission (SEC). The firm purchased 2,076 shares of the company&#8217;s stock, valued at approximately $133,000. Other institutional investors have also added [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "Armstrong Advisory Group Inc. Makes New Investment in Invesco S&P 500 Low Volatility ETF (NYSEARCA:SPLV)",
//     url: "https://www.americanbankingnews.com/2023/03/24/armstrong-advisory-group-inc-makes-new-investment-in-invesco-sp-500-low-volatility-etf-nysearcasplv.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. acquired a new position in Delta Air Lines, Inc. (NYSE:DAL &#8211; Get Rating) in the fourth quarter, according to the company in its most recent disclosure with the SEC. The firm acquired 4,475 shares of the transportation company&#8217;s stock, valued at approximately $147,000. Other hedge funds and other institutional investors have [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "4,475 Shares in Delta Air Lines, Inc. (NYSE:DAL) Acquired by Armstrong Advisory Group Inc.",
//     url: "https://www.americanbankingnews.com/2023/03/24/4475-shares-in-delta-air-lines-inc-nysedal-acquired-by-armstrong-advisory-group-inc.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. bought a new position in shares of Citizens Financial Group, Inc. (NYSE:CFG &#8211; Get Rating) during the 4th quarter, according to its most recent 13F filing with the SEC. The firm bought 4,205 shares of the bank&#8217;s stock, valued at approximately $166,000. Several other hedge funds have also recently bought and [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "Armstrong Advisory Group Inc. Makes New Investment in Citizens Financial Group, Inc. (NYSE:CFG)",
//     url: "https://www.americanbankingnews.com/2023/03/24/armstrong-advisory-group-inc-makes-new-investment-in-citizens-financial-group-inc-nysecfg.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. bought a new position in shares of Devon Energy Co. (NYSE:DVN &#8211; Get Rating) in the 4th quarter, according to the company in its most recent Form 13F filing with the Securities & Exchange Commission. The fund bought 2,544 shares of the energy company&#8217;s stock, valued at approximately $156,000. Several other [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "2,544 Shares in Devon Energy Co. (NYSE:DVN) Purchased by Armstrong Advisory Group Inc.",
//     url: "https://www.americanbankingnews.com/2023/03/24/2544-shares-in-devon-energy-co-nysedvn-purchased-by-armstrong-advisory-group-inc.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. acquired a new stake in shares of McKesson Co. (NYSE:MCK &#8211; Get Rating) in the fourth quarter, according to the company in its most recent disclosure with the Securities and Exchange Commission. The institutional investor acquired 409 shares of the company&#8217;s stock, valued at approximately $153,000. Other institutional investors have also [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "Armstrong Advisory Group Inc. Acquires New Position in McKesson Co. (NYSE:MCK)",
//     url: "https://www.americanbankingnews.com/2023/03/24/armstrong-advisory-group-inc-acquires-new-position-in-mckesson-co-nysemck.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. purchased a new stake in shares of Medtronic plc (NYSE:MDT &#8211; Get Rating) in the fourth quarter, HoldingsChannel.com reports. The institutional investor purchased 1,933 shares of the medical technology company&#8217;s stock, valued at approximately $150,000. Other hedge funds and other institutional investors also recently added to or reduced their stakes in [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "Armstrong Advisory Group Inc. Purchases New Position in Medtronic plc (NYSE:MDT)",
//     url: "https://www.americanbankingnews.com/2023/03/24/armstrong-advisory-group-inc-purchases-new-position-in-medtronic-plc-nysemdt.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. acquired a new position in shares of Quanta Services, Inc. (NYSE:PWR &#8211; Get Rating) in the 4th quarter, according to the company in its most recent Form 13F filing with the Securities and Exchange Commission (SEC). The fund acquired 1,015 shares of the construction company&#8217;s stock, valued at approximately $145,000. Other [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "Armstrong Advisory Group Inc. Invests $145,000 in Quanta Services, Inc. (NYSE:PWR)",
//     url: "https://www.americanbankingnews.com/2023/03/24/armstrong-advisory-group-inc-invests-145000-in-quanta-services-inc-nysepwr.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. purchased a new position in Xylem Inc. (NYSE:XYL &#8211; Get Rating) during the 4th quarter, according to its most recent filing with the Securities and Exchange Commission (SEC). The institutional investor purchased 1,398 shares of the industrial products company&#8217;s stock, valued at approximately $155,000. Several other hedge funds and other institutional [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "Armstrong Advisory Group Inc. Invests $155,000 in Xylem Inc. (NYSE:XYL)",
//     url: "https://www.americanbankingnews.com/2023/03/24/armstrong-advisory-group-inc-invests-155000-in-xylem-inc-nysexyl.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. bought a new position in Avangrid, Inc. (NYSE:AGR &#8211; Get Rating) during the 4th quarter, according to the company in its most recent Form 13F filing with the Securities & Exchange Commission. The fund bought 2,815 shares of the utilities provider&#8217;s stock, valued at approximately $121,000. Several other hedge funds have [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "Armstrong Advisory Group Inc. Invests $121,000 in Avangrid, Inc. (NYSE:AGR)",
//     url: "https://www.americanbankingnews.com/2023/03/24/armstrong-advisory-group-inc-invests-121000-in-avangrid-inc-nyseagr.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. bought a new position in shares of Rio Tinto Group (NYSE:RIO &#8211; Get Rating) in the 4th quarter, according to its most recent 13F filing with the Securities & Exchange Commission. The institutional investor bought 1,896 shares of the mining company&#8217;s stock, valued at approximately $135,000. Several other institutional investors and [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "Armstrong Advisory Group Inc. Makes New Investment in Rio Tinto Group (NYSE:RIO)",
//     url: "https://www.americanbankingnews.com/2023/03/24/armstrong-advisory-group-inc-makes-new-investment-in-rio-tinto-group-nyserio.html",
//   },
//   {
//     author: "ABMN Staff",
//     category: "general",
//     country: "us",
//     description:
//       "Armstrong Advisory Group Inc. bought a new position in Marriott International, Inc. (NASDAQ:MAR &#8211; Get Rating) during the fourth quarter, Holdings Channel reports. The firm bought 807 shares of the company&#8217;s stock, valued at approximately $120,000. Other institutional investors and hedge funds also recently made changes to their positions in the company. Arrowstreet Capital Limited [&#8230;]",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:41Z",
//     source: "americanbankingnews",
//     title:
//       "807 Shares in Marriott International, Inc. (NASDAQ:MAR) Purchased by Armstrong Advisory Group Inc.",
//     url: "https://www.americanbankingnews.com/2023/03/24/807-shares-in-marriott-international-inc-nasdaqmar-purchased-by-armstrong-advisory-group-inc.html",
//   },
//   {
//     author: "Pranav Khatri",
//     category: "sports",
//     country: "us",
//     description:
//       "International Friendlies: In Argentina vs Panama match at River Plate Stadium, Lionel Messi netted his 800th career goal via a free kick.&#8230;The post International Friendlies: Argentine manager Scaloni leads Messi chants after La Pulga scores his 800th goal – Check Out first appeared on Inside Sport India.",
//     image: null,
//     language: "en",
//     published_at: "2023-03-24T10:30:40Z",
//     source: "Insidesport",
//     title:
//       "International Friendlies: Argentine manager Scaloni leads Messi chants after La Pulga scores his 800th goal – Check Out",
//     url: "https://www.insidesport.in/football-international-friendlies-argentine-manager-scaloni-leads-messi-chants-after-la-pulga-scores-his-800th-goal/",
//   },
// ];

// export const response: NewsResponse = {
//   data: [
//     {
//       author: "Siladitya Ray, Forbes Staff",
//       category: "general",
//       country: "us",
//       description:
//         "Charges against Do Kwon come just hours after he was arrested in Montenegro while trying to fly out of the country using forged documents.",
//       image:
//         "https://imageio.forbes.com/specials-images/imageserve/641d7d9bcb1ea2dfc14ff5b1/0x0.jpg?width=960&precrop=3998%2C2247%2Cx0%2Cy0",
//       language: "en",
//       published_at: "2023-03-24T10:38:58Z",
//       source: "Forbes",
//       title:
//         "Terra-Luna Coins Founder Do Kwon Charged With Fraud By U.S. Prosecutors",
//       url: "https://www.forbes.com/sites/siladityaray/2023/03/24/terra-luna-coins-founder-do-kwon-charged-with-fraud-by-us-prosecutors/",
//     },
//     {
//       author: "Sam Johnson",
//       category: "general",
//       country: "us",
//       description:
//         "Ant and Dec’s Saturday Night Takeaway continue this weekend and with it, a chance to win a place on the plane for a trip to Orlando.",
//       image:
//         "https://www.edinburghnews.scotsman.com/jpim-static/image/2023/03/22/10/adec.jpg?width=1200&auto=webp",
//       language: "en",
//       published_at: "2023-03-24T10:38:17Z",
//       source: "edinburghnews",
//       title:
//         "Ant and Dec’s Saturday Night Takeaway: Win a place on the plane - how to nominate, enter and what you can win",
//       url: "https://www.edinburghnews.scotsman.com/read-this/ant-and-decs-saturday-night-takeaway-place-on-the-plane-how-to-nominate-enter-and-what-you-can-win-4041910",
//     },
//     {
//       author: "Sam Johnson",
//       category: "general",
//       country: "us",
//       description:
//         "Ant and Dec’s Saturday Night Takeaway continue this weekend and with it, a chance to win a place on the plane for a trip to Orlando.",
//       image:
//         "https://www.scotsman.com/jpim-static/image/2023/03/22/10/adec.jpg?width=1200&auto=webp",
//       language: "en",
//       published_at: "2023-03-24T10:38:17Z",
//       source: "thescotsman",
//       title:
//         "Ant and Dec’s Saturday Night Takeaway: Win a place on the plane - how to nominate, enter and what you can win",
//       url: "https://www.scotsman.com/read-this/ant-and-decs-saturday-night-takeaway-place-on-the-plane-how-to-nominate-enter-and-what-you-can-win-4041910",
//     },
//     {
//       author: null,
//       category: "business",
//       country: "us",
//       description:
//         "With the crisis of confidence, banks will now shy away from risky risk profiles and may lend less",
//       image:
//         "https://bl-i.thgim.com/public/specials/faak3v/article66656951.ece/alternates/LANDSCAPE_1200/84A87049-B15F-4AB7-8B05-38AAA8032403_1_201_a.jpeg",
//       language: "en",
//       published_at: "2023-03-24T10:38:02Z",
//       source: "Business Line",
//       title: "How Credit Suisse came to be discredited",
//       url: "https://www.thehindubusinessline.com/on-campus/how-credit-suisse-came-to-be-discredited/article66656841.ece",
//     },
//     {
//       author: "Mamta Kumari",
//       category: "sports",
//       country: "us",
//       description:
//         "Odell Beckham Jr. is a widely recognized wide receiver in American football, known for his exceptional athleticism, keen instincts, and flashy personality. Since his selection in 2014, he quickly rose to fame as one of the most exciting players in the league, wowing fans with his impressive skills and highlight-reel plays. However, injuries and inconsistent performances&#8230;The post “I Miss It”: Free Agent OBJ Begs NFL Teams to Consider Him After $20,000,000 Issue appeared first on EssentiallySports.",
//       image:
//         "https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-1370404924-460x315.jpg",
//       language: "en",
//       published_at: "2023-03-24T10:38:02Z",
//       source: "Essentially Sports",
//       title:
//         "“I Miss It”: Free Agent OBJ Begs NFL Teams to Consider Him After $20,000,000 Issue",
//       url: "https://www.essentiallysports.com/nfl-news-i-miss-it-free-agent-odell-beckham-jr-begs-nfl-teams-to-consider-him-after-twenty-million-dollar-issue/",
//     },
//     {
//       author: "ABMN Staff",
//       category: "general",
//       country: "us",
//       description:
//         "Trane Technologies plc (NYSE:TT) Shares Acquired by Ronald Blue Trust Inc.",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:41Z",
//       source: "americanbankingnews",
//       title:
//         "Trane Technologies plc (NYSE:TT) Shares Acquired by Ronald Blue Trust Inc.",
//       url: "https://www.americanbankingnews.com/2023/03/24/trane-technologies-plc-nysett-shares-acquired-by-ronald-blue-trust-inc.html",
//     },
//     {
//       author: "ABMN Staff",
//       category: "general",
//       country: "us",
//       description:
//         "Rent the Runway, Inc. (NASDAQ:RENT) CEO Sells $87,731.55 in Stock",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:41Z",
//       source: "americanbankingnews",
//       title:
//         "Rent the Runway, Inc. (NASDAQ:RENT) CEO Sells $87,731.55 in Stock",
//       url: "https://www.americanbankingnews.com/2023/03/24/rent-the-runway-inc-nasdaqrent-ceo-sells-87731-55-in-stock.html",
//     },
//     {
//       author: "ABMN Staff",
//       category: "general",
//       country: "us",
//       description:
//         "Ronald Blue Trust Inc. Purchases 16,923 Shares of iShares MSCI Intl Quality Factor ETF (NYSEARCA:IQLT)",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:41Z",
//       source: "americanbankingnews",
//       title:
//         "Ronald Blue Trust Inc. Purchases 16,923 Shares of iShares MSCI Intl Quality Factor ETF (NYSEARCA:IQLT)",
//       url: "https://www.americanbankingnews.com/2023/03/24/ronald-blue-trust-inc-purchases-16923-shares-of-ishares-msci-intl-quality-factor-etf-nysearcaiqlt.html",
//     },
//     {
//       author: "ABMN Staff",
//       category: "general",
//       country: "us",
//       description:
//         "Stan K. Erickson Purchases 3,000 Shares of Titan Machinery Inc. (NASDAQ:TITN) Stock",

//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:41Z",
//       source: "americanbankingnews",
//       title:
//         "Stan K. Erickson Purchases 3,000 Shares of Titan Machinery Inc. (NASDAQ:TITN) Stock",
//       url: "https://www.americanbankingnews.com/2023/03/24/stan-k-erickson-purchases-3000-shares-of-titan-machinery-inc-nasdaqtitn-stock.html",
//     },
//     {
//       author: "ABMN Staff",
//       category: "general",
//       country: "us",
//       description:
//         "Ronald Blue Trust Inc. Raises Stock Position in Dominion Energy, Inc. (NYSE:D)",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:41Z",
//       source: "americanbankingnews",
//       title:
//         "Ronald Blue Trust Inc. Raises Stock Position in Dominion Energy, Inc. (NYSE:D)",
//       url: "https://www.americanbankingnews.com/2023/03/24/ronald-blue-trust-inc-raises-stock-position-in-dominion-energy-inc-nysed.html",
//     },
//     {
//       author: "ABMN Staff",
//       category: "general",
//       country: "us",
//       description:
//         "Meta Platforms, Inc. (NASDAQ:META) Insider Sells $79,881.18 in Stock",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:41Z",
//       source: "americanbankingnews",
//       title:
//         "Meta Platforms, Inc. (NASDAQ:META) Insider Sells $79,881.18 in Stock",
//       url: "https://www.americanbankingnews.com/2023/03/24/meta-platforms-inc-nasdaqmeta-insider-sells-79881-18-in-stock.html",
//     },
//     {
//       author: "ABMN Staff",
//       category: "general",
//       country: "us",
//       description:
//         "Robert W. Gerrity Acquires 5,000 Shares of Vitesse Energy, Inc. (NYSE:VTS) Stock",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:41Z",
//       source: "americanbankingnews",
//       title:
//         "Robert W. Gerrity Acquires 5,000 Shares of Vitesse Energy, Inc. (NYSE:VTS) Stock",
//       url: "https://www.americanbankingnews.com/2023/03/24/robert-w-gerrity-acquires-5000-shares-of-vitesse-energy-inc-nysevts-stock.html",
//     },
//     {
//       author: "ABMN Staff",
//       category: "general",
//       country: "us",
//       description:
//         "Ronald Blue Trust Inc. Increases Position in Motorola Solutions, Inc. (NYSE:MSI)",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:41Z",
//       source: "americanbankingnews",
//       title:
//         "Ronald Blue Trust Inc. Increases Position in Motorola Solutions, Inc. (NYSE:MSI)",
//       url: "https://www.americanbankingnews.com/2023/03/24/ronald-blue-trust-inc-increases-position-in-motorola-solutions-inc-nysemsi.html",
//     },
//     {
//       author: "ABMN Staff",
//       category: "general",
//       country: "us",
//       description:
//         "Insider Buying: Apartment Income REIT Corp. (NYSE:AIRC) Director Acquires 2,500 Shares of Stock",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:41Z",
//       source: "americanbankingnews",
//       title:
//         "Insider Buying: Apartment Income REIT Corp. (NYSE:AIRC) Director Acquires 2,500 Shares of Stock",
//       url: "https://www.americanbankingnews.com/2023/03/24/insider-buying-apartment-income-reit-corp-nyseairc-director-acquires-2500-shares-of-stock.html",
//     },
//     {
//       author: "ABMN Staff",
//       category: "general",
//       country: "us",
//       description:
//         "Ronald Blue Trust Inc. Acquires 2,523 Shares of Vanguard S&#038;P 500 Value ETF (NYSEARCA:VOOV)",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:41Z",
//       source: "americanbankingnews",
//       title:
//         "Ronald Blue Trust Inc. Acquires 2,523 Shares of Vanguard S&#038;P 500 Value ETF (NYSEARCA:VOOV)",
//       url: "https://www.americanbankingnews.com/2023/03/24/ronald-blue-trust-inc-acquires-2523-shares-of-vanguard-sp-500-value-etf-nysearcavoov.html",
//     },
//     {
//       author: "ABMN Staff",
//       category: "general",
//       country: "us",
//       description:
//         "Host Hotels &#038; Resorts (NASDAQ:HST) Shares Gap Down to $15.85",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:41Z",
//       source: "americanbankingnews",
//       title:
//         "Host Hotels &#038; Resorts (NASDAQ:HST) Shares Gap Down to $15.85",
//       url: "https://www.americanbankingnews.com/2023/03/24/host-hotels-resorts-nasdaqhst-shares-gap-down-to-15-85.html",
//     },
//     {
//       author: "ABMN Staff",
//       category: "general",
//       country: "us",
//       description:
//         "Ronald Blue Trust Inc. Buys 1,476 Shares of Linde plc (NYSE:LIN)",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:41Z",
//       source: "americanbankingnews",
//       title: "Ronald Blue Trust Inc. Buys 1,476 Shares of Linde plc (NYSE:LIN)",
//       url: "https://www.americanbankingnews.com/2023/03/24/ronald-blue-trust-inc-buys-1476-shares-of-linde-plc-nyselin.html",
//     },
//     {
//       author: "ABMN Staff",
//       category: "general",
//       country: "us",
//       description:
//         "Bruce J. Labovitz Sells 3,000 Shares of Bowman Consulting Group Ltd. (NASDAQ:BWMN) Stock",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:41Z",
//       source: "americanbankingnews",
//       title:
//         "Bruce J. Labovitz Sells 3,000 Shares of Bowman Consulting Group Ltd. (NASDAQ:BWMN) Stock",
//       url: "https://www.americanbankingnews.com/2023/03/24/bruce-j-labovitz-sells-3000-shares-of-bowman-consulting-group-ltd-nasdaqbwmn-stock.html",
//     },
//     {
//       author: "ABMN Staff",
//       category: "general",
//       country: "us",
//       description:
//         "Ronald Blue Trust Inc. Raises Stake in Morgan Stanley (NYSE:MS)",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:41Z",
//       source: "americanbankingnews",
//       title: "Ronald Blue Trust Inc. Raises Stake in Morgan Stanley (NYSE:MS)",
//       url: "https://www.americanbankingnews.com/2023/03/24/ronald-blue-trust-inc-raises-stake-in-morgan-stanley-nysems.html",
//     },
//     {
//       author: "ABMN Staff",
//       category: "general",
//       country: "us",
//       description:
//         "Ronald Blue Trust Inc. Buys 981 Shares of Broadcom Inc. (NASDAQ:AVGO)",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:41Z",
//       source: "americanbankingnews",
//       title:
//         "Ronald Blue Trust Inc. Buys 981 Shares of Broadcom Inc. (NASDAQ:AVGO)",
//       url: "https://www.americanbankingnews.com/2023/03/24/ronald-blue-trust-inc-buys-981-shares-of-broadcom-inc-nasdaqavgo.html",
//     },
//     {
//       author: "ABMN Staff",
//       category: "general",
//       country: "us",
//       description:
//         "Ronald Blue Trust Inc. Has $793,000 Stock Holdings in iShares MSCI Emerging Markets ETF (NYSEARCA:EEM)",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:41Z",
//       source: "americanbankingnews",
//       title:
//         "Ronald Blue Trust Inc. Has $793,000 Stock Holdings in iShares MSCI Emerging Markets ETF (NYSEARCA:EEM)",
//       url: "https://www.americanbankingnews.com/2023/03/24/ronald-blue-trust-inc-has-793000-stock-holdings-in-ishares-msci-emerging-markets-etf-nysearcaeem.html",
//     },
//     {
//       author: "Madison Adams",
//       category: "general",
//       country: "us",
//       description:
//         "A big glow was spotted in the sky around 4 a.m. on Thursday. NBC2 viewers sent a flurry of video, photos, and questions to the station asking, “What’s in the sky?”The post SWFL residents searching for answers to mysterious &#8220;big glow&#8221; in the sky appeared first on NBC2 News.",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:31Z",
//       source: "nbc-2",
//       title:
//         "SWFL residents searching for answers to mysterious “big glow” in the sky",
//       url: "https://nbc-2.com/news/local/2023/03/24/swfl-residents-searching-for-answers-to-mysterious-big-glow-in-the-sky/",
//     },
//     {
//       author: null,
//       category: "general",
//       country: "us",
//       description:
//         "(marketscreener.com) Phoenix Copper Ltd on Friday said it was finalising discussions to place up to USD80 million of corporate copper bonds, initially announced in June. The coupons of the corporate copper bonds are linked to the average copper price and to US interest rates. The copper price coupon will be at least 8.5% per year at USD3.60 per pound of copper, or...https://www.marketscreener.com/quote/stock/PHOENIX-COPPER-LIMITED-61661898/news/Phoenix-Copper-in-talks-to-finalise-placing-of-copper-linked-bonds-43328285/?utm_medium=RSS&utm_content=20230324",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:06Z",
//       source: "4-traders",
//       title:
//         "Phoenix Copper in talks to finalise placing of copper-linked bonds",
//       url: "https://www.marketscreener.com/quote/stock/PHOENIX-COPPER-LIMITED-61661898/news/Phoenix-Copper-in-talks-to-finalise-placing-of-copper-linked-bonds-43328285/?utm_medium=RSS&utm_content=20230324",
//     },
//     {
//       author: null,
//       category: "general",
//       country: "us",
//       description:
//         "(marketscreener.com) By Joe Hoppe GSK PLC said Friday that it disagrees with a ruling in the Goetz case by the California state court late Thursday to allow the plaintiff's experts to testify, and said there is no consistent or reliable evidence that ranitidine increases the risk of any cancer. The pharma major said the scientific consensus is that...https://www.marketscreener.com/quote/stock/GSK-PLC-9590199/news/GSK-Disagrees-With-Court-Ruling-to-Allow-Plaintiff-Expert-Testimony-in-Goetz-Case-43328284/?utm_medium=RSS&utm_content=20230324",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:03Z",
//       source: "4-traders",
//       title:
//         "GSK Disagrees With Court Ruling to Allow Plaintiff-Expert Testimony in Goetz Case",
//       url: "https://www.marketscreener.com/quote/stock/GSK-PLC-9590199/news/GSK-Disagrees-With-Court-Ruling-to-Allow-Plaintiff-Expert-Testimony-in-Goetz-Case-43328284/?utm_medium=RSS&utm_content=20230324",
//     },
//     {
//       author: "pdtechintegration automation account",
//       category: "general",
//       country: "us",
//       description:
//         "Montreal police said the incident occurred at 9:20 p.m. on L'Acadie Blvd. near Dudemaine St.",
//       image: null,
//       language: "en",
//       published_at: "2023-03-24T10:38:02Z",
//       source: "montrealgazette",
//       title:
//         "Young man in critical condition after drive-by shooting in Ahuntsic-Cartierville",
//       url: "https://montrealgazette.com/news/local-news/young-man-in-critical-condition-after-drive-by-shooting-in-ahuntsic-cartierville",
//     },
//   ],
//   pagination: { count: 25, limit: 25, offset: 0, total: 10000 },
// };
