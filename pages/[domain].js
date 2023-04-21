import { domainArr } from "@/components/domainArr";
import React, { useState } from "react";
import Head from "next/head";
import Footer from "@/components/footer";

const DomainPage = (props) => {
  const {
    domainName,
    domainData,
    WhoisData,
    SSLData,
    MetaData,
    IpLocationData,
    DNSData,
    HeaderData,
    domainStatusData,
  } = props;

  if (domainName === false)
    return (
      <div className="text-center py-10 my-auto">
        please enter valid domain name...
      </div>
    );

  const [value, setValue] = useState("");

  const [domainInputUrl, setDomainInputUrl] = useState();
  const [err, SetErr] = useState(false);

  const handleInput = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
    let domainurl = getDomainName(e.target.value, domainArr);
    console.log(domainurl);
    SetErr(!domainurl);
    if (domainurl?.domain) {
      setDomainInputUrl(domainurl?.domain);
    }
  };

  const handlekeyDown = (e) => {
    if (e.keyCode === 13) {
      domainInputUrl &&
        !err &&
        (window.location.pathname = `/${domainInputUrl}`);
    }
  };

  const handleUrl = () => {
    domainInputUrl && !err && (window.location.pathname = `/${domainInputUrl}`);
  };

  const getDomainName = (url, suffixes) => {
    // Find & remove protocol (http, ftp, etc.) and get domain
    let domain = "";
    if (url.includes("://")) {
      domain = url.split("/")[2];
    } else {
      domain = url.split("/")[0];
    }

    // Remove port number if exists
    domain = domain.split(":")[0];

    // Remove www. if exists
    domain = domain.replace(/^www\./i, "");

    // Check if domain name ends with any of the specified suffixes
    const validSuffix = suffixes.some((suffix) => domain.endsWith(suffix));
    if (!validSuffix || domain.includes(" ")) {
      return false;
    }

    const domainName = domain;

    // Get name without top-level domain

    const parts = domainName?.split(".");
    const name = parts.slice(0, -1).join(".");
    return {
      domain: domainName,
      name: name,
    };
  };

  return (
    <>
      <Head>
        <title>{domainName?.domain}</title>
        <meta name="title" content={domainName?.domain} />
        <meta
          name="description"
          content={`${domainName?.domain} ${MetaData?.title}`}
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://whoisos.com/${domainName?.domain}`}
        />
        <meta property="og:title" content={domainName?.domain} />
        <meta
          property="og:description"
          content={domainName?.domain + " " + MetaData?.title}
        />
        <meta property="og:image" content={MetaData?.image || MetaData?.icon} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://whoisos.com/${domainName?.domain}`}
        />
        <meta property="twitter:title" content={domainName?.domain} />
        <meta
          property="twitter:description"
          content={domainName?.domain + " " + MetaData?.title}
        />
        <meta
          property="twitter:image"
          content={MetaData?.image || MetaData?.icon}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="canonical"
          href={`https://whoisos.com/${domainName?.domain}`}
        />

        <link
          rel="icon"
          href={MetaData?.icon || "https://whoisos.com/favicon.png"}
        />
      </Head>
      <main className="m-auto flex max-w-5xl flex-col px-4 ">
        <nav className="flex flex-col w-full gap-6  sm:flex-row  justify-between sm:items-center py-4">
          <a href="/">
            <span className="font-medium smd:text-xl py-2 px-4 text-white bg-black cursor-pointer rounded-full rounded-tl-sm ">
              WHOIS_OS
            </span>
          </a>
          <div className="text-gray-600 w-full grow rounded-full border-2 sm:border-2 border-black  flex justify-around items-center px-1 pr-0">
            <input
              type="text"
              name="url"
              onKeyDown={handlekeyDown}
              title="Please enter correct tiktok url"
              placeholder="type domain name or paste url..."
              className="w-full pl-4 rounded-l-full text-sm font-light focus:outline-none text-black placeholder:text-slate-600 placeholder:font-light"
              value={value}
              onChange={handleInput}
              autoComplete="off"
            />
            <span className="flex items-center">
              <button
                onClick={handleUrl}
                className="cursor-pointer px-4 bg-black w-min rounded-r-full flex justify-center h-10 sm:h-8 items-center  text-white"
              >
                <span className="mr-1">Search</span>
              </button>
            </span>
          </div>
        </nav>
        {err && value && (
          <div className="text-xs text-left sm:text-right text-red-600">
            please enter valid domain name!
          </div>
        )}
        <div className="flex flex-col gap-6 py-5 overflow-hidden ">
          <div className="flex gap-2 flex-wrap justify-between items-center sm:items-start">
            <div className="flex flex-col justify-start gap-3">
              <h1 className=" text-2xl font-bold">{domainName?.domain}</h1>
              <div className="text-xs">
                {MetaData?.url || `https://${domainName?.domain}/`}
              </div>
              <div className="text-sm">{MetaData?.title}</div>
              <div className="text-sm">{MetaData?.description}</div>
              <div className="text-xs">
                <span>{MetaData?.keywords && "Keywords: "}</span>
                <span>
                  {MetaData?.keywords &&
                    MetaData?.keywords?.map((el) => (
                      <span key={el} className="pr-1">
                        {el}
                      </span>
                    ))}
                </span>
              </div>
            </div>

            {MetaData?.image || MetaData?.icon ? (
              <img
                src={MetaData?.image || MetaData?.icon}
                className=" border w-[300px] h-[250px] object-cover"
              />
            ) : (
              <span
                src={MetaData?.image || MetaData?.icon}
                className=" border w-[300px] h-[250px] bg-gray-200 flex items-center justify-center"
              >
                {domainName?.domain}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-base underline">
              <span>About {domainName?.domain}</span>
            </div>
            <div className="text-sm">
              {`The website ${domainName?.name} [${
                domainName?.domain
              }] was created on ${
                WhoisData?.creationDate || "unknow date"
              }. The website is owned by ${
                WhoisData?.registrantName ||
                WhoisData?.registrantOrganization ||
                "unknow"
              } which is based in ${
                WhoisData?.registrantStateProvince || "unknow"
              }
              ${
                WhoisData?.registrantCity || "location"
              }. The domain is registered with ${
                WhoisData?.registrar || "unknow"
              }. and has a Domain ID of ${
                WhoisData?.registryDomainId || "unknow"
              }. The website's domain name ${
                domainName?.domain
              } is set to expire on ${
                WhoisData?.registrarRegistrationExpirationDate || "unknow"
              }. The website's Name Servers are ${
                DNSData?.NS ? DNSData?.NS[0] : "unknow"
              } and ${
                DNSData?.NS ? DNSData?.NS[1] : "unknow"
              }, which help direct traffic to the website. The information on the website's domain name, registration, and ownership can be found through publicly available records.`}
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            <div className=" flex flex-col text-sm gap-3 grow">
              <div className="text-base bg-black text-white pl-2 p-1.5 rounded-sm">
                SSL certificate
              </div>
              <div className="border-b border-black">
                <span>Domain Name: </span>
                <span>{SSLData?.subject?.CN || "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span>Issuer Country: </span>
                <span>{SSLData?.issuer?.C || "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span>Issuer Organization: </span>
                <span>{SSLData?.issuer?.O || "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span>Issuer CN: </span>
                <span>{SSLData?.issuer?.CN || "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span>Other Domains : </span>
                <span>{SSLData?.subjectaltname || "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span>Info Access : </span>
                <span>{JSON.stringify(SSLData?.infoAccess) || "unknow"}</span>
              </div>
              <div className="border-b border-black">SSL Version: 2</div>
              <div className="border-b border-black">
                <span>Issued on: </span>
                <span>{SSLData?.valid_from || "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span> Expires on: </span>{" "}
                <span>{SSLData?.valid_to || "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span>Serial Number: </span>{" "}
                <span>{SSLData?.serialNumber || "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span>Public Key Algorithm: </span>{" "}
                <span>{SSLData?.fingerprint || "unknow"}</span>
              </div>
            </div>
            <div className=" flex flex-col text-sm gap-3 grow">
              <div className="text-base bg-black text-white pl-2 p-1.5 rounded-sm">
                Server location
              </div>
              <div className="border-b border-black">
                <span>Country Name: </span>
                <span>{IpLocationData?.country_name || "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span>Region Code: </span>
                <span>{IpLocationData?.region_code || "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span>Region Name: </span>
                <span>{IpLocationData?.region_name || "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span>Time Zone: </span>
                <span>{IpLocationData?.time_zone || "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span> City: </span>
                <span>{IpLocationData?.city || "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span>ISP: </span>
                <span>{IpLocationData?.isp || "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span>Zip Code: </span>
                <span>{IpLocationData?.zip_code || "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span>Latitude: </span>
                <span>{IpLocationData?.latitude || "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span>Longitude: </span>
                <span>{IpLocationData?.longitude || "unknow"}</span>
              </div>
            </div>
            <div className=" flex flex-col text-sm gap-3 grow">
              <div className="text-base bg-black text-white pl-2 p-1.5 rounded-sm">
                Name Server
              </div>
              <div className="border-b border-black">
                <span>Name Server: </span>
                <span>{DNSData?.NS ? DNSData?.NS[0] : "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span>Name Server: </span>
                <span>{DNSData?.NS ? DNSData?.NS[1] : "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span>Name Server: </span>
                <span>{DNSData?.NS ? DNSData?.NS[2] : "unknow"}</span>
              </div>
              <div className="border-b border-black">
                <span>Name Server: </span>
                <span>{DNSData?.NS ? DNSData?.NS[3] : "unknow"}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-base bg-black text-white pl-2 p-1.5 rounded-sm">
              <span>Whois lookup </span>
              <span>{domainName?.domain}</span>
            </div>
            <div className="flex flex-col gap-3 border p-2">
              <div className="text-sm">
                <span>Domain Name: </span>
                <span>{WhoisData?.domainName || "unknow"}</span>
              </div>
              <div className="text-sm">
                <span>Updated Date: </span>
                <span>{WhoisData?.updatedDate || "unknow"}</span>
              </div>
              <div className="text-sm">
                <span>Creation Date: </span>
                <span>{WhoisData?.creationDate || "unknow"}</span>
              </div>
              <div className="text-sm">
                <span>Expiration Date: </span>
                <span>
                  {WhoisData?.registrarRegistrationExpirationDate || "unknow"}
                </span>
              </div>
              <div className="text-sm">
                <span>
                  Domain ID: <span></span>
                  {WhoisData?.registryDomainId || "unknow"}
                </span>
              </div>

              <div className="text-sm">
                <span>
                  Domain Registrar: <span></span>
                  {WhoisData?.registrar || "unknow"}
                </span>
              </div>
              <div className="text-sm">
                <span>Domain Registrar IANA ID: </span>
                <span>{WhoisData?.registrarIanaId || "unknow"}</span>
              </div>
              <div className="text-sm">
                <span>Domain Registrar WHOIS Server: </span>
                <span>{WhoisData?.creationDate || "unknow"}</span>
              </div>

              <div className="text-sm">
                <span>Domain Registrar URL: </span>
                <span>{WhoisData?.registrarWhoisServer || "unknow"}</span>
              </div>

              <div className="text-sm">
                <span> Domain Registrar Abuse Contact Email: </span>
                <span>{WhoisData?.registrarAbuseContactEmail || "unknow"}</span>
              </div>

              <div className="text-sm">
                <span>Domain Registrar Abuse Contact Phone: </span>
                <span>{WhoisData?.registrarAbuseContactPhone || "unknow"}</span>
              </div>
              {domainStatusData &&
                domainStatusData?.map((el) => (
                  <div key={el.domainStatus} className="text-sm">
                    <span>Domain Status: </span>
                    <span>{el.domainStatus || "unknow"}</span>
                    <div className="text-xs">{el.domainStatus && el.url}</div>
                  </div>
                ))}
              <div className="text-sm">
                <span>Owner Name: </span>
                <span>
                  {WhoisData?.registrantName ||
                    WhoisData?.registrantOrganization ||
                    "unknow"}
                </span>
              </div>
              <div className="text-sm">
                <span>Owner Organization: </span>
                <span> {WhoisData?.registrantOrganization || "unknow"}</span>
              </div>
              <div className="text-sm">
                <span> Owner State/Province: </span>
                <span>{WhoisData?.registrantStateProvince || "unknow"}</span>
              </div>
              <div className="text-sm">
                <span> Owner Country: </span>
                <span>{WhoisData?.registrantCity || "unknow"}</span>
              </div>
              <div className="text-sm">
                <span>Owner Postal Code: </span>
                <span>{WhoisData?.registrantPostalCode || "unknow"}</span>
              </div>
              <div className="text-sm">
                <span>Website Admin Organization: </span>
                <span>
                  {WhoisData?.adminName ||
                    WhoisData?.adminOrganization ||
                    "unknow"}
                </span>
              </div>
              <div className="text-sm">
                <span>Website Admin City: </span>
                <span>{WhoisData?.adminCity || "unknow"}</span>
              </div>

              <div className="text-sm">
                <span>Website Admin State/Province: </span>
                <span>{WhoisData?.adminStateProvince || "unknow"}</span>
              </div>
              <div className="text-sm">
                <span>Website Admin Country: </span>
                <span>{WhoisData?.adminCountry || "unknow"}</span>
              </div>
              <div className="text-sm">
                <span> Website Admin Postal Code: </span>
                <span>{WhoisData?.adminPostalCode || "unknow"}</span>
              </div>
              <div className="text-sm">
                <span>WHOIS_OS Last Upade: </span>
                <span>{WhoisData?.lastUpdateOfWhoisDatabase || "unknow"}</span>
              </div>
            </div>
          </div>
          <div className=" flex flex-col text-sm gap-3 grow">
            <div className="text-base bg-black text-white pl-2 p-1.5 rounded-sm">
              DNS record
            </div>
            <div className="border-b flex flex-wrap gap-2 border-black">
              <span> NS record: </span>
              <span>
                {DNSData?.NS?.map((el) => <span key={el}>{el}</span>) ||
                  "unknow"}
              </span>
            </div>
            <div className="border-b border-black">
              <span>A record: </span>
              <span>{DNSData?.A || "unknow"}</span>
            </div>
            <div className="border-b border-black">
              <span> CNAME record: </span>
              <span>{DNSData?.CNAME || "unknow"}</span>
            </div>
            <div className="border-b border-black">
              <span>AAAA record: </span>
              <span>{DNSData?.AAAA || "unknow"}</span>
            </div>
            <div className="border-b border-black">
              <span>MX record: </span>
              <span>
                {DNSData?.MX?.map((el) => (
                  <span key={el}>{`${el.exchange} - ${el.priority}`}</span>
                )) || "unknow"}
              </span>
            </div>
            <div className="border-b flex flex-wrap gap-2 border-black">
              <span>TXT record: </span>
              {DNSData?.TXT?.map((el) => <span key={el}>{el}</span>) || (
                <span>unknow</span>
              )}
            </div>
            <div className="border-b border-black">
              <span>SRV record: </span>
              <span>{DNSData?.SRV || "unknow"}</span>
            </div>
            <div className="border-b border-black">
              <span>PTR record: </span>
              <span>{DNSData?.PTR || "unknow"}</span>
            </div>
            <div className="border-b border-black">
              <span>SOA record: </span>
              <span>{`${JSON.stringify(DNSData?.SOA)}` || "unknow"}</span>
            </div>
          </div>

          <div>
            <div className="text-base bg-black text-white pl-2 p-1.5 rounded-sm">
              HTTP Reqvest headers
            </div>
            <textarea
              rows={10}
              className="w-full p-2 text-sm border h-full"
              value={JSON.stringify(HeaderData)}
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="text-base bg-black text-white pl-2 p-1.5 rounded-sm">
              Alternate domain to {domainName?.domain}
            </div>
            <span className="flex text-gray-800 flex-wrap gap-2">
              {domainData &&
                domainData?.map((el) => (
                  <div
                    className="flex w-full sm:w-fit justify-between p-2 border border-black rounded-md items-center"
                    key={el.extenstion}
                  >
                    <a href={`https://whoisos.com/${el.domain}`}>
                      <span className="flex flex-col justify-center gap-1">
                        <span className="text-xl text-green-600 font-bold">
                          {el.extenstion}
                        </span>
                        <span className="ml-1">{el.domain} </span>

                        <span className="ml-1 text-xs text-gray-500">
                          check the availability on Godaddy
                        </span>
                      </span>
                    </a>
                    <span className=" h-full rounded-md flex items-start">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                        />
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                        />
                      </svg>
                    </span>
                  </div>
                ))}
            </span>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default DomainPage;

const getDomainName = (url, suffixes) => {
  // Find & remove protocol (http, ftp, etc.) and get domain
  let domain = "";
  if (url.includes("://")) {
    domain = url.split("/")[2];
  } else {
    domain = url.split("/")[0];
  }

  // Remove port number if exists
  domain = domain.split(":")[0];

  // Remove www. if exists
  domain = domain.replace(/^www\./i, "");

  // Check if domain name ends with any of the specified suffixes
  const validSuffix = suffixes.some((suffix) => domain.endsWith(suffix));
  if (!validSuffix || domain.includes(" ")) {
    return false;
  }

  const domainName = domain;

  // Get name without top-level domain

  const parts = domainName?.split(".");
  const name = parts.slice(0, -1).join(".");
  return {
    domain: domainName,
    name: name,
  };
};

export async function getServerSideProps(context) {
  const domain = context.params.domain;
  const domainName = getDomainName(domain, domainArr);

  console.log(domainName, "domainName");

  if (domainName === false) {
    return { props: { domainName } };
  }

  if (domainName !== false) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ domain: domainName.domain }),
    };

    const res1 = await fetch("http://whoisos.com/api/getWhoisData", options);
    const resWhoisData = await res1?.json();
    const WhoisData = resWhoisData.data;

    const res2 = await fetch("http://whoisos.com/api/getSSLData", options);
    const resSSLData = await res2?.json();
    const SSLData = resSSLData.data;

    const res3 = await fetch("http://whoisos.com/api/getMetaData", options);
    const resMetaData = await res3?.json();
    const MetaData = resMetaData.data;

    const res4 = await fetch(
      "http://whoisos.com/api/getIpLocationData",
      options
    );
    const resIpLocationData = await res4?.json();
    const IpLocationData = resIpLocationData.data;

    const res5 = await fetch("http://whoisos.com/api/getDNSData", options);
    const resDNSData = await res5?.json();
    const DNSData = resDNSData.data;

    const res6 = await fetch("http://whoisos.com/api/getHeadersData ", options);
    const resHeaderData = await res6?.json();
    const HeaderData = resHeaderData.data;

    const res7 = await fetch("http://whoisos.com/api/getDomainData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ domain: domainName?.name }),
    });
    const resDomainData = await res7?.json();
    const domainData = resDomainData.data;

    // NS call

    const domainStatus = resWhoisData?.data?.domainStatus;

    const domainSArr = domainStatus?.split(" ");

    const domainStatusData = [];

    for (let i = 0; i < domainSArr?.length; i += 2) {
      const obj = {
        domainStatus: domainSArr[i],
        url: domainSArr[i + 1],
      };
      domainStatusData.push(obj);
    }

    return {
      props: {
        domainName: domainName,
        WhoisData: WhoisData || null,
        SSLData: SSLData || null,
        MetaData: MetaData || null,
        IpLocationData: IpLocationData || null,
        DNSData: DNSData || null,
        HeaderData: HeaderData || null,
        domainData: domainData || null,
        domainStatusData: domainStatusData || null,
      },
    };
  }
}
