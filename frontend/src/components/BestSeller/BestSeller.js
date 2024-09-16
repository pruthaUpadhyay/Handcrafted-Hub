import './BestSeller.css'; // Assuming you have a CSS file for styles
import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { WishlistContext } from '../../Context/WishlistContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const BestSeller = () => {
    const [products, setProducts] = useState([]);
    const { wishlistItems, toggleWishlist } = useContext(WishlistContext);
    // Fetch products from the API
    useEffect(() => {
        fetch('http://127.0.0.1:8000/products/') // Replace with your API endpoint
            .then(response => response.json())
            .then(data => {
                // Filter products that have the "Best Seller" tag
                const bestSellerProducts = data.filter(product => product.isBestSeller || (product.tags && product.tags.includes("Best Seller")));
                setProducts(bestSellerProducts);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (

        <div>
            <section className="most_loved_section section is-width-wide has-gutter-enabled custom_section">
                <div className="heading_most_loved secHead page-width">
                    <h2 className="main_heading text-center">
                        {/* SVG Title */}
                        <svg id="Group_1514" data-name="Group 1514" xmlns="http://www.w3.org/2000/svg" width="278.223" height="49.155" viewBox="0 0 278.223 49.155">
                            <g id="Group_4905" data-name="Group 4905" transform="translate(257.299 25.56)">
                                <g id="Group_4808" data-name="Group 4808" transform="translate(6.636 0)">
                                    <path id="Path_4842" data-name="Path 4842" d="M-5667.7,49.064c.414.345-.1.445-.32.922s-.242.467-.458.944-.331.432-.549.909-.012.577-.381.965c-.353-.126-.693-.2-1.053-.3s-.739-.131-1.107-.206-.718-.241-1.092-.29-.747-.126-1.124-.15-.757-.017-1.136-.017c-.161,0-.47.114-.33.039a5.866,5.866,0,0,1,1.069-.454c.542-.206.537-.216,1.08-.422s.567-.151,1.109-.357.564-.156,1.107-.362.492-.321,1.034-.527.7.052,1.171-.268C-5668.18,49.152-5668.138,48.7-5667.7,49.064Z" transform="translate(5675.286 -48.929)" fill="#363636" />
                                </g>
                                <g id="Group_4809" data-name="Group 4809" transform="translate(13.52 0.51)">
                                    <path id="Path_4843" data-name="Path 4843" d="M-5520.409,67.88c-.271-.271-.554-.514-.848-.765s-.548-.542-.862-.771-.626-.463-.957-.669-.677-.4-1.023-.577-.8-.314-1.165-.47c.03-.516.279-.478.493-.955s.166-.5.378-.973.207-.479.42-.956-.06-.95.493-.916c.582.036.275.472.5.976s.179.52.4,1.024.154.53.375,1.034.29.478.509.982.242.5.462,1,.108.55.354,1.045S-5520.533,67.347-5520.409,67.88Z" transform="translate(5525.263 -60.826)" fill="#363636" />
                                </g>
                                <g id="Group_4810" data-name="Group 4810" transform="translate(6.756 5.347)">
                                    <path id="Path_4844" data-name="Path 4844" d="M-5658.516,182.293c-.412.331-.5.193-1,.385s-.514.167-1.019.359l-1.006.382c-.5.192-.506.187-1.01.379s-.515.165-1.018.357-.446.322-.95.514-.5.209-1,.4-.54.109-1.043.3-.476.259-.978.451-.534.124-1.038.316-.5.2-1,.388-.483.237-.988.429-.487.229-.989.421-.595.606-.991.258.146-.407.354-.86.252-.435.459-.888.209-.452.416-.9.23-.444.437-.9.19-.46.4-.913.024-.545.41-.88c.445-.387.524-.247,1.087-.463s.529-.295,1.092-.51.59-.154,1.15-.376c.1-.039.07-.1.167-.141a2.485,2.485,0,0,0,1.031-.667,2.293,2.293,0,0,0,.5-1.1,2.191,2.191,0,0,0-.285-1.145,2.144,2.144,0,0,0-.5-.72,2.444,2.444,0,0,0-.721-.585,2.741,2.741,0,0,0-.969-.137c.044-.487.143-.48.346-.931s.223-.443.427-.894a1.828,1.828,0,0,1,.516-.836c.343.15.59.333.916.505s.64.359.952.555.716.276,1.01.494.542.5.817.734.5.528.751.786.481.536.714.812.54.5.748.794.288.657.472.964.412.587.569.907.309.638.439.969S-5658.619,181.953-5658.516,182.293Z" transform="translate(5672.684 -173.787)" fill="#363636" />
                                </g>
                                <g id="Group_4811" data-name="Group 4811" transform="translate(0 3.947)">
                                    <path id="Path_4845" data-name="Path 4845" d="M-5807.881,142.03a1.935,1.935,0,0,1-.3.973c-.209.471-.235.461-.444.931s-.076.564-.426.955a2.552,2.552,0,0,0-.868-.471,2.424,2.424,0,0,0-.912-.179,2.667,2.667,0,0,0-.969.1,2.59,2.59,0,0,0-.842.461,2.3,2.3,0,0,0-.483.79,2.336,2.336,0,0,0-.28.878,2.549,2.549,0,0,0,.337.854c.237.547.161.576.4,1.122s.211.557.453,1.1.555.487.578,1.077c.02.483-.242.457-.443.9s-.191.45-.392.9-.271.418-.473.864-.247.427-.449.873-.183.453-.384.9.177,1.008-.34.979c-.542-.031-.187-.536-.391-1s-.3-.433-.5-.9-.083-.515-.288-.984-.2-.472-.4-.941-.284-.439-.488-.907-.165-.484-.369-.953-.214-.465-.418-.934-.289-.437-.493-.906-.158-.486-.363-.955-.112-.5-.316-.973-.313-.428-.518-.9-.072-.519-.276-.988-.212-.466-.417-.935-.532-.4-.567-.9c.331-.172.733-.368,1.074-.514s.7-.264,1.055-.384.734-.16,1.1-.253.732-.143,1.1-.209.725-.206,1.1-.244.751-.02,1.127-.031.756-.134,1.132-.117.739.189,1.113.233.735.12,1.1.192.737.12,1.1.219S-5808.236,141.906-5807.881,142.03Z" transform="translate(5819.924 -141.094)" fill="#363636" />
                                </g>
                                <g id="Group_4812" data-name="Group 4812" transform="translate(2.12 20.015)">
                                    <path id="Path_4846" data-name="Path 4846" d="M-5768.5,519.753c-.448.312-.478-.27-.993-.471s-.546-.131-1.061-.332-.544-.137-1.059-.338-.48-.278-1-.479-1.176.124-1.122-.395c.057-.561.66-.167,1.218-.382s.535-.266,1.092-.482.532-.272,1.089-.49c.146-.057.253-.19.354-.077.321.353.084.482.273.91s.214.418.4.846.086.5.384.867C-5768.575,519.352-5768.1,519.476-5768.5,519.753Z" transform="translate(5773.729 -516.264)" fill="#363636" />
                                </g>
                            </g>
                            <g id="Group_4906" data-name="Group 4906" transform="translate(0 25.56)">
                                <g id="Group_4808-2" data-name="Group 4808" transform="translate(6.545 0)">
                                    <path id="Path_4842-2" data-name="Path 4842" d="M-5675.129,49.064c-.415.345.1.445.319.922s.243.467.459.944.331.432.549.909.012.577.381.965c.353-.126.692-.2,1.052-.3s.74-.131,1.108-.206.718-.241,1.091-.29.747-.126,1.124-.15.758-.017,1.136-.017c.161,0,.47.114.33.039a5.848,5.848,0,0,0-1.069-.454c-.541-.206-.537-.216-1.08-.422s-.567-.151-1.109-.357-.564-.156-1.108-.362-.492-.321-1.034-.527-.7.052-1.172-.268C-5674.65,49.152-5674.691,48.7-5675.129,49.064Z" transform="translate(5675.285 -48.929)" fill="#363636" />
                                </g>
                                <g id="Group_4809-2" data-name="Group 4809" transform="translate(2.55 0.51)">
                                    <path id="Path_4843-2" data-name="Path 4843" d="M-5525.263,67.88c.27-.271.553-.514.846-.765s.549-.542.862-.771.625-.463.956-.669.677-.4,1.023-.577.806-.314,1.166-.47c-.03-.516-.28-.478-.493-.955s-.166-.5-.379-.973-.206-.479-.419-.956.059-.95-.493-.916c-.583.036-.276.472-.5.976s-.179.52-.4,1.024-.155.53-.375,1.034-.289.478-.509.982-.241.5-.461,1-.109.55-.354,1.045S-5525.139,67.347-5525.263,67.88Z" transform="translate(5525.263 -60.826)" fill="#363636" />
                                </g>
                                <g id="Group_4810-2" data-name="Group 4810" transform="translate(0 5.347)">
                                    <path id="Path_4844-2" data-name="Path 4844" d="M-5672.683,182.293c.412.331.495.193,1,.385s.514.167,1.017.359.5.19,1.007.382.505.187,1.009.379.516.165,1.019.357.445.322.949.514.5.209,1,.4.54.109,1.043.3.474.259.977.451.533.124,1.037.316.5.2,1.006.388.483.237.987.429.488.229.991.421.594.606.99.258-.146-.407-.353-.86-.252-.435-.458-.888-.21-.452-.416-.9-.23-.444-.437-.9-.19-.46-.4-.913-.025-.545-.411-.88c-.445-.387-.523-.247-1.086-.463s-.529-.295-1.092-.51-.59-.154-1.151-.376c-.1-.039-.069-.1-.167-.141a2.485,2.485,0,0,1-1.031-.667,2.3,2.3,0,0,1-.5-1.1,2.212,2.212,0,0,1,.287-1.145,2.139,2.139,0,0,1,.505-.72,2.442,2.442,0,0,1,.719-.585,2.749,2.749,0,0,1,.97-.137c-.045-.487-.143-.48-.346-.931s-.223-.443-.426-.894a1.827,1.827,0,0,0-.517-.836c-.342.15-.589.333-.915.505s-.641.359-.952.555-.717.276-1.011.494-.542.5-.817.734-.5.528-.752.786-.48.536-.712.812-.54.5-.748.794-.288.657-.472.964-.412.587-.569.907-.309.638-.439.969S-5672.58,181.953-5672.683,182.293Z" transform="translate(5672.683 -173.787)" fill="#363636" />
                                </g>
                                <g id="Group_4811-2" data-name="Group 4811" transform="translate(8.88 3.947)">
                                    <path id="Path_4845-2" data-name="Path 4845" d="M-5819.924,142.03a1.931,1.931,0,0,0,.3.973c.209.471.235.461.444.931s.075.564.426.955a2.543,2.543,0,0,1,.868-.471,2.422,2.422,0,0,1,.912-.179,2.663,2.663,0,0,1,.969.1,2.593,2.593,0,0,1,.843.461,2.334,2.334,0,0,1,.483.79,2.363,2.363,0,0,1,.28.878,2.57,2.57,0,0,1-.337.854c-.237.547-.161.576-.4,1.122s-.212.557-.453,1.1-.554.487-.577,1.077c-.021.483.242.457.443.9s.19.45.392.9.271.418.473.864.247.427.448.873.184.453.386.9-.179,1.008.34.979c.541-.031.187-.536.391-1s.3-.433.5-.9.083-.515.287-.984.2-.472.4-.941.283-.439.487-.907.165-.484.369-.953.215-.465.419-.934.289-.437.493-.906.158-.486.362-.955.111-.5.316-.973.313-.428.518-.9.072-.519.276-.988.211-.466.416-.935.533-.4.568-.9c-.331-.172-.733-.368-1.074-.514s-.7-.264-1.054-.384-.735-.16-1.1-.253-.731-.143-1.1-.209-.725-.206-1.1-.244-.751-.02-1.128-.031-.756-.134-1.133-.117-.738.189-1.112.233-.735.12-1.1.192-.738.12-1.1.219S-5819.569,141.906-5819.924,142.03Z" transform="translate(5819.924 -141.094)" fill="#363636" />
                                </g>
                                <g id="Group_4812-2" data-name="Group 4812" transform="translate(13.42 20.015)">
                                    <path id="Path_4846-2" data-name="Path 4846" d="M-5773.579,519.753c.448.312.478-.27.993-.471s.547-.131,1.062-.332.544-.137,1.059-.338.481-.278,1-.479,1.175.124,1.122-.395c-.057-.561-.66-.167-1.218-.382s-.535-.266-1.092-.482-.533-.272-1.089-.49c-.146-.057-.252-.19-.354-.077-.32.353-.083.482-.272.91s-.214.418-.4.846-.086.5-.384.867C-5773.5,519.352-5773.976,519.476-5773.579,519.753Z" transform="translate(5773.73 -516.264)" fill="#363636" />
                                </g>
                            </g>
                            <g id="Group_4918" data-name="Group 4918" transform="translate(33.602 0)">
                                <g id="Group_4918-2" data-name="Group 4918" transform="translate(0.601 26.46)">
                                    <path id="Path_5025" data-name="Path 5025" d="M242.78,186.95h4.177l7.776,13.186,7.606-13.186h4.177v22.188h-4.585V195.1l-4.991,8.432a3.849,3.849,0,0,1-1.036,1.22,2.062,2.062,0,0,1-1.205.365h-1.291L247.364,195.1v14.042H242.78Z" transform="translate(-242.78 -186.697)" fill="#363636" />
                                    <path id="Path_5026" data-name="Path 5026" d="M288.224,208.174a7.774,7.774,0,0,1-3.193-2.98,8.566,8.566,0,0,1-1.137-4.453v-5.705a8.568,8.568,0,0,1,1.137-4.454,7.778,7.778,0,0,1,3.193-2.98,10.172,10.172,0,0,1,4.737-1.062h3.6A10.184,10.184,0,0,1,301.3,187.6a7.777,7.777,0,0,1,3.191,2.98,8.561,8.561,0,0,1,1.138,4.454v5.705a8.56,8.56,0,0,1-1.138,4.453,7.774,7.774,0,0,1-3.191,2.98,10.177,10.177,0,0,1-4.737,1.062h-3.6A10.165,10.165,0,0,1,288.224,208.174Zm8.337-2.8a4.079,4.079,0,0,0,3.175-1.332,5,5,0,0,0,1.206-3.487v-5.325a5,5,0,0,0-1.206-3.487,4.078,4.078,0,0,0-3.175-1.331h-3.6a4.076,4.076,0,0,0-3.175,1.331,5,5,0,0,0-1.206,3.487v5.325a4.993,4.993,0,0,0,1.206,3.487,4.077,4.077,0,0,0,3.175,1.332Z" transform="translate(-256.627 -186.541)" fill="#363636" />
                                    <path id="Path_5027" data-name="Path 5027" d="M322.866,207.286a7.036,7.036,0,0,1-2.106-5.436h4.619a3.572,3.572,0,0,0,.9,2.583,3.3,3.3,0,0,0,2.5.935h3.769a4.5,4.5,0,0,0,2.428-.587,1.782,1.782,0,0,0,.934-1.569v-1.078q0-1.553-2.445-1.933l-6.248-.983a9.246,9.246,0,0,1-4.635-1.823A4.319,4.319,0,0,1,321,193.958v-1.775a4.787,4.787,0,0,1,.968-2.964,6.141,6.141,0,0,1,2.751-1.981,11.287,11.287,0,0,1,4.125-.7h3.837a8.561,8.561,0,0,1,3.906.856,6.348,6.348,0,0,1,2.632,2.393,6.738,6.738,0,0,1,.934,3.566h-4.618a2.948,2.948,0,0,0-.781-2.139,2.751,2.751,0,0,0-2.072-.808h-3.837a4.108,4.108,0,0,0-2.292.57,1.744,1.744,0,0,0-.866,1.522v.855q0,1.585,2.342,1.966l6.214,1.014a10.3,10.3,0,0,1,4.72,1.791,4.026,4.026,0,0,1,1.63,3.313v2.092a4.745,4.745,0,0,1-1,2.979,6.414,6.414,0,0,1-2.8,2.013,11.3,11.3,0,0,1-4.177.713h-3.906A8.265,8.265,0,0,1,322.866,207.286Z" transform="translate(-269.043 -186.541)" fill="#363636" />
                                    <path id="Path_5028" data-name="Path 5028" d="M359.737,190.754H352.2v-3.8h19.764v3.8h-7.539v18.384h-4.686Z" transform="translate(-279.631 -186.697)" fill="#363636" />
                                    <path id="Path_5029" data-name="Path 5029" d="M401.432,208.33a2.736,2.736,0,0,1-.9-2.139V186.95h4.686v18.384h12.9v3.8h-14.3A3.447,3.447,0,0,1,401.432,208.33Z" transform="translate(-295.909 -186.697)" fill="#363636" />
                                    <path id="Path_5030" data-name="Path 5030" d="M432.613,208.174a7.774,7.774,0,0,1-3.193-2.98,8.56,8.56,0,0,1-1.137-4.453v-5.705a8.562,8.562,0,0,1,1.137-4.454,7.777,7.777,0,0,1,3.193-2.98,10.172,10.172,0,0,1,4.737-1.062h3.6a10.18,10.18,0,0,1,4.737,1.062,7.78,7.78,0,0,1,3.192,2.98,8.569,8.569,0,0,1,1.138,4.454v5.705a8.567,8.567,0,0,1-1.138,4.453,7.777,7.777,0,0,1-3.192,2.98,10.173,10.173,0,0,1-4.737,1.062h-3.6A10.165,10.165,0,0,1,432.613,208.174Zm8.337-2.8a4.079,4.079,0,0,0,3.175-1.332,5,5,0,0,0,1.205-3.487v-5.325a5,5,0,0,0-1.205-3.487,4.079,4.079,0,0,0-3.175-1.331h-3.6a4.076,4.076,0,0,0-3.175,1.331,4.994,4.994,0,0,0-1.206,3.487v5.325a4.992,4.992,0,0,0,1.206,3.487,4.077,4.077,0,0,0,3.175,1.332Z" transform="translate(-305.256 -186.541)" fill="#363636" />
                                    <path id="Path_5031" data-name="Path 5031" d="M470.568,207.109l-8.183-20.159h4.89l6.248,16.641h.068l6.282-16.641h4.856l-9.134,22.188h-2.207A2.9,2.9,0,0,1,470.568,207.109Z" transform="translate(-316.741 -186.697)" fill="#363636" />
                                    <path id="Path_5032" data-name="Path 5032" d="M500.371,208.314a2.76,2.76,0,0,1-.917-2.155V186.95h18.133v3.8H504.14v5.134h12.429v3.8H504.14v5.642h13.447v3.8h-14.84A3.42,3.42,0,0,1,500.371,208.314Z" transform="translate(-329.225 -186.697)" fill="#363636" />
                                    <path id="Path_5033" data-name="Path 5033" d="M532.524,208.314a2.761,2.761,0,0,1-.916-2.155V186.95h11.341a11.252,11.252,0,0,1,4.771.951,7.443,7.443,0,0,1,3.192,2.694,7.2,7.2,0,0,1,1.138,4.026v6.212q0,4.09-2.275,6.2t-6.69,2.109H534.9A3.42,3.42,0,0,1,532.524,208.314Zm10.425-3.043a4.346,4.346,0,0,0,3.294-1.172,4.817,4.817,0,0,0,1.12-3.455v-5.833a3.658,3.658,0,0,0-1.256-2.9,4.838,4.838,0,0,0-3.293-1.093h-6.52V205.27Z" transform="translate(-340.055 -186.697)" fill="#363636" />
                                </g>
                                <g id="Group_4919" data-name="Group 4919" transform="translate(165.568 11.735)">
                                    <rect id="Rectangle_1946" data-name="Rectangle 1946" width="45.208" height="0.619" transform="translate(0 0)" fill="#363636" />
                                </g>
                                <g id="Group_4920" data-name="Group 4920" transform="translate(0 11.735)">
                                    <rect id="Rectangle_1947" data-name="Rectangle 1947" width="45.208" height="0.619" transform="translate(0 0)" fill="#363636" />
                                </g>
                                <g id="Group_4923" data-name="Group 4923" transform="translate(65.363 0)">
                                    <g id="Group_4921" data-name="Group 4921" transform="translate(0 0.002)">
                                        <path id="Path_5034" data-name="Path 5034" d="M373.894,161.391H372.41v-3.178c-.161.093-.25.136-.33.191a3.611,3.611,0,0,1-5.4-1.466,3.368,3.368,0,0,1,.407-3.594,3.45,3.45,0,0,1,4.613-.631c.209.125.41.261.668.425a3.364,3.364,0,0,0,.04-.336c0-.753-.007-1.506.006-2.259,0-.238-.082-.319-.339-.318q-3.32.018-6.639.017c-.436,0-.873.009-1.307-.019-.335-.021-.367.133-.367.385q.009,5.206,0,10.411v.368h-1.479v-2.919c-.135.074-.219.111-.292.161a4.524,4.524,0,0,1-6.637-1.8,3.554,3.554,0,0,1,2.746-4.788,4.593,4.593,0,0,1,3.975.884l.167.127v-2.806c-.1-.006-.208-.017-.313-.017l-7.947.013c-.436,0-.873,0-1.308-.019-.247-.011-.314.067-.313.295.01,1.669.005,3.338.005,5.007q0,2.686,0,5.373c0,.5,0,.5-.521.5a5.655,5.655,0,0,0-.588,0c-.284.03-.372-.055-.369-.332.015-1.628.007-3.256.007-4.884,0-.082-.005-.163,0-.244.012-.172-.075-.231-.254-.231q-2.388.006-4.775,0a.506.506,0,0,0-.191.03c-.352.151-.7.308-1.1.484.291.388.583.8.9,1.2a15.183,15.183,0,0,0,3.089,2.965c.189.132.231.241.047.412a6.123,6.123,0,0,0-.555.6c-.136.165-.255.194-.422.043-.859-.777-1.774-1.507-2.57-2.337a20.217,20.217,0,0,1-3.25-4.594c-.139-.261-.115-.394.178-.51.269-.106.519-.258.778-.388a.481.481,0,0,1,.1-.016,2.741,2.741,0,0,0,.312.509,2.326,2.326,0,0,0,.724.624,1.086,1.086,0,0,0,1.492-.773,4.223,4.223,0,0,0-.389-2.824c-.387-.916-.4-.909-1.45-.909-.927,0-1.854-.008-2.78,0-.274,0-.353-.084-.352-.334,0-.942-.007-.942,1.005-.942h30.815c0-.043.021-.077.009-.1a15.162,15.162,0,0,0-1.929-2.965,2.492,2.492,0,0,0-1.944-.838c-.564.007-1.127,0-1.706,0v-1.255a11.884,11.884,0,0,1,2.864.162,3.187,3.187,0,0,1,1.726,1.343c.763,1.112,1.476,2.255,2.191,3.394a.489.489,0,0,0,.485.26c2.366-.008,4.731,0,7.1-.011.294,0,.428.064.395.356a2.682,2.682,0,0,0,0,.579c.029.271-.085.347-.37.346-2.181-.009-4.361,0-6.542,0-.631,0-.631,0-.631.6q0,1.084,0,2.168c0,.1.01.193.02.381.17-.169.271-.282.386-.383a3.1,3.1,0,0,1,3.1-.741,2.867,2.867,0,0,1,2.022,2.216,4.042,4.042,0,0,1-1.6,4.174,15.586,15.586,0,0,1-1.4.977c-.265-.436-.5-.81-.712-1.2-.027-.051.087-.2.169-.264a16.579,16.579,0,0,0,1.573-1.269,2.139,2.139,0,0,0,.519-2.36,1.6,1.6,0,0,0-2.224-.87,3.4,3.4,0,0,0-1.794,1.857,1.093,1.093,0,0,0-.054.42q0,2.533,0,5.068Zm-27.674-11.149c.217.729.446,1.415.621,2.113a3.738,3.738,0,0,1-.15,2.192h.381c1.145,0,2.289-.007,3.433,0,.289,0,.4-.063.395-.356-.017-1.2-.015-2.4,0-3.6,0-.272-.07-.375-.381-.371-1.34.015-2.681.006-4.022.007C346.4,150.231,346.3,150.239,346.221,150.243Zm26.2,5.138c0-.765.013-.778-.424-1.117a5.054,5.054,0,0,0-.887-.564,2.245,2.245,0,0,0-2.655.246,2.272,2.272,0,0,0-.318,2.828,2.121,2.121,0,0,0,2.944.74A2.5,2.5,0,0,0,372.421,155.38Zm-15-1.573a2.419,2.419,0,0,0-.3,3.452,2.871,2.871,0,0,0,3.2.642Zm1.11-.573c.075.139.1.2.133.245q1.251,1.766,2.5,3.53c.243.342.291.344.576.02.034-.039.063-.083.1-.123a2.891,2.891,0,0,0,.48-2.182.316.316,0,0,0-.1-.184,4.19,4.19,0,0,0-2.625-1.348A8.33,8.33,0,0,0,358.529,153.235Z" transform="translate(-340.429 -143.8)" fill="#363636" />
                                    </g>
                                    <g id="Group_4922" data-name="Group 4922" transform="translate(45.399)">
                                        <path id="Path_5035" data-name="Path 5035" d="M435.172,148.959a16.094,16.094,0,0,0-2.1-3.168,2.387,2.387,0,0,0-1.768-.731H429.52v-1.25a9.665,9.665,0,0,1,3.038.217,3.253,3.253,0,0,1,1.563,1.3c.752,1.106,1.462,2.238,2.171,3.369a.481.481,0,0,0,.479.267c1.11-.012,2.221,0,3.361,0v1.268h-3.307c.152.3.275.529.391.764a5.183,5.183,0,0,1,.586,2.354,2.979,2.979,0,0,1-2.77,3,.659.659,0,0,0-.127.046,1.859,1.859,0,0,0,.12.235,15.389,15.389,0,0,0,3.641,3.723c.262.188.273.311.04.514a4.482,4.482,0,0,0-.513.552.236.236,0,0,1-.4.032c-.773-.685-1.6-1.328-2.314-2.06A20.878,20.878,0,0,1,432,154.578c-.126-.235-.117-.362.155-.47a6.776,6.776,0,0,0,.69-.346.219.219,0,0,1,.341.1,4.414,4.414,0,0,0,.367.54,1.442,1.442,0,0,0,2.517-.235,2.6,2.6,0,0,0-.036-2.42,14.3,14.3,0,0,0-.757-1.35.425.425,0,0,0-.309-.16c-1.243-.009-2.486,0-3.728,0-.5,0-1,.013-1.5-.011-.322-.015-.4.095-.4.383q.014,5.2.006,10.41v.384c-.459,0-.871.007-1.282-.007-.065,0-.153-.1-.18-.163a.759.759,0,0,1-.011-.272c0-3.46,0-6.92.007-10.379,0-.287-.086-.362-.384-.355-.828.017-1.657.019-2.484,0-.3-.007-.385.079-.385.36q.015,5.189.007,10.379c0,.44,0,.44-.457.44-.24,0-.481-.014-.719,0s-.319-.076-.317-.3c.009-1.079,0-2.157,0-3.236v-.356a12.96,12.96,0,0,1-1.206.561,4.944,4.944,0,0,1-3.955-.063,2.692,2.692,0,0,1-.613-.4.353.353,0,0,0-.5-.049,4.979,4.979,0,0,1-2.672.677,3.079,3.079,0,0,1-3.288-3.064c-.013-1.516-.014-3.032-.021-4.548,0-.4,0-.4-.438-.4s-.851-.006-1.275,0c-.21,0-.3-.068-.286-.268a4.519,4.519,0,0,0,0-.671c-.026-.278.1-.34.378-.339,2.246.009,4.492,0,6.737,0h19.171Zm-22.822,3.935h.017c0,.813-.029,1.629.008,2.441a1.559,1.559,0,0,0,1.377,1.592,3.766,3.766,0,0,0,2.418-.448c.163-.085.15-.188.1-.332-.145-.393-.292-.787-.4-1.19-.172-.637-.158-.64.529-.828a1.807,1.807,0,0,0,1.5-1.951,3.675,3.675,0,0,0-.721-1.778.587.587,0,0,0-.413-.163c-1.362-.012-2.724,0-4.087-.012-.269,0-.329.086-.325.319C412.358,151.326,412.35,152.11,412.35,152.894Zm6.322-2.664c.065.133.1.2.135.275a4.061,4.061,0,0,1,.523,2.148,2.636,2.636,0,0,1-1.734,2.362c-.084.036-.19.156-.182.227a2.443,2.443,0,0,0,1.655,1.816,3.966,3.966,0,0,0,3.861-1.085.74.74,0,0,0,.2-.485c.015-1.648,0-3.3.015-4.944,0-.267-.1-.322-.363-.319-.915.012-1.83,0-2.746,0Z" transform="translate(-408.882 -143.798)" fill="#363636" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </h2>
                </div>
                <section id="product1" className="section-p1">
                    <div className="pro-container">
                        {products.map(product => {
                            // Check if the product is in the wishlist
                            const isInWishlist = wishlistItems.some(item => item.product_id === product._id);

                            return (
                                <div className="pro" key={product._id}>
                                    <Link to={`/products/${product.slug}`}>
                                        <img src={process.env.PUBLIC_URL + product.images[0]} alt={product.name} />
                                    </Link>
                                    <div className="des">
                                        <span>{product.brand}</span>
                                        <h5>{product.name}</h5>
                                        <div className="star">
                                            {[...Array(5)].map((_, index) => (
                                                <i
                                                    key={index}
                                                    className={index < product.rating ? 'bx bxs-star' : 'bx bx-star'}
                                                />
                                            ))}
                                        </div>
                                        <div className="price-wishlist">
                                            <h4>₹{product.price}</h4>
                                            <button
                                                className={`wishlist-icon ${isInWishlist ? 'in-wishlist' : ''}`}
                                                onClick={() => toggleWishlist(product._id, product.name)}
                                                aria-label={isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                                            >
                                                {isInWishlist ? <FaHeart /> : <FaRegHeart />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </section>
        </div>
    );
};

export default BestSeller;
