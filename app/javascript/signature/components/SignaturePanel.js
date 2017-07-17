import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SignaturePanel extends Component { render() {
    return(
      <div className="panel">
        <table>
          <tbody>
            <tr>
              <td className="logo">
                <img src="https://ci4.googleusercontent.com/proxy/t_oqu9__zJWZibFIfW2r9CDr6o_EsPPblPBCGU5GNHc9SfW5wvJVookonnsEqmwbV3BOxJ1qp5gcruq7CDXfKxhBNnEwGO5lzmOFyeow6miEBv45yRfsowMWg1mCGAKYvVQ_=s0-d-e1-ft#https://alliance-francaise.sslsvc.com/media/website_pages/AF_Auckland_NZ2.png" alt="" />
              </td>
              <td className="content">
                <table>
                  <tbody>
                    <tr className="title">
                      <td>
                       {this.props.name}
                      </td> 
                    </tr>
                    <tr className="position">
                      <td>
                      {this.props.position }
                      
                      </td>
                    </tr>
                    <tr className="telephone">
                      <td>
                        <a href={"tel:" + this.props.telephone} value={this.props.telephone} target="_blank">{this.props.telephone || ""}</a>
                      </td>
                    </tr>
                    <tr className="email">
                      <td>
                        <a href={"mailto:" + this.props.email} target="_blank">{this.props.email}</a>
                      </td>
                    </tr>
                    <tr className="street">
                      <td>
                      {this.props.street || "9a Kirk Street, Grey Lynn"}
                      </td>
                    </tr>
                    <tr className="city">
                      <td>
                      { this.props.city  ? `${this.props.city} ${this.props.postcode}, ${this.props.country}` : "Auckland 1021, New Zealand"}
                      </td>
                    </tr>
                    <tr className="website">
                      <td>
                        <a href={this.props.website || "http://www.alliance-francaise.co.nz/"} target="_blank">{this.props.website || "http://www.alliance-francaise.co.nz/"}</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table className="small-icons">
                          <tbody>
                            <tr>
                              <td>
                                <span>
                                  <a href="https://www.facebook.com/afauckland" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.facebook.com/afauckland&amp;source=gmail&amp;ust=1498173591027000&amp;usg=AFQjCNHAf_lov3M3fll7RkgtdJROCMst6w">
                                    <img src="https://ci3.googleusercontent.com/proxy/LWAH11_UfKS1QZTCfGhYw6w-t2l2421Zg1oUFNa-Ovq1Fq1nIKEKFXFz9ypLsRuSHSrTlQzqYkRgTClVvPdeE1lq5OixOY6SUngyYFvnyDk0b_vjdKXJWSXuKMMMx3M=s0-d-e1-ft#http://www.alliance-francaise.co.nz/media/content_designs/1/facebook2.png"/>
                                  </a>
                                </span>
                              </td>
                              <td>
                                <span>
                                  <a href="https://twitter.com/afauckland" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://twitter.com/afauckland&amp;source=gmail&amp;ust=1498173591027000&amp;usg=AFQjCNEG82gTFNfmaHe6xjuDXODfj1-d7Q">
                                    <img src="https://ci6.googleusercontent.com/proxy/VThyt4q9vPXjQj_c7O1zwVnNETHMYV146jNtt6tKUDLvGF5b9Zojqmj69SPkP1yzDtRfwvTC_kYc-cAHX0N3Ot7xF6oeNrkhGeZ80U8gDJe4APynejT3481fg-qjDg=s0-d-e1-ft#http://www.alliance-francaise.co.nz/media/content_designs/1/twitter2.png" />
                                  </a>
                                </span>
                              </td>
                              <td>
                                <span>
                                  <a href="https://www.instagram.com/af_auckland" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.instagram.com/af_auckland&amp;source=gmail&amp;ust=1498173591027000&amp;usg=AFQjCNHo8kmD6OhrGZ_4XqkI0r5z2tuoxA">
                                    <img src="https://ci3.googleusercontent.com/proxy/ZtBmWxWyHFQWKyHd_u0UdgldihPR6kQzJre6LKtmAFmvwD56_QiNNDC7HcRr8o2g2zMNPEjfwUCw1y2x9K8Dwi6FEvLsnhQ0e5HaVIFjbu9EZZmkJrCo14jJP90i=s0-d-e1-ft#https://alliance-francaise.sslsvc.com/media/website_pages/instagram.png" />
                                  </a>
                                </span>
                              </td>
                              <td>
                                <span>
                                  <a href="http://www.linkedin.com/company/4841213" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://www.linkedin.com/company/4841213&amp;source=gmail&amp;ust=1498173591027000&amp;usg=AFQjCNH0TdXIXHzplpF3grWpdtUd0IlYjQ">
                                    <img src="https://ci4.googleusercontent.com/proxy/caHepCq-A8VJgP4hIvddajqA2H5b5YRSpeOFu1UdXjQSdWLWv5hNl58boJiXysVM9sPu2Sa7jFiubQr90EQATsC-GUvkIco-9g1SEwRLQaEanVh6ZojtY0XbRQ0=s0-d-e1-ft#https://alliance-francaise.sslsvc.com/media/website_pages/linkedin.png" />
                                  </a>
                                </span>
                              </td>
                              <td>
                                <span>
                                  <a href="https://www.alliancefr.org.nz/" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.alliancefr.org.nz/&amp;source=gmail&amp;ust=1498173591027000&amp;usg=AFQjCNHC5ZM5MbNlvTTp_ZwOChnZ4lIRgA">
                                    <img src="https://ci4.googleusercontent.com/proxy/AxDtYf7W_078gFExypDiCVHK-B-W6u4WNdAoSJ0EoU4ARX0JW7yQvlUmoD3mUIu8D5H78nak-IlsAPRcIsMVXjDQP0-l3g6CKzhtVUdZczLOYekqIsAk7Oy3qYYWhY-ainEZjw=s0-d-e1-ft#https://alliance-francaise.sslsvc.com/media/website_pages/AF-NZ_Delegation.png" />
                                  </a>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className="ad" colSpan="3">
                <a href={this.props.bannerUrl} target="_blank">
                  <img src={this.props.banner} alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan="3" style={{height: 30 + 'px'}}>
                <br />
              </td>
            </tr>
          </tbody>
        </table>  
      </div>
    );
  }
}

SignaturePanel.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  telephone: PropTypes.string,
  email: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  postcode: PropTypes.string,
  country: PropTypes.string,
  website: PropTypes.string,
  logo: PropTypes.string,
  banner: PropTypes.string, 
  bannerUrl: PropTypes.string
}
