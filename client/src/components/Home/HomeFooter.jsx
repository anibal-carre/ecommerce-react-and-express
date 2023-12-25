const HomeFooter = () => {
  return (
    <footer className="w-full h-[450px] flex justify-center bg-slate-50 py-8 border-t">
      <div className="w-full max-w-[1200px] h-full flex flex-col">
        <span className="mb-3">Formas de pagamento</span>
        <div className="flex gap-20">
          <div className="flex items-center gap-5">
            <img
              className="w-[50px] h-[50px]"
              src="https://trocafone.vtexassets.com/arquivos/pagto-credit-card.svg"
              alt="credit card"
            />
            <span className="font-[600] text-[18px] text-zinc-700">
              Cartões de crédito
            </span>
          </div>
          <div className="flex items-center gap-5">
            <img
              className="w-[50px] h-[50px]"
              src="https://trocafone.vtexassets.com/arquivos/pagto-qr.svg"
              alt="pix"
            />
            <span className="font-[600] text-[18px] text-zinc-700">
              Chave Pix
            </span>
          </div>
        </div>
        <div className="flex mt-12 gap-40">
          <div className="flex flex-col gap-4">
            <span>Buscas mais populares</span>
            <div className="flex gap-20">
              <div className="flex flex-col text-[14px]">
                <a className="text-blue-500 hover:underline" href="#">
                  iPhone X
                </a>
                <a className="text-blue-500 hover:underline" href="#">
                  iPhone 7
                </a>
                <a className="text-blue-500 hover:underline" href="#">
                  iPhone 8
                </a>
                <a className="text-blue-500 hover:underline" href="#">
                  iPhone 11
                </a>
              </div>
              <div className="flex flex-col text-[14px]">
                <a className="text-blue-500 hover:underline" href="#">
                  Galaxy S10
                </a>
                <a className="text-blue-500 hover:underline" href="#">
                  Galaxy S20
                </a>
                <a className="text-blue-500 hover:underline" href="#">
                  Galaxy S21
                </a>
                <a className="text-blue-500 hover:underline" href="#">
                  Moto G
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <span>Trocafone</span>
              <div className="flex gap-20">
                <div className="flex flex-col text-[14px]">
                  <a className="text-blue-500 hover:underline" href="#">
                    Sobre a Trocafone
                  </a>
                  <a className="text-blue-500 hover:underline" href="#">
                    Dúvidas frequentes
                  </a>
                  <a className="text-blue-500 hover:underline" href="#">
                    Política de privacidade
                  </a>
                  <a className="text-blue-500 hover:underline" href="#">
                    Como comprar na Trocafone
                  </a>
                  <a className="text-blue-500 hover:underline" href="#">
                    Troca Smart
                  </a>
                  <a className="text-blue-500 hover:underline" href="#">
                    Vendas corporativas
                  </a>
                  <a className="text-blue-500 hover:underline" href="#">
                    Imprensa
                  </a>
                </div>
                <div className="flex flex-col text-[14px]">
                  <a className="text-blue-500 hover:underline" href="#">
                    Trocafone é confiável?
                  </a>
                  <a className="text-blue-500 hover:underline" href="#">
                    Termos e condições de uso
                  </a>
                  <a className="text-blue-500 hover:underline" href="#">
                    Trocas e devoluções
                  </a>
                  <a className="text-blue-500 hover:underline" href="#">
                    Condições dos celulares
                  </a>
                  <a className="text-blue-500 hover:underline" href="#">
                    Quiosques Trocafone
                  </a>
                  <a className="text-blue-500 hover:underline" href="#">
                    Venda com a gente
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-4">
              <img
                className="w-[35px] h-[35px]"
                src="https://trocafone.vtexassets.com/_v/public/assets/v1/published/vtex.store-footer@2.27.0/public/react/ebd4bd10e66138168eb6a582e00790ea.svg"
                alt="social-icon"
              />
              <img
                className="w-[35px] h-[35px]"
                src="https://trocafone.vtexassets.com/_v/public/assets/v1/published/vtex.store-footer@2.27.0/public/react/5f12d2a63f43d3a243550ff6400b4870.svg"
                alt="social-icon"
              />
              <img
                className="w-[35px] h-[35px]"
                src="https://trocafone.vtexassets.com/_v/public/assets/v1/published/vtex.store-footer@2.27.0/public/react/20a214b4866fd6d42a6dfed070c0057b.svg"
                alt="social-icon"
              />
              <img
                className="w-[35px] h-[35px]"
                src="https://trocafone.vtexassets.com/_v/public/assets/v1/published/vtex.store-footer@2.27.0/public/react/6a61a302319c062aceb9562a66381a63.svg"
                alt="social-icon"
              />
            </div>
            <span className="text-[13px] font-[500] mt-3 mb-3">
              CADASTRE-SE
            </span>
            <span className="text-[12px] mb-3">
              Receba nossas novidades em seu e-mail
            </span>

            <div className="flex flex-col gap-3">
              <input
                className="w-[260px] h-[34px] rounded-[3px] border"
                type="text"
              />
              <button className="w-[95px] h-[32px] rounded-[3px] bg-blue-400 text-white ">
                Cadastrar
              </button>
            </div>

            <span className="w-[283px] text-[10px] mt-3">
              *Ao clicar em cadastrar você autoriza a Coleta, armazenamento e
              tratamento de dados, pela Trocafone, de acordo com a{" "}
              <span className="text-blue-500 underline cursor-pointer mr-1">
                Politica de Privacidade /
              </span>
              <span className="text-blue-500 underline cursor-pointer mr-1">
                Termos de Uso /
              </span>
              <span className="text-blue-500 underline cursor-pointer">
                Politica de Cockies.
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
