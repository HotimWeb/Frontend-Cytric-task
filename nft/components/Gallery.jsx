import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, _setIsError] = useState(false);

  const { address } = useAccount();

  useEffect(() => {
    if (!address) return;
    getGallery();
  }, [address]);

  async function getGallery() {
    setIsLoading(true);
    try {
      let res = await fetch(
        `http://localhost:8080/https://nft-minting-api.onrender.com/nft/gallery/${address}`,
      );
      res = await res.json();
      setGallery(res);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-20 max-w-[1232px] mx-auto">
      <h4 className="font-bold text-2xl text-white">Your NFT Gallery</h4>

      {(function() {
        if (isLoading)
          return (
            <div className="max-w-[576px] h-[200px] bg-[#11182780] rounded-2xl p-8 border border-[#1F2937] mx-auto mt-[106px]">
              <div className="flex h-full flex-col justify-center gap-[18px] text-white text-center">
                Please wait
              </div>
            </div>
          );

        if (isError)
          return (
            <div className="max-w-[576px] h-[200px] bg-[#11182780] rounded-2xl p-8 border border-[#1F2937] mx-auto mt-[106px]">
              <div className="flex h-full flex-col justify-center gap-[18px] text-white text-center">
                failed to connect
              </div>
            </div>
          );

        if (!gallery.length)
          return (
            <div>
              <p className="mt-3 text-[#9CA3AF]">
                No NFTs found, please mint your first one using the widget above
              </p>
            </div>
          );

        return (
          <div className="grid grid-cols-12 gap-6 mt-8">
            {gallery
              .filter(({ name }) => !!name)
              .map(({ name, description, tokenId }) => {
                return (
                  <div
                    key={tokenId}
                    className="rounded-lg overflow-clip col-span-4 border border-[#1F2937] bg-black"
                  >
                    <div className="h-[192px] bg-white w-full relative"></div>
                    <div className="p-4">
                      <h6 className="font-bold text-white">{name}</h6>
                      <p className="mt-3 text-[#9CA3AF] text-sm">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        );
      })()}
    </div>
  );
};
