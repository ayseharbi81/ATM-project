import React, { useState } from 'react';

export default function ATMApp() {
  const [bakiye, setBakiye] = useState(5000);
  const [gecmis, setGecmis] = useState([]);
  const [activeScreen, setActiveScreen] = useState('ana-menu');
  const [modal, setModal] = useState({ show: false, type: '', data: null });

  const Modal = ({ show, type, onClose, onConfirm, data }) => {
    if (!show) return null;

    const [formData, setFormData] = useState({
      miktar: '',
      alici: '',
      hesapNo: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      onConfirm(formData);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full animate-fadeIn">
          <div className={`p-6 rounded-t-2xl ${type === 'success' ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
            type === 'error' ? 'bg-gradient-to-r from-red-500 to-pink-600' :
              type === 'info' ? 'bg-gradient-to-r from-blue-500 to-indigo-600' :
                'bg-gradient-to-r from-purple-500 to-violet-600'
            }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-4xl">
                  {type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'info' ? 'ℹ️' : '💳'}
                </div>
                <h3 className="text-xl font-bold text-white">{data?.title}</h3>
              </div>
            </div>
          </div>

          <div className="p-6">
            {type === 'para-cek' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Çekmek istediğiniz tutarı girin
                  </label>
                  <input
                    type="number"
                    value={formData.miktar}
                    onChange={(e) => setFormData({ ...formData, miktar: e.target.value })}
                    placeholder="100"
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
                    required
                    min="1"
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Çek
                  </button>
                </div>
              </form>
            )}

            {type === 'para-yatir' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Yatırmak istediğiniz tutarı girin
                  </label>
                  <input
                    type="number"
                    value={formData.miktar}
                    onChange={(e) => setFormData({ ...formData, miktar: e.target.value })}
                    placeholder="100"
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
                    required
                    min="1"
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Yatır
                  </button>
                </div>
              </form>
            )}

            {type === 'havale' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Alıcı Adı
                  </label>
                  <input
                    type="text"
                    value={formData.alici}
                    onChange={(e) => setFormData({ ...formData, alici: e.target.value })}
                    placeholder="Alıcı Adı"
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Hesap Numarası
                  </label>
                  <input
                    type="text"
                    value={formData.hesapNo}
                    onChange={(e) => setFormData({ ...formData, hesapNo: e.target.value })}
                    placeholder="Hesap No"
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Tutar
                  </label>
                  <input
                    type="number"
                    value={formData.miktar}
                    onChange={(e) => setFormData({ ...formData, miktar: e.target.value })}
                    placeholder="100"
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                    required
                    min="1"
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Gönder
                  </button>
                </div>
              </form>
            )}

            {(type === 'success' || type === 'error' || type === 'info') && (
              <div className="space-y-4">
                <p className="text-gray-300 text-center text-lg">{data?.message}</p>
                <button
                  onClick={onClose}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${type === 'success' ? 'bg-green-500 hover:bg-green-600' :
                    type === 'error' ? 'bg-red-500 hover:bg-red-600' :
                      'bg-blue-500 hover:bg-blue-600'
                    } text-white`}
                >
                  Tamam
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const showModal = (type, data) => {
    setModal({ show: true, type, data });
  };

  const closeModal = () => {
    setModal({ show: false, type: '', data: null });
  };

  const paraCek = () => {
    showModal('para-cek', { title: 'Para Çekme' });
  };

  const handleParaCek = (formData) => {
    const miktar = parseInt(formData.miktar);
    if (miktar > bakiye) {
      closeModal();
      setTimeout(() => {
        showModal('error', { title: 'Hata!', message: 'Yetersiz bakiye!' });
      }, 100);
      return;
    }
    const yeniBakiye = bakiye - miktar;
    setBakiye(yeniBakiye);
    setGecmis([...gecmis, { tip: 'Para Çekme', miktar: -miktar, tarih: new Date().toLocaleString('tr-TR') }]);
    closeModal();
    setTimeout(() => {
      showModal('success', { title: 'İşlem Başarılı!', message: `${miktar} TL çekildi. Yeni bakiye: ${yeniBakiye} TL` });
    }, 100);
  };

  const paraYatir = () => {
    showModal('para-yatir', { title: 'Para Yatırma' });
  };

  const handleParaYatir = (formData) => {
    const miktar = parseInt(formData.miktar);
    const yeniBakiye = bakiye + miktar;
    setBakiye(yeniBakiye);
    setGecmis([...gecmis, { tip: 'Para Yatırma', miktar: miktar, tarih: new Date().toLocaleString('tr-TR') }]);
    closeModal();
    setTimeout(() => {
      showModal('success', { title: 'İşlem Başarılı!', message: `${miktar} TL yatırıldı. Yeni bakiye: ${yeniBakiye} TL` });
    }, 100);
  };

  const bakiyeSorgula = () => {
    showModal('info', { title: 'Bakiye Sorgulama', message: `Güncel bakiyeniz: ${bakiye.toLocaleString('tr-TR')} TL` });
  };

  const havaleYap = () => {
    showModal('havale', { title: 'Havale İşlemi' });
  };

  const handleHavale = (formData) => {
    const miktar = parseInt(formData.miktar);
    if (miktar > bakiye) {
      closeModal();
      setTimeout(() => {
        showModal('error', { title: 'Hata!', message: 'Yetersiz bakiye!' });
      }, 100);
      return;
    }
    const yeniBakiye = bakiye - miktar;
    setBakiye(yeniBakiye);
    setGecmis([...gecmis, {
      tip: 'Havale',
      miktar: -miktar,
      detay: `${formData.alici} - ${formData.hesapNo}`,
      tarih: new Date().toLocaleString('tr-TR')
    }]);
    closeModal();
    setTimeout(() => {
      showModal('success', { title: 'Havale Gönderildi!', message: `${formData.alici} adlı kişiye ${miktar} TL gönderildi.` });
    }, 100);
  };

  const handleModalConfirm = (formData) => {
    if (modal.type === 'para-cek') {
      handleParaCek(formData);
    } else if (modal.type === 'para-yatir') {
      handleParaYatir(formData);
    } else if (modal.type === 'havale') {
      handleHavale(formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center p-4">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>

      <Modal
        show={modal.show}
        type={modal.type}
        data={modal.data}
        onClose={closeModal}
        onConfirm={handleModalConfirm}
      />

      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-t-3xl p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">💳</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Modern ATM</h1>
                <p className="text-blue-100 text-sm">Hoş geldiniz</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-blue-100 text-sm">Güncel Bakiye</p>
              <p className="text-3xl font-bold text-white">{bakiye.toLocaleString('tr-TR')} ₺</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-800 rounded-b-3xl shadow-2xl p-8">
          {activeScreen === 'ana-menu' && (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={paraCek}
                className="bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-5xl mb-3">💸</div>
                <div className="text-xl font-bold">Para Çek</div>
                <div className="text-sm opacity-90 mt-1">Hızlı para çekme işlemi</div>
              </button>

              <button
                onClick={paraYatir}
                className="bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-5xl mb-3">💰</div>
                <div className="text-xl font-bold">Para Yatır</div>
                <div className="text-sm opacity-90 mt-1">Hesabınıza para yatırın</div>
              </button>

              <button
                onClick={bakiyeSorgula}
                className="bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-5xl mb-3">📊</div>
                <div className="text-xl font-bold">Bakiye Sorgula</div>
                <div className="text-sm opacity-90 mt-1">Güncel bakiyenizi görün</div>
              </button>

              <button
                onClick={havaleYap}
                className="bg-gradient-to-br from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-5xl mb-3">🔄</div>
                <div className="text-xl font-bold">Havale Yap</div>
                <div className="text-sm opacity-90 mt-1">Başka hesaba para gönderin</div>
              </button>

              <button
                onClick={() => setActiveScreen('gecmis')}
                className="bg-gradient-to-br from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl col-span-2"
              >
                <div className="text-5xl mb-3">📜</div>
                <div className="text-xl font-bold">İşlem Geçmişi</div>
                <div className="text-sm opacity-90 mt-1">Son işlemlerinizi görüntüleyin</div>
              </button>
            </div>
          )}

          {activeScreen === 'gecmis' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">İşlem Geçmişi</h2>
                <button
                  onClick={() => setActiveScreen('ana-menu')}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  ← Ana Menü
                </button>
              </div>

              {gecmis.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📭</div>
                  <p className="text-gray-400 text-lg">Henüz işlem geçmişiniz bulunmuyor</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {gecmis.slice().reverse().map((islem, index) => (
                    <div key={index} className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition-colors">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-white font-semibold">{islem.tip}</p>
                          {islem.detay && <p className="text-gray-400 text-sm">{islem.detay}</p>}
                          <p className="text-gray-500 text-xs mt-1">{islem.tarih}</p>
                        </div>
                        <div className={`text-xl font-bold ${islem.miktar > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {islem.miktar > 0 ? '+' : ''}{islem.miktar.toLocaleString('tr-TR')} ₺
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">🔒 Güvenli Bağlantı • 7/24 Hizmet</p>
        </div>
      </div>
    </div>
  );
}
