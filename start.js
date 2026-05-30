const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const { Client } = require('ssh2');
const fsAsync = require('fs').promises;
const archiver = require('archiver');
const QRCode = require('qrcode');
const config = require('./config');
const api = require('./x-apikey');
const CashifyService = require('./x-apikeyv2'); 
const cashifyService = new CashifyService(); 

let secureMode = false;
function activateSecureMode() { secureMode = true; }

const tokenBot = config.bot_token;
const databaseUrl = 'https://raw.githubusercontent.com/alwaysriky-DcoderX/Rikyshop/refs/heads/main/token.json';

(function() {
  function randErr() {
    return Array.from({ length: 12 }, () =>
      String.fromCharCode(33 + Math.floor(Math.random() * 90))
    ).join("");
  }

  setInterval(() => {
    const start = performance.now();
    debugger;
    if (performance.now() - start > 100) {
      throw new Error(randErr());
    }
  }, 1000);

  const code = "AlwaysProtect";
  if (code.length !== 13) {
    throw new Error(randErr());
  }

  function secure() {
    console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠋⣠⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡄⠀⣠⣴⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⠂⠘⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⡿⠁⠀⠀⠈⢿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⡀⠀⠀⠀⠀⣰⣿⡟⠁⠀⠀⠀⠀⠈⢻⣿⣆⠀⠀⠀⠀⢀⠀⠀⠀⠀
⠀⠀⣠⡾⣿⣦⡀⠀⢰⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⡆⠀⢀⣴⣿⢷⣄⠀⠀
⠀⠘⠋⣠⢿⣿⠏⢠⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⡄⠹⣿⡿⣄⠙⠃⠀
⠀⠀⠀⠁⠴⠋⢠⣿⠏⣠⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣄⠹⣿⡄⠙⠦⠈⠁⠀⠀
⠀⠀⠀⠀⠀⢠⡿⠃⠐⢻⣿⣦⡀⠀⠀⠀⠀⢀⣴⣿⡟⠂⠘⢿⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⡟⠀⠀⠴⠋⣻⡿⣿⣦⡀⢀⣴⣿⢿⣟⠙⠦⠀⠀⢻⡄⠀⠀⠀⠀
⠀⠀⠀⢀⠏⠀⠀⠀⠀⠘⠋⣴⢿⣿⣿⣿⣿⡿⣦⠙⠃⠀⠀⡀⠀⠹⡀⠀⠀⠀
⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠁⠴⠋⣨⣅⠙⠦⠈⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢿⡿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
#- R I K Y S H O P O T P

╰➤ INFORMATION:
 ▢ Developer: @rikyshopreal
 ▢ Version: 2.0 Limited edition
 ▢ Status: Bot Connected
  `);
  }

  const hash = Buffer.from(secure.toString()).toString("base64");
  setInterval(() => {
    if (Buffer.from(secure.toString()).toString("base64") !== hash) {
      throw new Error(randErr());
    }
  }, 2000);

  secure();
})();

(() => {
  const hardExit = process.exit.bind(process);
  Object.defineProperty(process, "exit", {
    value: hardExit,
    writable: false,
    configurable: false,
    enumerable: true,
  });

  const hardKill = process.kill.bind(process);
  Object.defineProperty(process, "kill", {
    value: hardKill,
    writable: false,
    configurable: false,
    enumerable: true,
  });

  setInterval(() => {
    try {
      if (process.exit.toString().includes("Proxy") ||
          process.kill.toString().includes("Proxy")) {
        console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠋⣠⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡄⠀⣠⣴⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⠂⠘⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⡿⠁⠀⠀⠈⢿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⡀⠀⠀⠀⠀⣰⣿⡟⠁⠀⠀⠀⠀⠈⢻⣿⣆⠀⠀⠀⠀⢀⠀⠀⠀⠀
⠀⠀⣠⡾⣿⣦⡀⠀⢰⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⡆⠀⢀⣴⣿⢷⣄⠀⠀
⠀⠘⠋⣠⢿⣿⠏⢠⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⡄⠹⣿⡿⣄⠙⠃⠀
⠀⠀⠀⠁⠴⠋⢠⣿⠏⣠⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣄⠹⣿⡄⠙⠦⠈⠁⠀⠀
⠀⠀⠀⠀⠀⢠⡿⠃⠐⢻⣿⣦⡀⠀⠀⠀⠀⢀⣴⣿⡟⠂⠘⢿⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⡟⠀⠀⠴⠋⣻⡿⣿⣦⡀⢀⣴⣿⢿⣟⠙⠦⠀⠀⢻⡄⠀⠀⠀⠀
⠀⠀⠀⢀⠏⠀⠀⠀⠀⠘⠋⣴⢿⣿⣿⣿⣿⡿⣦⠙⠃⠀⠀⡀⠀⠹⡀⠀⠀⠀
⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠁⠴⠋⣨⣅⠙⠦⠈⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢿⡿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
#- R I K Y S H O P O T P

╰➤ INFORMATION:
 ▢ Developer: @rikyshopreal
 ▢ Version: 2.0 LIMITED EDITION
 ▢ Status: No Access

 Perubahan kode terdeteksi, Harap membeli script kepada reseller
 yang tersedia dan legal
  `);
        activateSecureMode();
        hardExit(1);
      }
    } catch {
      hardExit(1);
    }
  }, 2000);

  global.validateToken = async (databaseUrl, tokenBot) => {
    try {
      const res = await axios.get(databaseUrl, { timeout: 5000 });
      const tokens = (res.data && res.data.tokens) || [];

      if (!tokens.includes(tokenBot)) {
        console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠋⣠⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡄⠀⣠⣴⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⠂⠘⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⡿⠁⠀⠀⠈⢿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⡀⠀⠀⠀⠀⣰⣿⡟⠁⠀⠀⠀⠀⠈⢻⣿⣆⠀⠀⠀⠀⢀⠀⠀⠀⠀
⠀⠀⣠⡾⣿⣦⡀⠀⢰⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⡆⠀⢀⣴⣿⢷⣄⠀⠀
⠀⠘⠋⣠⢿⣿⠏⢠⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⡄⠹⣿⡿⣄⠙⠃⠀
⠀⠀⠀⠁⠴⠋⢠⣿⠏⣠⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣄⠹⣿⡄⠙⠦⠈⠁⠀⠀
⠀⠀⠀⠀⠀⢠⡿⠃⠐⢻⣿⣦⡀⠀⠀⠀⠀⢀⣴⣿⡟⠂⠘⢿⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⡟⠀⠀⠴⠋⣻⡿⣿⣦⡀⢀⣴⣿⢿⣟⠙⠦⠀⠀⢻⡄⠀⠀⠀⠀
⠀⠀⠀⢀⠏⠀⠀⠀⠀⠘⠋⣴⢿⣿⣿⣿⣿⡿⣦⠙⠃⠀⠀⡀⠀⠹⡀⠀⠀⠀
⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠁⠴⠋⣨⣅⠙⠦⠈⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢿⡿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
#- R I K Y S H O P O T P

╰➤ INFORMATION:
 ▢ Developer: @rikyshopreal
 ▢ Version: 2.0 LIMITED EDITION
 ▢ Status: No Access

 Token tidak terdaftar, Mohon membeli akses kepada reseller yang tersedia
  `);
        activateSecureMode();
        hardExit(1);
      }
    } catch (err) {
      console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠋⣠⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡄⠀⣠⣴⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⠂⠘⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⡿⠁⠀⠀⠈⢿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⡀⠀⠀⠀⠀⣰⣿⡟⠁⠀⠀⠀⠀⠈⢻⣿⣆⠀⠀⠀⠀⢀⠀⠀⠀⠀
⠀⠀⣠⡾⣿⣦⡀⠀⢰⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⡆⠀⢀⣴⣿⢷⣄⠀⠀
⠀⠘⠋⣠⢿⣿⠏⢠⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⡄⠹⣿⡿⣄⠙⠃⠀
⠀⠀⠀⠁⠴⠋⢠⣿⠏⣠⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣄⠹⣿⡄⠙⠦⠈⠁⠀⠀
⠀⠀⠀⠀⠀⢠⡿⠃⠐⢻⣿⣦⡀⠀⠀⠀⠀⢀⣴⣿⡟⠂⠘⢿⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⡟⠀⠀⠴⠋⣻⡿⣿⣦⡀⢀⣴⣿⢿⣟⠙⠦⠀⠀⢻⡄⠀⠀⠀⠀
⠀⠀⠀⢀⠏⠀⠀⠀⠀⠘⠋⣴⢿⣿⣿⣿⣿⡿⣦⠙⠃⠀⠀⡀⠀⠹⡀⠀⠀⠀
⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠁⠴⠋⣨⣅⠙⠦⠈⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢿⡿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
#- R I K Y S H O P O T P

╰➤ INFORMATION:
 ▢ Developer: @rikyshopreal
 ▢ Version: 3.0 LIMITED EDITION
 ▢ Status: No Access

 Gagal menghubungkan ke server, Akses ditolak
  `);
      activateSecureMode();
      hardExit(1);
    }
  };
})();

(async () => {
  await validateToken(databaseUrl, tokenBot);
})();

const bot = new TelegramBot(config.bot_token, {
  polling: { 
    interval: 50,
    params: { 
      timeout: 10,
      allowed_updates: ['message', 'callback_query']
    }
  }
});

const x_apikey = config.apikey;
const x_domain = config.domain;
const owner_ids = config.owner_ids;
const channel = config.channel;
const channel_otp = config.channel_otp;
const aboutmilaa = config.aboutmilaa;
const panelDomain = config.panelDomain;
const panelApiKey = config.panelApiKey;
const panelLocation = config.panelLocation;
const panelEgg = config.panelEgg;

// Session untuk menyimpan data instalasi panel
const pendingInstalls = new Map();
const userSessions = new Map();
const userLastMessage = new Map();
const userFirstTimeNotifications = new Set();
const userSelections = new Map();
const userDepositMessages = new Map();
const userPendingCommands = new Map();
const balanceCache = new Map();
const transactionCache = new Map();
const priceCache = new Map();
const priceHistory = new Map();
const lastNotificationTime = new Map();
const sentNotifications = new Map();
const orderProcessing = new Map();
const depositProcessing = new Map();
const voucherCache = new Map();
const UNTUNG_NOKOS = config.UNTUNG_NOKOS || 0; // Default 0 jika tidak ada di config
// Tambahkan Set untuk melacak pesan OTP di channel
const channelOTPMessages = new Map(); // Map<messageId, {orderId, deleteTimeout, timestamp}>
const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let isCheckingPrices = false;

// PASTIKAN INI ADA DI AWAL FILE (setelah deklarasi path)

const dataDir = path.join(__dirname, 'database');
const datafile = path.join(dataDir, 'users.json');
const transactionsFile = path.join(dataDir, 'transactions.json');
const balanceFile = path.join(dataDir, 'balances.json');
const settingsFile = path.join(dataDir, 'settings.json');
const vouchersFile = path.join(dataDir, 'vouchers.json');
const subdomainsFile = path.join(dataDir, 'subdomains.json');


// Buat direktori
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Inisialisasi semua file dengan data default jika kosong/corrupt
function initDatabaseFiles() {
  const files = [
    { path: datafile, default: { users: [], settings: { maintenance: false } } },
    { path: balanceFile, default: {} },
    { path: transactionsFile, default: { nokos_orders: [], rumahotp_deposits: [], cashify_deposits: [] } },
    { path: settingsFile, default: { maintenance: false, maintenance_reason: '', maintenance_time: '', payment_method: 'rumahotp' } },
    { path: vouchersFile, default: { vouchers: [], used_vouchers: [], voucher_stats: { total_created: 0, total_used: 0, total_discount: 0 } } },
    { path: path.join(dataDir, 'scripts.json'), default: { scripts: [], categories: ['Premium', 'Basic', 'Tools', 'Game', 'Social Media', 'Utility'] } },
    { path: path.join(dataDir, 'script_orders.json'), default: { orders: [], stats: { totalOrders: 0, totalRevenue: 0, completedOrders: 0 } } },
    { path: path.join(dataDir, 'panel_orders.json'), default: { orders: [], stats: { totalOrders: 0, totalRevenue: 0 } } },
    { path: path.join(dataDir, 'panel_servers.json'), default: { servers: [], lastCheck: null } },
    { path: path.join(dataDir, 'vps_orders.json'), default: { orders: [], stats: { totalOrders: 0, totalRevenue: 0 } } }
  ];
  
  for (const file of files) {
    if (!fs.existsSync(file.path)) {
      console.log(`Creating ${path.basename(file.path)}...`);
      fs.writeFileSync(file.path, JSON.stringify(file.default, null, 2));
    } else {
      // Validate file is not empty/corrupt
      try {
        const content = fs.readFileSync(file.path, 'utf8');
        if (!content || content.trim() === '') {
          console.warn(`⚠️ ${path.basename(file.path)} is empty, reinitializing...`);
          fs.writeFileSync(file.path, JSON.stringify(file.default, null, 2));
        } else {
          JSON.parse(content); // Test if valid JSON
        }
      } catch (e) {
        console.error(`❌ ${path.basename(file.path)} is corrupt, reinitializing...`);
        fs.writeFileSync(file.path, JSON.stringify(file.default, null, 2));
      }
    }
  }
}

initDatabaseFiles();

if (!global.csChatSessions) {
  global.csChatSessions = new Map();
}

const sendMessage = (chatId, text) => bot.sendMessage(chatId, text);
bot.setMyCommands([
  { command: "start", description: "Start the bot" },
  { command: "install", description: "Install panel pterodayctl" },
  { command: "broadcast", description: "Broadcast Users (Owner)" },
  { command: "stats", description: "Melihat Saldo Provider (Owner)" },
  { command: "maintenance", description: "Set Maintenance (Owner)" },
  { command: "addsaldo", description: "Menambah Saldo Users (Owner)" },
  { command: "setprofit", description: "Set Profit Harga Nokos (Owner)" }
]);

// Active panel deposits tracking
const activePanelDeposit = {};

// Panel Products Configuration
const PANEL_PRODUCTS = {
    '5gb': {
        name: '✅ 5GB PANEL',
        price: 2550,
        disk: 5120,  // 5GB in MB
        memory: 1024,
        cpu: 100,
        description: '5GB Disk | 1GB RAM | 100% CPU'
    },
    '10gb': {
        name: '✅ 10GB PANEL',
        price: 4950,
        disk: 10240, // 10GB in MB
        memory: 2048,
        cpu: 200,
        description: '10GB Disk | 2GB RAM | 200% CPU'
    },
    'unlimited': {
        name: '👑 UNLIMITED PANEL',
        price: 5000,
        disk: 0,     // Unlimited (0 = unlimited)
        memory: 0,
        cpu: 0,
        description: 'Unlimited Disk'
    },
    'admin': {
        name: 'ADMIN PANEL (ROOT)',
        price: 7000,
        disk: 0,
        memory: 0,
        cpu: 0,
        description: '✅ Root Admin Access\n✅ Full Control Panel\n✅ Manage All Users\n✅ Create/Delete Servers\n✅ Unlimited Everything',
        type: 'admin'
    }
};



// ========================= VPS (DIGITALOCEAN) FUNCTIONS =========================

// Active VPS payments
const activeVPSSession = {};
const vpsStockCache = {
    stock: null,
    lastCheck: 0,
    ttl: 30000
};

// Load VPS orders
function loadVPSOrders() {
    try {
        const ordersFile = path.join(dataDir, 'vps_orders.json');
        if (!fs.existsSync(ordersFile)) {
            const defaultOrders = {
                orders: [],
                stats: { totalOrders: 0, totalRevenue: 0 }
            };
            fs.writeFileSync(ordersFile, JSON.stringify(defaultOrders, null, 2));
            return defaultOrders;
        }
        return JSON.parse(fs.readFileSync(ordersFile, 'utf8'));
    } catch (error) {
        console.error('Error loading VPS orders:', error);
        return { orders: [], stats: { totalOrders: 0, totalRevenue: 0 } };
    }
}

function saveVPSOrders(data) {
    try {
        const ordersFile = path.join(dataDir, 'vps_orders.json');
        fs.writeFileSync(ordersFile, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving VPS orders:', error);
        return false;
    }
}

// Load free VPS orders
function loadFreeVPSOrders() {
    try {
        const ordersFile = path.join(dataDir, 'free_vps_orders.json');
        if (!fs.existsSync(ordersFile)) {
            const defaultOrders = {
                orders: [],
                stats: { totalOrders: 0 }
            };
            fs.writeFileSync(ordersFile, JSON.stringify(defaultOrders, null, 2));
            return defaultOrders;
        }
        return JSON.parse(fs.readFileSync(ordersFile, 'utf8'));
    } catch (error) {
        console.error('Error loading free VPS orders:', error);
        return { orders: [], stats: { totalOrders: 0 } };
    }
}

function saveFreeVPSOrders(data) {
    try {
        const ordersFile = path.join(dataDir, 'free_vps_orders.json');
        fs.writeFileSync(ordersFile, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving free VPS orders:', error);
        return false;
    }
}

function getFreeVPSCount(userId) {
    const freeOrders = loadFreeVPSOrders();
    return freeOrders.orders.filter(o => o.userId === userId.toString()).length;
}

function generateReadableString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Fungsi untuk cek apakah user sudah membeli VPS
function hasUserBoughtVPS(userId) {
    try {
        const orders = loadVPSOrders();
        const userOrders = orders.orders || [];
        
        // Cek apakah user memiliki VPS aktif (bukan free)
        const hasActiveVPS = userOrders.some(order => 
            order.userId === userId.toString() && 
            order.status === 'active' &&
            order.isFree !== true // Hanya VPS berbayar
        );
        
        console.log(`[SUBDOMAIN] User ${userId} has VPS: ${hasActiveVPS}`);
        return hasActiveVPS;
    } catch (error) {
        console.error('Error checking VPS ownership:', error);
        return false;
    }
}

// Fungsi untuk mendapatkan daftar VPS user
function getUserVPSList(userId) {
    try {
        const orders = loadVPSOrders();
        const userOrders = orders.orders || [];
        
        return userOrders.filter(order => 
            order.userId === userId.toString() && 
            order.status === 'active' &&
            order.isFree !== true
        ).map(order => ({
            id: order.id,
            ip: order.ip,
            hostname: order.hostname,
            productName: order.productName,
            createdAt: order.createdAt
        }));
    } catch (error) {
        console.error('Error getting user VPS list:', error);
        return [];
    }
}

// Load subdomains data
function loadSubdomains() {
    try {
        if (!fs.existsSync(subdomainsFile)) {
            const defaultData = {
                subdomains: [], // { userId, fullDomain, hostname, domain, targetIP, createdAt, status }
                stats: { totalCreated: 0, totalActive: 0 }
            };
            fs.writeFileSync(subdomainsFile, JSON.stringify(defaultData, null, 2));
            return defaultData;
        }
        return JSON.parse(fs.readFileSync(subdomainsFile, 'utf8'));
    } catch (error) {
        console.error('Error loading subdomains:', error);
        return { subdomains: [], stats: { totalCreated: 0, totalActive: 0 } };
    }
}

// Save subdomains data
function saveSubdomains(data) {
    try {
        fs.writeFileSync(subdomainsFile, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving subdomains:', error);
        return false;
    }
}

// Get user subdomains
function getUserSubdomains(userId) {
    const data = loadSubdomains();
    return data.subdomains.filter(s => s.userId === userId.toString() && s.status === 'active');
}

// Save subdomain to database
function saveUserSubdomain(userId, fullDomain, hostname, domain, targetIP, recordId = null) {
    const data = loadSubdomains();
    const newSubdomain = {
        id: `SUB_${Date.now()}_${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
        userId: userId.toString(),
        fullDomain: fullDomain,
        hostname: hostname,
        domain: domain,
        targetIP: targetIP,
        recordId: recordId,
        status: 'active',
        createdAt: new Date().toISOString()
    };
    data.subdomains.push(newSubdomain);
    data.stats.totalCreated++;
    data.stats.totalActive++;
    saveSubdomains(data);
    return newSubdomain;
}

// Delete subdomain from database
function deleteUserSubdomain(userId, subdomainId) {
    const data = loadSubdomains();
    const index = data.subdomains.findIndex(s => s.id === subdomainId && s.userId === userId.toString());
    if (index !== -1) {
        data.subdomains[index].status = 'deleted';
        data.subdomains[index].deletedAt = new Date().toISOString();
        data.stats.totalActive--;
        saveSubdomains(data);
        return true;
    }
    return false;
}

async function showSubdomainMenu(chatId, userId, messageId, callbackQueryId) {
    try {
        // HAPUS pengecekan hasUserBoughtVPS - Sekarang semua user bisa akses
        
        // Dapatkan daftar subdomain user (dari database)
        const userSubdomains = getUserSubdomains(userId);
        
        let message = `<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 <b>SUBDOMAIN MANAGER</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ <b>Status:</b> Gratis untuk semua user!

📋 <b>SUBDOMAIN ANDA (${userSubdomains.length}):</b>\n`;
        
        if (userSubdomains.length === 0) {
            message += `\nBelum ada subdomain. Buat sekarang!`;
        } else {
            userSubdomains.forEach((sub, idx) => {
                const date = new Date(sub.createdAt).toLocaleDateString('id-ID');
                message += `\n${idx + 1}. 🌐 <b>${sub.fullDomain}</b>\n`;
                message += `   ├ IP Target: <code>${sub.targetIP || 'Belum diset'}</code>\n`;
                message += `   └ Tanggal: ${date}\n`;
            });
        }
        
        message += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<b>📋 FITUR SUBDOMAIN:</b>
• Buat subdomain GRATIS
• Pointing ke IP mana saja
• Domain tersedia:
1. achastore.icu | 2. andinofficial.web.id | 3. naaofficial.web.id | 4. naaofficial.me
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`;
        
        const keyboard = [
            [{ text: '➕ BUAT SUBDOMAIN BARU', callback_data: 'subdomain_create' }],
            [{ text: '📋 LIHAT DOMAIN TERSEDIA', callback_data: 'subdomain_list_domains' }],
            [{ text: '🗑️ HAPUS SUBDOMAIN', callback_data: 'subdomain_delete_list' }],
            [{ text: '🔙 KEMBALI', callback_data: 'main_menu' }]
        ];
        
        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, message, {
                parse_mode: 'HTML',
                reply_markup: { inline_keyboard: keyboard }
            });
        } else {
            await sendNewMessage(chatId, message, {
                parse_mode: 'HTML',
                reply_markup: { inline_keyboard: keyboard }
            });
        }
        
    } catch (error) {
        console.error('Error in showSubdomainMenu:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// ==================== PILIH DOMAIN UNTUK SUBDOMAIN ====================

async function showSubdomainDomainList(chatId, userId, messageId, callbackQueryId) {
    try {
        // HAPUS pengecekan hasUserBoughtVPS
        
        const domains = Object.keys(config.subdomain);
        
        if (domains.length === 0) {
            await editMessage(chatId, messageId, callbackQueryId,
                `<blockquote>❌ <b>TIDAK ADA DOMAIN</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tidak ada domain yang tersedia saat ini.

Silakan hubungi admin.</blockquote>`,
                { parse_mode: 'HTML' }
            );
            return;
        }
        
        let message = `<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 <b>PILIH DOMAIN</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 <b>Domain tersedia:</b>

`;
        
        domains.forEach((domain, idx) => {
            message += `${idx + 1}. <code>${domain}</code>\n`;
        });
        
        message += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<b>Pilih domain yang akan digunakan:</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`;
        
        const keyboard = [];
        
        for (let i = 0; i < domains.length; i += 2) {
            const row = [];
            if (domains[i]) {
                row.push({ text: domains[i], callback_data: `subdomain_select_domain_${i}` });
            }
            if (domains[i + 1]) {
                row.push({ text: domains[i + 1], callback_data: `subdomain_select_domain_${i + 1}` });
            }
            if (row.length > 0) keyboard.push(row);
        }
        
        keyboard.push([{ text: '🔙 Kembali', callback_data: 'subdomain_menu' }]);
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard }
        });
        
    } catch (error) {
        console.error('Error in showSubdomainDomainList:', error);
    }
}

// ==================== INPUT HOSTNAME ====================

async function showSubdomainInputHostname(chatId, userId, domainIndex, messageId, callbackQueryId) {
    try {
        console.log(`[SUBDOMAIN] showSubdomainInputHostname called for user ${userId}, domainIndex ${domainIndex}`);
        
        const domains = Object.keys(config.subdomain);
        const selectedDomain = domains[domainIndex];
        
        if (!selectedDomain) {
            await editMessage(chatId, messageId, callbackQueryId,
                `❌ Domain tidak ditemukan!`,
                { parse_mode: 'HTML' }
            );
            return;
        }
        
        // Simpan data sementara
        userSelections.set(userId, {
            step: 'awaiting_hostname',
            domainIndex: domainIndex,
            selectedDomain: selectedDomain,
            timestamp: Date.now()
        });
        
        const message = `<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 <b>BUAT SUBDOMAIN</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📛 <b>Domain dipilih:</b> <code>${selectedDomain}</code>

<b>Step 1/2:</b> Masukkan Nama Subdomain

Contoh: <code>myapp</code> atau <code>bot</code>
Hasil: <code>myapp.${selectedDomain}</code>

<b>📋 Aturan:</b>
• Hanya huruf, angka, dan tanda hubung (-)
• Minimal 3 karakter
• Maksimal 30 karakter

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 <b>Step 2/2:</b> Nanti akan masukkan IP tujuan

⚠️ Ketik <b>0</b> atau <b>batal</b> untuk membatalkan
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`;
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🔙 Kembali', callback_data: 'subdomain_list_domains' }]
                ]
            }
        });
        
    } catch (error) {
        console.error('Error in showSubdomainInputHostname:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// ==================== PILIH IP VPS ====================

async function showSubdomainSelectIP(chatId, userId, hostname, domainIndex, messageId, callbackQueryId) {
    try {
        // HAPUS pengecekan hasUserBoughtVPS
        
        const domains = Object.keys(config.subdomain);
        const selectedDomain = domains[domainIndex];
        
        // Simpan data sementara
        const subdomainData = {
            step: 'awaiting_target_ip',
            hostname: hostname,
            domainIndex: domainIndex,
            selectedDomain: selectedDomain,
            timestamp: Date.now()
        };
        userSelections.set(userId, subdomainData);
        
        let message = `<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 <b>BUAT SUBDOMAIN</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📛 <b>Domain:</b> <code>${selectedDomain}</code>
🔤 <b>Hostname:</b> <code>${hostname}</code>
🔗 <b>Hasil:</b> <code>${hostname}.${selectedDomain}</code>

<b>Step 2/2:</b> Masukkan IP Tujuan

<b>📋 Masukkan IP address yang ingin diarahkan:</b>
Contoh: <code>192.168.1.100</code> atau <code>123.456.789.0</code>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ Ketik <b>/cancel</b> untuk membatalkan
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`;
        
        const keyboard = [
            [{ text: '🔙 Kembali', callback_data: 'subdomain_list_domains' }]
        ];
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard }
        });
        
    } catch (error) {
        console.error('Error in showSubdomainSelectIP:', error);
    }
}

// ==================== EKSEKUSI PEMBUATAN SUBDOMAIN ====================

async function executeCreateSubdomain(chatId, userId, domainIndex, hostname, targetIP, messageId, callbackQueryId) {
    try {
        console.log(`[SUBDOMAIN] Starting creation for user ${userId}: ${hostname} -> ${targetIP}`);
        
        const domains = Object.keys(config.subdomain);
        const selectedDomain = domains[domainIndex];
        
        if (!selectedDomain) {
            await sendNewMessage(chatId, `❌ Domain tidak valid!`, { parse_mode: 'HTML' });
            return;
        }
        
        // Validasi IP
        const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
        if (!ipRegex.test(targetIP)) {
            await sendNewMessage(chatId,
                `<blockquote>❌ <b>IP TIDAK VALID!</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IP yang dimasukkan: <code>${targetIP}</code>

Format IP yang benar: <code>192.168.1.1</code>

Silakan coba dengan IP yang valid.</blockquote>`,
                { parse_mode: 'HTML' }
            );
            return;
        }
        
        // Kirim loading message
        const loadingMsg = await sendNewMessage(chatId,
            `<blockquote>🔄 <b>MEMBUAT SUBDOMAIN...</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📛 Domain: <code>${selectedDomain}</code>
🔤 Hostname: <code>${hostname}</code>
🔗 Hasil: <code>${hostname}.${selectedDomain}</code>
📌 IP Target: <code>${targetIP}</code>

⏳ Mohon tunggu sebentar...</blockquote>`,
            { parse_mode: 'HTML' }
        );
        
        // Fungsi membuat subdomain
        async function createSubDomain(host, ip, tld) {
            try {
                const cleanHost = host.replace(/[^a-z0-9.-]/gi, "").toLowerCase();
                const cleanIP = ip.replace(/[^0-9.]/gi, "");
                const fullDomain = `${cleanHost}.${tld}`;
                
                console.log(`[SUBDOMAIN] Creating ${fullDomain} -> ${cleanIP}`);
                
                const response = await axios.post(
                    `https://api.cloudflare.com/client/v4/zones/${config.subdomain[tld].zone}/dns_records`,
                    {
                        type: "A",
                        name: fullDomain,
                        content: cleanIP,
                        ttl: 1,
                        proxied: false
                    },
                    {
                        headers: {
                            "Authorization": `Bearer ${config.subdomain[tld].apitoken}`,
                            "Content-Type": "application/json"
                        },
                        timeout: 15000
                    }
                );
                
                const res = response.data;
                console.log(`[SUBDOMAIN] Cloudflare response:`, JSON.stringify(res, null, 2));
                
                if (res.success) {
                    return {
                        success: true,
                        name: res.result?.name || fullDomain,
                        ip: res.result?.content || cleanIP,
                        recordId: res.result?.id
                    };
                } else {
                    const errorMsg = res.errors?.[0]?.message || "Gagal membuat subdomain";
                    return { success: false, error: errorMsg };
                }
            } catch (e) {
                console.error(`[SUBDOMAIN] Error:`, e.message);
                const errorMsg = e.response?.data?.errors?.[0]?.message || e.message || "Terjadi kesalahan";
                return { success: false, error: errorMsg };
            }
        }
        
        const result = await createSubDomain(hostname, targetIP, selectedDomain);
        
        // Hapus loading message
        await bot.deleteMessage(chatId, loadingMsg.message_id).catch(() => {});
        
        if (result.success) {
            // Simpan ke database jika ada fungsi saveUserSubdomain
            // Jika belum ada fungsi saveUserSubdomain, lewati dulu
            try {
                if (typeof saveUserSubdomain === 'function') {
                    saveUserSubdomain(userId, result.name, hostname, selectedDomain, targetIP, result.recordId);
                }
            } catch (dbError) {
                console.error('Error saving to database:', dbError);
            }
            
            const successMessage = `<blockquote>✅ <b>SUBDOMAIN BERHASIL DIBUAT!</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 <b>Subdomain:</b> <code>${result.name}</code>
📌 <b>IP Target:</b> <code>${result.ip}</code>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<b>⚠️ PENTING:</b>
• Subdomain aktif dalam 1-5 menit
• DNS propagation membutuhkan waktu
• Bisa digunakan untuk akses ke IP target

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 <b>Test dengan ping:</b>
<code>ping ${result.name}</code></blockquote>`;
            
            const keyboard = [
                [{ text: '➕ Buat Lagi', callback_data: 'subdomain_create' }],
                [{ text: '🌐 Menu Subdomain', callback_data: 'subdomain_menu' }],
                [{ text: '🏠 Menu Utama', callback_data: 'main_menu' }]
            ];
            
            if (messageId && callbackQueryId) {
                await editMessage(chatId, messageId, callbackQueryId, successMessage, {
                    parse_mode: 'HTML',
                    reply_markup: { inline_keyboard: keyboard }
                });
            } else {
                await sendNewMessage(chatId, successMessage, {
                    parse_mode: 'HTML',
                    reply_markup: { inline_keyboard: keyboard }
                });
            }
            
        } else {
            const errorMessage = `<blockquote>❌ <b>GAGAL MEMBUAT SUBDOMAIN</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📛 Domain: <code>${selectedDomain}</code>
🔤 Hostname: <code>${hostname}</code>
📌 IP Target: <code>${targetIP}</code>

<b>Error:</b> ${result.error}

<b>Kemungkinan penyebab:</b>
• Hostname sudah digunakan
• Format hostname tidak valid
• Rate limit Cloudflare
• IP tidak valid

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Silakan coba dengan hostname atau IP lain.</blockquote>`;
            
            const keyboard = [
                [{ text: '🔄 Coba Lagi', callback_data: 'subdomain_create' }],
                [{ text: '🌐 Menu Subdomain', callback_data: 'subdomain_menu' }]
            ];
            
            if (messageId && callbackQueryId) {
                await editMessage(chatId, messageId, callbackQueryId, errorMessage, {
                    parse_mode: 'HTML',
                    reply_markup: { inline_keyboard: keyboard }
                });
            } else {
                await sendNewMessage(chatId, errorMessage, {
                    parse_mode: 'HTML',
                    reply_markup: { inline_keyboard: keyboard }
                });
            }
        }
        
    } catch (error) {
        console.error('Error in executeCreateSubdomain:', error);
        await sendNewMessage(chatId,
            `<blockquote>❌ <b>ERROR</b>\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n${error.message}</blockquote>`,
            { parse_mode: 'HTML' }
        );
    }
}

bot.onText(/^\/listsubdo$/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id.toString();
    
    // HANYA OWNER YANG BISA AKSES
    if (!owner_ids.includes(userId)) {
        return bot.sendMessage(chatId, 
            `<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❌ <b>AKSES DITOLAK!</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Command /listsubdo hanya untuk OWNER.

⚠️ Fitur subdomain untuk user:
Gunakan tombol "🌐 SUBDOMAIN" di menu utama
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`,
            { parse_mode: 'HTML' }
        );
    }
    
    const domains = Object.keys(config.subdomain);
    
    if (domains.length === 0) {
        return bot.sendMessage(chatId, 
            `<blockquote>📜 <b>DAFTAR DOMAIN</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❌ Tidak ada domain yang tersedia saat ini.</blockquote>`,
            { parse_mode: 'HTML' }
        );
    }
    
    let message = `<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📜 <b>DAFTAR DOMAIN TERSEDIA</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👑 <b>Owner Only</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

`;
    
    domains.forEach((domain, idx) => {
        message += `${idx + 1}. <code>${domain}</code>\n`;
        message += `   ├ Zone: ${config.subdomain[domain].zone.substring(0, 15)}...\n`;
        message += `   └ Token: ${config.subdomain[domain].apitoken.substring(0, 10)}...\n\n`;
    });
    
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<b>Total domain:</b> ${domains.length}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`;
    
    await bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
});

// Show delete subdomain list
async function showSubdomainDeleteList(chatId, userId, messageId, callbackQueryId, page = 0) {
    try {
        const userSubdomains = getUserSubdomains(userId);
        const itemsPerPage = 5;
        const totalPages = Math.ceil(userSubdomains.length / itemsPerPage);
        
        if (page < 0) page = 0;
        if (page >= totalPages && totalPages > 0) page = totalPages - 1;
        
        const startIndex = page * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, userSubdomains.length);
        const pageSubdomains = userSubdomains.slice(startIndex, endIndex);
        
        if (userSubdomains.length === 0) {
            await editMessage(chatId, messageId, callbackQueryId,
                `<blockquote>📋 <b>HAPUS SUBDOMAIN</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❌ Belum ada subdomain yang dibuat.

Silakan buat subdomain terlebih dahulu.</blockquote>`,
                { parse_mode: 'HTML' }
            );
            return;
        }
        
        let message = `<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗑️ <b>HAPUS SUBDOMAIN</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 <b>Pilih subdomain yang akan dihapus:</b>

`;
        
        pageSubdomains.forEach((sub, idx) => {
            const num = startIndex + idx + 1;
            const date = new Date(sub.createdAt).toLocaleDateString('id-ID');
            message += `${num}. 🌐 <code>${sub.fullDomain}</code>\n`;
            message += `   ├ IP: ${sub.targetIP}\n`;
            message += `   └ Dibuat: ${date}\n\n`;
        });
        
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ <b>Peringatan:</b> Subdomain akan dihapus dari DNS!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`;
        
        const keyboard = [];
        
        pageSubdomains.forEach((sub, idx) => {
            const num = startIndex + idx + 1;
            keyboard.push([
                { text: `${num}. ${sub.fullDomain.substring(0, 25)}`, callback_data: `subdomain_delete_confirm_${sub.id}` }
            ]);
        });
        
        if (totalPages > 1) {
            const navRow = [];
            if (page > 0) navRow.push({ text: '◀️ Prev', callback_data: `subdomain_delete_page_${page - 1}` });
            navRow.push({ text: `📄 ${page + 1}/${totalPages}`, callback_data: 'no_action' });
            if (page < totalPages - 1) navRow.push({ text: 'Next ▶️', callback_data: `subdomain_delete_page_${page + 1}` });
            if (navRow.length > 0) keyboard.push(navRow);
        }
        
        keyboard.push([{ text: '🔙 Kembali', callback_data: 'subdomain_menu' }]);
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard }
        });
        
    } catch (error) {
        console.error('Error in showSubdomainDeleteList:', error);
    }
}

// Confirm and execute delete subdomain
async function confirmDeleteSubdomain(chatId, userId, subdomainId, messageId, callbackQueryId) {
    try {
        const subdomains = loadSubdomains();
        const subdomain = subdomains.subdomains.find(s => s.id === subdomainId && s.userId === userId.toString());
        
        if (!subdomain) {
            await editMessage(chatId, messageId, callbackQueryId,
                '❌ Subdomain tidak ditemukan!',
                { parse_mode: 'HTML' }
            );
            return;
        }
        
        const message = `<blockquote>🗑️ <b>KONFIRMASI HAPUS SUBDOMAIN</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 <b>Subdomain:</b> <code>${subdomain.fullDomain}</code>
📌 <b>IP Target:</b> <code>${subdomain.targetIP}</code>
📅 <b>Dibuat:</b> ${new Date(subdomain.createdAt).toLocaleString('id-ID')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ <b>PERINGATAN:</b>
• Subdomain akan dihapus dari DNS Cloudflare
• Tidak bisa dikembalikan
• Butuh 1-5 menit untuk propagation

Yakin ingin menghapus subdomain ini?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`;
        
        const keyboard = [
            [
                { text: '✅ Ya, Hapus', callback_data: `subdomain_delete_execute_${subdomainId}` },
                { text: '❌ Batal', callback_data: 'subdomain_delete_list' }
            ]
        ];
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard }
        });
        
    } catch (error) {
        console.error('Error in confirmDeleteSubdomain:', error);
    }
}

// Execute delete subdomain from Cloudflare
async function executeDeleteSubdomain(chatId, userId, subdomainId, messageId, callbackQueryId) {
    try {
        const subdomains = loadSubdomains();
        const subdomain = subdomains.subdomains.find(s => s.id === subdomainId && s.userId === userId.toString());
        
        if (!subdomain) {
            await editMessage(chatId, messageId, callbackQueryId,
                '❌ Subdomain tidak ditemukan!',
                { parse_mode: 'HTML' }
            );
            return;
        }
        
        // Kirim loading message
        const loadingMsg = await sendNewMessage(chatId,
            `<blockquote>🔄 <b>MENGHAPUS SUBDOMAIN...</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 Subdomain: <code>${subdomain.fullDomain}</code>

⏳ Mohon tunggu sebentar...</blockquote>`,
            { parse_mode: 'HTML' }
        );
        
        // Hapus dari Cloudflare jika ada recordId
        let deleteSuccess = true;
        let deleteError = null;
        
        if (subdomain.recordId && subdomain.domain) {
            try {
                const response = await axios.delete(
                    `https://api.cloudflare.com/client/v4/zones/${config.subdomain[subdomain.domain].zone}/dns_records/${subdomain.recordId}`,
                    {
                        headers: {
                            "Authorization": `Bearer ${config.subdomain[subdomain.domain].apitoken}`,
                            "Content-Type": "application/json"
                        },
                        timeout: 15000
                    }
                );
                
                if (!response.data?.success) {
                    deleteSuccess = false;
                    deleteError = response.data?.errors?.[0]?.message || "Gagal menghapus dari Cloudflare";
                }
            } catch (e) {
                deleteSuccess = false;
                deleteError = e.message || "Gagal terhubung ke Cloudflare";
            }
        }
        
        // Hapus dari database
        deleteUserSubdomain(userId, subdomainId);
        
        await bot.deleteMessage(chatId, loadingMsg.message_id).catch(() => {});
        
        if (deleteSuccess) {
            const successMessage = `<blockquote>✅ <b>SUBDOMAIN BERHASIL DIHAPUS!</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 <b>Subdomain:</b> <code>${subdomain.fullDomain}</code>
📌 <b>IP Target:</b> <code>${subdomain.targetIP}</code>

<b>⚠️ PENTING:</b>
• Subdomain akan nonaktif dalam 1-5 menit
• DNS propagation membutuhkan waktu</blockquote>`;
            
            const keyboard = [
                [{ text: '🗑️ Hapus Lagi', callback_data: 'subdomain_delete_list' }],
                [{ text: '➕ Buat Subdomain', callback_data: 'subdomain_create' }],
                [{ text: '🏠 Menu Utama', callback_data: 'main_menu' }]
            ];
            
            await editMessage(chatId, messageId, callbackQueryId, successMessage, {
                parse_mode: 'HTML',
                reply_markup: { inline_keyboard: keyboard }
            });
        } else {
            const errorMessage = `<blockquote>⚠️ <b>SUBDOMAIN DIHAPUS DARI DATABASE</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 <b>Subdomain:</b> <code>${subdomain.fullDomain}</code>

<b>Status:</b>
✅ Dihapus dari database
❌ Gagal dihapus dari Cloudflare: ${deleteError}

<b>💡 Solusi:</b>
• Subdomain mungkin sudah tidak ada di Cloudflare
• Silakan cek manual di panel Cloudflare
• Hubungi admin jika perlu bantuan</blockquote>`;
            
            const keyboard = [
                [{ text: '🗑️ Hapus Lagi', callback_data: 'subdomain_delete_list' }],
                [{ text: '🏠 Menu Utama', callback_data: 'main_menu' }]
            ];
            
            await editMessage(chatId, messageId, callbackQueryId, errorMessage, {
                parse_mode: 'HTML',
                reply_markup: { inline_keyboard: keyboard }
            });
        }
        
    } catch (error) {
        console.error('Error in executeDeleteSubdomain:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            `<blockquote>❌ <b>ERROR</b>\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n${error.message}</blockquote>`,
            { parse_mode: 'HTML' }
        );
    }
}

// Logging untuk instalasi
function logInstall(type, message) {
    console.log(`[${type}] ${new Date().toISOString()} - ${message}`);
}

function logError(type, message) {
    console.error(`[${type} ERROR] ${new Date().toISOString()} - ${message}`);
}

// Fungsi untuk edit pesan
async function editReply(chatId, messageId, text) {
    try {
        await bot.editMessageText(text, {
            chat_id: chatId,
            message_id: messageId,
            parse_mode: 'HTML'
        });
    } catch (error) {
        console.error('Edit reply error:', error);
    }
}

// ==================== FUNGSI INSTALL PANEL (PUBLIC) ====================

async function installPterodactylPanel(context) {
    const { xy, reply } = context;
    const userId = xy.from.id;
    const chatId = xy.chat.id;
    const pending = pendingInstalls.get(userId);
    
    if (!pending || pending.command !== 'installpanel') {
        return reply('❌ Sesi instalasi tidak ditemukan. Gunakan /install untuk memulai.');
    }
    
    if (Date.now() - pending.timestamp > 60 * 60 * 1000) {
        pendingInstalls.delete(userId);
        return reply('❌ Sesi instalasi telah kadaluarsa. Silakan mulai ulang dengan /install');
    }
    
    const { ip: vpsIP, password: vpsPassword, domainPanel, domainNode, ram: ramserver, selectedType } = pending.data;
    
    if (!vpsIP || !vpsPassword || !domainPanel || !domainNode || !ramserver || !selectedType) {
        pendingInstalls.delete(userId);
        return reply('❌ Data instalasi tidak lengkap. Silakan mulai ulang dengan /install');
    }
    
    // Konfigurasi default
    const defaultUser = config.pterodactyl?.defaultUser || 'achaa0973';
    const defaultEmail = config.pterodactyl?.defaultEmail || 'auliarahman@gmail.com';
    const defaultLocation = config.pterodactyl?.defaultLocation || 'Indonesia';
    const defaultLocationDesc = config.pterodactyl?.defaultLocationDesc || '';
    
    const sentMessage = await reply(`<blockquote>⚡ <b>INSTALL ${selectedType === 'panel' ? 'PANEL' : 'WINGS'}</b>

📋 <b>Konfigurasi:</b>
• IP: <code>${vpsIP}</code>
• Domain Panel: <code>${domainPanel}</code>
${selectedType === 'panel' ? `• Domain Node: <code>${domainNode}</code>
• RAM: <code>${ramserver} MB</code>` : ''}

🔄 <b>Memulai proses instalasi...</b>
⏳ Ini akan memakan waktu 10-30 menit</blockquote>`, { parse_mode: 'HTML' });

    (async () => {
        const { Client } = require('ssh2');
        const ssh = new Client();
        const connSettings = { 
            host: vpsIP, 
            port: 22, 
            username: 'root', 
            password: vpsPassword,
            readyTimeout: 30000,
            keepaliveInterval: 10000
        };
        let connectionError = null;
        
        const user = defaultUser + generateReadableString(4);
        const pass = "Achaa" + generateReadableString(6);
        const random = Math.floor(1000 + Math.random() * 9000);
        const passwordAcak = `Achaa${random}`;
        const namaAcak = `achacantik${random}`;
        const emailAcak = `achacantik${random}@gmail.com`;
        
        try {
            logInstall(selectedType.toUpperCase(), `Connecting to ${vpsIP}...`);
            
            await new Promise((resolve, reject) => {
                const timeout = setTimeout(() => {
                    reject(new Error('Koneksi SSH timeout (30 detik)'));
                }, 30000);
                
                ssh.on('ready', () => {
                    clearTimeout(timeout);
                    resolve();
                }).on('error', (err) => {
                    clearTimeout(timeout);
                    reject(err);
                }).connect(connSettings);
            });
            
            if (selectedType === 'panel') {
                // ==================== INSTALL PANEL ====================
                logInstall('PANEL', 'Step 1: Installing Panel...');
                await editReply(chatId, sentMessage.message_id, `<blockquote>🔄 <b>[1/5] Menginstal Panel...</b>

⏳ Mohon tunggu 10-20 menit
📡 Mengakses: https://${domainPanel}</blockquote>`);
                
                await new Promise((resolve, reject) => {
                    ssh.exec("bash <(curl -s https://pterodactyl-installer.se)", (err, stream) => {
                        if (err) return reject(err);
                        
                        stream.on('close', (code) => {
                            if (code === 0) resolve();
                            else reject(new Error(`Panel installation exited with code ${code}`));
                        });
                        
                        stream.on('data', (data) => {
                            const out = data.toString();
                            logInstall('PANEL', out.trim());
                            
                            if (out.includes("Input 0-6")) stream.write("0\n");
                            if (out.includes("Database name (panel)")) stream.write(`${namaAcak}\n`);
                            if (out.includes("Database username (pterodactyl)")) stream.write(`${namaAcak}\n`);
                            if (out.includes("Password (press enter")) stream.write(`\n`);
                            if (out.includes("Select timezone")) stream.write(`Asia/Jakarta\n`);
                            if (out.includes("Provide the email address")) stream.write(`${emailAcak}\n`);
                            if (out.includes("Email address for the initial admin account")) stream.write(`${emailAcak}\n`);
                            if (out.includes("Username for the initial admin account")) stream.write(`${namaAcak}\n`);
                            if (out.includes("First name for the initial admin account")) stream.write(`${namaAcak}\n`);
                            if (out.includes("Last name for the initial admin account")) stream.write(`${namaAcak}\n`);
                            if (out.includes("Password for the initial admin account")) stream.write(`${passwordAcak}\n`);
                            if (out.includes("Set the FQDN")) stream.write(`${domainPanel}\n`);
                            if (out.includes("(y/N)")) stream.write("y\n");
                            if (out.includes("Enable sending anonymous telemetry")) stream.write("yes\n");
                            if (out.includes("(Y)es/(N)o")) stream.write("Y\n");
                        });
                        
                        stream.stderr.on('data', (data) => {
                            logError('installpanel', data.toString());
                        });
                    });
                });
                
                // ==================== INSTALL WINGS ====================
                logInstall('PANEL', 'Step 2: Installing Wings...');
                await editReply(chatId, sentMessage.message_id, `<blockquote>✅ Panel OK!

🔄 <b>[2/5] Menginstal Wings...</b>
⏳ 5-10 menit</blockquote>`);
                
                await new Promise((resolve, reject) => {
                    ssh.exec("bash <(curl -s https://pterodactyl-installer.se)", (err, stream) => {
                        if (err) return reject(err);
                        
                        stream.on('close', (code) => {
                            if (code === 0) resolve();
                            else reject(new Error(`Wings installation exited with code ${code}`));
                        });
                        
                        stream.on('data', (data) => {
                            const out = data.toString();
                            logInstall('WINGS', out.trim());
                            
                            if (out.includes("Input 0-6")) stream.write("1\n");
                            if (out.includes("Enter the panel address")) stream.write(`https://${domainPanel}\n`);
                            if (out.includes("Database host username")) stream.write(`${namaAcak}\n`);
                            if (out.includes("Database host password")) stream.write(`${random}\n`);
                            if (out.includes("Set the FQDN")) stream.write(`${domainNode}\n`);
                            if (out.includes("Enter email address")) stream.write(`${emailAcak}\n`);
                            if (out.includes("(y/N)") || out.includes("(Y)es/(N)o")) stream.write("y\n");
                        });
                        
                        stream.stderr.on('data', (data) => {
                            logError('installwings', data.toString());
                        });
                    });
                });
                
                // ==================== CREATE NODE ====================
                logInstall('PANEL', 'Step 3: Creating Node...');
                await editReply(chatId, sentMessage.message_id, `<blockquote>✅ Wings OK!

🔄 <b>[3/5] Membuat Node...</b></blockquote>`);
                
                const commandCreateNode = `bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/main/createnode.sh)`;
                
                await new Promise((resolve, reject) => {
                    ssh.exec(commandCreateNode, (err, streamNode) => {
                        if (err) return reject(err);
                        streamNode.on('close', resolve);
                        streamNode.on('data', (data) => {
                            const output = data.toString();
                            logInstall('CREATENODE', output.trim());
                            
                            if (output.includes("Masukkan nama lokasi: ")) streamNode.write(`${defaultLocation}\n`);
                            else if (output.includes("Masukkan deskripsi lokasi: ")) streamNode.write(`${defaultLocationDesc}\n`);
                            else if (output.includes("Masukkan domain: ")) streamNode.write(`${domainNode}\n`);
                            else if (output.includes("Masukkan nama node: ")) streamNode.write('NODE BY BOT\n');
                            else if (output.includes("Masukkan RAM (dalam MB): ")) streamNode.write(`${ramserver}\n`);
                            else if (output.includes("Masukkan jumlah maksimum disk space (dalam MB): ")) streamNode.write(`${ramserver}\n`);
                            else if (output.includes("Masukkan Locid: ")) streamNode.write('1\n');
                        });
                        streamNode.stderr.on('data', (data) => logError('createnode', data.toString()));
                    });
                });
                
                // ==================== START WINGS ====================
                logInstall('PANEL', 'Step 4: Starting Wings...');
                await editReply(chatId, sentMessage.message_id, `<blockquote>✅ Node OK!

🔄 <b>[4/5] Menjalankan Wings...</b></blockquote>`);
                
                await new Promise((resolve, reject) => {
                    ssh.exec('systemctl restart wings && systemctl enable wings', (err, stream) => {
                        if (err) return reject(err);
                        stream.on('close', resolve);
                        stream.on('data', (data) => logInstall('STARTWINGS', data.toString().trim()));
                        stream.stderr.on('data', (data) => logError('startwings', data.toString()));
                    });
                });
                
                // ==================== CONFIGURE WINGS ====================
                logInstall('PANEL', 'Step 5: Configuring Wings config.yml...');
                await editReply(chatId, sentMessage.message_id, `<blockquote>🚀 Wings Started!

🔄 <b>[5/5] Configuring config.yml...</b></blockquote>`);
                
                const wait = ms => new Promise(r => setTimeout(r, ms));
                
                const run = (cmd, tag) => new Promise((resolve, reject) => {
                    ssh.exec(cmd, (err, stream) => {
                        if (err) return reject(err);
                        stream.on('close', () => resolve());
                        stream.on('data', d => logInstall(tag, d.toString().trim()));
                        stream.stderr.on('data', d => logError(tag, d.toString()));
                    });
                });
                
                await wait(15000);
                
                const genCfg = `
                cd /var/www/pterodactyl &&
                php artisan p:node:configuration 1 --no-ansi > /etc/pterodactyl/config.yml &&
                chown root:root /etc/pterodactyl/config.yml &&
                chmod 600 /etc/pterodactyl/config.yml
                `;
                
                logInstall('WINGS', 'Generate config (1)');
                await run(genCfg, 'CONFIG1');
                
                await run('systemctl restart wings', 'WINGS');
                await wait(8000);
                
                logInstall('WINGS', 'Generate config (2)');
                await run(genCfg, 'CONFIG2');
                
                await run('systemctl restart wings', 'WINGS');
                await wait(5000);
                
                await run('systemctl is-active wings', 'HEALTH');
                
                logInstall('PANEL', '✅ Wings configured — node should be GREEN');
                logInstall('PANEL', 'Installation completed successfully!');
                
                const finalMessage = `<blockquote>
✅ <b>INSTALASI PANEL SELESAI!</b>

🌐 <b>Panel URL:</b> https://${domainPanel}
🖥️ <b>Node URL:</b> ${domainNode}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 <b>LOGIN CREDENTIALS:</b>
├ Username: <code>${namaAcak}</code>
├ Password: <code>${passwordAcak}</code>
└ Email: <code>${emailAcak}</code>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 <b>PENTING:</b>
• Simpan kredensial ini dengan aman
• Login ke panel menggunakan link di atas
• Node akan otomatis terhubung
</blockquote>`;
                
                await editReply(chatId, sentMessage.message_id, finalMessage);
                
            } else if (selectedType === 'wings') {
                // ==================== INSTALL WINGS ONLY ====================
                logInstall('WINGS', 'Installing Wings only...');
                await editReply(chatId, sentMessage.message_id, `<blockquote>🔄 <b>Installing Wings...</b>

⏳ Mohon tunggu 5-10 menit</blockquote>`);
                
                await new Promise((resolve, reject) => {
                    ssh.exec("bash <(curl -s https://pterodactyl-installer.se)", (err, stream) => {
                        if (err) return reject(err);
                        
                        stream.on('close', (code) => {
                            if (code === 0) resolve();
                            else reject(new Error(`Wings installation exited with code ${code}`));
                        });
                        
                        stream.on('data', (data) => {
                            const out = data.toString();
                            logInstall('WINGS', out.trim());
                            
                            if (out.includes("Input 0-6")) stream.write("1\n");
                            if (out.includes("Enter the panel address")) stream.write(`https://${domainPanel}\n`);
                            if (out.includes("Database host username")) stream.write(`${namaAcak}\n`);
                            if (out.includes("Database host password")) stream.write(`${random}\n`);
                            if (out.includes("Set the FQDN")) stream.write(`${domainNode}\n`);
                            if (out.includes("Enter email address")) stream.write(`${emailAcak}\n`);
                            if (out.includes("(y/N)") || out.includes("(Y)es/(N)o")) stream.write("y\n");
                        });
                        
                        stream.stderr.on('data', (data) => {
                            logError('installwings', data.toString());
                        });
                    });
                });
                
                await new Promise((resolve, reject) => {
                    ssh.exec('systemctl restart wings && systemctl enable wings', (err, stream) => {
                        if (err) return reject(err);
                        stream.on('close', resolve);
                        stream.on('data', (data) => logInstall('STARTWINGS', data.toString().trim()));
                        stream.stderr.on('data', (data) => logError('startwings', data.toString()));
                    });
                });
                
                const finalMessage = `<blockquote>
✅ <b>INSTALASI WINGS SELESAI!</b>

🖥️ <b>Node URL:</b> ${domainNode}
🌐 <b>Panel URL:</b> https://${domainPanel}

💡 <b>PENTING:</b>
• Wings sudah terinstall dan berjalan
• Pastikan panel sudah terinstall sebelumnya
• Cek status: systemctl status wings
</blockquote>`;
                
                await editReply(chatId, sentMessage.message_id, finalMessage);
            }
            
        } catch (err) {
            connectionError = err;
            logError('install', err.message);
            
            let errorMessage = `<blockquote>❌ <b>INSTALASI GAGAL</b>

${err.message || 'Terjadi kesalahan saat instalasi'}

<b>Kemungkinan penyebab:</b>
• Koneksi SSH tidak stabil
• Domain belum diarahkan ke IP VPS
• Firewall memblokir port 22/80/443
• RAM tidak mencukupi

<b>Saran:</b>
• Pastikan domain sudah diarahkan ke IP VPS
• Pastikan port 22, 80, 443 terbuka
• Coba dengan RAM minimal 2048 MB</blockquote>`;
            
            await editReply(chatId, sentMessage.message_id, errorMessage);
        } finally {
            try {
                ssh.end();
            } catch (e) {}
        }
        
        pendingInstalls.delete(userId);
    })();
}

// Get droplet count from DigitalOcean
async function getDropletCount(apiKey) {
    try {
        if (!apiKey || apiKey === "-") return 0;
        const res = await fetch("https://api.digitalocean.com/v2/droplets", {
            headers: { Authorization: `Bearer ${apiKey}` }
        });
        const data = await res.json();
        return data.droplets?.length || 0;
    } catch (e) {
        return 0;
    }
}

async function getTotalVPSStock(forceRefresh = false) {
    const now = Date.now();
    if (!forceRefresh && vpsStockCache.stock !== null && (now - vpsStockCache.lastCheck) < vpsStockCache.ttl) {
        return vpsStockCache.stock;
    }
    try {
        const apiKeys = config.DO_API_KEYS || [];
        let totalRemaining = 0;
        for (const apiKey of apiKeys) {
            if (!apiKey || apiKey === "-") continue;
            const count = await getDropletCount(apiKey);
            const maxVps = config.MAX_VPS_PER_ACCOUNT || 10;
            totalRemaining += Math.max(0, maxVps - count);
        }
        vpsStockCache.stock = totalRemaining;
        vpsStockCache.lastCheck = now;
        return totalRemaining;
    } catch (error) {
        return vpsStockCache.stock !== null ? vpsStockCache.stock : 0;
    }
}

async function getAvailableDOApi() {
    const apiKeys = config.DO_API_KEYS || [];
    for (const apiKey of apiKeys) {
        if (!apiKey || apiKey === "-") continue;
        const count = await getDropletCount(apiKey);
        const maxVps = config.MAX_VPS_PER_ACCOUNT || 10;
        if (count < maxVps) {
            return apiKey;
        }
    }
    return null;
}

async function checkStockAndGetApi() {
    const totalStock = await getTotalVPSStock(true);
    if (totalStock <= 0) {
        return { available: false, stock: 0, message: "❌ STOK VPS HABIS!\n\nMohon maaf, stok VPS sedang habis.\nSilakan hubungi admin." };
    }
    const apiKey = await getAvailableDOApi();
    if (!apiKey) {
        return { available: false, stock: totalStock, message: "❌ SEMUA AKUN DO PENUH!\n\nSilakan hubungi admin." };
    }
    return { available: true, stock: totalStock, apiKey: apiKey };
}

// ==================== PERBAIKAN FUNGSI CREATE VPS ====================

async function createVPS(specs, apiKey) {
    const sizeMap = config.DO_SIZE_MAP || {};
    const size = sizeMap[specs.plan];
    if (!size) throw new Error("PLAN VPS TIDAK VALID!");

    // PERBAIKAN: Mapping OS ke slug yang valid di DigitalOcean
    const osMap = {
        'ubuntu-20-04-x64': 'ubuntu-20-04-x64',
        'ubuntu-22-04-x64': 'ubuntu-22-04-x64',
        'ubuntu-24-04-x64': 'ubuntu-24-04-x64',
        'debian-11-x64': 'debian-11-x64',
        'debian-12-x64': 'debian-12-x64',
        'centos-7-x64': 'centos-7-x64',
        'centos-8-x64': 'centos-8-x64',
        'fedora-37-x64': 'fedora-37-x64',
        'fedora-38-x64': 'fedora-38-x64'
    };
    
    // Ambil slug OS yang valid
    let osSlug = specs.os;
    if (osMap[specs.os]) {
        osSlug = osMap[specs.os];
    } else if (specs.os === 'ubuntu') {
        osSlug = 'ubuntu-22-04-x64'; // Default ke Ubuntu 22.04
    } else if (specs.os === 'debian') {
        osSlug = 'debian-12-x64';
    } else if (specs.os === 'centos') {
        osSlug = 'centos-7-x64';
    }
    
    const osShort = (specs.os || "ubuntu").split('-')[0];
    const regionShort = (specs.region || "sgp1");
    const planShort = specs.plan;
    const randomNum = Math.floor(Math.random() * 900) + 100;
    const hostname = `${osShort}-${planShort}-${regionShort}-${randomNum}`;
    const password = "Achaa#" + Math.random().toString(36).substring(2, 10) + "@" + Math.floor(Math.random() * 999);

    // Validasi region
    const validRegions = ['nyc1', 'nyc2', 'nyc3', 'sfo1', 'sfo2', 'sfo3', 'ams2', 'ams3', 'sgp1', 'lon1', 'fra1', 'tor1', 'blr1'];
    const region = validRegions.includes(specs.region) ? specs.region : 'sgp1';
    
    // Validasi image slug
    const validImages = [
        'ubuntu-20-04-x64', 'ubuntu-22-04-x64', 'ubuntu-24-04-x64',
        'debian-11-x64', 'debian-12-x64', 'centos-7-x64', 'centos-8-x64',
        'fedora-37-x64', 'fedora-38-x64'
    ];
    
    const image = validImages.includes(osSlug) ? osSlug : 'ubuntu-22-04-x64';

    const payload = {
        name: hostname,
        region: region,
        size: size,
        image: image,  // Gunakan image slug yang valid
        ipv6: true,
        backups: false,
        tags: ["AutoVPS", "BuyVPS", specs.category],
        user_data: `#cloud-config
password: ${password}
chpasswd: { expire: False }
ssh_pwauth: True`
    };

    console.log(`Creating VPS with payload:`, JSON.stringify(payload, null, 2));

    const resp = await fetch("https://api.digitalocean.com/v2/droplets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(payload)
    });

    const json = await resp.json();
    
    if (!resp.ok) {
        console.error('DigitalOcean API Error:', json);
        throw new Error(json.message || json.error || "Gagal membuat VPS");
    }
    
    return { dropletId: json.droplet.id, hostname: hostname, password: password };
}

// ==================== PERBAIKAN FUNGSI GET VPS IP ====================

async function getVPSIP(dropletId, apiKey) {
    // Tunggu 30 detik untuk provisioning
    await new Promise(r => setTimeout(r, 30000));
    
    let retries = 0;
    const maxRetries = 10;
    
    while (retries < maxRetries) {
        try {
            const cek = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                headers: { "Authorization": `Bearer ${apiKey}` }
            });
            
            const dropletInfo = await cek.json();
            const ip = dropletInfo?.droplet?.networks?.v4?.[0]?.ip_address;
            
            if (ip) {
                return ip;
            }
            
            // Tunggu 10 detik sebelum retry
            await new Promise(r => setTimeout(r, 10000));
            retries++;
            
        } catch (error) {
            console.error(`Error getting VPS IP (retry ${retries + 1}/${maxRetries}):`, error.message);
            await new Promise(r => setTimeout(r, 10000));
            retries++;
        }
    }
    
    return "IP_NOT_READY_YET";
}

// ==================== PERBAIKAN HANDLE SUCCESSFUL VPS CREATION ====================

async function handleSuccessfulVPSCreation(userId, paymentSession) {
    try {
        const chatId = paymentSession.chatId;
        const session = paymentSession.session;
        const product = session.product;

        console.log(`Processing VPS creation for user ${userId}, product: ${product.name}`);

        // Delete QR message
        await bot.deleteMessage(chatId, paymentSession.msgId).catch(() => {});

        // Gunakan API key yang sudah disimpan di session
        const apiKey = session.apiKey;
        if (!apiKey) {
            await sendNewMessage(chatId,
                `❌ *ERROR: API KEY TIDAK DITEMUKAN*\n━━━━━━━━━━━━━━━━━━━━━━━\n\nSilakan laporkan ke admin.\n\nOrder ID: ${paymentSession.kodeTrx}`,
                { parse_mode: "Markdown" }
            );
            return;
        }

        // Validasi specs sebelum membuat VPS
        const sizeMap = config.DO_SIZE_MAP || {};
        const size = sizeMap[product.plan];
        
        if (!size) {
            await sendNewMessage(chatId,
                `❌ *ERROR: PLAN VPS TIDAK VALID*\n━━━━━━━━━━━━━━━━━━━━━━━\n\nPlan: ${product.plan}\nSize: ${size}\n\nSilakan laporkan ke admin.`,
                { parse_mode: "Markdown" }
            );
            return;
        }

        // Validasi OS
        const validOS = ['ubuntu-20-04-x64', 'ubuntu-22-04-x64', 'ubuntu-24-04-x64', 'debian-11-x64', 'debian-12-x64'];
        let osValue = session.os;
        
        if (!validOS.includes(osValue)) {
            // Mapping OS pendek ke slug lengkap
            const osMapping = {
                'ubuntu': 'ubuntu-22-04-x64',
                'ubuntu20': 'ubuntu-20-04-x64',
                'ubuntu22': 'ubuntu-22-04-x64',
                'ubuntu24': 'ubuntu-24-04-x64',
                'debian': 'debian-12-x64',
                'debian11': 'debian-11-x64',
                'debian12': 'debian-12-x64'
            };
            osValue = osMapping[session.os] || 'ubuntu-22-04-x64';
        }

        // Send processing message
        const processingMsg = await sendNewMessage(chatId,
            `⏳ *PROSES PEMBUATAN VPS* ⏳\n━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
            `🖥️ *Paket:* ${product.name}\n` +
            `📊 *Spesifikasi:* ${product.label}\n` +
            `💻 *OS:* ${session.osName}\n` +
            `🌍 *Region:* ${session.regionName}\n\n` +
            `⏱️ *Mohon tunggu, proses pembuatan VPS memakan waktu 2-3 menit...*`,
            { parse_mode: "Markdown" }
        );

        // Prepare specs for VPS creation
        const specs = {
            plan: product.plan,
            os: osValue,
            region: session.region,
            category: session.category,
            os_name: session.osName
        };

        console.log(`Creating VPS with specs:`, specs);

        // Create VPS
        const vpsResult = await createVPS(specs, apiKey);
        
        // Update processing message
        await bot.editMessageText(
            `⏳ *MEMPEROLEH IP ADDRESS...* ⏳\n━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
            `🖥️ *VPS sedang dipersiapkan...*\n` +
            `⏱️ *Mohon tunggu, IP address akan muncul dalam 1-2 menit...*`,
            {
                chat_id: chatId,
                message_id: processingMsg.message_id,
                parse_mode: "Markdown"
            }
        ).catch(() => {});
        
        // Wait and get IP
        const ip = await getVPSIP(vpsResult.dropletId, apiKey);

        // Delete processing message
        await bot.deleteMessage(chatId, processingMsg.message_id).catch(() => {});

        const created = new Date().toLocaleString("id-ID", {
            timeZone: "Asia/Jakarta",
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });

        // Save order to database
        const orders = loadVPSOrders();
        const newOrder = {
            id: paymentSession.kodeTrx,
            userId: userId.toString(),
            username: userId,
            hostname: vpsResult.hostname,
            ip: ip,
            password: vpsResult.password,
            region: session.region,
            regionName: session.regionName,
            os: session.os,
            osName: session.osName,
            productId: session.productId,
            productName: product.name,
            plan: product.plan,
            label: product.label,
            price: paymentSession.price,
            fee: paymentSession.fee,
            total: paymentSession.totalBayar,
            garansi: session.categoryInfo?.garansi,
            replace: session.categoryInfo?.replace,
            dropletId: vpsResult.dropletId,
            status: 'active',
            createdAt: new Date().toISOString()
        };

            orders.orders.push(newOrder);
            orders.stats.totalOrders++;
            orders.stats.totalRevenue += paymentSession.price;
            saveVPSOrders(orders);

            // Update stok cache
            await getTotalVPSStock(true);

        // Send success message
        let successMsg = `
✅ *VPS BERHASIL DIBUAT!* ✅
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ *INFORMASI LOGIN VPS:*
━━━━━━━━━━━━━━━━━━━━━━━
🌐 *IP ADDRESS:* \`${ip}\`
👤 *USERNAME:* \`root\`
🔐 *PASSWORD:* \`${vpsResult.password}\`
🧩 *HOSTNAME:* ${vpsResult.hostname}
━━━━━━━━━━━━━━━━━━━━━━━

📦 *DETAIL PESANAN:*
🖥️ *Paket:* ${product.name}
📊 *Spesifikasi:* ${product.label}
💻 *OS:* ${session.osName}
🌍 *Region:* ${session.regionName}
🛡️ *Garansi:* ${session.categoryInfo?.garansi || '-'}
♻️ *Replace:* ${session.categoryInfo?.replace || '-'}
💰 *Harga:* ${formatCurrency(paymentSession.price)}
📅 *Tanggal:* ${created}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ *PENTING:*
• SILAHKAN DIBACA DIBAWAH INI YA
• KALAU DIATAS DIBACA DULU YAA..
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

    let aturanPembaca = `
⚠️ *𝗧.𝗢.𝗦 VPS (Terms of Service VPS)*
• Dilarang Hacking
• Dilarang Mining (Crypto/Sejenisnya)
• Dilarang Torrent
• Dilarang Overload CPU (100% terus-menerus)
• Dilarang DDoS
• Dilarang Aktivitas Ilegal dalam bentuk apa pun
👉 *Intinya:* Gunakan VPS dengan bijak & sesuai kebutuhan normal.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏪 *𝗧.𝗢.𝗦 TOKO (Ketentuan Garansi Toko)*
• Web toko down karena DDoS, tapi VPS normal → Garansi *AKTIF*
• VPS mati akibat DDoS → Garansi *HANGUS*
• VPS aktif tapi tidak bisa login (CPU 100%) → Garansi *HANGUS*
• Data VPS tanggung jawab pembeli → Hilang = Garansi *HANGUS*
• Mohon gunakan VPS sesuai aturan agar garansi tetap berlaku
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📛 *𝗞𝗘𝗧𝗘𝗡𝗧𝗨𝗔𝗡 AKUN DO SUSPEND*
Jika akun DigitalOcean terkena suspend:
• Garansi hanya berlaku *2 hari* sejak pembelian
• Hari ke-3 dan seterusnya → Garansi *Tidak Berlaku
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *SYARAT CLAIM GARANSI*
1. Sertakan bukti transfer
2. Screenshot chat saat pembelian
3. Cantumkan tanggal pembelian
4. Lampirkan data VPS (IP, Username, Password, dsb.)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
© Copyright By — ${config.namaStore} 2026
📢 *PERINGATAN:*
Seluruh isi & format teks ini dilindungi hukum.
📌 Dilarang copy-paste tanpa izin.
📌 Pelanggaran akan dikenakan sanksi sesuai UU Hak Cipta No. 28 Tahun 2014.`
        await sendNewMessage(chatId, successMsg, { parse_mode: "Markdown" });
        await sleep(1000)
        await sendMessage(chatId, aturanPembaca, { parse_mode: "Markdown" });

        // === KIRIM NOTIFIKASI KE CHANNEL ===
        console.log(`Mengirim notifikasi VPS untuk order ${paymentSession.kodeTrx}`);
        await notifyVPSSuccessToChannel(newOrder, userId, ip, vpsResult.password);
        console.log(`Notifikasi VPS terkirim untuk order ${paymentSession.kodeTrx}`);

        // Cek stok setelah pembuatan untuk notifikasi ke owner jika stok menipis
        await notifyStockStatus();

        // Clean up session
        delete global.vpsOrderSession[userId];

    } catch (error) {
        console.error('Error handleSuccessfulVPSCreation:', error);
        
        // Refund saldo jika gagal
        const refundAmount = paymentSession?.totalBayar || paymentSession?.price || 0;
        if (refundAmount > 0) {
            const refundSuccess = addUserBalance(userId, refundAmount);
            if (refundSuccess) {
                await sendNewMessage(paymentSession?.chatId,
                    `❌ *GAGAL MEMBUAT VPS*\n━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
                    `Error: ${error.message}\n\n` +
                    `💰 *SALDO TELAH DIREFUND:* ${formatCurrency(refundAmount)}\n\n` +
                    `Silakan coba lagi atau hubungi admin.\n\n` +
                    `Order ID: ${paymentSession?.kodeTrx}`,
                    { parse_mode: "Markdown" }
                );
                return;
            }
        }
        
        await sendNewMessage(paymentSession?.chatId,
            `❌ *GAGAL MEMBUAT VPS*\n━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
            `Error: ${error.message}\n\n` +
            `Silakan hubungi admin.\n\n` +
            `Order ID: ${paymentSession?.kodeTrx}`,
            { parse_mode: "Markdown" }
        );
    }
}

async function getVPSIP(dropletId, apiKey) {
    await new Promise(r => setTimeout(r, 50000));
    const cek = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        headers: { "Authorization": `Bearer ${apiKey}` }
    });
    const dropletInfo = await cek.json();
    return dropletInfo?.droplet?.networks?.v4?.[0]?.ip_address || "N/A";
}

async function notifyStockStatus() {
    try {
        const totalStock = await getTotalVPSStock(true);
        const minStock = config.MIN_STOCK_WARNING || 2;
        
        if (totalStock <= minStock) {
            // Ambil semua produk dari config.js
            const products = config.VPS_PRODUCTS || [];
            
            // Ambil berdasarkan urutan (pastikan urutan di config.js sudah benar)
            // Urutan: [0] REGULER 4GB, [1] REGULER 8GB, [2] PREMIUM 4GB, [3] PREMIUM 8GB
            const priceList = {
                reguler4gb: products[0]?.price || 5000,
                reguler8gb: products[1]?.price || 7000,
                premium4gb: products[2]?.price || 10000,
                premium8gb: products[3]?.price || 12000
            };
            
            const message = `<tg-emoji emoji-id="5406683434124859552">🚀</tg-emoji> 𝗦𝗧𝗢𝗖𝗞 𝗩𝗣𝗦 𝗧𝗘𝗥𝗦𝗜𝗦𝗔 <b>${totalStock}</b>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<tg-emoji emoji-id="6206225311768516593">📊</tg-emoji> 𝗣𝗥𝗜𝗖𝗘 𝗟𝗜𝗦𝗧 - 𝗣𝗔𝗞𝗘𝗧 𝗠𝗘𝗗𝗜𝗨𝗠 - 𝗥𝗘𝗚𝗨𝗟𝗘𝗥
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<tg-emoji emoji-id="4915963371649499973">🖥</tg-emoji> <b>𝗥𝗔𝗠 4𝗚𝗕 𝗖𝗢𝗥𝗘 2 =  ${formatCurrency(priceList.reguler4gb)}</b>
<tg-emoji emoji-id="4915963371649499973">🖥</tg-emoji> <b>𝗥𝗔𝗠 8𝗚𝗕 𝗖𝗢𝗥𝗘 4 =  ${formatCurrency(priceList.reguler8gb)}</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<tg-emoji emoji-id="6206445639295834047">📊</tg-emoji> 𝗣𝗥𝗜𝗖𝗘 𝗟𝗜𝗦𝗧 - 𝗣𝗔𝗞𝗘𝗧 𝗛𝗜𝗚𝗛 - 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗜𝗡𝗧𝗘𝗟
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<tg-emoji emoji-id="4915963371649499973">🖥</tg-emoji> <b>𝗥𝗔𝗠 4𝗚𝗕 𝗖𝗢𝗥𝗘 2 =  ${formatCurrency(priceList.premium4gb)}</b>
<tg-emoji emoji-id="4915963371649499973">🖥</tg-emoji> <b>𝗥𝗔𝗠 8𝗚𝗕 𝗖𝗢𝗥𝗘 4 =  ${formatCurrency(priceList.premium8gb)}</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✦ 𝗙𝗮𝘀𝘁 𝗗𝗲𝗽𝗹𝗼𝘆 <tg-emoji emoji-id="6206185428702206246">✔️</tg-emoji>
✦ 𝗡𝗼 𝗥𝗶𝗯𝗲𝘁 <tg-emoji emoji-id="6206185428702206246">✔️</tg-emoji>
✦ 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗜𝗻𝘁𝗲𝗹 <tg-emoji emoji-id="6206185428702206246">✔️</tg-emoji>
✦ 𝗥𝗲𝗴𝘂𝗹𝗲𝗿 <tg-emoji emoji-id="6206185428702206246">✔️</tg-emoji>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<tg-emoji emoji-id="5416117059207572332">➡️</tg-emoji> 𝗕𝗜𝗟𝗟𝗜𝗡𝗚 𝗚-𝗣𝗔𝗬 & 𝗩𝗜𝗦𝗔 𝗔𝗪𝗘𝗧 <tg-emoji emoji-id="5309750888452090460">✔️</tg-emoji>
<tg-emoji emoji-id="5416117059207572332">➡️</tg-emoji> 𝗖𝗟𝗢𝗨𝗗 𝗗𝗜𝗚𝗜𝗧𝗔𝗟 𝗢𝗖𝗘𝗔𝗡 𝗔𝗪𝗘𝗧 <tg-emoji emoji-id="4915963371649499973">✔️</tg-emoji>
<tg-emoji emoji-id="5416117059207572332">➡️</tg-emoji> 𝗙𝗥𝗘𝗘 𝗜𝗡𝗦𝗧𝗔𝗟𝗟 𝗣𝗔𝗡𝗘𝗟 𝗦𝗘𝗡𝗗𝗜𝗥𝗜 𝗗𝗜 𝗕𝗢𝗧 <tg-emoji emoji-id="4967762670104085632">✔️</tg-emoji>
<tg-emoji emoji-id="5416117059207572332">➡️</tg-emoji> 𝗙𝗥𝗘𝗘 𝗦𝗨𝗕 𝗗𝗢𝗠𝗔𝗜𝗡 𝗦𝗨𝗗𝗔𝗛 𝗧𝗘𝗥𝗦𝗘𝗗𝗜𝗔 𝗗𝗔𝗥𝗜 𝗕𝗢𝗧 𝗞𝗔𝗠𝗜 𝗟𝗔𝗡𝗚𝗦𝗨𝗡𝗚 <tg-emoji emoji-id="5080067857211982370">✔️</tg-emoji>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<b>ORDER DI : @RikyshopOTP_bot.</b>`;

            const keyboard = [[{ text: "BELI SEKARANG", url: `https://t.me/RikyshopOTP_bot?start=start`, style: "danger", icon_custom_emoji_id: "5359681227592854334" }]];
            
            await bot.sendMessage(channel, message, { 
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: keyboard }
            });
        }
    } catch (error) {
        console.error('Error notifying stock status:', error);
    }
}

// ==================== MENU VPS UTAMA DENGAN STOK ====================

async function showVPSMenu(chatId, userId, messageId, callbackQueryId) {
    try {
        const categories = config.VPS_CATEGORIES || {};
        const products = config.VPS_PRODUCTS || [];
        const totalStock = await getTotalVPSStock(true);
        const isOwner = owner_ids.includes(userId.toString());
        
        let message = `🛒 *KATALOG VPS DIGITALOCEAN*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 *STOK TERSEDIA:* ${totalStock} VPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 *Pilih kategori VPS:*\n\n`;
        
        for (const [key, cat] of Object.entries(categories)) {
            message += `${cat.emoji} *${cat.name}*\n`;
            message += `└ Garansi: ${cat.garansi} | Replace: ${cat.replace}\n`;
            message += `└ Harga mulai: ${formatCurrency(products.find(p => p.category === key)?.price || 0)}\n`;
            message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        }
        
        if (isOwner) {
            const freeCount = getFreeVPSCount(userId);
            const maxFree = config.MAX_FREE_VPS_PER_OWNER || 5;
            message += `\n🎁 *REPLACE UNTUK BUYER SETIA*\n`;
            message += `└ Sisa kuota: ${maxFree - freeCount} dari ${maxFree}\n`;
            message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        }
        
        const keyboard = [];
        for (const [key, cat] of Object.entries(categories)) {
            keyboard.push([{ text: `${cat.emoji} ${cat.name}`, callback_data: `vps_category_${key}` }]);
        }
        
        if (isOwner) {
            keyboard.push([{ text: "🎁 FREE VPS (Owner Only)", callback_data: "vps_free_menu" }]);
        }
        keyboard.push([{ text: "🔄 Refresh Stok", callback_data: "vps_refresh_stock" }]);
        keyboard.push([{ text: "🏠 Menu Utama", callback_data: "main_menu" }]);

        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, message, {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            });
        } else {
            await sendNewMessage(chatId, message, {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            });
        }
    } catch (error) {
        console.error('Error showVPSMenu:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// ==================== TAMPILKAN PRODUK VPS PER KATEGORI DENGAN STOK ====================

async function showVPSProductsByCategory(chatId, userId, category, messageId, callbackQueryId, page = 0) {
    try {
        // Cek stok sebelum menampilkan produk
        const stockCheck = await checkStockAndGetApi();
        
        if (!stockCheck.available) {
            await editMessage(chatId, messageId, callbackQueryId, stockCheck.message, {
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "🔄 Refresh Stok", callback_data: "vps_refresh_stock" }],
                        [{ text: "🔙 Kembali", callback_data: "vps_menu" }]
                    ]
                }
            });
            return;
        }
        
        const catInfo = config.VPS_CATEGORIES?.[category];
        if (!catInfo) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Kategori tidak ditemukan!', { parse_mode: "Markdown" });
            return;
        }
        
        const products = config.VPS_PRODUCTS?.filter(p => p.category === category) || [];
        const itemsPerPage = 3;
        const totalPages = Math.ceil(products.length / itemsPerPage);
        
        if (page < 0) page = 0;
        if (page >= totalPages && totalPages > 0) page = totalPages - 1;
        
        const startIndex = page * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, products.length);
        const pageProducts = products.slice(startIndex, endIndex);
        
        let message = `${catInfo.emoji} *${catInfo.name}*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🛡️ *Garansi:* ${catInfo.garansi}
♻️ *Replace:* ${catInfo.replace}
📦 *Stok tersedia:* ${stockCheck.stock} VPS
📄 *Halaman:* ${page + 1}/${totalPages}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 *Pilih spesifikasi VPS:*\n\n`;
        
        pageProducts.forEach((product, index) => {
            const num = startIndex + index + 1;
            message += `*${num}. ${product.name}*\n`;
            message += `   📊 ${product.label}\n`;
            message += `   💰 ${formatCurrency(product.price)}\n\n`;
        });
        
        const keyboard = [];
        
        // Tombol produk
        pageProducts.forEach((product, index) => {
            const num = startIndex + index + 1;
            keyboard.push([{ 
                text: `${num}. ${product.name} - ${formatCurrency(product.price)}`, 
                callback_data: `vps_product_${product.id}` 
            }]);
        });
        
        // Tombol navigasi halaman
        if (totalPages > 1) {
            const navRow = [];
            if (page > 0) {
                navRow.push({ text: '◀️ Prev', callback_data: `vps_category_page_${category}_${page - 1}` });
            }
            navRow.push({ text: `📄 ${page + 1}/${totalPages}`, callback_data: 'no_action' });
            if (page < totalPages - 1) {
                navRow.push({ text: 'Next ▶️', callback_data: `vps_category_page_${category}_${page + 1}` });
            }
            if (navRow.length > 0) keyboard.push(navRow);
        }
        
        keyboard.push([{ text: "🔄 Refresh Stok", callback_data: `vps_category_refresh_${category}` }]);
        keyboard.push([{ text: "🔙 Kembali ke Kategori", callback_data: "vps_menu" }]);
        keyboard.push([{ text: "🏠 Menu Utama", callback_data: "main_menu" }]);

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: "Markdown",
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error showVPSProductsByCategory:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// FREE VPS MENU UNTUK OWNER
async function showFreeVPSMenu(chatId, userId, messageId, callbackQueryId, page = 0) {
    try {
        const isOwner = owner_ids.includes(userId.toString());
        if (!isOwner) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Fitur ini hanya untuk OWNER!',
                show_alert: true
            });
            return;
        }
        
        const freeCount = getFreeVPSCount(userId);
        const maxFree = config.MAX_FREE_VPS_PER_OWNER || 5;
        const remaining = maxFree - freeCount;
        
        if (remaining <= 0) {
            await editMessage(chatId, messageId, callbackQueryId,
                `⚠️ *FREE VPS LIMIT TERCAPAI*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Anda sudah memiliki ${freeCount} free VPS.
Maksimal free VPS: ${maxFree}

Silakan gunakan VPS berbayar untuk tambahan.`,
                {
                    parse_mode: "Markdown",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "🖥️ Beli VPS Berbayar", callback_data: "vps_menu" }],
                            [{ text: "🏠 Menu Utama", callback_data: "main_menu" }]
                        ]
                    }
                }
            );
            return;
        }
        
        const products = config.VPS_PRODUCTS || [];
        const itemsPerPage = 4;
        const totalPages = Math.ceil(products.length / itemsPerPage);
        if (page < 0) page = 0;
        if (page >= totalPages && totalPages > 0) page = totalPages - 1;
        
        const startIndex = page * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, products.length);
        const pageProducts = products.slice(startIndex, endIndex);
        
        let message = `🎁 *REPLACE VPS UNTUK BUYER SETIA* 🎁
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *Sisa kuota:* ${remaining} dari ${maxFree}
📄 *Halaman:* ${page + 1}/${totalPages}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 *Pilih spesifikasi VPS (GRATIS):*\n\n`;
        
        pageProducts.forEach((product, index) => {
            const catInfo = config.VPS_CATEGORIES?.[product.category];
            const num = startIndex + index + 1;
            message += `*${num}. ${product.name}* ${catInfo?.emoji || ''}\n`;
            message += `   📊 ${product.label}\n`;
            message += `   🛡️ Garansi: ${catInfo?.garansi || '-'}\n`;
            message += `   💰 Harga: GRATIS! 🎉\n\n`;
        });
        
        const keyboard = [];
        pageProducts.forEach((product, index) => {
            const num = startIndex + index + 1;
            const catInfo = config.VPS_CATEGORIES?.[product.category];
            keyboard.push([{ 
                text: `${num}. ${product.name} ${catInfo?.emoji || ''} (Gratis)`, 
                callback_data: `vps_free_select_${product.id}` 
            }]);
        });
        
        if (totalPages > 1) {
            const navRow = [];
            if (page > 0) navRow.push({ text: '◀️ Prev', callback_data: `vps_free_menu_page_${page - 1}` });
            navRow.push({ text: `📄 ${page + 1}/${totalPages}`, callback_data: 'no_action' });
            if (page < totalPages - 1) navRow.push({ text: 'Next ▶️', callback_data: `vps_free_menu_page_${page + 1}` });
            if (navRow.length > 0) keyboard.push(navRow);
        }
        
        keyboard.push([{ text: "🔙 Kembali ke Menu VPS", callback_data: "vps_menu" }]);
        keyboard.push([{ text: "🏠 Menu Utama", callback_data: "main_menu" }]);
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: "Markdown",
            reply_markup: { inline_keyboard: keyboard }
        });
        
    } catch (error) {
        console.error('Error showFreeVPSMenu:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Pilih produk FREE VPS
async function selectFreeVPSProduct(chatId, userId, productId, messageId, callbackQueryId) {
    try {
        const isOwner = owner_ids.includes(userId.toString());
        if (!isOwner) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Fitur ini hanya untuk OWNER!',
                show_alert: true
            });
            return;
        }
        
        const freeCount = getFreeVPSCount(userId);
        const maxFree = config.MAX_FREE_VPS_PER_OWNER || 5;
        
        if (freeCount >= maxFree) {
            await editMessage(chatId, messageId, callbackQueryId,
                `⚠️ *UNTUK REPLACE VPS LIMIT TERCAPAI*\nAnda sudah memiliki ${freeCount} free VPS dari ${maxFree}.`,
                { parse_mode: "Markdown" }
            );
            return;
        }
        
        const product = config.VPS_PRODUCTS?.find(p => p.id === productId);
        if (!product) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Produk tidak ditemukan!', { parse_mode: "Markdown" });
            return;
        }
        
        const catInfo = config.VPS_CATEGORIES?.[product.category];
        
        if (!global.vpsOrderSession) global.vpsOrderSession = {};
        global.vpsOrderSession[userId] = {
            productId: productId,
            product: product,
            category: product.category,
            categoryInfo: catInfo,
            isFree: true,
            step: 'free_product_selected'
        };
        
        const osOptions = config.VPS_OS_OPTIONS || [];
        const keyboard = [];
        
        for (let i = 0; i < osOptions.length; i += 2) {
            const row = [];
            row.push({ text: osOptions[i].name, callback_data: `vps_free_os_${osOptions[i].value}` });
            if (osOptions[i + 1]) {
                row.push({ text: osOptions[i + 1].name, callback_data: `vps_free_os_${osOptions[i + 1].value}` });
            }
            keyboard.push(row);
        }
        
        keyboard.push([{ text: "🔙 Kembali", callback_data: "vps_free_menu" }]);
        
        await editMessage(chatId, messageId, callbackQueryId,
            `🎁 *REPLACE VPS - ${product.name}* ${catInfo?.emoji || ''}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 *Spesifikasi:*
${product.label}
🛡️ *Garansi:* ${catInfo?.garansi || '-'}
♻️ *Replace:* ${catInfo?.replace || '-'}
💰 *Harga:* GRATIS! 🎉
📊 *Free VPS ke-${freeCount + 1} dari ${maxFree}*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *Pilih Operating System:*`,
            {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            }
        );
        
    } catch (error) {
        console.error('Error selectFreeVPSProduct:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// FREE VPS - Pilih OS
async function selectFreeVPSOS(chatId, userId, osValue, messageId, callbackQueryId) {
    try {
        const session = global.vpsOrderSession?.[userId];
        if (!session || !session.isFree) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Sesi tidak ditemukan. Silakan pilih VPS dari awal.', { parse_mode: "Markdown" });
            return;
        }
        
        const osOptions = config.VPS_OS_OPTIONS || [];
        const osName = osOptions.find(o => o.value === osValue)?.name || osValue;
        
        session.os = osValue;
        session.osName = osName;
        session.step = 'free_os_selected';
        
        const regions = config.VPS_REGION_OPTIONS || [];
        const keyboard = [];
        
        for (let i = 0; i < regions.length; i += 2) {
            const row = [];
            row.push({ text: regions[i].name, callback_data: `vps_free_region_${regions[i].value}` });
            if (regions[i + 1]) {
                row.push({ text: regions[i + 1].name, callback_data: `vps_free_region_${regions[i + 1].value}` });
            }
            keyboard.push(row);
        }
        
        keyboard.push([{ text: "🔙 Kembali", callback_data: `vps_free_select_${session.productId}` }]);
        
        await editMessage(chatId, messageId, callbackQueryId,
            `💻 *OS Dipilih:* ${osName}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌍 *Pilih Region VPS (REPLACE):*`,
            {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            }
        );
        
    } catch (error) {
        console.error('Error selectFreeVPSOS:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// FREE VPS - Pilih Region dan PROSES LANGSUNG
async function selectFreeVPSRegion(chatId, userId, regionValue, messageId, callbackQueryId) {
    try {
        const session = global.vpsOrderSession?.[userId];
        if (!session || !session.isFree) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Sesi tidak ditemukan.', { parse_mode: "Markdown" });
            return;
        }
        
        const stockCheck = await checkStockAndGetApi();
        if (!stockCheck.available) {
            await editMessage(chatId, messageId, callbackQueryId, stockCheck.message, {
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "🔄 Refresh Stok", callback_data: "vps_refresh_stock" }],
                        [{ text: "🔙 Kembali", callback_data: "vps_free_menu" }]
                    ]
                }
            });
            return;
        }
        
        const regions = config.VPS_REGION_OPTIONS || [];
        const region = regions.find(r => r.value === regionValue);
        if (!region) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Region tidak ditemukan!', { parse_mode: "Markdown" });
            return;
        }
        
        session.region = regionValue;
        session.regionName = region.name;
        session.apiKey = stockCheck.apiKey;
        
        // LANGSUNG BUAT FREE VPS
        await executeCreateFreeVPS(chatId, userId, session, messageId, callbackQueryId);
        
    } catch (error) {
        console.error('Error selectFreeVPSRegion:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// EKSEKUSI PEMBUATAN FREE VPS
async function executeCreateFreeVPS(chatId, userId, session, messageId, callbackQueryId) {
    try {
        const product = session.product;
        const freeCount = getFreeVPSCount(userId);
        const maxFree = config.MAX_FREE_VPS_PER_OWNER || 5;
        
        if (freeCount >= maxFree) {
            await editMessage(chatId, messageId, callbackQueryId,
                `⚠️ *FREE VPS LIMIT TERCAPAI*\nAnda sudah memiliki ${freeCount} free VPS dari ${maxFree}.`,
                { parse_mode: "Markdown" }
            );
            return;
        }
        
        // Hapus pesan sebelumnya
        await bot.deleteMessage(chatId, messageId).catch(() => {});
        
        const processingMsg = await sendNewMessage(chatId,
            `🎁 *REPLACE VPS UNTUK BUYER SETIA* 🎁
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🖥️ *Paket:* ${product.name}
📊 *Spesifikasi:* ${product.label}
💻 *OS:* ${session.osName}
🌍 *Region:* ${session.regionName}
📊 *Free VPS ke-${freeCount + 1} dari ${maxFree}*

⏱️ *Mohon tunggu, proses pembuatan VPS memakan waktu 1-2 menit...*`,
            { parse_mode: "Markdown" }
        );
        
        const specs = {
            plan: product.plan,
            os: session.os,
            region: session.region,
            category: session.category,
            os_name: session.osName
        };
        
        const vpsResult = await createVPS(specs, session.apiKey);
        const ip = await getVPSIP(vpsResult.dropletId, session.apiKey);
        
        await bot.deleteMessage(chatId, processingMsg.message_id).catch(() => {});
        
        const created = new Date().toLocaleString("id-ID", {
            timeZone: "Asia/Jakarta",
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
        
        const kodeTrx = `FREE${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        
        const orders = loadVPSOrders();
        const newOrder = {
            id: kodeTrx,
            userId: userId.toString(),
            username: userId,
            hostname: vpsResult.hostname,
            ip: ip,
            password: vpsResult.password,
            region: session.region,
            regionName: session.regionName,
            os: session.os,
            osName: session.osName,
            productId: session.productId,
            productName: `🎁 FREE - ${product.name}`,
            plan: product.plan,
            label: product.label,
            price: 0,
            fee: 0,
            total: 0,
            garansi: session.categoryInfo?.garansi,
            replace: session.categoryInfo?.replace,
            dropletId: vpsResult.dropletId,
            status: 'active',
            isFree: true,
            createdAt: new Date().toISOString()
        };
        
        orders.orders.push(newOrder);
        orders.stats.totalOrders++;
        saveVPSOrders(orders);
        
        const freeOrders = loadFreeVPSOrders();
        freeOrders.orders.push({
            id: kodeTrx,
            userId: userId.toString(),
            productId: session.productId,
            productName: product.name,
            specs: product.label,
            region: session.regionName,
            os: session.osName,
            createdAt: new Date().toISOString()
        });
        freeOrders.stats.totalOrders++;
        saveFreeVPSOrders(freeOrders);
        
        await getTotalVPSStock(true);
        
        const successMsg = `
🎁 *REPLACE VPS BUYER BERHASIL DIBUAT!* 🎁
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🖥️ *INFORMASI LOGIN VPS:*
━━━━━━━━━━━━━━━━━━━━━━━
🌐 *IP ADDRESS:* \`${ip}\`
👤 *USERNAME:* \`root\`
🔐 *PASSWORD:* \`${vpsResult.password}\`
🧩 *HOSTNAME:* ${vpsResult.hostname}
━━━━━━━━━━━━━━━━━━━━━━━

📦 *DETAIL PESANAN (FREE):*
🖥️ *Paket:* ${product.name}
📊 *Spesifikasi:* ${product.label}
💻 *OS:* ${session.osName}
🌍 *Region:* ${session.regionName}
🛡️ *Garansi:* ${session.categoryInfo?.garansi || '-'}
♻️ *Replace:* ${session.categoryInfo?.replace || '-'}
💰 *Harga:* GRATIS! 🎉
📊 *Free VPS ke-${freeCount + 1} dari ${maxFree}*
📅 *Tanggal:* ${created}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ *PENTING:*
• REPLACE UNTUK BUYER SETIA hanya sebagai pembelajaran
• Garansi tetap berlaku
• Jangan disalahgunakan
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

        await sendNewMessage(chatId, successMsg, { parse_mode: "Markdown" });
        
        // Notifikasi ke channel
        const botInfo = await bot.getMe();
        await bot.sendMessage(config.channel,
            `🎁 *REPLACE VPS DIBUAT UNTUK BUYER SETIA* 🎁
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👑 *Owner ID:* \`${userId}\`
🖥️ *Paket:* ${product.name}
📊 *Spesifikasi:* ${product.label}
🌍 *Region:* ${session.regionName}
💻 *OS:* ${session.osName}
📅 *Waktu:* ${created}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ REPLACE VPS telah berhasil dibuat!`,
            { parse_mode: "Markdown" }
        ).catch(() => {});
        
        delete global.vpsOrderSession[userId];
        
    } catch (error) {
        console.error('Error executeCreateFreeVPS:', error);
        await sendNewMessage(chatId,
            `❌ *GAGAL REPLACE UNTUK BUYER SETIA*\n━━━━━━━━━━━━━━━━━━━━━━━\n\nError: ${error.message}\n\nSilakan coba lagi.`,
            { parse_mode: "Markdown" }
        );
    }
}
// ==================== PILIH PRODUK VPS DENGAN CEK STOK ====================

async function selectVPSProduct(chatId, userId, productId, messageId, callbackQueryId) {
    try {
        // Cek stok sebelum memilih produk
        const stockCheck = await checkStockAndGetApi();
        
        if (!stockCheck.available) {
            await editMessage(chatId, messageId, callbackQueryId, stockCheck.message, {
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "🔄 Refresh Stok", callback_data: "vps_refresh_stock" }],
                        [{ text: "🔙 Kembali", callback_data: "vps_menu" }]
                    ]
                }
            });
            return;
        }
        
        const product = config.VPS_PRODUCTS?.find(p => p.id === productId);
        if (!product) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Produk tidak ditemukan!', { parse_mode: "Markdown" });
            return;
        }
        
        const catInfo = config.VPS_CATEGORIES?.[product.category];
        const isOwner = owner_ids.includes(userId.toString());
        const freeCount = isOwner ? getFreeVPSCount(userId) : 0;
        const maxFree = config.MAX_FREE_VPS_PER_OWNER || 5;
        const hasFreeQuota = isOwner && freeCount < maxFree;
        
        // Save to session
        if (!global.vpsOrderSession) global.vpsOrderSession = {};
        global.vpsOrderSession[userId] = {
            productId: productId,
            product: product,
            category: product.category,
            categoryInfo: catInfo,
            step: 'product_selected'
        };

        const osOptions = config.VPS_OS_OPTIONS || [];
        const keyboard = [];
        
        // Tombol OS - 2 per baris
        for (let i = 0; i < osOptions.length; i += 2) {
            const row = [];
            row.push({ text: osOptions[i].name, callback_data: `vps_os_${osOptions[i].value}` });
            if (osOptions[i + 1]) {
                row.push({ text: osOptions[i + 1].name, callback_data: `vps_os_${osOptions[i + 1].value}` });
            }
            keyboard.push(row);
        }
        
        keyboard.push([{ text: "🔄 Refresh Stok", callback_data: `vps_category_refresh_${product.category}` }]);
        keyboard.push([{ text: "🔙 Kembali ke Kategori", callback_data: `vps_category_${product.category}` }]);
        
        // Tambahan untuk owner: Info free VPS
        let freeInfo = "";
        let freeButton = [];
        
        if (isOwner) {
            freeInfo = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎁 *REPLACE UNTUK BUYER SETIA*
📊 REPLACE VPS tersisa: ${maxFree - freeCount} dari ${maxFree}
💰 Harga: GRATIS!
⚠️ Klik tombol "🎁 REPLACE VPS" untuk membuat gratis`;
            
            if (hasFreeQuota) {
                freeButton = [{ text: "🎁 REPLACE VPS (Gratis)", callback_data: `vps_free_${productId}` }];
            } else {
                freeButton = [{ text: `🎁 REPLACE VPS (Limit ${freeCount}/${maxFree})`, callback_data: "no_action" }];
            }
        }

        await editMessage(chatId, messageId, callbackQueryId,
            `🖥️ <b>${product.name}</b> ${catInfo?.emoji || ''}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 <b>Spesifikasi:</b>
${product.label}
🛡️ <b>Garansi:</b> ${catInfo?.garansi || '-'}
♻️ <b>Replace:</b> ${catInfo?.replace || '-'}
💰 <b>Harga:</b> ${formatCurrency(product.price)}
📦 <b>Stok tersedia:</b> ${stockCheck.stock} VPS
${freeInfo}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 <b>Pilih Operating System:</b>`,
            {
                parse_mode: "HTML",
                reply_markup: { inline_keyboard: keyboard }
            }
        );
        
        // Kirim pesan terpisah untuk tombol free VPS jika ada
        if (freeButton.length > 0 && hasFreeQuota) {
            await sendNewMessage(chatId, `🎁 *Pilihan Khusus Owner* 🎁\n\nKlik tombol di bawah untuk membuat VPS GRATIS (tanpa pembayaran):`, {
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [freeButton]
                }
            });
        }

    } catch (error) {
        console.error('Error selectVPSProduct:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// ==================== PILIH OS ====================

async function selectVPSOS(chatId, userId, osValue, messageId, callbackQueryId) {
    try {
        const session = global.vpsOrderSession?.[userId];
        if (!session) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Sesi tidak ditemukan. Silakan pilih VPS dari awal.', { parse_mode: "Markdown" });
            return;
        }

        const osOptions = config.VPS_OS_OPTIONS || [];
        const osName = osOptions.find(o => o.value === osValue)?.name || osValue;
        
        session.os = osValue;
        session.osName = osName;
        session.step = 'os_selected';

        const regions = config.VPS_REGION_OPTIONS || [];
        const keyboard = [];
        
        // Tombol region - 2 per baris
        for (let i = 0; i < regions.length; i += 2) {
            const row = [];
            row.push({ text: regions[i].name, callback_data: `vps_region_${regions[i].value}` });
            if (regions[i + 1]) {
                row.push({ text: regions[i + 1].name, callback_data: `vps_region_${regions[i + 1].value}` });
            }
            keyboard.push(row);
        }
        
        keyboard.push([{ text: "🔙 Kembali", callback_data: `vps_product_${session.productId}` }]);

        await editMessage(chatId, messageId, callbackQueryId,
            `💻 *OS Dipilih:* ${osName}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌍 *Pilih Region VPS:*`,
            {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            }
        );

    } catch (error) {
        console.error('Error selectVPSOS:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Handle VPS payment with balance
async function handleVPSPaymentWithBalance(chatId, userId, regionValue, messageId, callbackQueryId) {
    try {
        const session = global.vpsOrderSession?.[userId];
        if (!session) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Sesi tidak ditemukan.', { parse_mode: 'HTML' });
            return;
        }

        const product = session.product;
        const price = product.price;
        const userBalance = getUserBalance(userId);
        
        if (userBalance < price) {
            await editMessage(chatId, messageId, callbackQueryId,
                `❌ *SALDO TIDAK CUKUP!*\n\nSaldo Anda: ${formatCurrency(userBalance)}\nHarga VPS: ${formatCurrency(price)}\n\nSilakan deposit terlebih dahulu.`,
                { parse_mode: 'Markdown' }
            );
            return;
        }

        // Konfirmasi pembayaran dengan saldo
        const message = `✅ <b>KONFIRMASI PEMBAYARAN DENGAN SALDO</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🖥️ <b>Paket:</b> ${product.name}
💰 <b>Harga:</b> ${formatCurrency(price)}
💳 <b>Saldo Anda:</b> ${formatCurrency(userBalance)}
💳 <b>Saldo setelah pembayaran:</b> ${formatCurrency(userBalance - price)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ <b>Konfirmasi pembayaran dengan saldo?</b>

Klik <b>Ya, Bayar</b> untuk melanjutkan.`;

        const keyboard = [
            [
                { text: "✅ Ya, Bayar Pakai Saldo", callback_data: `vps_confirm_balance_${regionValue}` },
                { text: "❌ Batal", callback_data: `vps_region_${regionValue}` }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error handleVPSPaymentWithBalance:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Execute VPS purchase with balance
async function executeVPSPurchaseWithBalance(chatId, userId, regionValue, messageId, callbackQueryId) {
    try {
        const session = global.vpsOrderSession?.[userId];
        if (!session) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Sesi tidak ditemukan.', { parse_mode: 'HTML' });
            return;
        }

        const product = session.product;
        const price = product.price;
        const userBalance = getUserBalance(userId);
        
        if (userBalance < price) {
            await editMessage(chatId, messageId, callbackQueryId,
                `❌ Saldo tidak cukup! Saldo Anda: ${formatCurrency(userBalance)}`,
                { parse_mode: 'Markdown' }
            );
            return;
        }

        // Potong saldo
        const deductSuccess = deductUserBalance(userId, price);
        if (!deductSuccess) {
            await editMessage(chatId, messageId, callbackQueryId,
                `❌ Gagal memotong saldo. Silakan coba lagi.`,
                { parse_mode: 'Markdown' }
            );
            return;
        }

        // Buat session payment untuk diproses
        const kodeTrx = `VPS${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        
        const paymentSession = {
            msgId: messageId,
            chatId: chatId,
            kodeTrx: kodeTrx,
            session: session,
            price: price,
            fee: 0,
            totalBayar: price,
            status: true,
            processed: false
        };

        // Proses pembuatan VPS
        await handleSuccessfulVPSCreation(userId, paymentSession);
        
        // Hapus session
        delete global.vpsOrderSession[userId];

    } catch (error) {
        console.error('Error executeVPSPurchaseWithBalance:', error);
        
        // Refund jika gagal
        addUserBalance(userId, price);
        
        await editMessage(chatId, messageId, callbackQueryId,
            `❌ Gagal memproses pembelian.\n\nError: ${error.message}\n\nSaldo telah dikembalikan.`,
            { parse_mode: 'Markdown' }
        );
    }
}

// ==================== PILIH REGION & BUAT QRIS DENGAN CEK STOK AKHIR ====================

async function selectVPSRegion(chatId, userId, regionValue, messageId, callbackQueryId) {
    try {
        // Cek stok sebelum final
        const stockCheck = await checkStockAndGetApi();
        
        if (!stockCheck.available) {
            await editMessage(chatId, messageId, callbackQueryId, stockCheck.message, {
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "🔄 Refresh Stok", callback_data: "vps_refresh_stock" }],
                        [{ text: "🔙 Kembali", callback_data: "vps_menu" }]
                    ]
                }
            });
            return;
        }
        
        const session = global.vpsOrderSession?.[userId];
        if (!session) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Sesi tidak ditemukan. Silakan pilih VPS dari awal.', { parse_mode: "Markdown" });
            return;
        }

        const regions = config.VPS_REGION_OPTIONS || [];
        const region = regions.find(r => r.value === regionValue);
        if (!region) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Region tidak ditemukan!', { parse_mode: "Markdown" });
            return;
        }

        session.region = regionValue;
        session.regionName = region.name;
        session.step = 'ready_for_payment';
        session.apiKey = stockCheck.apiKey;

        const userBalance = getUserBalance(userId);
        const product = session.product;
        const price = product.price;
        const canUseBalance = userBalance >= price;
        
        let message = `🖥️ <b>${product.name}</b> ${session.categoryInfo?.emoji || ''}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 <b>Spesifikasi:</b>
${product.label}
🛡️ <b>Garansi:</b> ${session.categoryInfo?.garansi || '-'}
♻️ <b>Replace:</b> ${session.categoryInfo?.replace || '-'}
💻 <b>OS:</b> ${session.osName}
🌍 <b>Region:</b> ${session.regionName}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 <b>Harga:</b> ${formatCurrency(price)}
💳 <b>Saldo Anda:</b> ${formatCurrency(userBalance)}

${canUseBalance ? '✅ Saldo cukup untuk membeli dengan saldo!' : '❌ Saldo tidak cukup untuk membeli dengan saldo. Silakan deposit atau gunakan QRIS.'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<b>Pilih metode pembayaran:</b>`;

        const keyboard = [];
        
        // Tombol QRIS (selalu tersedia)
        keyboard.push([{ text: "🏦 BAYAR PAKAI QRIS", callback_data: `vps_pay_qris_${regionValue}` }]);
        
        // Tombol Bayar Pakai Saldo (jika cukup)
        if (canUseBalance) {
            keyboard.push([{ text: "💰 BAYAR PAKAI SALDO", callback_data: `vps_pay_balance_${regionValue}` }]);
        }
        
        keyboard.push([{ text: "🔙 Kembali", callback_data: `vps_os_${session.os}` }]);
        keyboard.push([{ text: "🏠 Menu Utama", callback_data: "main_menu" }]);

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error selectVPSRegion:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// ==================== BUAT QRIS PAYMENT ====================

async function createVPSPaymentQRIS(chatId, userId, session, messageId, callbackQueryId, stockCheck) {
    try {
        const product = session.product;
        const price = product.price;
        const minFee = 100;
        const maxFee = 600;
        const feeTrx = Math.floor(Math.random() * (maxFee - minFee + 1)) + minFee;
        const totalBayar = price + feeTrx;
        const kodeTrx = `VPS${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

        if (activeVPSSession[userId]) {
            await editMessage(chatId, messageId, callbackQueryId,
                '❗ Masih ada transaksi aktif. Silakan selesaikan atau batalkan terlebih dahulu.\n\nKetik /batalkanvps untuk membatalkan.',
                { parse_mode: 'Markdown' }
            );
            return;
        }

        const loadingMsg = await sendNewMessage(chatId, '⏳ Menyiapkan pembayaran...', { parse_mode: 'HTML' });

        const pakasirApiKey = config.pakasirApiKey || 'YOUR_API_KEY';
        const pakasirProject = config.pakasirProject || 'YOUR_PROJECT_ID';

        const res = await axios.post(
            'https://app.pakasir.com/api/transactioncreate/qris',
            {
                project: pakasirProject,
                order_id: kodeTrx,
                amount: totalBayar,
                api_key: pakasirApiKey
            },
            {
                headers: { 'Content-Type': 'application/json' },
                timeout: 15000
            }
        );

        const payment = res.data?.payment;

        if (!payment || !payment.payment_number) {
            await editMessage(chatId, loadingMsg.message_id, null,
                `❌ Gagal membuat QRIS (Pakasir)\n${res.data?.message || 'Error'}`,
                { parse_mode: 'HTML' }
            );
            return;
        }

        const qrBuffer = await QRCode.toBuffer(payment.payment_number, {
            type: 'png',
            errorCorrectionLevel: 'H',
            margin: 4,
            scale: 12,
            width: 2048
        }).catch(() => null);

        if (!qrBuffer) {
            await editMessage(chatId, loadingMsg.message_id, null, '❌ Gagal membuat QR Code.', { parse_mode: 'HTML' });
            return;
        }

        await bot.deleteMessage(chatId, loadingMsg.message_id).catch(() => {});

        const message = `
🏦 *PEMBELIAN VPS - QRIS PAKASIR* 🏦
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🖥️ *Paket:* ${product.name}
📊 *Spesifikasi:* ${product.label}
🛡️ *Garansi:* ${session.categoryInfo?.garansi || '-'}
♻️ *Replace:* ${session.categoryInfo?.replace || '-'}
💻 *OS:* ${session.osName}
🌍 *Region:* ${session.regionName}
📦 *Stok tersedia:* ${stockCheck?.stock || '?'} VPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧾 *ID Transaksi:* \`${kodeTrx}\`
💰 Harga VPS: ${formatCurrency(price)}
🧾 Biaya Admin: ${formatCurrency(feeTrx)}
💳 Total Pembayaran: ${formatCurrency(totalBayar)}
⏰ Masa Aktif QR: 60 Menit
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 *Panduan Pembayaran:*
1️⃣ Buka aplikasi e-wallet / m-banking
2️⃣ Pilih menu QRIS / Scan QR
3️⃣ Scan kode QR di atas
4️⃣ Konfirmasi pembayaran

⚠️ *Catatan:* VPS akan otomatis dibuat setelah pembayaran berhasil!`;

        const sentMsg = await bot.sendPhoto(chatId, qrBuffer, {
            caption: message,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [
                    [{ text: "✅ Cek Status Pembayaran", callback_data: `vps_cek_status_${kodeTrx}` }],
                    [{ text: "❌ Batalkan", callback_data: `vps_batal_${kodeTrx}` }]
                ],
            },
        });

        const expireMinutes = 60;
        const graceSec = 20;
        const serverExp = new Date(payment.expired_at).getTime();
        const localExp = Date.now() + (expireMinutes * 60 * 1000);
        const hardStop = Math.min(localExp, serverExp + (graceSec * 1000));

        const statusUrl = `https://app.pakasir.com/api/transactiondetail?project=${encodeURIComponent(pakasirProject)}&amount=${encodeURIComponent(payment.amount)}&order_id=${encodeURIComponent(payment.order_id)}&api_key=${encodeURIComponent(pakasirApiKey)}`;

        activeVPSSession[userId] = {
            msgId: sentMsg.message_id,
            chatId,
            kodeTrx,
            session: session,
            totalBayar,
            price,
            fee: feeTrx,
            statusUrl,
            status: true,
            processed: false,
            orderId: payment.order_id,
            timeout: setTimeout(async () => {
                if (activeVPSSession[userId]?.status) {
                    await handleExpiredVPSSession(userId, kodeTrx);
                    delete activeVPSSession[userId];
                }
            }, hardStop - Date.now()),
        };

        // Start monitoring payment
        monitorVPSPaymentStatus(userId, kodeTrx);

    } catch (error) {
        console.error('Error createVPSPaymentQRIS:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Create panel order with QRIS (Pakasir)
async function createPanelOrderQRIS(chatId, userId, productKey) {
    try {
        const product = PANEL_PRODUCTS[productKey];
        if (!product) {
            await sendNewMessage(chatId, '❌ Paket tidak ditemukan!', { parse_mode: 'HTML' });
            return null;
        }
        
        const jumlah = product.price;
        const minFee = 100;
        const maxFee = 300;
        const FeeTrx = Math.floor(Math.random() * (maxFee - minFee + 1)) + minFee;
        const totalBayar = jumlah + FeeTrx;
        const kodeTrx = `PANEL${Date.now()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
        
        if (activePanelDeposit[userId]) {
            await sendNewMessage(chatId, 
                '❗ Masih ada transaksi aktif.\nKetik /batalkan untuk membatalkan.',
                { parse_mode: 'HTML' }
            );
            return null;
        }
        
        const loadingMsg = await sendNewMessage(chatId, '⏳ Menyiapkan pembayaran...', { parse_mode: 'HTML' });
        
        const pakasirApiKey = config.pakasirApiKey || 'YOUR_API_KEY';
        const pakasirProject = config.pakasirProject || 'YOUR_PROJECT_ID';
        
        const res = await axios.post(
            'https://app.pakasir.com/api/transactioncreate/qris',
            {
                project: pakasirProject,
                order_id: kodeTrx,
                amount: totalBayar,
                api_key: pakasirApiKey
            },
            {
                headers: { 'Content-Type': 'application/json' },
                timeout: 15000
            }
        );
        
        const payment = res.data?.payment;
        
        if (!payment || !payment.payment_number) {
            await editMessage(chatId, loadingMsg.message_id, null,
                `❌ Gagal membuat QRIS (Pakasir)\n${res.data?.message || 'Error'}`,
                { parse_mode: 'HTML' }
            );
            return null;
        }
        
        const qrBuffer = await QRCode.toBuffer(payment.payment_number, {
            type: 'png',
            errorCorrectionLevel: 'H',
            margin: 4,
            scale: 12,
            width: 2048
        }).catch(() => null);
        
        if (!qrBuffer) {
            await editMessage(chatId, loadingMsg.message_id, null, '❌ Gagal membuat QR Code.', { parse_mode: 'HTML' });
            return null;
        }
        
        await bot.deleteMessage(chatId, loadingMsg.message_id).catch(() => {});
        
const message = `
🏦 *PEMBELIAN PANEL - QRIS PAKASIR* 🏦
━━━━━━━━━━━━━━━━━━━━━━━
🖥️ *Paket:* ${product.name}
🧾 *ID Transaksi:* \`${kodeTrx}\`
💰 Harga Panel: ${formatCurrency(jumlah)}
🧾 Biaya Admin: ${formatCurrency(FeeTrx)}
💳 Total Pembayaran: ${formatCurrency(totalBayar)}
⏰ Masa Aktif: 60 Menit

💡 *Panduan Pembayaran:*
1. Buka aplikasi e-wallet / m-banking
2. Pilih menu QRIS / Scan QR
3. Scan kode QR di atas
4. Konfirmasi pembayaran

⚠️ *Catatan:*
• Panel akan otomatis dibuat setelah pembayaran sukses
• Transaksi otomatis batal setelah 60 menit

📝 *Setelah pembayaran sukses, kirimkan USERNAME Anda:*
Contoh: \`johndoe\`

📧 *Email akan otomatis dibuat:*
\`username@achastore.icu\`
`.trim();
        
        const sentMsg = await bot.sendPhoto(chatId, qrBuffer, {
            caption: message,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [
                    [{ text: "❌ Batalkan Pembelian", callback_data: `batalkan_panel_${kodeTrx}` }],
                ],
            },
        });
        
        const expireMinutes = 60;
        const graceSec = 20;
        const serverExp = new Date(payment.expired_at).getTime();
        const localExp = Date.now() + (expireMinutes * 60 * 1000);
        const hardStop = Math.min(localExp, serverExp + (graceSec * 1000));
        
        const statusUrl = `https://app.pakasir.com/api/transactiondetail?project=${encodeURIComponent(pakasirProject)}&amount=${encodeURIComponent(payment.amount)}&order_id=${encodeURIComponent(payment.order_id)}&api_key=${encodeURIComponent(pakasirApiKey)}`;
        
        activePanelDeposit[userId] = {
            msgId: sentMsg.message_id,
            chatId,
            kodeTrx,
            productKey: productKey,
            productName: product.name,
            productDisk: product.disk,
            productMemory: product.memory,
            productCpu: product.cpu,
            totalBayar,
            jumlah,
            fee: FeeTrx,
            statusUrl,
            localExp,
            serverExp,
            hardStop,
            status: true,
            processed: false,
            awaitingInfo: false,
            type: 'user',
            timeout: setTimeout(async () => {
                if (activePanelDeposit[userId]?.status) {
                    await handleExpiredPanelOrder(userId, kodeTrx, payment.order_id, jumlah);
                    delete activePanelDeposit[userId];
                }
            }, hardStop - Date.now()),
        };
        
        monitorPanelPayment(userId, kodeTrx, product);
        
        return { success: true, kodeTrx };
        
    } catch (error) {
        console.error('Error createPanelOrderQRIS:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
        return null;
    }
}

// ==================== MONITOR PAYMENT ====================

async function monitorVPSPaymentStatus(userId, kodeTrx) {
    const session = activeVPSSession[userId];
    if (!session) return;

    while (activeVPSSession[userId] && activeVPSSession[userId].status) {
        await new Promise(resolve => setTimeout(resolve, 8000));

        try {
            const cek = await axios.get(session.statusUrl, { timeout: 15000 });
            const transaction = cek.data?.transaction;
            const status = (transaction?.status || '').toLowerCase();

            if (status === "completed" || status === "settlement") {
                if (activeVPSSession[userId].processed) continue;

                activeVPSSession[userId].status = false;
                activeVPSSession[userId].processed = true;
                clearTimeout(activeVPSSession[userId].timeout);

                await handleSuccessfulVPSCreation(userId, session);
                delete activeVPSSession[userId];
                break;
            }
        } catch (error) {
            console.error('Error checking VPS payment:', error.message);
        }
    }
}

// ==================== HANDLE EXPIRED ====================

async function handleExpiredVPSSession(userId, kodeTrx) {
    try {
        const session = activeVPSSession[userId];
        if (!session) return;
        
        const expiredMsg = `
⏰ *TRANSAKSI VPS EXPIRED* ⏰
━━━━━━━━━━━━━━━━━━━━━━━
🧾 *ID Transaksi:* \`${kodeTrx}\`
🖥️ *Paket:* ${session.session.product.name}
💰 Harga: ${formatCurrency(session.price)}
💳 Metode: QRIS Pakasir
❌ Status: Dibatalkan otomatis karena melebihi batas waktu.
━━━━━━━━━━━━━━━━━━━━━━━
Silakan lakukan pemesanan ulang jika masih ingin membeli VPS.`;
        
        await bot.deleteMessage(session.chatId, session.msgId).catch(() => {});
        await sendNewMessage(session.chatId, expiredMsg, { parse_mode: "Markdown" });
        
        for (const ownerId of owner_ids) {
            await bot.sendMessage(ownerId, 
                `🚨 *TRANSAKSI VPS EXPIRED*\n━━━━━━━━━━━━━━━━━━━━━━━\n👤 User: ${userId}\n🖥️ Paket: ${session.session.product.name}\n💰 Harga: ${formatCurrency(session.price)}\n🧾 Kode: \`${kodeTrx}\`\n❌ Status: Expired`,
                { parse_mode: "Markdown" }
            ).catch(() => {});
        }
        
    } catch (err) {
        console.error("Error handling expired VPS session:", err.message);
    }
}

// ==================== CEK STATUS ====================

async function checkVPSPaymentStatus(chatId, userId, kodeTrx, messageId, callbackQueryId) {
    try {
        const session = activeVPSSession[userId];
        if (!session || session.kodeTrx !== kodeTrx) {
            await editMessage(chatId, messageId, callbackQueryId,
                '❌ Transaksi tidak ditemukan atau sudah tidak aktif.',
                { parse_mode: 'Markdown' }
            );
            return;
        }

        await editMessage(chatId, messageId, callbackQueryId,
            '⏳ Mengecek status pembayaran...',
            { parse_mode: 'Markdown' }
        );

        const cek = await axios.get(session.statusUrl, { timeout: 15000 });
        const transaction = cek.data?.transaction;
        const status = (transaction?.status || '').toLowerCase();

        if (status === "completed" || status === "settlement") {
            await editMessage(chatId, messageId, callbackQueryId,
                '✅ *PEMBAYARAN BERHASIL!*\n\nVPS sedang dibuat. Mohon tunggu sebentar...',
                { parse_mode: 'Markdown' }
            );
            
            if (!session.processed) {
                session.status = false;
                session.processed = true;
                clearTimeout(session.timeout);
                await handleSuccessfulVPSCreation(userId, session);
                delete activeVPSSession[userId];
            }
        } else if (status === "pending") {
            await editMessage(chatId, messageId, callbackQueryId,
                `⏳ *MENUNGGU PEMBAYARAN*\n━━━━━━━━━━━━━━━━━━━━━━━\n🧾 *ID Transaksi:* \`${kodeTrx}\`\n💳 *Status:* Menunggu pembayaran\n💰 *Total:* ${formatCurrency(session.totalBayar)}\n\nSilakan selesaikan pembayaran Anda.`,
                { 
                    parse_mode: 'Markdown',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "🔄 Cek Lagi", callback_data: `vps_cek_status_${kodeTrx}` }],
                            [{ text: "❌ Batalkan", callback_data: `vps_batal_${kodeTrx}` }]
                        ]
                    }
                }
            );
        } else {
            await editMessage(chatId, messageId, callbackQueryId,
                `❌ *PEMBAYARAN GAGAL/EXPIRED*\n━━━━━━━━━━━━━━━━━━━━━━━\n🧾 *ID Transaksi:* \`${kodeTrx}\`\n💳 *Status:* ${status.toUpperCase()}\n\nSilakan lakukan pemesanan ulang.`,
                { 
                    parse_mode: 'Markdown',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "🖥️ Beli VPS Lagi", callback_data: "vps_menu" }]
                        ]
                    }
                }
            );
            delete activeVPSSession[userId];
        }

    } catch (error) {
        await editMessage(chatId, messageId, callbackQueryId,
            `❌ Gagal mengecek status.\n\nError: ${error.message}`,
            { parse_mode: 'Markdown' }
        );
    }
}

// ==================== BATALKAN TRANSAKSI ====================

async function cancelVPSTransaction(chatId, userId, kodeTrx, messageId, callbackQueryId) {
    try {
        const session = activeVPSSession[userId];
        
        if (!session || session.kodeTrx !== kodeTrx) {
            if (messageId && callbackQueryId) {
                await editMessage(chatId, messageId, callbackQueryId,
                    '❌ Transaksi tidak ditemukan atau sudah tidak aktif.',
                    { parse_mode: 'Markdown' }
                );
            }
            return;
        }
        
        clearTimeout(session.timeout);
        await bot.deleteMessage(chatId, session.msgId).catch(() => {});
        delete activeVPSSession[userId];
        delete global.vpsOrderSession[userId];
        
        const cancelMsg = '✅ *TRANSAKSI DIBATALKAN*\n━━━━━━━━━━━━━━━━━━━━━━━\n\nSilakan lakukan pemesanan ulang jika ingin membeli VPS.';
        
        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, cancelMsg, {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "🖥️ Beli VPS Lagi", callback_data: "vps_menu" }],
                        [{ text: "🏠 Menu Utama", callback_data: "main_menu" }]
                    ]
                }
            });
        } else {
            await sendNewMessage(chatId, cancelMsg, { parse_mode: "Markdown" });
        }
        
    } catch (error) {
        console.error('Error cancelVPSTransaction:', error);
        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
        }
    }
}

// ==================== REFRESH STOK ====================

async function refreshVPSStock(chatId, userId, messageId, callbackQueryId, returnTo = 'vps_menu') {
    try {
        await editMessage(chatId, messageId, callbackQueryId,
            '🔄 *MEMPERBARUI INFORMASI STOK...*\n\nMohon tunggu sebentar...',
            { parse_mode: 'Markdown' }
        );
        
        const totalStock = await getTotalVPSStock(true);
        const minStock = config.MIN_STOCK_WARNING || 3;
        const stockStatus = totalStock <= 0 ? "HABIS" : (totalStock <= minStock ? "MENIPIS" : "READY");
        
        const message = `✅ *STOK DIPERBARUI*
━━━━━━━━━━━━━━━━━━━━━━━
📦 *Stok tersedia:* ${totalStock} VPS
📊 *Status:* ${stockStatus}
🕐 *Update:* ${new Date().toLocaleString('id-ID')}

${totalStock > 0 ? 'Silakan lanjutkan pembelian VPS Anda.' : 'Maaf, stok sedang habis. Silakan hubungi admin.'}`;
        
        const keyboard = [];
        
        if (totalStock > 0 && returnTo === 'vps_menu') {
            keyboard.push([{ text: "🖥️ Lanjut Beli VPS", callback_data: "vps_menu" }]);
        } else if (totalStock > 0 && returnTo.startsWith('vps_category_')) {
            keyboard.push([{ text: "🔙 Kembali", callback_data: returnTo }]);
        } else {
            keyboard.push([{ text: "🔙 Kembali", callback_data: "vps_menu" }]);
        }
        
        keyboard.push([{ text: "🏠 Menu Utama", callback_data: "main_menu" }]);
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'Markdown',
            reply_markup: { inline_keyboard: keyboard }
        });
        
    } catch (error) {
        console.error('Error refreshVPSStock:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// ==================== PERBAIKAN NOTIFIKASI VPS KE CHANNEL ====================

async function notifyVPSSuccessToChannel(order, userId, ip, password) {
    try {
        const channelId = config.channel;
        if (!channelId) {
            console.log('Channel ID tidak ditemukan di config');
            return;
        }

        console.log(`Mengirim notifikasi VPS ke channel: ${channelId}`);
        
        const created = new Date(order.createdAt).toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        // Dapatkan informasi user
        let userMention = 'User';
        let userName = 'User';
        try {
            const chat = await bot.getChat(userId);
            if (chat.username) {
                userMention = `@${chat.username}`;
                userName = chat.username;
            } else if (chat.first_name) {
                userMention = chat.first_name;
                userName = chat.first_name;
            }
        } catch (error) {
            console.log('Gagal mendapatkan info user:', error.message);
        }
        
        const isFree = order.isFree === true;
        
        let title = "✅ VPS ORDER SUCCESS";
        let priceDisplay = formatCurrency(order.price);
        let statusIcon = "✅";
        
        if (isFree) {
            title = "🎁 REPLACE VPS (OWNER)";
            priceDisplay = "FREE";
            statusIcon = "🎁";
        }
        
        // Format pesan yang lebih aman (tanpa blockquote yang bermasalah)
        const message = `<blockquote>
┌──────────────────────────────┐
│     <b>💐 ${title} 💐 </b>             
├──────────────────────────────┤
│  <b>👤  CUSTOMER</b>                    
│      └─ ${userMention}            
├──────────────────────────────┤
│  <b>🖥️  VPS SPECIFICATIONS</b>                     
│      ├─ Package   : ${order.productName}    
│      ├─ Specs     : ${order.label}          
│      ├─ Warranty  : ${order.garansi || '-'}        
│      ├─ Region    : ${order.regionName || '-'}     
│      └─ OS        : ${order.osName || '-'}         
├──────────────────────────────┤
│  <b>💰  PAYMENT</b>                                
│      ├─ Amount    : ${priceDisplay}         
│      └─ Date      : ${created}              
├──────────────────────────────┤
│  <b>📊  STATUS</b> : ${statusIcon} SUCCESS         
└──────────────────────────────┘
✨VPS Successfully Delivered!✨
</blockquote>`;
        
        // Kirim pesan ke channel
        const sentMessage = await bot.sendMessage(channelId, message, { 
            parse_mode: "HTML",
            disable_web_page_preview: true
        }).catch(async (error) => {
            console.error('Error sending Markdown message:', error.message);
            // Fallback: kirim tanpa Markdown
        });
        
        console.log(`✅ Notifikasi VPS terkirim ke channel ${channelId}, message_id: ${sentMessage?.message_id}`);
        
    } catch (error) {
        console.error('Error notifying VPS channel:', error);
    }
}

async function notifyPanelPurchaseToChannel(deposit, userId, username, email, password) {
    try {
        const channelId = config.channel;
        if (!channelId) {
            console.log('Channel ID tidak ditemukan di config');
            return;
        }

        console.log(`Mengirim notifikasi Panel ke channel: ${channelId}`);
        
        const waktu = new Date().toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta',
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        // Dapatkan informasi user
        let userMention = 'User';
        let userName = 'User';
        try {
            const chat = await bot.getChat(userId);
            if (chat.username) {
                userMention = `@${chat.username}`;
                userName = chat.username;
            } else if (chat.first_name) {
                userMention = chat.first_name;
                userName = chat.first_name;
            }
        } catch (error) {
            console.log('Gagal mendapatkan info user:', error.message);
        }
        
        // Tentukan level dan icon berdasarkan produk
        let level = "USER";
        let title = "✅ PANEL ORDER SUCCESS";
        let icon = "🖥️";
        let borderIcon = "💐";
        
        if (deposit.productName.includes("ADMIN") || deposit.productName.includes("ROOT")) {
            level = "ROOT ADMIN";
            title = "👑 ADMIN PANEL ORDER";
            icon = "👑";
            borderIcon = "👑";
        } else if (deposit.productName.includes("UNLIMITED")) {
            level = "PREMIUM USER";
            title = "🚀 PREMIUM PANEL";
            icon = "⭐";
            borderIcon = "✨";
        }
        
        // Format harga
        const priceFormatted = formatCurrency(deposit.jumlah || deposit.price || 0);
        
        // Tentukan metode pembayaran
        const paymentMethod = deposit.paymentMethod === 'balance' ? 'SALDO' : 'QRIS';
        
        // Buat garis dekorasi
        const topBorder = "┌──────────────────────────────┐";
        const bottomBorder = "└──────────────────────────────┘";
        const separator = "├──────────────────────────────┤";
        
        const message = `<blockquote>
${topBorder}
│     ${borderIcon} <b>${title}</b> ${borderIcon}             
${separator}
│  <b>👤 CUSTOMER</b>                    
│      └─ ${userMention}            
${separator}
│  <b>${icon} PANEL DETAILS</b>                     
│      ├─ Package   : ${deposit.productName}    
│      ├─ Price     : ${priceFormatted}         
│      ├─ Level     : ${level}                
│      └─ Trx ID    : ${deposit.kodeTrx}      
${separator}
│  <b>💳 PAYMENT</b>                             
│      ├─ Method    : ${paymentMethod}         
│      └─ Date      : ${waktu}                 
${separator}
│  <b>📊 STATUS</b> : ✅ SUCCESS                 
${bottomBorder}
✨ <b>Panel Successfully Delivered!</b> ✨
</blockquote>`.trim();

        await bot.sendMessage(channelId, message, { parse_mode: "HTML" }).catch(() => {});
        
        console.log(`✅ Notifikasi Panel terkirim ke channel ${channelId}, message_id: ${sentMessage?.message_id}`);
        
    } catch (error) {
        console.error('Error notifying panel channel:', error);
    }
}

async function notifyAdminPurchaseToChannel(panelName, email, password, userId) {
    try {
        const channelId = config.channel;
        const waktu = new Date().toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        let userMention = 'Owner';
        try {
            const chat = await bot.getChat(userId);
            if (chat.username) {
                userMention = `@${chat.username}`;
            } else if (chat.first_name) {
                userMention = chat.first_name;
            }
        } catch (error) {}
        
        const trxId = `ADMIN${Date.now().toString().slice(-8)}${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
        
        const message = `<blockquote>
┌───────────────────────────────┐
│      👑 <b>ADMIN PANEL ORDER</b>           
├───────────────────────────────┤
│  👤  <b>OWNER</b>                              
│      └─ ${userMention}                   
├───────────────────────────────┤
│  👑  <b>ADMIN DETAILS</b>                     
│      ├─ Panel     : ${panelName}        
│      ├─ Level     : ROOT ADMINISTRATOR   
│      └─ Trx ID    : ${trxId}             
├───────────────────────────────┤
│  💰  <b>PAYMENT</b>                            
│      ├─ Amount    : ${formatCurrency(75000)}
│      └─ Date      : ${waktu}             
├───────────────────────────────┤
│  📊  <b>STATUS :</b> ✅ ACTIVE (ROOT)              
└───────────────────────────────┘
✨ <b>Admin Panel Successfully Created!</b> ✨
</b></blockquote>`.trim();
        
        await bot.sendMessage(channelId, message, { parse_mode: "HTML" }).catch(() => {});
        
    } catch (error) {
        console.error('Error notifying admin purchase:', error);
    }
}

// Create script order with QRIS (Pakasir)
async function createScriptOrderQRIS(chatId, userId, scriptId) {
    try {
        const script = getScriptById(scriptId);
        
        if (!script) {
            await sendNewMessage(chatId, '❌ Script tidak ditemukan!', { parse_mode: 'HTML' });
            return null;
        }
        
        const jumlah = script.price;
        const minFee = 100;
        const maxFee = 300;
        const FeeTrx = Math.floor(Math.random() * (maxFee - minFee + 1)) + minFee;
        const totalBayar = jumlah + FeeTrx;
        const kodeTrx = `SCRIPT${Date.now()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
        
        if (activeScriptDeposit[userId]) {
            await sendNewMessage(chatId, 
                '❗ Masih ada transaksi aktif.\nKetik /batalscript untuk membatalkan.',
                { parse_mode: 'HTML' }
            );
            return null;
        }
        
        const loadingMsg = await sendNewMessage(chatId, '⏳ Menyiapkan pembayaran...', { parse_mode: 'HTML' });
        
        const pakasirApiKey = config.pakasirApiKey || 'YOUR_API_KEY';
        const pakasirProject = config.pakasirProject || 'YOUR_PROJECT_ID';
        
        const res = await axios.post(
            'https://app.pakasir.com/api/transactioncreate/qris',
            {
                project: pakasirProject,
                order_id: kodeTrx,
                amount: totalBayar,
                api_key: pakasirApiKey
            },
            {
                headers: { 'Content-Type': 'application/json' },
                timeout: 15000
            }
        );
        
        const payment = res.data?.payment;
        
        if (!payment || !payment.payment_number) {
            await editMessage(chatId, loadingMsg.message_id, null,
                `❌ Gagal membuat QRIS (Pakasir)\n${res.data?.message || 'Error'}`,
                { parse_mode: 'HTML' }
            );
            return null;
        }
        
        const qrBuffer = await QRCode.toBuffer(payment.payment_number, {
            type: 'png',
            errorCorrectionLevel: 'H',
            margin: 4,
            scale: 12,
            width: 2048
        }).catch(() => null);
        
        if (!qrBuffer) {
            await editMessage(chatId, loadingMsg.message_id, null, '❌ Gagal membuat QR Code.', { parse_mode: 'HTML' });
            return null;
        }
        
        await bot.deleteMessage(chatId, loadingMsg.message_id).catch(() => {});
        
        const message = `
🏦 *PEMBELIAN SCRIPT - QRIS PAKASIR* 🏦
━━━━━━━━━━━━━━━━━━━━━━━
📜 *Script:* ${script.name}
🧾 *ID Transaksi:* \`${kodeTrx}\`
💰 Harga Script: ${formatCurrency(jumlah)}
🧾 Biaya Admin: ${formatCurrency(FeeTrx)}
💳 Total Pembayaran: ${formatCurrency(totalBayar)}
⏰ Masa Aktif: 60 Menit

🧩 *Order ID:* \`${payment.order_id}\`

💡 *Panduan Pembayaran:*
1. Buka aplikasi e-wallet / m-banking
2. Pilih menu QRIS / Scan QR
3. Scan kode QR di atas
4. Konfirmasi pembayaran

⚠️ *Catatan:*
• Simpan Order ID untuk referensi
• Bayar sesuai nominal exact
• Script akan otomatis terkirim setelah pembayaran sukses
• Transaksi otomatis batal setelah 60 menit
`.trim();
        
        const sentMsg = await bot.sendPhoto(chatId, qrBuffer, {
            caption: message,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [
                    [{ text: "❌ Batalkan Pembelian", callback_data: `batalscript_${kodeTrx}` }],
                ],
            },
        });
        
        const expireMinutes = 60;
        const graceSec = 20;
        const serverExp = new Date(payment.expired_at).getTime();
        const localExp = Date.now() + (expireMinutes * 60 * 1000);
        const hardStop = Math.min(localExp, serverExp + (graceSec * 1000));
        
        const statusUrl = `https://app.pakasir.com/api/transactiondetail?project=${encodeURIComponent(pakasirProject)}&amount=${encodeURIComponent(payment.amount)}&order_id=${encodeURIComponent(payment.order_id)}&api_key=${encodeURIComponent(pakasirApiKey)}`;
        
        activeScriptDeposit[userId] = {
            msgId: sentMsg.message_id,
            chatId,
            kodeTrx,
            scriptId: script.id,
            scriptName: script.name,
            scriptContent: script.content,
            scriptInstructions: script.instructions,
            provider: "Pakasir",
            orderId: payment.order_id,
            totalBayar,
            jumlah,
            fee: FeeTrx,
            statusUrl,
            localExp,
            serverExp,
            hardStop,
            status: true,
            processed: false,
            timeout: setTimeout(async () => {
                if (activeScriptDeposit[userId]?.status) {
                    await handleExpiredScriptOrder(userId, kodeTrx, payment.order_id, jumlah);
                    delete activeScriptDeposit[userId];
                }
            }, hardStop - Date.now()),
        };
        
        monitorScriptPayment(userId, kodeTrx, script);
        
        return { success: true, kodeTrx };
        
    } catch (error) {
        console.error('Error createScriptOrderQRIS:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
        return null;
    }
}

async function notifyScriptPurchaseToChannel(deposit, user, userName, username) {
    try {
        const channelId = config.aboutmilaa || config.channel;
        if (!channelId) return;
        
        const waktu = new Date().toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        let userMention = 'User';
        if (username && username !== '-') {
            userMention = username;
        } else {
            try {
                const chat = await bot.getChat(deposit.userId);
                if (chat.username) {
                    userMention = `@${chat.username}`;
                } else if (chat.first_name) {
                    userMention = chat.first_name;
                }
            } catch (error) {}
        }
        
        const message = `<b><blockquote>
┌────────────────────────────────┐
│     🎉 <b>SCRIPT ORDER SUCCESS</b>          
├────────────────────────────────┤
│  👤  <b>CUSTOMER</b>                               
│      └─ ${userMention}                      
├────────────────────────────────┤
│  📜  <b>SCRIPT DETAILS</b>                         
│      ├─ Name      : ${deposit.scriptName}   
│      ├─ Price     : ${formatCurrency(deposit.jumlah)}   
│      └─ Trx ID    : ${deposit.kodeTrx}      
├────────────────────────────────┤
│  📅  <b>TRANSACTION</b>                           
│      └─ ${waktu}                           
├────────────────────────────────┤
│  📊  <b>STATUS :</b> ✅ SUCCESS                     
└────────────────────────────────┘
✨ <b>Script Successfully Delivered!</b> ✨
</b></blockquote>`.trim();
        
        await bot.sendMessage(channelId, message, { parse_mode: "HTML" }).catch(() => {});
        
    } catch (error) {
        console.error('Error notifying script channel:', error);
    }
}

// ========================= SCRIPT MANAGER (PAKASIR) - LANGSUNG DI START.JS =========================

// Active script deposits tracking
const activeScriptDeposit = {};

// Load scripts from database
function loadScriptsData() {
    try {
        const scriptsFile = path.join(dataDir, 'scripts.json');
        if (!fs.existsSync(scriptsFile)) {
            const defaultScripts = {
                scripts: [],
                categories: ['Premium', 'Basic', 'Tools', 'Game', 'Social Media', 'Utility']
            };
            fs.writeFileSync(scriptsFile, JSON.stringify(defaultScripts, null, 2));
            return defaultScripts;
        }
        return JSON.parse(fs.readFileSync(scriptsFile, 'utf8'));
    } catch (error) {
        console.error('Error loading scripts:', error);
        return { scripts: [], categories: [] };
    }
}

// Save scripts data
function saveScriptsData(data) {
    try {
        const scriptsFile = path.join(dataDir, 'scripts.json');
        fs.writeFileSync(scriptsFile, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving scripts:', error);
        return false;
    }
}

// Load script orders
function loadScriptOrders() {
    try {
        const ordersFile = path.join(dataDir, 'script_orders.json');
        if (!fs.existsSync(ordersFile)) {
            const defaultOrders = {
                orders: [],
                stats: { totalOrders: 0, totalRevenue: 0, completedOrders: 0 }
            };
            fs.writeFileSync(ordersFile, JSON.stringify(defaultOrders, null, 2));
            return defaultOrders;
        }
        return JSON.parse(fs.readFileSync(ordersFile, 'utf8'));
    } catch (error) {
        console.error('Error loading script orders:', error);
        return { orders: [], stats: { totalOrders: 0, totalRevenue: 0, completedOrders: 0 } };
    }
}

// Save script orders
function saveScriptOrders(data) {
    try {
        const ordersFile = path.join(dataDir, 'script_orders.json');
        fs.writeFileSync(ordersFile, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving script orders:', error);
        return false;
    }
}

// Get active scripts
function getActiveScriptsList() {
    const data = loadScriptsData();
    return data.scripts.filter(s => s.isActive === true);
}

// Get script by ID
function getScriptById(scriptId) {
    const data = loadScriptsData();
    return data.scripts.find(s => s.id === scriptId);
}

// Increment download count
function incrementScriptDownload(scriptId) {
    const data = loadScriptsData();
    const script = data.scripts.find(s => s.id === scriptId);
    if (script) {
        script.downloads++;
        saveScriptsData(data);
        return true;
    }
    return false;
}

// ========================= PANEL (PTERODACTYL) FUNCTIONS =========================

// Load panel orders
function loadPanelOrders() {
    try {
        const ordersFile = path.join(dataDir, 'panel_orders.json');
        if (!fs.existsSync(ordersFile)) {
            const defaultOrders = {
                orders: [],
                stats: { totalOrders: 0, totalRevenue: 0 }
            };
            fs.writeFileSync(ordersFile, JSON.stringify(defaultOrders, null, 2));
            return defaultOrders;
        }
        return JSON.parse(fs.readFileSync(ordersFile, 'utf8'));
    } catch (error) {
        console.error('Error loading panel orders:', error);
        return { orders: [], stats: { totalOrders: 0, totalRevenue: 0 } };
    }
}

// Save panel orders
function savePanelOrders(data) {
    try {
        const ordersFile = path.join(dataDir, 'panel_orders.json');
        fs.writeFileSync(ordersFile, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving panel orders:', error);
        return false;
    }
}

// Load panel servers (untuk monitoring)
function loadPanelServers() {
    try {
        const serversFile = path.join(dataDir, 'panel_servers.json');
        if (!fs.existsSync(serversFile)) {
            return { servers: [], lastCheck: null };
        }
        return JSON.parse(fs.readFileSync(serversFile, 'utf8'));
    } catch (error) {
        return { servers: [], lastCheck: null };
    }
}

// Save panel servers
function savePanelServers(data) {
    try {
        const serversFile = path.join(dataDir, 'panel_servers.json');
        fs.writeFileSync(serversFile, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        return false;
    }
}

// ========================= REFERRAL FUNCTIONS =========================

const referralsFile = path.join(dataDir, 'referrals.json');

// Load data referral
function loadReferrals() {
    try {
        if (!fs.existsSync(referralsFile)) {
            const defaultData = {
                users: {}, // { userId: { referralCode, referredBy, totalReferrals, totalEarned, bonuses: { share: false, claim: [] } } }
                codes: {}, // { referralCode: userId }
                transactions: [], // Riwayat bonus
                stats: {
                    totalReferrals: 0,
                    totalBonusGiven: 0,
                    totalShareBonus: 0,
                    totalClaimBonus: 0
                }
            };
            saveReferrals(defaultData);
            return defaultData;
        }
        return JSON.parse(fs.readFileSync(referralsFile, 'utf8'));
    } catch (error) {
        console.error('Error loading referrals:', error);
        return {
            users: {},
            codes: {},
            transactions: [],
            stats: {
                totalReferrals: 0,
                totalBonusGiven: 0,
                totalShareBonus: 0,
                totalClaimBonus: 0
            }
        };
    }
}

// Save data referral
function saveReferrals(data) {
    try {
        fs.writeFileSync(referralsFile, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving referrals:', error);
        return false;
    }
}

// Generate kode referral unik
function generateReferralCode(userId) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${code}`;
}

function registerUserReferral(userId, referredByCode = null) {
    const referrals = loadReferrals();
    
    // Jika user sudah terdaftar
    if (referrals.users[userId]) {
        return { success: true, isNew: false };
    }
    
    // Generate kode referral untuk user
    let referralCode = generateReferralCode(userId);
    while (referrals.codes[referralCode]) {
        referralCode = generateReferralCode(userId);
    }
    
    // Data user baru
    referrals.users[userId] = {
        referralCode: referralCode,
        referredBy: null,
        referredByCode: null,
        totalReferrals: 0,
        totalEarned: 0,
        shareBonusClaimed: false, // Apakah sudah klaim bonus share (650)
        claimBonuses: [], // [{ fromUserId, amount, timestamp, orderId }]
        createdAt: new Date().toISOString()
    };
    
    referrals.codes[referralCode] = userId;
    
    // Jika ada kode referral yang digunakan saat register
    if (referredByCode && referrals.codes[referredByCode]) {
        const referrerId = referrals.codes[referredByCode];
        
        if (referrerId !== userId) {
            referrals.users[userId].referredBy = referrerId;
            referrals.users[userId].referredByCode = referredByCode;
            
            // Increment total referral referrer
            if (referrals.users[referrerId]) {
                referrals.users[referrerId].totalReferrals++;
            }
        }
    }
    
    saveReferrals(referrals);
    return { success: true, isNew: true, referralCode: referralCode };
}

// ========================= FUNGSI UNTUK MENAMBAH KEUNTUNGAN NOKOS =========================

/**
 * Menambahkan keuntungan ke harga nokos
 * @param {number} originalPrice - Harga asli dari API
 * @returns {number} Harga setelah ditambah keuntungan
 */
function addProfitToPrice(originalPrice) {
    const numPrice = Number(originalPrice) || 0;
    const profit = Number(config.UNTUNG_NOKOS) || 0;
    return numPrice + profit;
}

/**
 * Mengembalikan harga ke nilai asli (untuk refund)
 * @param {number} priceWithProfit - Harga dengan keuntungan
 * @returns {number} Harga asli tanpa keuntungan
 */
function removeProfitFromPrice(priceWithProfit) {
    const numPrice = Number(priceWithProfit) || 0;
    const profit = Number(config.UNTUNG_NOKOS) || 0;
    return Math.max(0, numPrice - profit);
}

/**
 * Memformat harga dengan informasi keuntungan
 * @param {number} originalPrice - Harga asli dari API
 * @param {number} finalPrice - Harga final dengan keuntungan
 * @returns {string} String informasi harga
 */
function formatPriceWithProfit(originalPrice, finalPrice) {
    const profit = finalPrice - originalPrice;
    if (profit > 0) {
        return `${formatCurrency(finalPrice)} (Harga: ${formatCurrency(originalPrice)} + Keuntungan: ${formatCurrency(profit)})`;
    }
    return formatCurrency(finalPrice);
}

function safeWriteJSON(filePath, data, backup = true) {
  try {
    // Backup file lama
    //if (backup && fs.existsSync(filePath)) {
    //  const backupPath = filePath + '.backup_' + Date.now();
     // fs.copyFileSync(filePath, backupPath);
    // }
      
      // Hapus backup lebih dari 3 hari
      /*const backupDir = path.dirname(filePath);
      const oldBackups = fs.readdirSync(backupDir)
        .filter(f => f.startsWith(path.basename(filePath)) && f.includes('.backup_'))
        .forEach(oldBackup => {
          const oldPath = path.join(backupDir, oldBackup);
          const oldTime = parseInt(oldBackup.split('.backup_')[1]) || 0;
          if (oldTime && (Date.now() - oldTime) > 1 * 24 * 60 * 60 * 1000) {
            fs.unlinkSync(oldPath);
          }
        });*/
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error(`❌ Error writing to ${filePath}:`, error);
    return false;
  }
}

function safeReadJSON(filePath, defaultValue) {
  try {
    if (!fs.existsSync(filePath)) {
      safeWriteJSON(filePath, defaultValue, false);
      return defaultValue;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    if (!content || content.trim() === '') {
      console.warn(`⚠️ File ${filePath} is empty, reinitializing...`);
      safeWriteJSON(filePath, defaultValue, false);
      return defaultValue;
    }
    return JSON.parse(content);
  } catch (error) {
    console.error(`❌ Error reading ${filePath}:`, error);
    return defaultValue;
  }
}

function getUserBalance(userId) {
    try {
        const userIdStr = String(userId);
        
        console.log(`[DEBUG getUserBalance] User ID: ${userId} (string: ${userIdStr})`);
        
        // Cek jika sedang deposit
        if (depositProcessing.has(`${userId}_deposit`)) {
            console.log(`[DEBUG getUserBalance] Deposit processing for ${userId}, clearing cache`);
            balanceCache.delete(userIdStr);
        }
        
        // Cek cache
        if (balanceCache.has(userIdStr)) {
            const cached = balanceCache.get(userIdStr);
            const result = isNaN(cached) ? 0 : Number(cached);
            console.log(`[DEBUG getUserBalance] Cache hit for ${userId}: ${result}`);
            return result;
        }
        
        // Load dari file
        console.log(`[DEBUG getUserBalance] Cache miss for ${userId}, loading from file`);
        const balances = loadBalances();
        
        const rawBalance = balances[userIdStr];
        console.log(`[DEBUG getUserBalance] Raw balance from file: ${rawBalance} (type: ${typeof rawBalance})`);
        
        const balance = parseInt(rawBalance) || 0;
        const numBalance = isNaN(balance) ? 0 : Number(balance);
        
        console.log(`[DEBUG getUserBalance] Parsed balance for ${userId}: ${numBalance}`);
        
        // Update cache
        balanceCache.set(userIdStr, numBalance);
        
        return numBalance;
        
    } catch (error) {
        console.error(`[ERROR getUserBalance] Error for user ${userId}:`, error);
        return 0;
    }
}

function validateAmount(amount) {
    const numAmount = Number(amount);
    if (isNaN(numAmount) || !isFinite(numAmount)) {
        return { valid: false, error: 'Jumlah tidak valid' };
    }
    if (numAmount <= 0) {
        return { valid: false, error: 'Jumlah harus lebih dari 0' };
    }
    return { valid: true, amount: numAmount };
}

function validateUserId(userId) {
    const userIdStr = String(userId);
    if (!userIdStr || userIdStr.length < 5) {
        return { valid: false, error: 'User ID tidak valid' };
    }
    if (!/^\d+$/.test(userIdStr)) {
        return { valid: false, error: 'User ID harus angka' };
    }
    return { valid: true, userId: userIdStr };
}

function setUserBalance(userId, amount) {
    const userIdStr = String(userId);
    const numAmount = Number(amount);
    if (isNaN(numAmount)) return false;
    
    const balances = loadBalances();
    balances[userIdStr] = numAmount;
    
    balanceCache.set(userIdStr, numAmount);
    
    return saveBalances(balances);
}

function addUserBalance(userId, amount) {
    try {
        const validation = validateAmount(amount);
        if (!validation.valid) return false;
        
        const numAmount = validation.amount;
        const userIdStr = String(userId);
        
        const balances = loadBalances();
        const currentBalance = parseInt(balances[userIdStr]) || 0;
        const numCurrent = isNaN(currentBalance) ? 0 : Number(currentBalance);
        
        const newBalance = numCurrent + numAmount;
        
        balances[userIdStr] = newBalance;
        
        balanceCache.set(userIdStr, newBalance);
        
        return saveBalances(balances);
    } catch (error) {
        return false;
    }
}

function deductUserBalance(userId, amount) {
    try {
        const validation = validateAmount(amount);
        if (!validation.valid) return false;
        
        const numAmount = validation.amount;
        const userIdStr = String(userId);
        
        const balances = loadBalances();
        const currentBalance = parseInt(balances[userIdStr]) || 0;
        const numCurrent = isNaN(currentBalance) ? 0 : Number(currentBalance);
        
        if (numCurrent < numAmount) {
            return false;
        }

        const newBalance = numCurrent - numAmount;
        
        balances[userIdStr] = newBalance;

        balanceCache.set(userIdStr, newBalance);
        
        return saveBalances(balances);
    } catch (error) {
        return false;
    }
}

setInterval(() => {
    const now = Date.now();
    for (const [key, timestamp] of depositProcessing.entries()) {
        if (now - timestamp > 5 * 60 * 1000) {
            depositProcessing.delete(key);
        }
    }
}, 60 * 1000);

function isOrderProcessing(orderId) {
  return orderProcessing.has(orderId);
}

function setOrderProcessing(orderId, processing = true) {
  if (processing) {
    orderProcessing.set(orderId, Date.now());
  } else {
    orderProcessing.delete(orderId);
  }
}

function loadData() {
  return safeReadJSON(datafile, { users: [], settings: { maintenance: false } });
}

function saveData(data) {
  const safeData = {
    users: (data.users && Array.isArray(data.users)) ? data.users : [],
    settings: data.settings || { maintenance: false }
  };
  return safeWriteJSON(datafile, safeData, true);
}

function loadBalances() {
  return safeReadJSON(balanceFile, {});
}

function saveBalances(balances) {
  return safeWriteJSON(balanceFile, balances || {}, true);
}

function loadTransactions() {
  return safeReadJSON(transactionsFile, {
    nokos_orders: [],
    rumahotp_deposits: [],
    cashify_deposits: []
  });
}

function saveTransactions(transactions) {
  const safeTransactions = {
    nokos_orders: transactions.nokos_orders || [],
    rumahotp_deposits: transactions.rumahotp_deposits || [],
    cashify_deposits: transactions.cashify_deposits || []
  };
  return safeWriteJSON(transactionsFile, safeTransactions, true);
}

function loadSettings() {
  return safeReadJSON(settingsFile, {
    maintenance: false,
    maintenance_reason: '',
    maintenance_time: '',
    payment_method: 'rumahotp'
  });
}

function saveSettings(settings) {
  return safeWriteJSON(settingsFile, settings, true);
}

function saveUser(userId) {
  try {
    const userIdStr = String(userId);
    
    // Load data dengan lock sederhana
    const data = loadData();
    
    // Validasi data.users
    if (!data.users || !Array.isArray(data.users)) {
      data.users = [];
    }
    
    // Cek apakah user sudah ada (case insensitive comparison)
    const userExists = data.users.some(id => String(id) === userIdStr);
    
    if (!userExists) {
      data.users.push(userIdStr);
      const saveResult = saveData(data);
      
      if (!saveResult) {
        console.error(`❌ Failed to save user ${userIdStr}`);
        return { success: false, isNewUser: false, error: 'Save failed' };
      }
      
      // Inisialisasi balance jika belum ada
      const balances = loadBalances();
      if (balances[userIdStr] === undefined) {
        balances[userIdStr] = 0;
        saveBalances(balances);
      }
      
      console.log(`✅ New user saved: ${userIdStr}, total users: ${data.users.length}`);
      
      return { success: true, isNewUser: true };
    }
    
    return { success: true, isNewUser: false };
  } catch (error) {
    console.error('❌ Error in saveUser:', error);
    return { success: false, isNewUser: false, error: error.message };
  }
}

function addTransaction(type, data) {
  const transactions = loadTransactions();
  transactions[type] = transactions[type] || [];
 
  if (type === 'nokos_orders') {
    const now = Date.now();
    const fifteenMinutes = 15 * 60 * 1000;
    
    transactions[type] = transactions[type].filter(order => {
      const orderTime = new Date(order.timestamp).getTime();
      
      if ((order.status === 'pending' || order.status === 'active') && 
          (now - orderTime > fifteenMinutes)) {
        return false;
      }
      return true;
    });
  }
  
  const transaction = {
    id: data.id || Math.random().toString(36).substr(2, 9),
    userId: data.userId,
    data: data,
    timestamp: new Date().toISOString(),
    status: data.status || 'pending'
  };
  
  if (type === 'nokos_orders') {
    transaction.data.originalBalance = getUserBalance(data.userId) + (data.price || 0);
  }
  
  transactions[type].push(transaction);
  saveTransactions(transactions);
  return transaction.id;
}

function updateTransactionStatus(type, transactionId, status) {
  const transactions = loadTransactions();
  if (transactions[type]) {
    const transaction = transactions[type].find(t => t.id === transactionId);
    if (transaction) {
      transaction.status = status;
      transaction.data.status = status;
      saveTransactions(transactions);
      return true;
    }
  }
  return false;
}

function addCSAdminToConfig(userId) {
  try {
    const configPath = path.join(__dirname, 'config.js');
    
    // Baca config file
    let configContent = fs.readFileSync(configPath, 'utf8');
    
    // Cek apakah cs_admins sudah ada
    if (configContent.includes('cs_admins:')) {
      // Update existing cs_admins
      const regex = /cs_admins:\s*\[([^\]]+)\]/;
      const match = configContent.match(regex);
      
      if (match) {
        const currentAdmins = match[1].split(',').map(id => id.trim().replace(/'/g, '').replace(/"/g, '')).filter(id => id);
        
        // Cek apakah user sudah ada
        if (currentAdmins.includes(userId.toString())) {
          return false; // Sudah ada
        }
        
        // Tambahkan user baru
        currentAdmins.push(userId.toString());
        const newAdminsStr = currentAdmins.map(id => `'${id}'`).join(', ');
        
        configContent = configContent.replace(regex, `cs_admins: [${newAdminsStr}]`);
      }
    } else {
      // Tambahkan cs_admins baru setelah owner_ids
      const regex = /owner_ids:\s*\[([^\]]+)\]/;
      configContent = configContent.replace(
        regex,
        `owner_ids: [$1],\n  cs_admins: ['${userId}']`
      );
    }
    
    // Tulis kembali config file
    fs.writeFileSync(configPath, configContent);
    
    // Reload config
    delete require.cache[require.resolve('./config')];
    const newConfig = require('./config');
    
    // Update global config
    Object.assign(config, newConfig);
    
    return true;
    
  } catch (error) {
    console.error('Error adding CS admin:', error);
    return false;
  }
}

function removeCSAdminFromConfig(userId) {
  try {
    const configPath = path.join(__dirname, 'config.js');
    
    // Baca config file
    let configContent = fs.readFileSync(configPath, 'utf8');
    
    // Cek apakah cs_admins ada
    if (!configContent.includes('cs_admins:')) {
      return false; // Tidak ada cs_admins
    }
    
    // Update cs_admins
    const regex = /cs_admins:\s*\[([^\]]+)\]/;
    const match = configContent.match(regex);
    
    if (match) {
      const currentAdmins = match[1].split(',').map(id => id.trim().replace(/'/g, '').replace(/"/g, '')).filter(id => id);
      
      // Cek apakah user ada
      if (!currentAdmins.includes(userId.toString())) {
        return false; // Tidak ada
      }
      
      // Hapus user
      const filteredAdmins = currentAdmins.filter(id => id !== userId.toString());
      
      if (filteredAdmins.length === 0) {
        // Hapus cs_admins jika kosong
        configContent = configContent.replace(/,\s*cs_admins:\s*\[[^\]]+\]/, '');
      } else {
        const newAdminsStr = filteredAdmins.map(id => `'${id}'`).join(', ');
        configContent = configContent.replace(regex, `cs_admins: [${newAdminsStr}]`);
      }
      
      // Tulis kembali config file
      fs.writeFileSync(configPath, configContent);
      
      // Reload config
      delete require.cache[require.resolve('./config')];
      const newConfig = require('./config');
      
      // Update global config
      Object.assign(config, newConfig);
      
      return true;
    }
    
    return false;
    
  } catch (error) {
    console.error('Error removing CS admin:', error);
    return false;
  }
}

function cleanExpiredDeposits() {
    try {
        const transactions = loadTransactions();
        const now = Date.now();
        const twentyMinutes = 20 * 60 * 1000;
        
       ['cashify_deposits', 'rumahotp_deposits'].forEach(type => {
    if (transactions[type]) {
        transactions[type] = transactions[type].filter(deposit => {
            const depositTime = new Date(deposit.timestamp).getTime();
            
            return (deposit.status === 'success' || deposit.status === 'paid') || 
                   (now - depositTime < twentyMinutes && (deposit.status === 'pending' || deposit.status === 'waiting'));
        });
    }
});
        
        saveTransactions(transactions);
    } catch (error) {
        console.error('Error cleaning deposits:', error);
    }
}

setInterval(cleanExpiredDeposits, 5 * 60 * 1000);

setInterval(() => {
  balanceCache.clear();
  transactionCache.clear();
  voucherCache.clear();
}, 10 * 60 * 1000);

function formatCurrency(amount) {
  const numAmount = Number(amount);
  if (isNaN(numAmount) || !isFinite(numAmount)) {
    return 'Rp0';
  }
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(numAmount);
}

function getPaymentMethod() {
  const settings = loadSettings();
  return settings.payment_method || 'rumahotp';
}

function setPaymentMethod(method) {
  const settings = loadSettings();
  settings.payment_method = method;
  saveSettings(settings);
  return method;
}

// ========================= VOUCHER FUNCTIONS =========================

function loadVouchers() {
  try {
    if (!fs.existsSync(vouchersFile)) {
      const defaultVouchers = {
        vouchers: [],
        used_vouchers: [],
        voucher_stats: {
          total_created: 0,
          total_used: 0,
          total_discount: 0
        }
      };
      saveVouchers(defaultVouchers);
      return defaultVouchers;
    }
    
    const data = fs.readFileSync(vouchersFile, 'utf8');
    const parsed = JSON.parse(data);
    
    // Ensure all required fields exist
    return {
      vouchers: parsed.vouchers || [],
      used_vouchers: parsed.used_vouchers || [],
      voucher_stats: {
        total_created: parsed.voucher_stats?.total_created || 0,
        total_used: parsed.voucher_stats?.total_used || 0,
        total_discount: parsed.voucher_stats?.total_discount || 0
      }
    };
  } catch (e) {
    console.error('Error loading vouchers:', e);
    // Return default structure if there's any error
    return {
      vouchers: [],
      used_vouchers: [],
      voucher_stats: {
        total_created: 0,
        total_used: 0,
        total_discount: 0
      }
    };
  }
}

function saveVouchers(vouchers) {
  try {
    // Ensure the structure is complete
    const completeVouchers = {
      vouchers: vouchers.vouchers || [],
      used_vouchers: vouchers.used_vouchers || [],
      voucher_stats: {
        total_created: vouchers.voucher_stats?.total_created || 0,
        total_used: vouchers.voucher_stats?.total_used || 0,
        total_discount: vouchers.voucher_stats?.total_discount || 0
      }
    };
    
    fs.writeFileSync(vouchersFile, JSON.stringify(completeVouchers, null, 2));
    voucherCache.clear();
    return true;
  } catch (error) {
    console.error('Error saving vouchers:', error);
    return false;
  }
}

function getActiveVouchers() {
  const vouchers = loadVouchers();
  const now = Date.now();
  
  return vouchers.vouchers.filter(voucher => {
    if (voucher.expiry && new Date(voucher.expiry).getTime() < now) {
      return false;
    }
    
    if (voucher.usage_limit && voucher.used_count >= voucher.usage_limit) {
      return false;
    }
    
    if (voucher.status !== 'active') {
      return false;
    }
    
    return true;
  });
}

function generateVoucherCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function createVoucher(voucherData) {
  try {
    const vouchers = loadVouchers();
    
    const voucher = {
      id: `VOUCH${Date.now().toString().substr(-8)}${Math.random().toString(36).substr(2, 3).toUpperCase()}`,
      code: voucherData.code || generateVoucherCode(),
      type: voucherData.type || 'percentage',
      value: voucherData.value || 0,
      min_purchase: voucherData.min_purchase || 0,
      max_discount: voucherData.max_discount || null,
      usage_limit: voucherData.usage_limit || 1,
      used_count: 0,
      status: 'active',
      created_by: voucherData.created_by || 'system',
      created_at: new Date().toISOString(),
      expiry: voucherData.expiry || null,
      description: voucherData.description || '',
      services: voucherData.services || [],
      countries: voucherData.countries || []
    };
    
    vouchers.vouchers.push(voucher);
    vouchers.voucher_stats.total_created++;
    
    saveVouchers(vouchers);
    
    notifyVoucherCreated(voucher);
    
    return voucher;
  } catch (error) {
    console.error('Error creating voucher:', error);
    return null;
  }
}

function validateVoucher(code, userId, serviceId = null, countryId = null, amount = 0) {
  try {
    const vouchers = loadVouchers();
    
    const alreadyUsed = vouchers.used_vouchers.find(uv => 
      uv.voucher_code === code && uv.user_id === userId.toString()
    );
    
    if (alreadyUsed) {
      return {
        valid: false,
        error: 'Voucher sudah pernah digunakan'
      };
    }
    
    const voucher = vouchers.vouchers.find(v => 
      v.code === code && v.status === 'active'
    );
    
    if (!voucher) {
      return {
        valid: false,
        error: 'Voucher tidak valid atau sudah expired'
      };
    }
    
    if (voucher.expiry && new Date(voucher.expiry).getTime() < Date.now()) {
      return {
        valid: false,
        error: 'Voucher sudah expired'
      };
    }
    
    if (voucher.usage_limit && voucher.used_count >= voucher.usage_limit) {
      return {
        valid: false,
        error: 'Voucher sudah mencapai limit penggunaan'
      };
    }
    
    if (voucher.min_purchase > 0 && amount < voucher.min_purchase) {
      return {
        valid: false,
        error: `Minimum pembelian ${formatCurrency(voucher.min_purchase)}`
      };
    }
    
    if (voucher.services && voucher.services.length > 0 && serviceId) {
      if (!voucher.services.includes(serviceId)) {
        return {
          valid: false,
          error: 'Voucher tidak berlaku untuk layanan ini'
        };
      }
    }
    
    if (voucher.countries && voucher.countries.length > 0 && countryId) {
      if (!voucher.countries.includes(countryId)) {
        return {
          valid: false,
          error: 'Voucher tidak berlaku untuk negara ini'
        };
      }
    }
    
    let discount = 0;
    
    if (voucher.type === 'percentage') {
      discount = (amount * voucher.value) / 100;
      
      if (voucher.max_discount && discount > voucher.max_discount) {
        discount = voucher.max_discount;
      }
    } else if (voucher.type === 'fixed') {
      discount = voucher.value;
      
      if (discount > amount) {
        discount = amount;
      }
    }
    
    return {
      valid: true,
      voucher: voucher,
      discount: Math.round(discount),
      final_amount: amount - Math.round(discount)
    };
    
  } catch (error) {
    return {
      valid: false,
      error: 'Error validasi voucher'
    };
  }
}

function useVoucher(code, userId, orderId = null, amount = 0, discount = 0) {
  try {
    const vouchers = loadVouchers();
    
    const voucherIndex = vouchers.vouchers.findIndex(v => v.code === code);
    
    if (voucherIndex === -1) {
      return false;
    }
    
    vouchers.vouchers[voucherIndex].used_count++;
    
    vouchers.used_vouchers.push({
      voucher_code: code,
      user_id: userId.toString(),
      order_id: orderId,
      amount: amount,
      discount: discount,
      used_at: new Date().toISOString()
    });
    
    vouchers.voucher_stats.total_used++;
    vouchers.voucher_stats.total_discount += discount;
    
    if (vouchers.vouchers[voucherIndex].usage_limit && 
        vouchers.vouchers[voucherIndex].used_count >= vouchers.vouchers[voucherIndex].usage_limit) {
      vouchers.vouchers[voucherIndex].status = 'inactive';
    }
    
    saveVouchers(vouchers);
    
    notifyVoucherUsed(code, userId, amount, discount);
    
    return true;
    
  } catch (error) {
    console.error('Error using voucher:', error);
    return false;
  }
}

async function notifyVoucherCreated(voucher) {
  try {
    const dateStr = new Date(voucher.created_at).toLocaleString('id-ID');
    const expiryStr = voucher.expiry ? new Date(voucher.expiry).toLocaleString('id-ID') : 'Tidak ada';
    
    let message = `🎫 <b>VOUCHER BARU DIBUAT</b>\n\n`;
    message += `<b>Kode:</b> <code>${voucher.code}</code>\n`;
    message += `<b>Tipe:</b> ${voucher.type === 'percentage' ? 'Persentase' : 'Fixed Amount'}\n`;
    message += `<b>Nilai:</b> ${voucher.type === 'percentage' ? `${voucher.value}%` : formatCurrency(voucher.value)}\n`;
    
    if (voucher.max_discount) {
      message += `<b>Maks Discount:</b> ${formatCurrency(voucher.max_discount)}\n`;
    }
    
    message += `<b>Min Pembelian:</b> ${formatCurrency(voucher.min_purchase)}\n`;
    message += `<b>Limit Penggunaan:</b> ${voucher.usage_limit}x\n`;
    message += `<b>Expired:</b> ${expiryStr}\n`;
    message += `<b>Dibuat oleh:</b> ${voucher.created_by}\n`;
    message += `<b>Tanggal:</b> ${dateStr}\n\n`;
    
    if (voucher.description) {
      message += `<b>Deskripsi:</b> ${voucher.description}\n`;
    }
    
    await bot.sendMessage(channel, message, {
      parse_mode: 'HTML',
      disable_web_page_preview: true
    });
    
  } catch (error) {
    console.error('Error notifying voucher creation:', error);
  }
}

async function notifyVoucherUsed(voucherCode, userId, amount, discount) {
  try {
    const dateStr = new Date().toLocaleString('id-ID');
    
    let message = `🎫 <b>VOUCHER DIGUNAKAN</b>\n\n`;
    message += `<b>Kode:</b> <code>${voucherCode}</code>\n`;
    message += `<b>User ID:</b> ${userId}\n`;
    message += `<b>Amount:</b> ${formatCurrency(amount)}\n`;
    message += `<b>Discount:</b> ${formatCurrency(discount)}\n`;
    message += `<b>Total Bayar:</b> ${formatCurrency(amount - discount)}\n`;
    message += `<b>Tanggal:</b> ${dateStr}\n`;
    
    await bot.sendMessage(channel_otp, message, {
      parse_mode: 'HTML',
      disable_web_page_preview: true
    });
    
  } catch (error) {
    console.error('Error notifying voucher usage:', error);
  }
}

// Create user in Pterodactyl panel
async function createPanelUser(email, username, password) {
    const domain = panelDomain;
    const plta = panelApiKey;
    
    const response = await fetch(`${domain}/api/application/users`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${plta}`,
        },
        body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password,
        }),
    });
    
    const data = await response.json();
    if (data.errors) {
        if (data.errors[0]?.meta?.rule === "unique" && data.errors[0]?.meta?.source_field === "email") {
            throw new Error("EMAIL_EXISTS");
        }
        throw new Error(data.errors[0]?.detail || "Gagal membuat user");
    }
    return data.attributes;
}

// Create server in Pterodactyl panel
async function createPanelServer(userId, name, product, password) {
    const domain = panelDomain;
    const plta = panelApiKey;
    const location = panelLocation;
    const egg = panelEgg;
    
    // Startup command for NodeJS
    const startup = "if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == 1 ]]; then git pull; fi; if [[ ! -z {{NODE_PACKAGES}} ]]; then npm install {{NODE_PACKAGES}}; fi; if [[ ! -z {{UNNODE_PACKAGES}} ]]; then npm uninstall {{UNNODE_PACKAGES}}; fi; if [[ -f /home/container/package.json ]] && [[ {{AUTO_UPDATE}} == 1 ]]; then npm install; fi; npm start";
    
    const response = await fetch(`${domain}/api/application/servers`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${plta}`,
        },
        body: JSON.stringify({
            name: name,
            description: `Panel for ${name} - ${product.name}`,
            user: parseInt(userId),
            egg: parseInt(egg),
            docker_image: "ghcr.io/parkervcp/yolks:nodejs_24",
            startup: startup,
            environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
            },
            limits: {
                memory: product.memory,
                swap: 0,
                disk: product.disk,
                io: 500,
                cpu: product.cpu,
            },
            feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 1,
            },
            deploy: {
                locations: [parseInt(location)],
                dedicated_ip: false,
                port_range: [],
            },
        }),
    });
    
    const data = await response.json();
    if (data.errors) {
        throw new Error(data.errors[0]?.detail || "Gagal membuat server");
    }
    return data.attributes;
}

// Create admin account in panel
async function createPanelAdmin(panelName, password) {
    const domain = panelDomain;
    const plta = panelApiKey;
    
    const response = await fetch(`${domain}/api/application/users`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${plta}`,
        },
        body: JSON.stringify({
            email: `${panelName}@admin.king`,
            username: panelName,
            first_name: panelName,
            last_name: "admin",
            language: "en",
            root_admin: true,
            password: password,
        }),
    });
    
    const data = await response.json();
    if (data.errors) {
        throw new Error(data.errors[0]?.detail || "Gagal membuat admin");
    }
    return data.attributes;
}

// Get server details from panel
async function getPanelServer(serverId) {
    const domain = panelDomain;
    const plta = panelApiKey;
    
    const response = await fetch(`${domain}/api/application/servers/${serverId}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${plta}`,
        },
    });
    
    const data = await response.json();
    if (data.errors) return null;
    return data.attributes;
}

// Suspend server in panel
async function suspendPanelServer(serverId) {
    const domain = panelDomain;
    const plta = panelApiKey;
    
    const response = await fetch(`${domain}/api/application/servers/${serverId}/suspend`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${plta}`,
        },
    });
    
    return response.ok;
}

// Unsuspend server in panel
async function unsuspendPanelServer(serverId) {
    const domain = panelDomain;
    const plta = panelApiKey;
    
    const response = await fetch(`${domain}/api/application/servers/${serverId}/unsuspend`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${plta}`,
        },
    });
    
    return response.ok;
}

// Delete server from panel
async function deletePanelServer(serverId) {
    const domain = panelDomain;
    const plta = panelApiKey;
    
    const response = await fetch(`${domain}/api/application/servers/${serverId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${plta}`,
        },
    });
    
    return response.ok;
}

// ========================= BACKUP FUNCTIONS =========================

async function showBackupList(chatId, userId, messageId = null, callbackQueryId = null) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            if (callbackQueryId) {
                await bot.answerCallbackQuery(callbackQueryId, {
                    text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
                    show_alert: true
                });
            }
            return;
        }

        const backupDir = path.join(__dirname, 'backup');
        
        if (!fs.existsSync(backupDir)) {
            const message = `<b>📁 RESTORE DATA</b>\n\nTidak ada backup ditemukan.\n\nDirectory backup: <code>${backupDir}</code>\n\nSilakan buat backup terlebih dahulu.`;
            
            if (messageId && callbackQueryId) {
                await editMessage(chatId, messageId, callbackQueryId, message, {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Kembali', callback_data: 'owner_menu' }],
                            [{ text: 'Refresh', callback_data: 'restore_menu' }]
                        ]
                    }
                });
            } else {
                await sendNewMessage(chatId, message, {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Kembali', callback_data: 'owner_menu' }],
                            [{ text: 'Refresh', callback_data: 'restore_menu' }]
                        ]
                    }
                });
            }
            return;
        }

        let backupFiles = fs.readdirSync(backupDir)
            .filter(f => f.startsWith('backup_') && f.endsWith('.zip'))
            .map(f => {
                const filePath = path.join(backupDir, f);
                const stats = fs.statSync(filePath);
                return {
                    name: f,
                    path: filePath,
                    size: (stats.size / 1024).toFixed(2),
                    date: stats.mtime,
                    timestamp: stats.mtime.getTime()
                };
            })
            .sort((a, b) => b.timestamp - a.timestamp)
            .slice(0, 20);

        if (backupFiles.length === 0) {
            const message = `<b>📁 RESTORE DATA</b>\n\nTidak ada backup ditemukan.\n\nDirectory backup: <code>${backupDir}</code>\n\nSilakan buat backup terlebih dahulu.`;
            
            if (messageId && callbackQueryId) {
                await editMessage(chatId, messageId, callbackQueryId, message, {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Kembali', callback_data: 'owner_menu' }],
                            [{ text: 'Refresh', callback_data: 'restore_menu' }]
                        ]
                    }
                });
            } else {
                await sendNewMessage(chatId, message, {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Kembali', callback_data: 'owner_menu' }],
                            [{ text: 'Refresh', callback_data: 'restore_menu' }]
                        ]
                    }
                });
            }
            return;
        }

        let message = `<b>📁 DAFTAR BACKUP</b>\n\n`;
        message += `<b>Total backup:</b> ${backupFiles.length}\n`;
        message += `<b>Directory:</b> <code>${backupDir}</code>\n\n`;
        message += `<b>Pilih backup untuk direstore:</b>\n\n`;

        const keyboard = [];
        const buttonsPerRow = 1;

        for (let i = 0; i < backupFiles.length; i += buttonsPerRow) {
            const rowFiles = backupFiles.slice(i, i + buttonsPerRow);
            
            for (const file of rowFiles) {
                const dateStr = file.date.toLocaleString('id-ID');
                const fileName = file.name.length > 30 ? 
                    file.name.substring(0, 27) + '...' : 
                    file.name;
                
                const buttonText = `${i + 1}. ${fileName} (${file.size} KB)`;
                const callbackData = `restore_view_${file.name}`;
                
                keyboard.push([{ 
                    text: buttonText, 
                    callback_data: callbackData 
                }]);
            }
        }

        const navButtons = [];
        if (backupFiles.length > 10) {
            navButtons.push({ text: '⬆️ Atas', callback_data: 'restore_page_top' });
            navButtons.push({ text: '⬇️ Bawah', callback_data: 'restore_page_bottom' });
            keyboard.push(navButtons);
        }

        keyboard.push([
            { text: '📥 Backup Sekarang', callback_data: 'create_backup_now' },
            { text: '🔄 Refresh', callback_data: 'restore_menu' }
        ]);
        
        keyboard.push([
            { text: 'Kembali ke Owner Menu', callback_data: 'owner_menu' },
            { text: 'Menu Utama', callback_data: 'main_menu' }
        ]);

        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, message, {
                parse_mode: 'HTML',
                reply_markup: { inline_keyboard: keyboard },
                disable_web_page_preview: true
            });
        } else {
            await sendNewMessage(chatId, message, {
                parse_mode: 'HTML',
                reply_markup: { inline_keyboard: keyboard },
                disable_web_page_preview: true
            });
        }

    } catch (error) {
        const errorMessage = `<b>❌ ERROR</b>\n\nGagal memuat daftar backup.\n\nError: <code>${error.message}</code>`;
        
        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, errorMessage, {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Coba Lagi', callback_data: 'restore_menu' }],
                        [{ text: 'Kembali', callback_data: 'owner_menu' }]
                    ]
                }
            });
        } else {
            await sendNewMessage(chatId, errorMessage, {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Coba Lagi', callback_data: 'restore_menu' }],
                        [{ text: 'Kembali', callback_data: 'owner_menu' }]
                    ]
                }
            });
        }
    }
}

async function showBackupDetail(chatId, userId, backupFileName, messageId, callbackQueryId) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
                show_alert: true
            });
            return;
        }

        const backupDir = path.join(__dirname, 'backup');
        const backupPath = path.join(backupDir, backupFileName);
        
        if (!fs.existsSync(backupPath)) {
            await editMessage(chatId, messageId, callbackQueryId,
                `<b>❌ BACKUP TIDAK DITEMUKAN</b>\n\nFile backup tidak ditemukan:\n<code>${backupFileName}</code>`,
                {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Kembali ke Daftar', callback_data: 'restore_menu' }]
                        ]
                    }
                }
            );
            return;
        }

        const stats = fs.statSync(backupPath);
        const fileSizeKB = (stats.size / 1024).toFixed(2);
        const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
        const modifiedDate = stats.mtime.toLocaleString('id-ID');
        const createdDate = stats.birthtime ? stats.birthtime.toLocaleString('id-ID') : 'Tidak diketahui';

        let message = `<b>📁 DETAIL BACKUP</b>\n\n`;
        message += `<b>Nama File:</b> <code>${backupFileName}</code>\n`;
        message += `<b>Ukuran:</b> ${fileSizeKB} KB (${fileSizeMB} MB)\n`;
        message += `<b>Tanggal Modifikasi:</b> ${modifiedDate}\n`;
        message += `<b>Tanggal Pembuatan:</b> ${createdDate}\n`;
        message += `<b>Path:</b> <code>${backupPath}</code>\n\n`;

        try {
            const AdmZip = require('adm-zip');
            const zip = new AdmZip(backupPath);
            const zipEntries = zip.getEntries();
            
            const jsonFiles = zipEntries.filter(entry => 
                entry.name.endsWith('.json') && !entry.isDirectory
            ).map(entry => entry.name);
            
            message += `<b>📋 File dalam backup (${jsonFiles.length} file):</b>\n\n`;
            
            // Tampilkan file dengan bullet points sederhana
            if (jsonFiles.length > 0) {
                // Batasi jumlah file yang ditampilkan (max 20)
                const displayFiles = jsonFiles.slice(0, 20);
                displayFiles.forEach(file => {
                    message += `• ${file}\n`;
                });
                if (jsonFiles.length > 20) {
                    message += `\n<i>... dan ${jsonFiles.length - 20} file lainnya</i>\n`;
                }
            } else {
                message += `<i>Tidak ada file JSON dalam backup</i>\n`;
            }
            
            message += `\n`;
            
        } catch (zipError) {
            message += `<i>⚠️ Tidak bisa membaca isi file zip (mungkin corrupt)</i>\n\n`;
        }

        message += `<b>⚠️ PERINGATAN:</b>\n`;
        message += `• Restore akan menimpa data saat ini\n`;
        message += `• Pastikan sudah backup data terbaru\n`;
        message += `• Proses tidak bisa dibatalkan\n\n`;
        message += `Pilih tindakan:`;

        const keyboard = [
            [
                { text: '🔄 Restore Data Ini', callback_data: `restore_confirm_${backupFileName}` },
                { text: '📥 Download', callback_data: `restore_download_${backupFileName}` }
            ],
            [
                { text: '🗑️ Hapus Backup', callback_data: `restore_delete_${backupFileName}` }
            ],
            [
                { text: '⬅️ Kembali ke Daftar', callback_data: 'restore_menu' },
                { text: '📋 Owner Menu', callback_data: 'owner_menu' }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard },
            disable_web_page_preview: true
        });

    } catch (error) {
        await editMessage(chatId, messageId, callbackQueryId,
            `<b>❌ ERROR</b>\n\nGagal memuat detail backup.\n\nError: <code>${error.message}</code>`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Kembali ke Daftar', callback_data: 'restore_menu' }]
                    ]
                }
            }
        );
    }
}

async function confirmRestore(chatId, userId, backupFileName, messageId, callbackQueryId) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
                show_alert: true
            });
            return;
        }

        const backupDir = path.join(__dirname, 'backup');
        const backupPath = path.join(backupDir, backupFileName);
        
        if (!fs.existsSync(backupPath)) {
            await editMessage(chatId, messageId, callbackQueryId,
                `<b>❌ BACKUP TIDAK DITEMUKAN</b>\n\nFile backup tidak ditemukan:\n<code>${backupFileName}</code>`,
                {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Kembali ke Daftar', callback_data: 'restore_menu' }]
                        ]
                    }
                }
            );
            return;
        }

        // Lihat isi backup
        let fileList = '';
        try {
            const AdmZip = require('adm-zip');
            const zip = new AdmZip(backupPath);
            const zipEntries = zip.getEntries();
            const jsonFiles = zipEntries.filter(entry => 
                entry.name.endsWith('.json') && !entry.isDirectory
            ).map(entry => entry.name);
            
            if (jsonFiles.length > 0) {
                fileList = `\n<b>📋 File dalam backup:</b>\n`;
                const displayFiles = jsonFiles.slice(0, 15);
                displayFiles.forEach(file => {
                    fileList += `• ${file}\n`;
                });
                if (jsonFiles.length > 15) {
                    fileList += `\n<i>... dan ${jsonFiles.length - 15} file lainnya</i>\n`;
                }
                fileList += `\n`;
            } else {
                fileList = `\n<i>⚠️ Tidak ada file JSON dalam backup</i>\n\n`;
            }
        } catch (e) {
            fileList = `\n<i>⚠️ Tidak bisa membaca isi backup</i>\n\n`;
        }

        let message = `<b>⚠️ KONFIRMASI RESTORE</b>\n\n`;
        message += `<b>File backup:</b> <code>${backupFileName}</code>\n\n`;
        message += `<b>PERINGATAN PENTING:</b>\n`;
        message += `• Semua data saat ini akan DITIMPA\n`;
        message += `• Proses ini TIDAK BISA DIBATALKAN\n`;
        message += `• Bot akan merestart cache\n`;
        message += `• Backup otomatis data saat ini akan dibuat\n\n`;
        message += `${fileList}`;
        message += `Ketik <code>/restore ${backupFileName}</code> untuk melanjutkan restore.`;

        const keyboard = [
            [
                { text: '✅ Ya, Restore Sekarang', callback_data: `restore_execute_${backupFileName}` },
                { text: '❌ Batalkan', callback_data: `restore_view_${backupFileName}` }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard },
            disable_web_page_preview: true
        });

    } catch (error) {
        await editMessage(chatId, messageId, callbackQueryId,
            `<b>❌ ERROR</b>\n\nGagal memproses konfirmasi.\n\nError: <code>${error.message}</code>`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Kembali ke Daftar', callback_data: 'restore_menu' }]
                    ]
                }
            }
        );
    }
}

// Show buy script menu
async function showBuyScriptMenu(chatId, userId, messageId, callbackQueryId, page = 0) {
    try {
        const scripts = getActiveScriptsList();
        const itemsPerPage = 10;
        const totalPages = Math.ceil(scripts.length / itemsPerPage);
        
        // Validasi page
        if (page < 0) page = 0;
        if (page >= totalPages && totalPages > 0) page = totalPages - 1;
        
        const startIndex = page * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, scripts.length);
        const pageScripts = scripts.slice(startIndex, endIndex);
        
        if (scripts.length === 0) {
            const msg = `🛒 *TOKO SCRIPT*\n━━━━━━━━━━━━━━━━━━━━━━━\n\n❌ *Belum ada script tersedia*\n\nSilakan cek lagi nanti.`;
            
            if (messageId && callbackQueryId) {
                await editMessage(chatId, messageId, callbackQueryId, msg, { parse_mode: "Markdown" });
            } else {
                await sendNewMessage(chatId, msg, { parse_mode: "Markdown" });
            }
            return;
        }
        
        let message = `🛒 *TOKO SCRIPT - PAKASIR* 🛒\n━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        message += `📜 *Daftar Script Tersedia:*\n`;
        message += `📄 *Halaman:* ${page + 1}/${totalPages}\n`;
        message += `📊 *Total Script:* ${scripts.length}\n\n`;
        
        pageScripts.forEach((script, index) => {
            const num = startIndex + index + 1;
            message += `${num}. *${script.name}*\n`;
            message += `   💰 Harga: ${formatCurrency(script.price)}\n`;
            message += `   📂 Kategori: ${script.category}\n`;
            message += `   📥 Download: ${script.downloads}x\n\n`;
        });
        
        message += `━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `💡 *Cara Membeli:*\n`;
        message += `1️⃣ Pilih script yang diinginkan\n`;
        message += `2️⃣ Scan QRIS yang muncul\n`;
        message += `3️⃣ Lakukan pembayaran\n`;
        message += `4️⃣ Script akan otomatis terkirim!\n\n`;
        message += `⚡ *Pembayaran via QRIS Pakasir*\n`;
        message += `✨ Real-time, auto-delivery!`;
        
        const keyboard = [];
        
        // Tombol untuk setiap script di halaman ini
        pageScripts.forEach((script) => {
            keyboard.push([
                { text: `📜 ${script.name.substring(0, 25)}`, callback_data: `script_detail_${script.id}` }
            ]);
        });
        
        // Tombol navigasi halaman
        const navButtons = [];
        
        // Tombol Previous
        if (page > 0) {
            navButtons.push({ 
                text: '◀️ Prev', 
                callback_data: `script_menu_page_${page - 1}` 
            });
        } else {
            navButtons.push({ 
                text: '◀️', 
                callback_data: 'no_action' 
            });
        }
        
        // Info halaman
        navButtons.push({ 
            text: `📄 ${page + 1}/${totalPages}`, 
            callback_data: 'no_action' 
        });
        
        // Tombol Next
        if (page < totalPages - 1) {
            navButtons.push({ 
                text: 'Next ▶️', 
                callback_data: `script_menu_page_${page + 1}` 
            });
        } else {
            navButtons.push({ 
                text: '▶️', 
                callback_data: 'no_action' 
            });
        }
        
        if (navButtons.length > 0 && totalPages > 1) {
            keyboard.push(navButtons);
        }
        
        // Tombol lainnya
        keyboard.push([
            { text: '🔍 Cari Script', callback_data: 'script_search' },
            { text: '📋 Riwayat Pembelian', callback_data: 'script_history' }
        ]);
        
        keyboard.push([
            { text: '🏠 Menu Utama', callback_data: 'main_menu' }
        ]);
        
        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, message, {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            });
        } else {
            await sendNewMessage(chatId, message, {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            });
        }
        
    } catch (error) {
        console.error('Error showBuyScriptMenu:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Show buy panel menu
async function showBuyPanelMenu(chatId, userId, messageId, callbackQueryId, page = 0) {
    try {
        const products = Object.entries(PANEL_PRODUCTS);
        const itemsPerPage = 4; // Ubah jadi 4 karena ada 4 produk
        const totalPages = Math.ceil(products.length / itemsPerPage);
        
        if (page < 0) page = 0;
        if (page >= totalPages && totalPages > 0) page = totalPages - 1;
        
        const startIndex = page * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, products.length);
        const pageProducts = products.slice(startIndex, endIndex);
        
        let message = `🖥️ *BUY PANEL - PTERODACTYL* 🖥️\n━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        message += `📄 *Halaman:* ${page + 1}/${totalPages}\n\n`;
        
        pageProducts.forEach(([key, product], index) => {
            const num = startIndex + index + 1;
            const emoji = key === 'admin' ? '👑' : '🖥️';
            message += `${num}. ${emoji} *${product.name}*\n`;
            message += `   💰 Harga: ${formatCurrency(product.price)}\n`;
            message += `   📝 ${product.description.replace(/\n/g, '\n   ')}\n\n`;
        });
        
        message += `━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `💡 *Cara Membeli:*\n`;
        message += `1️⃣ Pilih paket panel\n`;
        message += `2️⃣ Scan QRIS yang muncul\n`;
        message += `3️⃣ Lakukan pembayaran\n`;
        message += `4️⃣ Kirim username & email\n`;
        message += `5️⃣ Panel akan otomatis dibuat!\n\n`;
        message += `⚡ *Pembayaran via QRIS Pakasir*\n`;
        message += `✨ Real-time, auto-delivery!`;
        
        const keyboard = [];
        
        pageProducts.forEach(([key, product]) => {
            const emoji = key === 'admin' ? '👑' : '🖥️';
            keyboard.push([
                { text: `${emoji} ${product.name} - ${formatCurrency(product.price)}`, callback_data: `panel_buy_${key}` }
            ]);
        });
        
        // Navigation buttons
        if (totalPages > 1) {
            const navRow = [];
            if (page > 0) {
                navRow.push({ text: '◀️ Prev', callback_data: `panel_menu_page_${page - 1}` });
            }
            navRow.push({ text: `📄 ${page + 1}/${totalPages}`, callback_data: 'no_action' });
            if (page < totalPages - 1) {
                navRow.push({ text: 'Next ▶️', callback_data: `panel_menu_page_${page + 1}` });
            }
            if (navRow.length > 0) keyboard.push(navRow);
        }
        
        keyboard.push([
            { text: '📋 My Panels', callback_data: 'panel_my_list' },
            { text: '🏠 Menu Utama', callback_data: 'main_menu' }
        ]);
        
        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, message, {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            });
        } else {
            await sendNewMessage(chatId, message, {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            });
        }
        
    } catch (error) {
        console.error('Error showBuyPanelMenu:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Handle panel payment with balance
async function handlePanelPaymentWithBalance(chatId, userId, productKey, messageId, callbackQueryId) {
    try {
        const product = PANEL_PRODUCTS[productKey];
        if (!product) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Paket tidak ditemukan!', { parse_mode: 'HTML' });
            return;
        }
        
        const price = product.price;
        const userBalance = getUserBalance(userId);
        
        if (userBalance < price) {
            await editMessage(chatId, messageId, callbackQueryId,
                `❌ *SALDO TIDAK CUKUP!*\n\nSaldo Anda: ${formatCurrency(userBalance)}\nHarga Panel: ${formatCurrency(price)}\n\nSilakan deposit terlebih dahulu.`,
                { parse_mode: 'Markdown' }
            );
            return;
        }
        
        // Hapus pesan callback
        await bot.deleteMessage(chatId, messageId).catch(() => {});
        
        // Simpan ke selection untuk proses setelah input info
        userSelections.set(userId, {
            step: 'awaiting_panel_username_with_balance',
            product: product,
            productKey: productKey,
            price: price,
            chatId: chatId,
            timestamp: Date.now()
        });
        
        const infoMessage = `
✅ *PEMBAYARAN DENGAN SALDO*

💰 Pembayaran untuk *${product.name}* akan menggunakan saldo Anda.

━━━━━━━━━━━━━━━━━━━━━━━
📝 *SILAKAN KIRIMKAN USERNAME:*

Contoh: \`johndoe\`
━━━━━━━━━━━━━━━━━━━━━━━

📧 *Email akan otomatis dibuat:*
\`username@achastore.icu\`

⚠️ *Catatan:*
• Username minimal 3 karakter, maksimal 20 karakter
• Hanya huruf, angka, dan underscore
• Username harus unik (belum terdaftar di panel)
• Panel akan dibuat otomatis setelah username diterima
• Saldo akan dipotong ${formatCurrency(price)}
• Kirim *0* untuk membatalkan
`.trim();

        await sendNewMessage(chatId, infoMessage, { parse_mode: "Markdown" });

    } catch (error) {
        console.error('Error handlePanelPaymentWithBalance:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Create panel order with Pakasir
async function createPanelOrder(chatId, userId, productKey) {
    try {
        const product = PANEL_PRODUCTS[productKey];
        if (!product) {
            await sendNewMessage(chatId, '❌ Paket tidak ditemukan!', { parse_mode: 'HTML' });
            return null;
        }
        
        const userBalance = getUserBalance(userId);
        const price = product.price;
        const canUseBalance = userBalance >= price;
        
        let message = `🖥️ *${product.name}*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 ${product.description.replace(/\n/g, '\n')}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 *Harga:* ${formatCurrency(price)}
💳 *Saldo Anda:* ${formatCurrency(userBalance)}

${canUseBalance ? '✅ Saldo cukup untuk membeli dengan saldo!' : '❌ Saldo tidak cukup untuk membeli dengan saldo.'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

*Pilih metode pembayaran:*`;

        const keyboard = [];
        
        // Tombol QRIS (selalu tersedia)
        keyboard.push([{ text: "🏦 QRIS (PAKASIR)", callback_data: `panel_pay_qris_${productKey}` }]);
        
        // Tombol Bayar Pakai Saldo (jika cukup)
        if (canUseBalance) {
            keyboard.push([{ text: "💰 BAYAR PAKAI SALDO", callback_data: `panel_pay_balance_${productKey}` }]);
        }
        
        keyboard.push([{ text: "🔙 Kembali", callback_data: "panel_menu" }]);
        keyboard.push([{ text: "🏠 Menu Utama", callback_data: "main_menu" }]);

        await sendNewMessage(chatId, message, {
            parse_mode: "Markdown",
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error createPanelOrder:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
        return null;
    }
}

// Ask for admin panel info (tanpa pembayaran dulu karena langsung dibuat)
async function askAdminPanelInfo(chatId, userId, product) {
    try {
        userSelections.set(userId, {
            step: 'awaiting_admin_panel_info',
            product: product,
            timestamp: Date.now()
        });
        
        const message = `
👑 *BUY ADMIN PANEL* 👑
━━━━━━━━━━━━━━━━━━━━━━━

💰 *Harga:* ${formatCurrency(product.price)}
📝 *Includes:*
• Root Admin Access
• Full Control Panel
• Manage All Users
• Create/Delete Servers
• Unlimited Everything

━━━━━━━━━━━━━━━━━━━━━━━

📝 *Silakan kirimkan:*
1️⃣ *Nama Panel* (untuk username admin)
   Contoh: \`myadmin\`

2️⃣ *Email Admin* (valid)
   Contoh: \`admin@mycompany.com\`

📌 *Format pengiriman:*
\`panelname|email\`

Contoh: \`myadmin|admin@mycompany.com\`

⚠️ *Setelah data diterima, akan dibuat QRIS untuk pembayaran.*
`.trim();
        
        await sendNewMessage(chatId, message, { parse_mode: "Markdown" });
        
    } catch (error) {
        console.error('Error askAdminPanelInfo:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Monitor panel payment
async function monitorPanelPayment(userId, kodeTrx, product) {
    const deposit = activePanelDeposit[userId];
    if (!deposit) return;
    
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    while (activePanelDeposit[userId] && activePanelDeposit[userId].status) {
        await sleep(6000 + Math.floor(Math.random() * 3000));
        
        try {
            const cek = await axios.get(deposit.statusUrl, { timeout: 15000 });
            const transaction = cek.data?.transaction;
            const status = (transaction?.status || '').toLowerCase();
            
            if (status === "completed" || status === "settlement") {
                if (activePanelDeposit[userId].processed) continue;
                
                activePanelDeposit[userId].status = false;
                activePanelDeposit[userId].processed = true;
                clearTimeout(activePanelDeposit[userId].timeout);
                
                // Payment success, now ask for user info
                await askPanelUserInfo(userId, deposit, product);
                break;
            }
            
        } catch (error) {
            console.error('Error checking panel payment:', error.message);
        }
    }
}

// Ask for panel user info after payment
async function askPanelUserInfo(userId, deposit, product) {
    try {
        const chatId = deposit.chatId;
        
        // Delete QR message
        await bot.deleteMessage(chatId, deposit.msgId).catch(() => {});
        
        // Update deposit status to awaiting info
        if (activePanelDeposit[userId]) {
            activePanelDeposit[userId].awaitingInfo = true;
        }
        
        // Set user selection untuk menunggu input username
        userSelections.set(userId, {
            step: 'awaiting_panel_username',
            deposit: deposit,
            product: product,
            timestamp: Date.now()
        });
        
        const message = `
✅ *PEMBAYARAN BERHASIL!*

💰 Pembayaran untuk *${product.name}* telah dikonfirmasi.

━━━━━━━━━━━━━━━━━━━━━━━
📝 *SILAKAN KIRIMKAN USERNAME:*

Contoh: \`johndoe\`
━━━━━━━━━━━━━━━━━━━━━━━

📧 *Email akan otomatis dibuat:*
\`username@achastore.icu\`

⚠️ *Catatan:*
• Username minimal 3 karakter, maksimal 20 karakter
• Hanya huruf, angka, dan underscore
• Username harus unik (belum terdaftar di panel)
• Panel akan dibuat otomatis setelah username diterima
• Kirim *0* untuk membatalkan
`.trim();
        
        await sendNewMessage(chatId, message, { parse_mode: "Markdown" });
        
    } catch (error) {
        console.error('Error askPanelUserInfo:', error);
        await bot.sendMessage(deposit.chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

async function processPanelCreation(userId, username) {
    try {
        const selection = userSelections.get(userId);
        if (!selection || selection.step !== 'awaiting_panel_username') {
            return { success: false, error: 'Sesi tidak valid' };
        }
        
        const deposit = selection.deposit;
        const product = selection.product;
        
        // Validasi username
        const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
        if (!usernameRegex.test(username)) {
            return { success: false, error: 'Username tidak valid! Harus 3-20 karakter, hanya huruf, angka, dan underscore.' };
        }
        
        // Buat email otomatis
        const email = `${username}@achastore.icu`;
        
        const password = generateRandomPassword();
        const serverName = `${username}_panel_${Date.now()}`;
        
        // Send processing message
        const processingMsg = await bot.sendMessage(deposit.chatId, 
            '⏳ *MEMBUAT PANEL ANDA...*\n\nMohon tunggu, sedang memproses...',
            { parse_mode: 'Markdown' }
        );
        
        let userData, serverData;
        
        try {
            userData = await createPanelUser(email, username, password);
            serverData = await createPanelServer(userData.id, serverName, product, password);
        } catch (apiError) {
            if (apiError.message === 'EMAIL_EXISTS') {
                return { success: false, error: 'Username sudah terdaftar di panel! Silakan coba username lain.' };
            }
            throw apiError;
        }
        
        // Save order to database
        const orders = loadPanelOrders();
        const newOrder = {
            id: deposit.kodeTrx,
            userId: userId.toString(),
            username: username,
            email: email,
            password: password,
            productKey: deposit.productKey,
            productName: product.name,
            disk: product.disk,
            memory: product.memory,
            cpu: product.cpu,
            price: deposit.jumlah,
            fee: deposit.fee,
            total: deposit.totalBayar,
            panelUserId: userData.id,
            panelServerId: serverData.id,
            status: 'active',
            paymentMethod: 'qris',
            createdAt: new Date().toISOString(),
            expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
        };
        
        orders.orders.push(newOrder);
        orders.stats.totalOrders++;
        orders.stats.totalRevenue += deposit.jumlah;
        savePanelOrders(orders);
        
        // Save server info for monitoring
        const servers = loadPanelServers();
        servers.servers.push({
            serverId: serverData.id,
            userId: userId.toString(),
            username: username,
            productKey: deposit.productKey,
            createdAt: new Date().toISOString(),
            expiresAt: newOrder.expiresAt,
            status: 'active'
        });
        servers.lastCheck = new Date().toISOString();
        savePanelServers(servers);
        
        // Delete processing message
        await bot.deleteMessage(deposit.chatId, processingMsg.message_id).catch(() => {});
        
        const panelUrl = `${panelDomain}`;
        const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        
        // Tentukan icon berdasarkan produk
        let productIcon = "🖥️";
        if (product.name.includes("ADMIN") || product.name.includes("ROOT")) {
            productIcon = "👑";
        } else if (product.name.includes("UNLIMITED")) {
            productIcon = "⭐";
        }
        
        // Format disk
        let diskText = product.disk === 0 ? "Unlimited" : `${product.disk} MB`;
        let ramText = product.memory === 0 ? "Unlimited" : `${product.memory} MB`;
        
        // Tampilan SEDERHANA
        const successMsg = `
<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   🎉 <b>PANEL BERHASIL DIBUAT!</b> 🎉
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<b>📋 INFORMASI LOGIN</b>
┌─────────────────────────────────
├ 👤 User  : <code>${username}</code>
├ 📧 Email : <code>${email}</code>
└ 🔑 Pass  : <code>${password}</code>

<b>📦 DETAIL PAKET</b>
┌─────────────────────────────────
├ ${productIcon} Paket : ${product.name}
├ 💾 Disk  : ${diskText}
├ 🧠 RAM   : ${ramText}
└ ⚡ CPU   : ${product.cpu}%

<b>💰 PEMBAYARAN</b>
┌─────────────────────────────────
├ 💳 Metode : QRIS
├ 💰 Harga  : ${formatCurrency(deposit.jumlah)}
└ ✅ Status : LUNAS

<b>📅 MASA AKTIF</b>
┌─────────────────────────────────
└ ⏰ Expired : ${expiresAt} (30 Hari)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ <b>Simpan info login dengan aman!</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`.trim();
        
        const keyboard = {
            inline_keyboard: [
                [
                    { text: "🌐 LOGIN PANEL", url: panelUrl },
                    { text: "🛒 BELI LAGI", callback_data: "panel_menu" }
                ],
                [
                    { text: "🏠 MENU UTAMA", callback_data: "main_menu" }
                ]
            ]
        };
        
        await sendNewMessage(deposit.chatId, successMsg, {
            parse_mode: "HTML",
            reply_markup: keyboard,
            disable_web_page_preview: true
        });
        
        // Notify to channel
        await notifyPanelPurchaseToChannel(newOrder, userId, username, email, password);
        
        // Clean up
        userSelections.delete(userId);
        delete activePanelDeposit[userId];
        
        return { success: true };
        
    } catch (error) {
        console.error('Error processPanelCreation:', error);
        return { success: false, error: error.message };
    }
}

// Process panel creation with balance payment (hanya perlu username)
async function processPanelCreationWithBalance(chatId, userId, username) {
    try {
        const selection = userSelections.get(userId);
        if (!selection || selection.step !== 'awaiting_panel_username_with_balance') {
            return { success: false, error: 'Sesi tidak valid. Silakan pilih panel dari awal.' };
        }
        
        // Validasi username
        const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
        if (!usernameRegex.test(username)) {
            return { success: false, error: 'Username tidak valid! Harus 3-20 karakter, hanya huruf, angka, dan underscore.' };
        }
        
        // Buat email otomatis
        const email = `${username}@achastore.icu`;
        
        const product = selection.product;
        const price = selection.price;
        const userBalance = getUserBalance(userId);
        
        if (userBalance < price) {
            return { success: false, error: 'Saldo tidak cukup!' };
        }
        
        // Potong saldo
        const deductSuccess = deductUserBalance(userId, price);
        if (!deductSuccess) {
            return { success: false, error: 'Gagal memotong saldo!' };
        }
        
        const password = generateRandomPassword();
        const serverName = `${username}_panel_${Date.now()}`;
        
        // Kirim pesan processing
        const processingMsg = await sendNewMessage(chatId, 
            '⏳ *MEMBUAT PANEL ANDA...*\n\nMohon tunggu, sedang memproses...',
            { parse_mode: 'Markdown' }
        );
        
        let userData, serverData;
        
        try {
            // Create user in panel
            userData = await createPanelUser(email, username, password);
            
            // Create server in panel
            serverData = await createPanelServer(userData.id, serverName, product, password);
            
        } catch (apiError) {
            // Refund jika gagal
            addUserBalance(userId, price);
            
            if (apiError.message === 'EMAIL_EXISTS') {
                return { success: false, error: 'Username sudah terdaftar di panel! Silakan coba username lain.' };
            }
            throw apiError;
        }
        
        // Save order to database
        const orders = loadPanelOrders();
        const kodeTrx = `PANEL${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        
        const newOrder = {
            id: kodeTrx,
            userId: userId.toString(),
            username: username,
            email: email,
            password: password,
            productKey: selection.productKey,
            productName: product.name,
            disk: product.disk,
            memory: product.memory,
            cpu: product.cpu,
            price: price,
            fee: 0,
            total: price,
            panelUserId: userData.id,
            panelServerId: serverData.id,
            status: 'active',
            paymentMethod: 'balance',
            createdAt: new Date().toISOString(),
            expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
        };
        
        orders.orders.push(newOrder);
        orders.stats.totalOrders++;
        orders.stats.totalRevenue += price;
        savePanelOrders(orders);
        
        // Save server info for monitoring
        const servers = loadPanelServers();
        servers.servers.push({
            serverId: serverData.id,
            userId: userId.toString(),
            username: username,
            productKey: selection.productKey,
            createdAt: new Date().toISOString(),
            expiresAt: newOrder.expiresAt,
            status: 'active'
        });
        servers.lastCheck = new Date().toISOString();
        savePanelServers(servers);
        
        // Delete processing message
        await bot.deleteMessage(chatId, processingMsg.message_id).catch(() => {});
        
        const panelUrl = `${panelDomain}`;
        
        const successMsg = `
✅ *PANEL BERHASIL DIBUAT!*

━━━━━━━━━━━━━━━━━━━━━━━
📋 *INFORMASI LOGIN PANEL*
━━━━━━━━━━━━━━━━━━━━━━━

🌐 *URL Panel:* 
\`${panelUrl}\`

👤 *Username:* \`${username}\`
📧 *Email:* \`${email}\`
🔑 *Password:* \`${password}\`

━━━━━━━━━━━━━━━━━━━━━━━
📦 *DETAIL PAKET*
━━━━━━━━━━━━━━━━━━━━━━━

🖥️ *Paket:* ${product.name}
💾 *Disk:* ${product.disk === 0 ? 'Unlimited' : `${product.disk} MB`}
🧠 *RAM:* ${product.memory} MB
⚡ *CPU:* ${product.cpu}%

━━━━━━━━━━━━━━━━━━━━━━━
💳 *Metode Pembayaran:* SALDO
💰 *Harga:* ${formatCurrency(price)}
💳 *Saldo sekarang:* ${formatCurrency(getUserBalance(userId))}
⏰ *Masa Aktif:* 30 Hari

━━━━━━━━━━━━━━━━━━━━━━━
⚠️ *PENTING:*
• Simpan informasi login ini dengan aman
• Jangan bagikan password ke siapapun
• Gunakan panel dengan bijak
━━━━━━━━━━━━━━━━━━━━━━━
`;
        
        await sendNewMessage(chatId, successMsg, { parse_mode: "Markdown" });
        
        // Notify to channel
        await notifyPanelPurchaseToChannel(newOrder, userId, username, email, password);
        
        // Clean up
        userSelections.delete(userId);
        
        return { success: true };
        
    } catch (error) {
        console.error('Error processPanelCreationWithBalance:', error);
        
        // Refund jika gagal
        const selection = userSelections.get(userId);
        if (selection && selection.price) {
            addUserBalance(userId, selection.price);
        }
        
        return { success: false, error: error.message };
    }
}

// Generate random password
function generateRandomPassword(length = 12) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// Handle expired panel order
async function handleExpiredPanelOrder(userId, kodeTrx, orderId, jumlah) {
    try {
        const deposit = activePanelDeposit[userId];
        if (!deposit) return;
        
        const expiredMsg = `
⏰ *PEMBELIAN PANEL EXPIRED*

🧾 *ID Transaksi:* \`${kodeTrx}\`
🖥️ *Paket:* ${deposit.productName}
💰 Harga: ${formatCurrency(jumlah)}
💳 Metode: QRIS Pakasir

❌ Status: Dibatalkan otomatis karena melebihi batas waktu.
`.trim();
        
        await bot.deleteMessage(deposit.chatId, deposit.msgId).catch(() => {});
        await sendNewMessage(deposit.chatId, expiredMsg, { parse_mode: "Markdown" });
        
        // Notify owner
        for (const ownerId of owner_ids) {
            await bot.sendMessage(ownerId, 
                `🚨 *TRANSAKSI PANEL EXPIRED*\n\n` +
                `👤 User: ${userId}\n` +
                `🖥️ Paket: ${deposit.productName}\n` +
                `💰 Harga: ${formatCurrency(jumlah)}\n` +
                `🧾 Kode: \`${kodeTrx}\`\n` +
                `❌ Status: Expired`,
                { parse_mode: "Markdown" }
            ).catch(() => {});
        }
        
    } catch (err) {
        console.error("Error handling expired panel order:", err.message);
    }
}

// Cancel panel deposit
async function cancelPanelDeposit(chatId, userId, kodeTrx) {
    try {
        const deposit = activePanelDeposit[userId];
        
        if (!deposit || deposit.kodeTrx !== kodeTrx) {
            await sendNewMessage(chatId, '❌ Transaksi tidak ditemukan atau sudah tidak aktif.', { parse_mode: 'HTML' });
            return false;
        }
        
        clearTimeout(deposit.timeout);
        await bot.deleteMessage(chatId, deposit.msgId).catch(() => {});
        delete activePanelDeposit[userId];
        
        await sendNewMessage(chatId, 
            '✅ Transaksi dibatalkan.\n\nSilakan lakukan pembelian ulang jika ingin membeli panel.',
            { parse_mode: 'HTML' }
        );
        
        return true;
        
    } catch (error) {
        console.error('Error cancelPanelDeposit:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
        return false;
    }
}

// Show user's panel list
async function showMyPanels(chatId, userId, messageId, callbackQueryId, page = 0) {
    try {
        const orders = loadPanelOrders();
        const userOrders = orders.orders.filter(o => o.userId === userId.toString());
        
        if (userOrders.length === 0) {
            const msg = `📋 *PANEL SAYA*\n━━━━━━━━━━━━━━━━━━━━━━━\n\n❌ *Belum ada panel yang dibeli.*\n\nSilakan beli panel terlebih dahulu!`;
            
            const keyboard = [
                [{ text: '🖥️ Beli Panel', callback_data: 'panel_menu' }],
                [{ text: '🏠 Menu Utama', callback_data: 'main_menu' }]
            ];
            
            if (messageId && callbackQueryId) {
                await editMessage(chatId, messageId, callbackQueryId, msg, {
                    parse_mode: "Markdown",
                    reply_markup: { inline_keyboard: keyboard }
                });
            } else {
                await sendNewMessage(chatId, msg, {
                    parse_mode: "Markdown",
                    reply_markup: { inline_keyboard: keyboard }
                });
            }
            return;
        }
        
        const itemsPerPage = 5;
        const totalPages = Math.ceil(userOrders.length / itemsPerPage);
        if (page < 0) page = 0;
        if (page >= totalPages && totalPages > 0) page = totalPages - 1;
        
        const startIndex = page * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, userOrders.length);
        const pageOrders = userOrders.slice(startIndex, endIndex);
        
        let message = `📋 *PANEL SAYA*\n━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `📊 *Total Panel:* ${userOrders.length}\n`;
        message += `📄 *Halaman:* ${page + 1}/${totalPages}\n\n`;
        
        pageOrders.forEach((order, index) => {
            const num = startIndex + index + 1;
            const expiresDate = new Date(order.expiresAt).toLocaleDateString('id-ID');
            const status = order.status === 'active' ? '✅ Aktif' : '❌ Expired';
            const isAdmin = order.isAdmin === true;
            const emoji = isAdmin ? '👑' : '🖥️';
            
            message += `${num}. ${emoji} *${order.productName}*\n`;
            message += `   👤 User: ${order.username}\n`;
            message += `   📧 Email: ${order.email}\n`;
            if (!isAdmin) {
                message += `   📅 Expired: ${expiresDate}\n`;
            } else {
                message += `   📅 Expired: Lifetime (1 bulan)\n`;
            }
            message += `   📊 Status: ${status}\n\n`;
        });
        
        const keyboard = [];
        
        pageOrders.forEach((order, index) => {
            const num = startIndex + index + 1;
            const emoji = order.isAdmin ? '👑' : '🖥️';
            keyboard.push([
                { text: `${num}. ${emoji} ${order.username} (${order.productName.substring(0, 20)})`, callback_data: `panel_detail_${order.id}` }
            ]);
        });
        
        // Navigation buttons
        if (totalPages > 1) {
            const navRow = [];
            if (page > 0) {
                navRow.push({ text: '◀️ Prev', callback_data: `panel_my_page_${page - 1}` });
            }
            navRow.push({ text: `📄 ${page + 1}/${totalPages}`, callback_data: 'no_action' });
            if (page < totalPages - 1) {
                navRow.push({ text: 'Next ▶️', callback_data: `panel_my_page_${page + 1}` });
            }
            if (navRow.length > 0) keyboard.push(navRow);
        }
        
        keyboard.push([
            { text: '🖥️ Beli Panel Lagi', callback_data: 'panel_menu' },
            { text: '🏠 Menu Utama', callback_data: 'main_menu' }
        ]);
        
        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, message, {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            });
        } else {
            await sendNewMessage(chatId, message, {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            });
        }
        
    } catch (error) {
        console.error('Error showMyPanels:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Show panel detail
async function showPanelDetail(chatId, userId, orderId, messageId, callbackQueryId) {
    try {
        const orders = loadPanelOrders();
        const order = orders.orders.find(o => o.id === orderId);
        
        if (!order || order.userId !== userId.toString()) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Panel tidak ditemukan!', { parse_mode: "Markdown" });
            return;
        }
        
        const panelDomainClean = panelDomain.replace('https://', '').replace('http://', '');
        const createdAt = new Date(order.createdAt).toLocaleString('id-ID');
        const expiresAt = new Date(order.expiresAt).toLocaleString('id-ID');
        const status = order.status === 'active' ? '✅ Aktif' : '❌ Expired';
        const isAdmin = order.isAdmin === true;
        
        let diskText = order.disk === 0 ? 'Unlimited' : `${order.disk} MB`;
        let ramText = order.memory === 0 ? 'Unlimited' : `${order.memory} MB`;
        let cpuText = order.cpu === 0 ? 'Unlimited' : `${order.cpu}%`;
        
        let message = `
🖥️ *DETAIL PANEL*
━━━━━━━━━━━━━━━━━━━━━━━

📋 *INFORMASI LOGIN*
🌐 URL: \`${panelDomain}\`
👤 Username: \`${order.username}\`
📧 Email: \`${order.email}\`
🔑 Password: \`${order.password}\`

━━━━━━━━━━━━━━━━━━━━━━━
📦 *DETAIL PAKET*
🖥️ Paket: ${order.productName}
💾 Disk: ${diskText}
🧠 RAM: ${ramText}
⚡ CPU: ${cpuText}
${isAdmin ? '👑 Role: ROOT ADMIN\n' : ''}
━━━━━━━━━━━━━━━━━━━━━━━
📅 *Tanggal Buat:* ${createdAt}
⏰ *Expired:* ${isAdmin ? 'Lifetime (1 bulan)' : expiresAt}
📊 *Status:* ${status}

━━━━━━━━━━━━━━━━━━━━━━━
⚠️ *Simpan informasi login ini!*
`.trim();
        
        const keyboard = [
            [
                { text: '🔑 Reset Password', callback_data: `panel_resetpass_${orderId}` },
                { text: '📋 My Panels', callback_data: 'panel_my_list' }
            ],
            [
                { text: '🖥️ Beli Lagi', callback_data: 'panel_menu' },
                { text: '🏠 Menu Utama', callback_data: 'main_menu' }
            ]
        ];
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: "Markdown",
            reply_markup: { inline_keyboard: keyboard }
        });
        
    } catch (error) {
        console.error('Error showPanelDetail:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Buy admin panel (for owner)
async function buyAdminPanel(chatId, userId, messageId, callbackQueryId) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak! Hanya Owner yang bisa membeli admin panel.',
                show_alert: true
            });
            return;
        }
        
        userSelections.set(userId, {
            step: 'awaiting_admin_panel_info',
            timestamp: Date.now()
        });
        
        const message = `
👑 *BUY ADMIN PANEL* 👑
━━━━━━━━━━━━━━━━━━━━━━━

💰 *Harga:* ${formatCurrency(75000)}
📝 *Includes:*
• Root Admin Access
• Full Control Panel
• Manage All Users
• Create/Delete Servers
• Unlimited Everything

━━━━━━━━━━━━━━━━━━━━━━━

📝 *Silakan kirimkan:*
1️⃣ *Nama Panel* (untuk username admin)
   Contoh: \`myadmin\`

2️⃣ *Email Admin* (valid)
   Contoh: \`admin@mycompany.com\`

📌 *Format pengiriman:*
\`panelname|email\`

Contoh: \`myadmin|admin@mycompany.com\`

⚠️ *Setelah data diterima, akan dibuat QRIS untuk pembayaran.*
`.trim();
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🔙 Kembali', callback_data: 'panel_menu' }]
                ]
            }
        });
        
    } catch (error) {
        console.error('Error buyAdminPanel:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Process admin panel creation after user info (dengan pembayaran)
async function processAdminPanelCreation(chatId, userId, panelInfo) {
    try {
        const selection = userSelections.get(userId);
        if (!selection || selection.step !== 'awaiting_admin_panel_info') {
            return { success: false, error: 'Sesi tidak valid' };
        }
        
        const [panelName, email] = panelInfo.split('|').map(s => s.trim());
        
        if (!panelName || !email) {
            return { success: false, error: 'Format salah! Gunakan: panelname|email' };
        }
        
        if (panelName.length < 3) {
            return { success: false, error: 'Nama panel minimal 3 karakter' };
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            return { success: false, error: 'Email tidak valid' };
        }
        
        const product = selection.product;
        const password = generateRandomPassword(14);
        const price = product.price;
        const minFee = 100;
        const maxFee = 400;
        const feeTrx = Math.floor(Math.random() * (maxFee - minFee + 1)) + minFee;
        const totalBayar = price + feeTrx;
        const kodeTrx = `ADMIN${Date.now()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
        
        // Create payment QRIS
        const pakasirApiKey = config.pakasirApiKey || 'YOUR_API_KEY';
        const pakasirProject = config.pakasirProject || 'YOUR_PROJECT_ID';
        
        const res = await axios.post(
            'https://app.pakasir.com/api/transactioncreate/qris',
            {
                project: pakasirProject,
                order_id: kodeTrx,
                amount: totalBayar,
                api_key: pakasirApiKey
            },
            {
                headers: { 'Content-Type': 'application/json' },
                timeout: 15000
            }
        );
        
        const payment = res.data?.payment;
        
        if (!payment || !payment.payment_number) {
            return { success: false, error: 'Gagal membuat QRIS' };
        }
        
        const qrBuffer = await QRCode.toBuffer(payment.payment_number, {
            type: 'png',
            errorCorrectionLevel: 'H',
            margin: 4,
            scale: 12,
            width: 2048
        }).catch(() => null);
        
        if (!qrBuffer) {
            return { success: false, error: 'Gagal membuat QR Code' };
        }
        
        // Store pending admin info
        userSelections.set(userId, {
            step: 'awaiting_admin_payment',
            panelName: panelName,
            email: email,
            password: password,
            kodeTrx: kodeTrx,
            orderId: payment.order_id,
            totalBayar: totalBayar,
            price: price,
            fee: feeTrx,
            statusUrl: `https://app.pakasir.com/api/transactiondetail?project=${encodeURIComponent(pakasirProject)}&amount=${encodeURIComponent(payment.amount)}&order_id=${encodeURIComponent(payment.order_id)}&api_key=${encodeURIComponent(pakasirApiKey)}`,
            timestamp: Date.now()
        });
        
        const message = `
👑 *BUY ADMIN PANEL - QRIS PAKASIR* 👑
━━━━━━━━━━━━━━━━━━━━━━━
📛 *Panel Name:* ${panelName}
📧 *Email:* ${email}
🧾 *ID Transaksi:* \`${kodeTrx}\`
💰 Harga Panel: ${formatCurrency(price)}
🧾 Biaya Admin: ${formatCurrency(feeTrx)}
💳 Total Pembayaran: ${formatCurrency(totalBayar)}
⏰ Masa Aktif: 60 Menit

💡 *Scan QRIS di bawah untuk membayar:*
`.trim();
        
        await bot.sendPhoto(chatId, qrBuffer, {
            caption: message,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [
                    [{ text: "✅ Cek Status Pembayaran", callback_data: `cek_admin_payment_${kodeTrx}` }],
                    [{ text: "❌ Batalkan", callback_data: `batal_admin_payment_${kodeTrx}` }]
                ]
            }
        });
        
        // Start monitoring
        monitorAdminPayment(chatId, userId, panelName, email, password, kodeTrx);
        
        return { success: true };
        
    } catch (error) {
        console.error('Error processAdminPanelCreation:', error);
        return { success: false, error: error.message };
    }
}

// Monitor admin payment
async function monitorAdminPayment(chatId, userId, panelName, email, password, kodeTrx) {
    let retryCount = 0;
    const maxRetries = 60; // 10 menit
    
    const interval = setInterval(async () => {
        retryCount++;
        
        if (retryCount >= maxRetries) {
            clearInterval(interval);
            const selection = userSelections.get(userId);
            if (selection && selection.kodeTrx === kodeTrx) {
                await bot.sendMessage(chatId,
                    `⏰ *PEMBAYARAN ADMIN PANEL EXPIRED*\n\n` +
                    `Waktu pembayaran telah habis. Silakan ulangi pembelian.`,
                    { parse_mode: 'Markdown' }
                );
                userSelections.delete(userId);
            }
            return;
        }
        
        try {
            const selection = userSelections.get(userId);
            if (!selection || selection.kodeTrx !== kodeTrx) {
                clearInterval(interval);
                return;
            }
            
            const cek = await axios.get(selection.statusUrl, { timeout: 15000 });
            const transaction = cek.data?.transaction;
            const status = (transaction?.status || '').toLowerCase();
            
            if (status === "completed" || status === "settlement") {
                clearInterval(interval);
                
                // Create admin in panel
                const adminData = await createPanelAdmin(panelName, password);
                
                // Save to database
                const orders = loadPanelOrders();
                const newOrder = {
                    id: kodeTrx,
                    userId: userId.toString(),
                    username: panelName,
                    email: email,
                    password: password,
                    productKey: 'admin',
                    productName: '👑 ADMIN PANEL (ROOT)',
                    disk: 0,
                    memory: 0,
                    cpu: 0,
                    price: selection.price,
                    fee: selection.fee,
                    total: selection.totalBayar,
                    panelUserId: adminData.id,
                    panelServerId: null,
                    status: 'active',
                    isAdmin: true,
                    createdAt: new Date().toISOString(),
                    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 1 year
                };
                
                orders.orders.push(newOrder);
                orders.stats.totalOrders++;
                orders.stats.totalRevenue += selection.price;
                savePanelOrders(orders);
                
                const panelDomainClean = panelDomain.replace('https://', '').replace('http://', '');
                
                const successMsg = `
✅ *ADMIN PANEL BERHASIL DIBUAT!*

━━━━━━━━━━━━━━━━━━━━━━━
👑 *INFORMASI LOGIN ADMIN*
━━━━━━━━━━━━━━━━━━━━━━━

🌐 *URL Panel:* \`${panelDomain}\`
👤 *Username:* \`${panelName}\`
📧 *Email:* \`${email}\`
🔑 *Password:* \`${password}\`

━━━━━━━━━━━━━━━━━━━━━━━
⚠️ *PENTING:*
• Simpan informasi login ini dengan aman!
• Anda adalah ROOT ADMIN
• Bisa mengelola semua user dan server
━━━━━━━━━━━━━━━━━━━━━━━
`;
                
                await bot.sendMessage(chatId, successMsg, { parse_mode: "Markdown" });
                
                // Notify to channel 
                await notifyAdminPurchaseToChannel(panelName, email, password, userId);
                
                // Notify owner
                /*for (const ownerId of owner_ids) {
                    if (ownerId !== userId.toString()) {
                        await bot.sendMessage(ownerId,
                            `👑 *ADMIN PANEL DIBELI*\n\n` +
                            `👤 Owner: ${userId}\n` +
                            `📛 Panel Name: ${panelName}\n` +
                            `📧 Email: ${email}\n` +
                            `💰 Harga: ${formatCurrency(selection.price)}\n` +
                            `🕒 Waktu: ${new Date().toLocaleString('id-ID')}`,
                            { parse_mode: 'Markdown' }
                        ).catch(() => {});
                    }
                }*/
                
                userSelections.delete(userId);
            }
            
        } catch (error) {
            console.error('Error monitoring admin payment:', error.message);
        }
    }, 10000);
}

// Show script detail
async function showScriptDetail(chatId, userId, scriptId, messageId, callbackQueryId) {
    try {
        const script = getScriptById(scriptId);
        
        if (!script) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Script tidak ditemukan!', { parse_mode: "Markdown" });
            return;
        }
        
        const message = `
📜 *${script.name}* 📜
━━━━━━━━━━━━━━━━━━━━━━━
📂 *Kategori:* ${script.category}
💰 *Harga:* ${formatCurrency(script.price)}
📥 *Total Download:* ${script.downloads}x
🕒 *Rilis:* ${new Date(script.createdAt).toLocaleDateString('id-ID')}
📌 *Versi:* ${script.version}

📝 *Deskripsi:*
${script.description}

${script.preview ? `🔍 *Preview:*\n${script.preview}\n` : ''}

━━━━━━━━━━━━━━━━━━━━━━━
✅ *Setelah pembayaran sukses, script akan otomatis terkirim!*
`.trim();
        
        const keyboard = [
            [
                { text: `🛒 Beli (${formatCurrency(script.price)})`, callback_data: `script_buy_${script.id}` },
                { text: '🔙 Kembali', callback_data: 'script_menu' }
            ]
        ];
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: "Markdown",
            reply_markup: { inline_keyboard: keyboard }
        });
        
    } catch (error) {
        console.error('Error showScriptDetail:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Create script order with Pakasir
async function createScriptOrder(chatId, userId, scriptId) {
    try {
        const script = getScriptById(scriptId);
        
        if (!script) {
            await sendNewMessage(chatId, '❌ Script tidak ditemukan!', { parse_mode: 'HTML' });
            return null;
        }
        
        const price = script.price;
        const userBalance = getUserBalance(userId);
        const canUseBalance = userBalance >= price;
        
        // Tampilkan pilihan metode pembayaran
        let message = `📜 <b>${script.name}</b>
━━━━━━━━━━━━━━━━━━━━━━━
💰 <b>Harga:</b> ${formatCurrency(price)}
💳 <b>Saldo Anda:</b> ${formatCurrency(userBalance)}

${canUseBalance ? '✅ Saldo cukup untuk membeli dengan saldo!' : '❌ Saldo tidak cukup untuk membeli dengan saldo.'}
━━━━━━━━━━━━━━━━━━━━━━━

<b>Pilih metode pembayaran:</b>`;

        const keyboard = [];
        
        // Tombol QRIS (selalu tersedia)
        keyboard.push([{ text: "🏦 BAYAR PAKAI QRIS", callback_data: `script_pay_qris_${scriptId}` }]);
        
        // Tombol Bayar Pakai Saldo (jika cukup)
        if (canUseBalance) {
            keyboard.push([{ text: "💰 BAYAR PAKAI SALDO", callback_data: `script_pay_balance_${scriptId}` }]);
        }
        
        keyboard.push([{ text: "🔙 Kembali", callback_data: "script_menu" }]);
        keyboard.push([{ text: "🏠 Menu Utama", callback_data: "main_menu" }]);

        userSelections.set(userId, {
            step: 'awaiting_script_payment_method',
            scriptId: scriptId,
            script: script,
            timestamp: Date.now()
        });

        await sendNewMessage(chatId, message, {
            parse_mode: "Markdown",
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error createScriptOrder:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
        return null;
    }
}

// Handle script payment with balance
async function handleScriptPaymentWithBalance(chatId, userId, scriptId, messageId, callbackQueryId) {
    try {
        const script = getScriptById(scriptId);
        
        if (!script) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Script tidak ditemukan!', { parse_mode: 'HTML' });
            return;
        }
        
        const price = script.price;
        const userBalance = getUserBalance(userId);
        
        if (userBalance < price) {
            await editMessage(chatId, messageId, callbackQueryId,
                `❌ *SALDO TIDAK CUKUP!*\n\nSaldo Anda: ${formatCurrency(userBalance)}\nHarga Script: ${formatCurrency(price)}\n\nSilakan deposit terlebih dahulu.`,
                { parse_mode: 'Markdown' }
            );
            return;
        }
        
        // Konfirmasi pembayaran dengan saldo
        const message = `✅ <b>KONFIRMASI PEMBELIAN SCRIPT DENGAN SALDO</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📜 <b>Script:</b> ${script.name}
💰 <b>Harga:</b> ${formatCurrency(price)}
💳 <b>Saldo Anda:</b> ${formatCurrency(userBalance)}
💳 <b>Saldo setelah pembelian:</b> ${formatCurrency(userBalance - price)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ <b>Konfirmasi pembelian dengan saldo?</b>

Klik <b>Ya, Beli</b> untuk melanjutkan.`;

        const keyboard = [
            [
                { text: "✅ Ya, Beli Pakai Saldo", callback_data: `script_confirm_balance_${scriptId}` },
                { text: "❌ Batal", callback_data: `script_detail_${scriptId}` }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error handleScriptPaymentWithBalance:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Execute script purchase with balance
async function executeScriptPurchaseWithBalance(chatId, userId, scriptId, messageId, callbackQueryId) {
    try {
        const script = getScriptById(scriptId);
        
        if (!script) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Script tidak ditemukan!', { parse_mode: 'HTML' });
            return;
        }
        
        const price = script.price;
        const userBalance = getUserBalance(userId);
        
        if (userBalance < price) {
            await editMessage(chatId, messageId, callbackQueryId,
                `❌ Saldo tidak cukup!`,
                { parse_mode: 'Markdown' }
            );
            return;
        }
        
        // Potong saldo
        const deductSuccess = deductUserBalance(userId, price);
        if (!deductSuccess) {
            await editMessage(chatId, messageId, callbackQueryId,
                `❌ Gagal memotong saldo. Silakan coba lagi.`,
                { parse_mode: 'Markdown' }
            );
            return;
        }
        
        // Hapus pesan sebelumnya
        await bot.deleteMessage(chatId, messageId).catch(() => {});
        
        // Simpan order ke database
        const orders = loadScriptOrders();
        const kodeTrx = `SCRIPT${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        const user = await bot.getChat(userId).catch(() => ({ 
            id: userId, 
            first_name: 'User',
            username: null
        }));
        const userName = user.first_name || 'User';
        const username = user.username ? `@${user.username}` : '-';
        
        const newOrder = {
            id: kodeTrx,
            userId: userId.toString(),
            userName: userName,
            username: username,
            scriptId: script.id,
            scriptName: script.name,
            amount: price,
            fee: 0,
            total: price,
            paymentMethod: 'balance',
            status: 'completed',
            purchasedAt: new Date().toISOString()
        };
        
        orders.orders.push(newOrder);
        orders.stats.totalOrders++;
        orders.stats.totalRevenue += price;
        orders.stats.completedOrders++;
        saveScriptOrders(orders);
        
        // Increment download count
        incrementScriptDownload(script.id);
        
        // Kirim success message
        const successMsg = `
✅ *PEMBELIAN SCRIPT BERHASIL!*

📜 *Script:* ${script.name}
🆔 Kode Transaksi: \`${kodeTrx}\`
💰 Harga: ${formatCurrency(price)}
💳 Metode: SALDO
💰 Saldo sekarang: ${formatCurrency(getUserBalance(userId))}

📦 *Script sedang dikirim...*
`.trim();
        
        await sendNewMessage(chatId, successMsg, { parse_mode: "Markdown" });
        
        // Kirim script ke user
        const deposit = {
            scriptId: script.id,
            scriptName: script.name,
            jumlah: price,
            kodeTrx: kodeTrx
        };
        await deliverScriptToUser(chatId, userId, deposit);
        
        // Notifikasi ke channel
        await notifyScriptPurchaseToChannel(deposit, user, userName, username);
        
        // Hapus selection
        userSelections.delete(userId);

    } catch (error) {
        console.error('Error executeScriptPurchaseWithBalance:', error);
        
        // Refund jika gagal
        addUserBalance(userId, price);
        
        await editMessage(chatId, messageId, callbackQueryId,
            `❌ Gagal memproses pembelian.\n\nError: ${error.message}\n\nSaldo telah dikembalikan.`,
            { parse_mode: 'Markdown' }
        );
    }
}

// Monitor script payment
async function monitorScriptPayment(userId, kodeTrx, script) {
    const deposit = activeScriptDeposit[userId];
    if (!deposit) return;
    
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    while (activeScriptDeposit[userId] && activeScriptDeposit[userId].status) {
        await sleep(6000 + Math.floor(Math.random() * 3000));
        
        try {
            const cek = await axios.get(deposit.statusUrl, { timeout: 15000 });
            const transaction = cek.data?.transaction;
            const status = (transaction?.status || '').toLowerCase();
            
            if (status === "completed" || status === "settlement") {
                if (activeScriptDeposit[userId].processed) continue;
                
                activeScriptDeposit[userId].status = false;
                activeScriptDeposit[userId].processed = true;
                clearTimeout(activeScriptDeposit[userId].timeout);
                
                await handleSuccessfulScriptPayment(userId, deposit, script);
                delete activeScriptDeposit[userId];
                break;
            }
            
        } catch (error) {
            console.error('Error checking script payment:', error.message);
        }
    }
}

// Handle successful script payment
async function handleSuccessfulScriptPayment(userId, deposit, script) {
    try {
        const chatId = deposit.chatId;
        
        // Delete QR message
        await bot.deleteMessage(chatId, deposit.msgId).catch(() => {});
        
        // Get user info
        const user = await bot.getChat(userId).catch(() => ({ 
            id: userId, 
            first_name: 'User',
            username: null
        }));
        const userName = user.first_name || 'User';
        const username = user.username ? `@${user.username}` : '-';
        
        // Save order to database
        const orders = loadScriptOrders();
        const newOrder = {
            id: deposit.kodeTrx,
            userId: userId.toString(),
            userName: userName,
            username: username,
            scriptId: deposit.scriptId,
            scriptName: deposit.scriptName,
            amount: deposit.jumlah,
            fee: deposit.fee,
            total: deposit.totalBayar,
            orderId: deposit.orderId,
            status: 'completed',
            purchasedAt: new Date().toISOString()
        };
        
        orders.orders.push(newOrder);
        orders.stats.totalOrders++;
        orders.stats.totalRevenue += deposit.jumlah;
        orders.stats.completedOrders++;
        saveScriptOrders(orders);
        
        // Increment download count
        incrementScriptDownload(deposit.scriptId);
        
        // Send success message
        const successMsg = `
✅ *PEMBELIAN SCRIPT BERHASIL!*

📜 *Script:* ${deposit.scriptName}
🆔 Kode Transaksi: \`${deposit.kodeTrx}\`
💰 Harga: ${formatCurrency(deposit.jumlah)}
💳 Metode: QRIS Pakasir

📦 *Script sedang dikirim...*
`.trim();
        
        await sendNewMessage(chatId, successMsg, { parse_mode: "Markdown" });
        
        // Send script content to user
        await deliverScriptToUser(chatId, userId, deposit);
        
        // Notify channel
        await notifyScriptPurchaseToChannel(deposit, user, userName, username);
        
        // Notify owner
        await notifyOwnerScriptPurchase(deposit, user, userName, username);
        
    } catch (error) {
        console.error('Error handleSuccessfulScriptPayment:', error);
    }
}

// Deliver script to user - Send file with original extension
async function deliverScriptToUser(chatId, userId, deposit) {
    try {
        const script = getScriptById(deposit.scriptId);
        
        if (!script) {
            await sendNewMessage(chatId, 
                '❌ Script tidak ditemukan. Silakan hubungi admin.',
                { parse_mode: 'HTML' }
            );
            return;
        }
        
        // Determine file extension from script data
        let fileExt = '.txt';
        let isBinaryFile = false;
        let fileBuffer = null;
        
        // Check if script has file info from upload
        if (script.fileName && script.isFile) {
            // Get original extension from filename
            const originalExt = path.extname(script.fileName);
            fileExt = originalExt || '.bin';
            isBinaryFile = true;
            
            // Decode base64 content back to buffer
            try {
                fileBuffer = Buffer.from(script.content, 'base64');
            } catch (err) {
                console.error('Error decoding base64:', err);
                fileBuffer = Buffer.from(script.content, 'binary');
            }
        } else {
            // Legacy text script - detect extension from content or name
            fileExt = detectFileExtension(script.content, script.name);
            isBinaryFile = false;
        }
        
        // Generate filename with correct extension
        const safeName = script.name.replace(/[^a-zA-Z0-9]/g, '_');
        const fileName = `${safeName}_${Date.now()}${fileExt}`;
        const filePath = path.join(dataDir, fileName);
        
        // Write file to disk
        if (isBinaryFile && fileBuffer) {
            fs.writeFileSync(filePath, fileBuffer);
        } else {
            // For text files, create formatted content
            const fileContent = createFormattedScriptContent(script, deposit);
            fs.writeFileSync(filePath, fileContent, 'utf8');
        }
        
        // Get file stats
        const stats = fs.statSync(filePath);
        const fileSizeKB = (stats.size / 1024).toFixed(2);
        const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
        const sizeDisplay = fileSizeMB > 1 ? `${fileSizeMB} MB` : `${fileSizeKB} KB`;
        
        // Create caption based on file type
        const caption = createFileCaption(script, deposit, sizeDisplay, fileExt);
        
        // Send file to user
        await bot.sendDocument(chatId, filePath, {
            caption: caption,
            parse_mode: "Markdown"
        });
        
        // Send instructions if available
        if (script.instructions && script.instructions.trim() !== '') {
            await sendNewMessage(chatId, 
                `📖 *Cara Penggunaan:*\n\n${script.instructions}`,
                { parse_mode: "Markdown" }
            );
        }
        
        // Send specific tips based on file type
        await sendFileTypeTips(chatId, fileExt, fileName);
        
        // Clean up temp file after 15 seconds
        setTimeout(() => {
            fs.unlinkSync(filePath).catch(() => {});
        }, 15000);
        
    } catch (error) {
        console.error('Error deliverScriptToUser:', error);
        await sendNewMessage(chatId, 
            `❌ Gagal mengirim script. Silakan hubungi admin.\n\nError: ${error.message}`,
            { parse_mode: 'HTML' }
        );
    }
}

// Detect file extension from content or name
function detectFileExtension(content, scriptName) {
    const nameLower = scriptName.toLowerCase();
    
    // Check by filename first
    if (nameLower.endsWith('.zip')) return '.zip';
    if (nameLower.endsWith('.rar')) return '.rar';
    if (nameLower.endsWith('.7z')) return '.7z';
    if (nameLower.endsWith('.mp3')) return '.mp3';
    if (nameLower.endsWith('.mp4')) return '.mp4';
    if (nameLower.endsWith('.py')) return '.py';
    if (nameLower.endsWith('.php')) return '.php';
    if (nameLower.endsWith('.js')) return '.js';
    if (nameLower.endsWith('.html')) return '.html';
    if (nameLower.endsWith('.css')) return '.css';
    if (nameLower.endsWith('.json')) return '.json';
    if (nameLower.endsWith('.xml')) return '.xml';
    if (nameLower.endsWith('.sh')) return '.sh';
    if (nameLower.endsWith('.bat')) return '.bat';
    if (nameLower.endsWith('.ps1')) return '.ps1';
    if (nameLower.endsWith('.exe')) return '.exe';
    if (nameLower.endsWith('.apk')) return '.apk';
    if (nameLower.endsWith('.dll')) return '.dll';
    if (nameLower.endsWith('.so')) return '.so';
    if (nameLower.endsWith('.jar')) return '.jar';
    if (nameLower.endsWith('.war')) return '.war';
    if (nameLower.endsWith('.deb')) return '.deb';
    if (nameLower.endsWith('.rpm')) return '.rpm';
    
    // Check by content signature
    if (content.startsWith('PK')) return '.zip';
    if (content.startsWith('Rar!')) return '.rar';
    if (content.startsWith('ID3')) return '.mp3';
    if (content.includes('<?php')) return '.php';
    if (content.includes('#!/usr/bin/env python') || (content.includes('import ') && content.includes('def '))) return '.py';
    if (content.includes('#!/bin/bash') || content.includes('#!/usr/bin/env bash')) return '.sh';
    if (content.includes('<!DOCTYPE html>') || content.includes('<html>')) return '.html';
    if (content.includes('{') && content.includes('}') && content.includes('"name"')) return '.json';
    if (content.includes('<?xml')) return '.xml';
    if (content.includes('function') && content.includes('var ') && content.includes('console.log')) return '.js';
    
    return '.txt';
}

// Create formatted content for text files
function createFormattedScriptContent(script, deposit) {
    const border = '═'.repeat(70);
    
    return `
╔${border}╗
║  SCRIPT: ${script.name.padEnd(63)}║
║  Version: ${(script.version || '1.0').padEnd(60)}║
╚${border}╝

┌${'─'.repeat(70)}┐
│  PURCHASE INFORMATION                                                    │
└${'─'.repeat(70)}┘

  📅 Date        : ${new Date().toLocaleString('id-ID')}
  🆔 Transaction : ${deposit.kodeTrx}
  💰 Price       : ${formatCurrency(deposit.jumlah)}
  👤 Buyer ID    : ${deposit.chatId}

┌${'─'.repeat(70)}┐
│  SCRIPT CONTENT                                                          │
└${'─'.repeat(70)}┘

${script.content}

┌${'─'.repeat(70)}┐
│  INSTRUCTIONS                                                            │
└${'─'.repeat(70)}┘

${script.instructions || 'No specific instructions provided.'}

┌${'─'.repeat(70)}┐
│  TERMS & CONDITIONS                                                      │
└${'─'.repeat(70)}┘

  ⚠️  FOR PERSONAL USE ONLY
  ⚠️  Redistribution is PROHIBITED
  ⚠️  Sharing = PERMANENT BAN
  ⚠️  Support: 7 days
  ⚠️  NO REFUND after delivery

┌${'─'.repeat(70)}┐
│  CONTACT SUPPORT                                                         │
└${'─'.repeat(70)}┘

  📧 Admin: @admin
  💬 Channel: ${channel}

${border}${border}
  Thank you for your purchase! 🎉
${border}${border}
`;
}

// Create caption based on file type
function createFileCaption(script, deposit, sizeDisplay, fileExt) {
    const ext = fileExt.toLowerCase();
    const priceFormatted = formatCurrency(deposit.jumlah);
    const dateStr = new Date().toLocaleString('id-ID');
    
    // Emoji for different file types
    const emojiMap = {
        '.zip': '📦', '.rar': '🗜️', '.7z': '🗜️',
        '.mp3': '🎵', '.mp4': '🎬', '.wav': '🎵',
        '.py': '🐍', '.php': '🐘', '.js': '📜',
        '.html': '🌐', '.css': '🎨', '.json': '📋',
        '.xml': '📄', '.sh': '💻', '.bat': '💻',
        '.exe': '⚙️', '.apk': '📱', '.dll': '🔧',
        '.jar': '☕', '.txt': '📝'
    };
    
    const emoji = emojiMap[ext] || '📁';
    
    // Type name
    const typeMap = {
        '.zip': 'ZIP Archive', '.rar': 'RAR Archive', '.7z': '7-Zip Archive',
        '.mp3': 'Audio MP3', '.mp4': 'Video MP4',
        '.py': 'Python Script', '.php': 'PHP Script', '.js': 'JavaScript',
        '.html': 'HTML Document', '.css': 'CSS Stylesheet', '.json': 'JSON Data',
        '.xml': 'XML Document', '.sh': 'Shell Script', '.bat': 'Batch Script',
        '.exe': 'Executable', '.apk': 'Android App', '.dll': 'Library',
        '.jar': 'Java Archive', '.txt': 'Text File'
    };
    
    const typeName = typeMap[ext] || 'File';
    
    return `${emoji} *${script.name}* ${emoji}

┌─────────────────────────────────
├ 💰 *Harga:* ${priceFormatted}
├ 📦 *Ukuran:* ${sizeDisplay}
├ 📄 *Tipe:* ${typeName}
└ 📅 *Tanggal:* ${dateStr}
└─────────────────────────────────

📥 *File telah dikirim di atas.*

⚠️ *PENTING:* Jangan bagikan file ini ke siapapun!`;
}

// Send specific tips based on file type
async function sendFileTypeTips(chatId, fileExt, fileName) {
    const ext = fileExt.toLowerCase();
    
    if (ext === '.zip' || ext === '.rar' || ext === '.7z') {
        await sendNewMessage(chatId,
            `🔧 *Cara Extract File Archive:*\n\n` +
            `• **Windows**: Klik kanan → Extract All / WinRAR\n` +
            `• **Mac**: Double click atau gunakan The Unarchiver\n` +
            `• **Linux**: \`unzip ${fileName}\` atau \`tar -xf ${fileName}\`\n\n` +
            `💡 Pastikan Anda memiliki software extractor yang sesuai.`,
            { parse_mode: "Markdown" }
        );
    } else if (ext === '.py') {
        await sendNewMessage(chatId,
            `🐍 *Cara Menjalankan Python Script:*\n\n` +
            `1. Install Python dari https://python.org\n` +
            `2. Buka terminal/command prompt\n` +
            `3. Jalankan: \`python ${fileName}\`\n\n` +
            `💡 Install dependencies: \`pip install -r requirements.txt\``,
            { parse_mode: "Markdown" }
        );
    } else if (ext === '.php') {
        await sendNewMessage(chatId,
            `🐘 *Cara Menjalankan PHP Script:*\n\n` +
            `1. Install XAMPP / Laragon / PHP\n` +
            `2. Letakkan file di folder htdocs\n` +
            `3. Jalankan di browser: \`http://localhost/${fileName}\``,
            { parse_mode: "Markdown" }
        );
    } else if (ext === '.js') {
        await sendNewMessage(chatId,
            `📜 *Cara Menjalankan JavaScript:*\n\n` +
            `1. Install Node.js dari https://nodejs.org\n` +
            `2. Jalankan: \`node ${fileName}\`\n\n` +
            `💡 Install dependencies: \`npm install\``,
            { parse_mode: "Markdown" }
        );
    } else if (ext === '.sh') {
        await sendNewMessage(chatId,
            `💻 *Cara Menjalankan Shell Script:*\n\n` +
            `1. Beri permission: \`chmod +x ${fileName}\`\n` +
            `2. Jalankan: \`./${fileName}\``,
            { parse_mode: "Markdown" }
        );
    } else if (ext === '.apk') {
        await sendNewMessage(chatId,
            `📱 *Cara Install APK:*\n\n` +
            `1. Transfer file ke Android\n` +
            `2. Buka file dengan file manager\n` +
            `3. Izinkan "Install dari sumber tidak dikenal"\n` +
            `4. Klik Install`,
            { parse_mode: "Markdown" }
        );
    }
}

// Helper function to create text file content
function createTextFileContent(script, deposit) {
    return `
╔══════════════════════════════════════════════════════════════════════════════╗
║                         SCRIPT: ${script.name.padEnd(50)}║
║                         Version: ${(script.version || '1.0').padEnd(47)}║
╚══════════════════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────────────────┐
│                             PURCHASE INFORMATION                             │
└─────────────────────────────────────────────────────────────────────────────┘

📅 Purchase Date : ${new Date().toLocaleString('id-ID')}
🆔 Transaction ID: ${deposit.kodeTrx}
💰 Price          : ${formatCurrency(deposit.jumlah)}
👤 Buyer ID       : ${deposit.chatId}

┌─────────────────────────────────────────────────────────────────────────────┐
│                              SCRIPT CONTENT                                  │
└─────────────────────────────────────────────────────────────────────────────┘

${script.content}

┌─────────────────────────────────────────────────────────────────────────────┐
│                             INSTRUCTIONS                                     │
└─────────────────────────────────────────────────────────────────────────────┘

${script.instructions || 'No specific instructions provided.'}

┌─────────────────────────────────────────────────────────────────────────────┐
│                           TERMS & CONDITIONS                                 │
└─────────────────────────────────────────────────────────────────────────────┘

⚠️ THIS SCRIPT IS FOR PERSONAL USE ONLY
⚠️ Redistribution is PROHIBITED
⚠️ Sharing the script will result in a BAN
⚠️ Support is available for 7 days
⚠️ NO REFUND after script is delivered

┌─────────────────────────────────────────────────────────────────────────────┐
│                              CONTACT SUPPORT                                 │
└─────────────────────────────────────────────────────────────────────────────┘

📧 For support, please contact: @admin
💬 Join our channel: ${channel}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Thank you for your purchase! 🎉
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
}

// Prompt owner to upload file for script (instead of typing content)
async function promptUploadScriptFile(chatId, userId, messageId, callbackQueryId) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak!',
                show_alert: true
            });
            return;
        }

        userSelections.set(userId, { 
            step: 'owner_script_upload_file',
            scriptData: {},
            timestamp: Date.now() 
        });
        
        const message = `
📁 *UPLOAD FILE SCRIPT* 📁
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 *Langkah 1/5: Upload File Script*

Silakan *upload file* script yang ingin dijual.

📌 *Format yang didukung:*
• 📦 ZIP (untuk kumpulan file)
• 🐍 Python (.py)
• 📜 JavaScript (.js)
• 🐘 PHP (.php)
• 🎵 MP3 (.mp3)
• 📄 Text (.txt)
• Dan format lainnya

📌 *Cara upload:*
1. Klik icon 📎 (attachment)
2. Pilih file dari komputer
3. Kirim file

⚠️ *Ukuran maksimal: 50 MB*

📢 *Notifikasi:* 
Setelah script berhasil ditambahkan, akan ada notifikasi di channel.

Ketik *0* untuk membatalkan.
`.trim();

        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, message, { parse_mode: "Markdown" });
        } else {
            await sendNewMessage(chatId, message, { parse_mode: "Markdown" });
        }

    } catch (error) {
        console.error('Error promptUploadScriptFile:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Handle expired script order
async function handleExpiredScriptOrder(userId, kodeTrx, orderId, jumlah, userName) {
    try {
        const deposit = activeScriptDeposit[userId];
        if (!deposit) return;
        
        const expiredMsg = `
⏰ *PEMBELIAN SCRIPT EXPIRED*

🧾 *ID Transaksi:* \`${kodeTrx}\`
📜 *Script:* ${deposit.scriptName}
💰 Harga: ${formatCurrency(jumlah)}
💳 Metode: QRIS Pakasir

❌ Status: Dibatalkan otomatis karena melebihi batas waktu.
`.trim();
        
        await bot.deleteMessage(deposit.chatId, deposit.msgId).catch(() => {});
        await sendNewMessage(deposit.chatId, expiredMsg, { parse_mode: "Markdown" });
        
        // Notify owner
        for (const ownerId of owner_ids) {
            await bot.sendMessage(ownerId, 
                `🚨 *TRANSAKSI SCRIPT EXPIRED*\n\n` +
                `👤 User: ${userName}\n` +
                `🆔 ID: \`${userId}\`\n` +
                `📜 Script: ${deposit.scriptName}\n` +
                `💰 Harga: ${formatCurrency(jumlah)}\n` +
                `🧾 Kode: \`${kodeTrx}\`\n` +
                `❌ Status: Expired`,
                { parse_mode: "Markdown" }
            ).catch(() => {});
        }
        
    } catch (err) {
        console.error("Error handling expired script order:", err.message);
    }
}

// Cancel script deposit
async function cancelScriptDeposit(chatId, userId, kodeTrx) {
    try {
        const deposit = activeScriptDeposit[userId];
        
        if (!deposit || deposit.kodeTrx !== kodeTrx) {
            await sendNewMessage(chatId, '❌ Transaksi tidak ditemukan atau sudah tidak aktif.', { parse_mode: 'HTML' });
            return false;
        }
        
        clearTimeout(deposit.timeout);
        await bot.deleteMessage(chatId, deposit.msgId).catch(() => {});
        delete activeScriptDeposit[userId];
        
        await sendNewMessage(chatId, 
            '✅ Transaksi dibatalkan.\n\nSilakan lakukan pembelian ulang jika ingin membeli script.',
            { parse_mode: 'HTML' }
        );
        
        return true;
        
    } catch (error) {
        console.error('Error cancelScriptDeposit:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
        return false;
    }
}

// Show purchase history
async function showScriptPurchaseHistory(chatId, userId, messageId, callbackQueryId) {
    try {
        const orders = loadScriptOrders();
        const userOrders = orders.orders.filter(o => o.userId === userId.toString());
        
        if (userOrders.length === 0) {
            const msg = `📋 *RIWAYAT PEMBELIAN SCRIPT*\n━━━━━━━━━━━━━━━━━━━━━━━\n\n❌ *Belum ada pembelian script.*\n\nSilakan beli script terlebih dahulu!`;
            
            const keyboard = [
                [{ text: '🛒 Beli Script', callback_data: 'script_menu' }],
                [{ text: '🏠 Menu Utama', callback_data: 'main_menu' }]
            ];
            
            if (messageId && callbackQueryId) {
                await editMessage(chatId, messageId, callbackQueryId, msg, {
                    parse_mode: "Markdown",
                    reply_markup: { inline_keyboard: keyboard }
                });
            } else {
                await sendNewMessage(chatId, msg, {
                    parse_mode: "Markdown",
                    reply_markup: { inline_keyboard: keyboard }
                });
            }
            return;
        }
        
        let message = `📋 *RIWAYAT PEMBELIAN SCRIPT*\n━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        
        userOrders.slice(-10).reverse().forEach((order, index) => {
            const date = new Date(order.purchasedAt).toLocaleString('id-ID');
            message += `${index + 1}. *${order.scriptName}*\n`;
            message += `   💰 Harga: ${formatCurrency(order.amount)}\n`;
            message += `   🧾 Kode: \`${order.id}\`\n`;
            message += `   🕒 Tanggal: ${date}\n\n`;
        });
        
        message += `━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `📊 *Total Pembelian:* ${userOrders.length}\n`;
        message += `💰 *Total Belanja:* ${formatCurrency(userOrders.reduce((sum, o) => sum + o.amount, 0))}`;
        
        const keyboard = [
            [{ text: '🛒 Beli Lagi', callback_data: 'script_menu' }],
            [{ text: '🏠 Menu Utama', callback_data: 'main_menu' }]
        ];
        
        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, message, {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            });
        } else {
            await sendNewMessage(chatId, message, {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            });
        }
        
    } catch (error) {
        console.error('Error showScriptPurchaseHistory:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Show search script menu
async function showSearchScriptMenu(chatId, userId, messageId, callbackQueryId) {
    try {
        userSelections.set(userId, { 
            step: 'script_search_input', 
            timestamp: Date.now() 
        });
        
        const message = `🔍 *CARI SCRIPT*\n━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
            `Masukkan kata kunci script yang ingin dicari:\n\n` +
            `Contoh: *premium*, *whatsapp*, *bot*, *auto*\n\n` +
            `Ketik *0* untuk membatalkan.`;
        
        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, message, { parse_mode: "Markdown" });
        } else {
            await sendNewMessage(chatId, message, { parse_mode: "Markdown" });
        }
        
    } catch (error) {
        console.error('Error showSearchScriptMenu:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Search scripts and show results
async function searchScriptsAndShow(chatId, userId, keyword, messageId) {
    try {
        const scripts = getActiveScriptsList();
        const lowerKeyword = keyword.toLowerCase();
        
        const results = scripts.filter(s => 
            s.name.toLowerCase().includes(lowerKeyword) ||
            s.description.toLowerCase().includes(lowerKeyword) ||
            (s.tags && s.tags.some(tag => tag.toLowerCase().includes(lowerKeyword)))
        );
        
        if (results.length === 0) {
            await sendNewMessage(chatId,
                `🔍 *HASIL PENCARIAN*\n━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
                `Kata kunci: *${keyword}*\n` +
                `Hasil: *Tidak ditemukan*\n\n` +
                `Coba dengan kata kunci lain.`,
                { 
                    parse_mode: "Markdown",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🔍 Cari Lagi', callback_data: 'script_search' }],
                            [{ text: '📜 Daftar Script', callback_data: 'script_menu' }]
                        ]
                    }
                }
            );
            return;
        }
        
        let message = `🔍 *HASIL PENCARIAN*\n━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `Kata kunci: *${keyword}*\n`;
        message += `Ditemukan: *${results.length}* script\n\n`;
        
        const keyboard = [];
        results.slice(0, 10).forEach((script, index) => {
            message += `${index + 1}. *${script.name}*\n`;
            message += `   💰 ${formatCurrency(script.price)} | 📂 ${script.category}\n\n`;
            keyboard.push([{ text: `${index + 1}. ${script.name.substring(0, 25)}`, callback_data: `script_detail_${script.id}` }]);
        });
        
        if (results.length > 10) {
            message += `*... dan ${results.length - 10} script lainnya*`;
        }
        
        keyboard.push([
            { text: '🔍 Cari Lagi', callback_data: 'script_search' },
            { text: '📜 Semua Script', callback_data: 'script_menu' }
        ]);
        keyboard.push([{ text: '🏠 Menu Utama', callback_data: 'main_menu' }]);
        
        await sendNewMessage(chatId, message, {
            parse_mode: "Markdown",
            reply_markup: { inline_keyboard: keyboard }
        });
        
    } catch (error) {
        console.error('Error searchScriptsAndShow:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

async function notifyNewScriptToChannel(scriptData, userId) {
    try {
        const channelId = config.channel || config.aboutmilaa;
        if (!channelId) {
            console.log('No channel configured for script notifications');
            return;
        }

        // Dapatkan informasi user yang menambahkan script
        let userInfo = { first_name: 'Owner', username: null };
        try {
            const user = await bot.getChat(userId);
            userInfo = {
                first_name: user.first_name || 'Owner',
                username: user.username
            };
        } catch (error) {
            console.error('Error getting user info:', error);
        }

        const dateStr = new Date().toLocaleString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        const fileTypeEmoji = getFileTypeEmoji(scriptData.fileName || '');
        const fileSizeText = scriptData.fileSizeMB ? `${scriptData.fileSizeMB} MB` : 'N/A';

        let message = `
<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   📦 <b>SCRIPT BARU DITAMBAHKAN</b> 📦
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┌─────────────────────────────────
├ <b>📜 Nama Script</b> : ${scriptData.name}
├ <b>🆔 ID Script</b>   : <code>${scriptData.id}</code>
├ <b>📂 Kategori</b>    : ${scriptData.category}
├ <b>💰 Harga</b>       : ${formatCurrency(scriptData.price)}
└─────────────────────────────────
├ <b>${fileTypeEmoji} Tipe File</b>  : ${scriptData.fileName ? scriptData.fileName.split('.').pop().toUpperCase() : 'Text'}
├ <b>📦 Ukuran</b>      : ${fileSizeText}
├ <b>📝 Deskripsi</b>   : ${scriptData.description ? scriptData.description.substring(0, 50) + '...' : '-'}
└─────────────────────────────────
├ <b>👤 Ditambahkan oleh</b> : ${userInfo.first_name} ${userInfo.username ? `(@${userInfo.username})` : ''}
├ <b>📅 Tanggal</b>     : ${dateStr}
└─────────────────────────────────
├ <b>✅ Status</b>       : <b>AKTIF</b>
└ <b>📊 Total Script</b> : ${getTotalScriptsCount()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<i>Script siap dibeli oleh user!</i>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`;

        const keyboard = {
            inline_keyboard: [
                [
                    { 
                        text: 'BELI SEKARANG', 
                        url: 'https://t.me/RikyshopOTP_bot',
                        style: 'primary', icon_custom_emoji_id: '5359681227592854334'
                    }
                ]
            ]
        };

        await bot.sendMessage(channelId, message, {
            parse_mode: 'HTML',
            disable_web_page_preview: true,
            reply_markup: keyboard
        });

        // Juga kirim ke channel_otp jika berbeda
        if (config.channel_otp && config.channel_otp !== channelId) {
            const shortMessage = `
📦 <b>SCRIPT BARU: ${scriptData.name}</b>
💰 Harga: ${formatCurrency(scriptData.price)}
📂 Kategori: ${scriptData.category}
✅ Status: AKTIF

Gunakan /start untuk membeli!
`;
            await bot.sendMessage(config.channel_otp, shortMessage, {
                parse_mode: 'HTML'
            }).catch(() => {});
        }

    } catch (error) {
        console.error('Error notifying new script to channel:', error);
    }
}

// Helper function untuk mendapatkan emoji berdasarkan tipe file
function getFileTypeEmoji(fileName) {
    if (!fileName) return '📄';
    
    const ext = fileName.split('.').pop().toLowerCase();
    const emojiMap = {
        'zip': '📦', 'rar': '🗜️', '7z': '🗜️',
        'py': '🐍', 'php': '🐘', 'js': '📜',
        'html': '🌐', 'css': '🎨', 'json': '📋',
        'xml': '📄', 'sh': '💻', 'bat': '💻',
        'exe': '⚙️', 'apk': '📱', 'dll': '🔧',
        'jar': '☕', 'txt': '📝', 'md': '📖',
        'jpg': '🖼️', 'png': '🖼️', 'gif': '🎬',
        'mp3': '🎵', 'mp4': '🎬', 'pdf': '📕'
    };
    
    return emojiMap[ext] || '📄';
}

// Helper function untuk mendapatkan total script
function getTotalScriptsCount() {
    const scriptsData = loadScriptsData();
    return scriptsData.scripts.length;
}

// Notify owner about script purchase
async function notifyOwnerScriptPurchase(deposit, user, userName, username) {
    try {
        const message = `<blockquote>
💰<b>TRANSAKSI SCRIPT BARU</b>💰
━━━━━━━━━━━━━━━━━━━━━━━
👤 <b>User:</b> ${userName}
🆔 <b>Username:</b> ${username}
🆔 <b>User ID:</b> <code>${user.id}</code>

📜 <b>Script:</b> ${deposit.scriptName}
💰 <b>Harga:</b> ${formatCurrency(deposit.jumlah)}
🧾 <b>Fee Admin:</b> ${formatCurrency(deposit.fee)}
💳 <b>Total:</b> ${formatCurrency(deposit.totalBayar)}
🧾 <b>Kode Transaksi:</b> <code>${deposit.kodeTrx}</code>
🧩 <b>Order ID:</b> <code>${deposit.orderId}</code>
🕒 <b>Waktu:</b> ${new Date().toLocaleString('id-ID')}

✅ <b>Status:</b> COMPLETED - Script telah dikirim
━━━━━━━━━━━━━━━━━━━━━━━
</blockquote>`.trim();
        
        for (const ownerId of owner_ids) {
            await bot.sendMessage(channel, message, { parse_mode: "HTML" }).catch(() => {});
        }
        
    } catch (error) {
        console.error('Error notifying owner script:', error);
    }
}

async function executeRestore(chatId, userId, backupFileName) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.sendMessage(chatId,
                "⛔ Akses Ditolak\n\nHanya owner yang bisa melakukan restore data.",
                { parse_mode: 'HTML' }
            );
            return;
        }

        const backupDir = path.join(__dirname, 'backup');
        const backupPath = path.join(backupDir, backupFileName);
        
        if (!fs.existsSync(backupPath)) {
            await bot.sendMessage(chatId,
                `<b>❌ BACKUP TIDAK DITEMUKAN</b>\n\nFile backup tidak ditemukan:\n<code>${backupFileName}</code>`,
                { parse_mode: 'HTML' }
            );
            return;
        }

        const processingMsg = await bot.sendMessage(chatId,
            `<b>🔄 MULAI RESTORE DATA</b>\n\nMemproses file backup...\n\nMohon tunggu, proses mungkin memakan waktu beberapa saat.`,
            { parse_mode: 'HTML' }
        );

        const timestamp = Date.now();
        const currentBackupDir = path.join(__dirname, 'backup', 'pre_restore');
        if (!fs.existsSync(currentBackupDir)) {
            fs.mkdirSync(currentBackupDir, { recursive: true });
        }

        // Backup semua file saat ini sebelum restore (ke folder pre_restore)
        const dataDir = path.join(__dirname, 'database');
        if (fs.existsSync(dataDir)) {
            const allFiles = fs.readdirSync(dataDir);
            for (const file of allFiles) {
                if (file.endsWith('.json') && !file.includes('.backup_')) {
                    const filePath = path.join(dataDir, file);
                    const backupDest = path.join(currentBackupDir, `pre_restore_${timestamp}_${file}`);
                    fs.copyFileSync(filePath, backupDest);
                    console.log(`📁 Backup current: ${file}`);
                }
            }
        }

        const AdmZip = require('adm-zip');
        const zip = new AdmZip(backupPath);
        const tempDir = path.join(__dirname, 'temp_restore', timestamp.toString());
        
        if (fs.existsSync(tempDir)) {
            fs.rmSync(tempDir, { recursive: true, force: true });
        }
        fs.mkdirSync(tempDir, { recursive: true });
        
        zip.extractAllTo(tempDir, true);

        let extractedFiles = fs.readdirSync(tempDir);
        let restoredFiles = 0;
        let skippedFiles = 0;
        let restoreResults = [];

        // Daftar file yang DIHARAPKAN ada
        const expectedFiles = [
            'users.json', 'balances.json', 'transactions.json', 
            'settings.json', 'vouchers.json', 'scripts.json', 
            'script_orders.json', 'banned_users.json', 
            'referrals.json', 'notified_users.json',
            'vps_orders.json', 'free_vps_orders.json',
            'panel_orders.json', 'panel_servers.json',
            'price_history.json', 'vps_warranty.json'
        ];

        // Restore semua file JSON yang diekstrak
        for (const fileName of extractedFiles) {
            if (!fileName.endsWith('.json')) continue;
            
            try {
                const sourcePath = path.join(tempDir, fileName);
                const targetPath = path.join(dataDir, fileName);
                
                // Periksa apakah file ada dan tidak kosong
                if (!fs.existsSync(sourcePath)) {
                    restoreResults.push(`⚠️ ${fileName} (File tidak ditemukan di backup)`);
                    skippedFiles++;
                    continue;
                }
                
                const fileContent = fs.readFileSync(sourcePath, 'utf8');
                if (!fileContent || fileContent.trim() === '') {
                    restoreResults.push(`⚠️ ${fileName} (File kosong, dilewati)`);
                    skippedFiles++;
                    continue;
                }
                
                // Validasi JSON
                JSON.parse(fileContent); // Validasi format JSON
                
                // Backup file lama jika ada (ke folder pre_restore, bukan di database)
                if (fs.existsSync(targetPath)) {
                    const backupOldPath = path.join(currentBackupDir, `old_${timestamp}_${fileName}`);
                    fs.copyFileSync(targetPath, backupOldPath);
                }
                
                // Copy file baru ke database
                fs.copyFileSync(sourcePath, targetPath);
                restoredFiles++;
                restoreResults.push(`✅ ${fileName}`);
                console.log(`✅ Restored: ${fileName}`);
                
            } catch (jsonError) {
                restoreResults.push(`❌ ${fileName} (Invalid JSON: ${jsonError.message.substring(0, 50)})`);
                console.error(`❌ Failed to restore ${fileName}:`, jsonError.message);
            }
        }

        // Cek file yang diharapkan tapi tidak ada di backup
        for (const expectedFile of expectedFiles) {
            if (!extractedFiles.includes(expectedFile) && !restoreResults.some(r => r.includes(expectedFile))) {
                restoreResults.push(`⚠️ ${expectedFile} (Tidak ada di backup, akan dibuat baru)`);
            }
        }

        // Clear semua cache
        balanceCache.clear();
        userSelections.clear();
        userDepositMessages.clear();
        userPendingCommands.clear();
        orderProcessing.clear();
        depositProcessing.clear();
        sentNotifications.clear();
        userFirstTimeNotifications.clear();
        voucherCache.clear();
        
        // Clear VPS sessions
        if (global.vpsOrderSession) {
            global.vpsOrderSession = {};
        }
        if (global.buyvpsSession) {
            global.buyvpsSession = {};
        }
        if (global.vpsOrderSession) {
            global.vpsOrderSession = {};
        }
        
        // Clear services cache
        if (servicesCache) {
            servicesCache.data = null;
            servicesCache.timestamp = 0;
            if (servicesCache.countries) servicesCache.countries.clear();
            if (servicesCache.servers) servicesCache.servers.clear();
            if (servicesCache.filtered) servicesCache.filtered.clear();
        }
        
        // Clear CS sessions
        if (global.csChatSessions) {
            global.csChatSessions.clear();
        }
        
        // Clear VPS stock cache
        if (vpsStockCache) {
            vpsStockCache.stock = null;
            vpsStockCache.lastCheck = 0;
        }
        
        // Clear active deposits
        if (activePanelDeposit) {
            for (const key in activePanelDeposit) {
                delete activePanelDeposit[key];
            }
        }
        if (activeScriptDeposit) {
            for (const key in activeScriptDeposit) {
                delete activeScriptDeposit[key];
            }
        }
        if (activeVPSSession) {
            for (const key in activeVPSSession) {
                delete activeVPSSession[key];
            }
        }

        // Hapus folder temporary
        fs.rmSync(tempDir, { recursive: true, force: true });

        // Hitung statistik
        const successCount = restoreResults.filter(r => r.startsWith('✅')).length;
        const warningCount = restoreResults.filter(r => r.startsWith('⚠️')).length;
        const errorCount = restoreResults.filter(r => r.startsWith('❌')).length;

        let successMessage = `<b>✅ RESTORE BERHASIL</b>\n\n`;
        successMessage += `<b>File backup:</b> <code>${backupFileName}</code>\n`;
        successMessage += `<b>Waktu restore:</b> ${new Date().toLocaleString('id-ID')}\n`;
        successMessage += `<b>File direstore:</b> ${restoredFiles} file\n`;
        if (skippedFiles > 0) successMessage += `<b>File dilewati:</b> ${skippedFiles} file\n`;
        successMessage += `<b>Status:</b> ✅ ${successCount} | ⚠️ ${warningCount} | ❌ ${errorCount}\n\n`;
        successMessage += `<b>Detail Restore:</b>\n`;
        restoreResults.forEach(result => {
            successMessage += `${result}\n`;
        });
        successMessage += `\n<b>Efek:</b>\n`;
        successMessage += `• Cache bot telah dihapus\n`;
        successMessage += `• Data VPS telah diperbarui\n`;
        successMessage += `• Data Panel telah diperbarui\n`;
        successMessage += `• Data Script telah diperbarui\n`;
        successMessage += `• Data User telah diperbarui\n`;
        successMessage += `• Bot akan berjalan normal\n\n`;
        successMessage += `<i>Data sebelum restore disimpan di:</i>\n<code>${currentBackupDir}</code>`;

        await bot.editMessageText(successMessage, {
            chat_id: chatId,
            message_id: processingMsg.message_id,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🔄 Reload Data', callback_data: 'restore_reload' }],
                    [
                        { text: '📋 Owner Menu', callback_data: 'owner_menu' },
                        { text: '🏠 Menu Utama', callback_data: 'main_menu' }
                    ]
                ]
            }
        });

        // Notifikasi ke owner lain
        for (const ownerId of owner_ids) {
            if (ownerId.toString() !== userId.toString()) {
                try {
                    await bot.sendMessage(ownerId,
                        `<b>⚠️ RESTORE DATA DILAKUKAN</b>\n\n` +
                        `<b>Oleh:</b> ${userId}\n` +
                        `<b>File:</b> ${backupFileName}\n` +
                        `<b>Waktu:</b> ${new Date().toLocaleString('id-ID')}\n` +
                        `<b>Restored:</b> ${restoredFiles} files\n\n` +
                        `<i>Data bot telah direstore</i>`,
                        { parse_mode: 'HTML' }
                    );
                } catch (error) {}
            }
        }

    } catch (error) {
        let errorMsg = error.message || 'Unknown error';
        await bot.sendMessage(chatId,
            `<b>❌ RESTORE GAGAL</b>\n\nTerjadi kesalahan saat restore:\n\n<code>${errorMsg}</code>\n\nData saat ini TIDAK berubah.\n\nSilakan coba lagi atau hubungi developer.`,
            { parse_mode: 'HTML' }
        );
    }
}

async function downloadBackup(chatId, userId, backupFileName, messageId, callbackQueryId) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
                show_alert: true
            });
            return;
        }

        const backupDir = path.join(__dirname, 'backup');
        const backupPath = path.join(backupDir, backupFileName);
        
        if (!fs.existsSync(backupPath)) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: 'File backup tidak ditemukan',
                show_alert: true
            });
            return;
        }

        const stats = fs.statSync(backupPath);
        const fileSizeMB = stats.size / (1024 * 1024);

        if (fileSizeMB > 50) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: `File terlalu besar (${fileSizeMB.toFixed(2)}MB). Maksimal 50MB.`,
                show_alert: true
            });
            return;
        }

        await bot.sendDocument(chatId, backupPath, {
            caption: `<b>📥 BACKUP FILE</b>\n\n` +
                    `<b>Nama:</b> ${backupFileName}\n` +
                    `<b>Ukuran:</b> ${(stats.size / 1024).toFixed(2)} KB\n` +
                    `<b>Tanggal:</b> ${stats.mtime.toLocaleString('id-ID')}\n\n` +
                    `<i>Simpan file ini dengan aman</i>`,
            parse_mode: 'HTML'
        });

        await bot.answerCallbackQuery(callbackQueryId, {
            text: 'File sedang dikirim...',
            show_alert: false
        });

    } catch (error) {
        let errorMsg = error.message || 'Unknown error';
        await bot.answerCallbackQuery(callbackQueryId, {
            text: `Gagal mengirim file: ${errorMsg}`,
            show_alert: true
        });
    }
}

async function deleteBackup(chatId, userId, backupFileName, messageId, callbackQueryId) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
                show_alert: true
            });
            return;
        }

        const backupDir = path.join(__dirname, 'backup');
        const backupPath = path.join(backupDir, backupFileName);
        
        if (!fs.existsSync(backupPath)) {
            await editMessage(chatId, messageId, callbackQueryId,
                `<b>❌ FILE TIDAK DITEMUKAN</b>\n\nFile backup tidak ditemukan:\n<code>${backupFileName}</code>`,
                {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Kembali ke Daftar', callback_data: 'restore_menu' }]
                        ]
                    }
                }
            );
            return;
        }

        const stats = fs.statSync(backupPath);
        const fileSize = (stats.size / 1024).toFixed(2);
        const modifiedDate = stats.mtime.toLocaleString('id-ID');

        let message = `<b>🗑️ KONFIRMASI HAPUS</b>\n\n`;
        message += `<b>File:</b> <code>${backupFileName}</code>\n`;
        message += `<b>Ukuran:</b> ${fileSize} KB\n`;
        message += `<b>Tanggal:</b> ${modifiedDate}\n\n`;
        message += `<b>PERINGATAN:</b>\n`;
        message += `• File akan dihapus PERMANEN\n`;
        message += `• Tidak bisa dikembalikan\n`;
        message += `• Pastikan sudah didownload jika penting\n\n`;
        message += `Ketik <code>/deletebackup ${backupFileName}</code> untuk menghapus`;

        const keyboard = [
            [
                { text: '✅ Ya, Hapus Sekarang', callback_data: `delete_execute_${backupFileName}` },
                { text: '❌ Batalkan', callback_data: `restore_view_${backupFileName}` }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard },
            disable_web_page_preview: true
        });

    } catch (error) {
        let errorMsg = error.message || 'Unknown error';
        await editMessage(chatId, messageId, callbackQueryId,
            `<b>❌ ERROR</b>\n\nGagal memproses penghapusan.\n\nError: <code>${errorMsg}</code>`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Kembali ke Daftar', callback_data: 'restore_menu' }]
                    ]
                }
            }
        );
    }
}

async function showActiveCSThreads(chatId, userId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(user.id.toString()) && !config.cs_admins?.includes(user.id.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya admin atau CS yang bisa mengakses',
        show_alert: true
      });
      return;
    }
    
    const activeThreads = [];
    
    if (global.csChatSessions) {
      for (const [threadId, session] of global.csChatSessions) {
        if (session.status === 'active' || session.status === 'pending') {
          activeThreads.push({
            threadId: threadId,
            ...session
          });
        }
      }
    }
    
    let message = `<b>💬 ACTIVE CS THREADS</b>\n\n`;
    
    if (activeThreads.length === 0) {
      message += `<i>Tidak ada thread aktif</i>\n`;
    } else {
      message += `<b>Total Active Threads:</b> ${activeThreads.length}\n\n`;
      
      activeThreads.forEach((thread, index) => {
        const lastMessage = thread.messages[thread.messages.length - 1];
        const timeAgo = lastMessage ? 
          formatTimeAgo(new Date(lastMessage.timestamp)) : 
          'Baru saja';
        
        message += `<b>${index + 1}. ${thread.userName}</b>\n`;
        message += `├ Thread ID: <code>${thread.threadId}</code>\n`;
        message += `├ Status: ${thread.status === 'active' ? '🟢 Active' : '🟡 Pending'}\n`;
        message += `├ Admin: ${thread.adminName || 'Belum diambil'}\n`;
        message += `├ Pesan: ${thread.messages.length}\n`;
        message += `└ Terakhir: ${timeAgo}\n\n`;
      });
    }
    
    const keyboard = [];
    
    if (activeThreads.length > 0) {
      activeThreads.forEach((thread, index) => {
        keyboard.push([
          { 
            text: `${index + 1}. ${thread.userName}`, 
            callback_data: `cs_view_thread_${thread.threadId}` 
          }
        ]);
      });
      
      keyboard.push([]);
    }
    
    keyboard.push([
      { text: '🔄 Refresh', callback_data: 'cs_active_threads' },
      { text: '📊 CS Stats', callback_data: 'cs_stats' }
    ]);
    
    keyboard.push([
      { text: '🔙 CS Menu', callback_data: 'owner_cs_menu' },
      { text: '🏠 Menu Utama', callback_data: 'main_menu' }
    ]);
    
    await editMessage(chatId, messageId, callbackQueryId, message, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: keyboard },
      disable_web_page_preview: true
    });
    
  } catch (error) {
    console.error('Error showActiveCSThreads:', error);
  }
}

// ========================= WITHDRAW (PENCAIRAN DANA) FUNCTIONS =========================

// Cache untuk produk withdraw
const withdrawProductsCache = {
    data: null,
    timestamp: 0,
    ttl: 5 * 60 * 1000, // 5 menit
    loading: false
};

// Fungsi untuk mendapatkan produk withdraw dari API
async function getWithdrawProducts() {
    const now = Date.now();
    
    if (withdrawProductsCache.data && (now - withdrawProductsCache.timestamp < withdrawProductsCache.ttl)) {
        return withdrawProductsCache.data;
    }
    
    if (withdrawProductsCache.loading) {
        return withdrawProductsCache.data || { success: false, data: [] };
    }
    
    withdrawProductsCache.loading = true;
    
    try {
        const options = {
            method: 'GET',
            url: 'https://www.rumahotp.io/api/v1/h2h/product',
            headers: {
                'x-apikey': x_apikey,
                'Accept': 'application/json'
            }
        };
        
        const response = await axios(options);
        
        if (response.data && response.data.success) {
            withdrawProductsCache.data = response.data;
            withdrawProductsCache.timestamp = now;
        }
        
        return response.data;
    } catch (error) {
        console.error('Error fetching withdraw products:', error);
        return { success: false, data: [] };
    } finally {
        withdrawProductsCache.loading = false;
    }
}

// Fungsi untuk filter produk e-wallet (DANA, OVO, GOPAY, dll)
function filterEwalletProducts(products) {
    if (!products || !Array.isArray(products)) return [];
    
    const ewalletBrands = ['dana', 'ovo', 'gopay', 'shopeepay', 'linkaja'];
    
    return products.filter(product => {
        const brand = (product.brand || '').toLowerCase();
        const category = (product.category || '').toLowerCase();
        const type = (product.type || '').toLowerCase();
        
        // Filter hanya e-wallet
        return ewalletBrands.includes(brand) || 
               category.includes('ewallet') || 
               type.includes('topup_saldo') ||
               type.includes('ewallet');
    });
}

// Fungsi untuk mendapatkan produk berdasarkan brand
function getProductsByBrand(products, brand) {
    if (!products || !Array.isArray(products)) return [];
    
    return products.filter(product => 
        (product.brand || '').toLowerCase() === brand.toLowerCase()
    );
}

// Fungsi untuk memformat produk
function formatProductInfo(product) {
    const priceInfo = product.price_info || {};
    const originalPrice = priceInfo.price_original || product.price || 0;
    const discountPrice = priceInfo.price_discount || product.price || 0;
    const discountPercent = priceInfo.price_discount_percent || 0;
    
    return {
        code: product.code,
        name: product.name,
        note: product.note,
        brand: product.brand,
        category: product.category,
        type: product.type,
        img_url: product.img_url,
        price: discountPrice,
        original_price: originalPrice,
        discount_percent: discountPercent
    };
}

// ========================= WITHDRAW MENU FUNCTIONS =========================

async function showWithdrawMenu(chatId, userId, messageId, callbackQueryId, page = 0) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
                show_alert: true
            });
            return;
        }

        await editMessage(chatId, messageId, callbackQueryId,
            '⏳ Memuat produk withdraw...',
            { parse_mode: 'HTML' }
        );

        const productsData = await getWithdrawProducts();
        
        if (!productsData || !productsData.success) {
            await editMessage(chatId, messageId, callbackQueryId,
                '<b>❌ GAGAL MEMUAT PRODUK</b>\n\nTidak dapat mengambil data produk dari server.\n\nSilakan coba lagi nanti.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🔄 Coba Lagi', callback_data: 'withdraw_menu' }],
                            [{ text: '🔙 Owner Menu', callback_data: 'owner_menu' }]
                        ]
                    }
                }
            );
            return;
        }

        const allProducts = productsData.data || [];
        const ewalletProducts = filterEwalletProducts(allProducts);
        
        // Group by brand
        const danaProducts = getProductsByBrand(ewalletProducts, 'dana');
        const ovoProducts = getProductsByBrand(ewalletProducts, 'ovo');
        const gopayProducts = getProductsByBrand(ewalletProducts, 'gopay');
        const shopeepayProducts = getProductsByBrand(ewalletProducts, 'shopeepay');
        const linkajaProducts = getProductsByBrand(ewalletProducts, 'linkaja');
        const otherProducts = ewalletProducts.filter(p => {
            const brand = (p.brand || '').toLowerCase();
            return !['dana', 'ovo', 'gopay', 'shopeepay', 'linkaja'].includes(brand);
        });

        const itemsPerPage = 5;
        const allBrands = [
            { name: 'DANA', data: danaProducts, emoji: '💙' },
            { name: 'OVO', data: ovoProducts, emoji: '💜' },
            { name: 'GOPAY', data: gopayProducts, emoji: '💚' },
            { name: 'SHOPEEPAY', data: shopeepayProducts, emoji: '🛒' },
            { name: 'LINKAJA', data: linkajaProducts, emoji: '🔗' },
            { name: 'LAINNYA', data: otherProducts, emoji: '📱' }
        ].filter(b => b.data.length > 0);
        
        const totalPages = Math.ceil(allBrands.length / itemsPerPage);
        if (page < 0) page = 0;
        if (page >= totalPages && totalPages > 0) page = totalPages - 1;
        
        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageBrands = allBrands.slice(startIndex, endIndex);
        
        let message = `<b>💰 WITHDRAW (PENCAIRAN DANA)</b>\n\n`;
        message += `<b>Total Produk:</b> ${ewalletProducts.length}\n`;
        message += `<b>Halaman:</b> ${page + 1}/${totalPages}\n\n`;
        
        message += `<b>Pilih E-Wallet:</b>\n\n`;
        
        pageBrands.forEach((brand, index) => {
            const num = startIndex + index + 1;
            message += `${brand.emoji} <b>${brand.name}</b> - ${brand.data.length} produk\n`;
            
            // Tampilkan beberapa produk sebagai contoh
            const sampleProducts = brand.data.slice(0, 3);
            sampleProducts.forEach(product => {
                const formatted = formatProductInfo(product);
                const price = formatted.price;
                const originalPrice = formatted.original_price;
                
                if (formatted.discount_percent > 0) {
                    message += `  • ${product.name}: <s>${formatCurrency(originalPrice)}</s> → ${formatCurrency(price)} (${formatted.discount_percent}%)\n`;
                } else {
                    message += `  • ${product.name}: ${formatCurrency(price)}\n`;
                }
            });
            
            if (brand.data.length > 3) {
                message += `  • ... dan ${brand.data.length - 3} produk lainnya\n`;
            }
            
            message += `\n`;
        });

        const keyboard = [];
        
        // Brand selection buttons
        pageBrands.forEach((brand, index) => {
            keyboard.push([
                { 
                    text: `${brand.emoji} ${brand.name} (${brand.data.length})`, 
                    callback_data: `withdraw_brand_${brand.name.toLowerCase()}_${page}` 
                }
            ]);
        });
        
        // Navigation buttons
        const navButtons = [];
        if (totalPages > 1) {
            if (page > 0) {
                navButtons.push({ 
                    text: '◀️ Sebelumnya', 
                    callback_data: `withdraw_menu_page_${page - 1}` 
                });
            }
            
            navButtons.push({ 
                text: `📄 ${page + 1}/${totalPages}`, 
                callback_data: 'no_action' 
            });
            
            if (page < totalPages - 1) {
                navButtons.push({ 
                    text: '▶️ Berikutnya', 
                    callback_data: `withdraw_menu_page_${page + 1}` 
                });
            }
            
            if (navButtons.length > 0) {
                keyboard.push(navButtons);
            }
        }
        
        // Action buttons
        keyboard.push([
            { text: '📋 Riwayat Withdraw', callback_data: 'withdraw_history' },
            { text: '🔄 Refresh', callback_data: `withdraw_menu_page_${page}` }
        ]);
        
        keyboard.push([
            { text: '🔙 Owner Menu', callback_data: 'owner_menu' },
            { text: '🏠 Menu Utama', callback_data: 'main_menu' }
        ]);

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard },
            disable_web_page_preview: true
        });

    } catch (error) {
        console.error('Error in showWithdrawMenu:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            `<b>❌ ERROR</b>\n\nGagal memuat menu withdraw.\n\nError: ${error.message}`,
            { 
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '🔄 Coba Lagi', callback_data: 'withdraw_menu' }],
                        [{ text: '🔙 Owner Menu', callback_data: 'owner_menu' }]
                    ]
                }
            }
        );
    }
}

// ==================== PERBAIKAN FUNGSI REFERRAL ====================

// Tampilkan menu referral (DIPERBAIKI)
async function showReferralMenu(chatId, userId, messageId, callbackQueryId) {
    try {
        const referrals = loadReferrals();
        
        // REGISTRASI USER JIKA BELUM ADA
        if (!referrals.users[userId]) {
            const registerResult = registerUserReferral(userId);
            if (!registerResult.success) {
                await editMessage(chatId, messageId, callbackQueryId,
                    '<b>❌ GAGAL MEMUAT MENU REFERRAL</b>\n\nSilakan coba lagi nanti atau hubungi admin.',
                    { parse_mode: 'HTML' }
                );
                return;
            }
            // Reload data setelah registrasi
            const newReferrals = loadReferrals();
            var userData = newReferrals.users[userId];
        } else {
            var userData = referrals.users[userId];
        }
        
        // VALIDASI userData
        if (!userData) {
            await editMessage(chatId, messageId, callbackQueryId,
                '<b>❌ DATA REFERRAL TIDAK DITEMUKAN</b>\n\nSilakan coba /start terlebih dahulu.',
                { parse_mode: 'HTML' }
            );
            return;
        }
        
        // PASTIKAN referralCode ADA
        if (!userData.referralCode) {
            // Generate ulang referral code jika tidak ada
            const newCode = generateReferralCode(userId);
            userData.referralCode = newCode;
            referrals.users[userId] = userData;
            referrals.codes[newCode] = userId;
            saveReferrals(referrals);
        }
        
        const botUsername = 'RikyshopOTP_bot';
        const referralLink = `https://t.me/${botUsername}?start=ref_${userData.referralCode}`;
        
        // Generate QR Code untuk link referral
        let qrCodeBuffer = null;
        try {
            qrCodeBuffer = await QRCode.toBuffer(referralLink, {
                errorCorrectionLevel: 'M',
                margin: 1,
                width: 250
            });
        } catch (qrError) {
            console.error('Error generating QR code:', qrError);
        }
        
        const shareBonusStatus = userData.shareBonusClaimed ? '✅ Sudah diklaim' : '🟡 Belum diklaim';
        const shareBonusAmount = 650;
        const claimBonusAmount = 150;
        
        let message = `<b>👥 PROGRAM REFERRAL</b>\n\n`;
        message += `<b>📊 Statistik Anda:</b>\n`;
        message += `├ Total Referral: ${userData.totalReferrals || 0} orang\n`;
        message += `├ Total Bonus: ${formatCurrency(userData.totalEarned || 0)}\n`;
        message += `├ Bonus Share: ${shareBonusStatus}\n`;
        message += `└ Bonus Klaim: ${(userData.claimBonuses || []).length}x (${formatCurrency((userData.claimBonuses || []).length * claimBonusAmount)})\n\n`;
        
        message += `<b>🎁 Bonus yang Tersedia:</b>\n`;
        message += `├ 📤 <b>Bonus Share</b>: ${formatCurrency(shareBonusAmount)}\n`;
        message += `│  └ Saat membagikan link referral ke teman\n`;
        message += `└ 🎯 <b>Bonus Klaim</b>: ${formatCurrency(claimBonusAmount)}\n`;
        message += `   └ Setiap teman yang melakukan order via link Anda\n\n`;
        
        message += `<b>🔗 Link Referral Anda:</b>\n`;
        message += `<code>${referralLink}</code>\n\n`;
        
        message += `<b>📋 Cara Mendapatkan Bonus:</b>\n`;
        message += `1️⃣ Bagikan link di atas ke teman\n`;
        message += `2️⃣ Klik tombol "Klaim Bonus Share" (${formatCurrency(shareBonusAmount)})\n`;
        message += `3️⃣ Ajak teman order menggunakan link Anda\n`;
        message += `4️⃣ Dapatkan ${formatCurrency(claimBonusAmount)} per order teman\n\n`;
        
        message += `<i>💡 Semakin banyak teman yang order, semakin besar bonus Anda!</i>`;
        
        const keyboard = [
            [
                { 
                    text: userData.shareBonusClaimed ? '✅ Sudah Klaim' : `🎁 Klaim Bonus Share (${formatCurrency(shareBonusAmount)})`, 
                    callback_data: userData.shareBonusClaimed ? 'no_action' : 'referral_claim_share' 
                }
            ],
            [
                { text: '📋 Riwayat Bonus', callback_data: 'referral_history' },
                { text: '📤 Bagikan Link', callback_data: 'referral_share' }
            ],
            [
                { text: '🏠 Menu Utama', callback_data: 'main_menu' }
            ]
        ];
        
        if (qrCodeBuffer) {
            // Kirim pesan dengan foto QR code
            await bot.deleteMessage(chatId, messageId).catch(() => {});
            
            const sentMessage = await bot.sendPhoto(chatId, qrCodeBuffer, {
                caption: message,
                parse_mode: 'HTML',
                reply_markup: { inline_keyboard: keyboard }
            });
            
            if (callbackQueryId) {
                await bot.answerCallbackQuery(callbackQueryId).catch(() => {});
            }
            
            // Simpan message ID untuk edit nanti
            if (callbackQueryId && messageId) {
                userLastMessage.set(chatId, sentMessage.message_id);
            }
        } else {
            await editMessage(chatId, messageId, callbackQueryId, message, {
                parse_mode: 'HTML',
                reply_markup: { inline_keyboard: keyboard },
                disable_web_page_preview: true
            });
        }
        
    } catch (error) {
        console.error('Error showReferralMenu:', error);
        // Kirim pesan error yang lebih informatif
        const errorMessage = `<b>❌ GAGAL MEMUAT MENU REFERRAL</b>\n\n` +
            `Error: ${error.message}\n\n` +
            `Silakan coba /start terlebih dahulu atau hubungi admin.`;
        
        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, errorMessage, { parse_mode: 'HTML' });
        } else {
            await sendNewMessage(chatId, errorMessage, { parse_mode: 'HTML' });
        }
    }
}

// Tampilkan riwayat bonus referral (DIPERBAIKI)
async function showReferralHistory(chatId, userId, messageId, callbackQueryId) {
    try {
        const referrals = loadReferrals();
        
        // REGISTRASI USER JIKA BELUM ADA
        if (!referrals.users[userId]) {
            registerUserReferral(userId);
            const newReferrals = loadReferrals();
            var userData = newReferrals.users[userId];
        } else {
            var userData = referrals.users[userId];
        }
        
        if (!userData) {
            await editMessage(chatId, messageId, callbackQueryId,
                '<b>❌ DATA TIDAK DITEMUKAN</b>\n\nSilakan gunakan /start terlebih dahulu.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🏠 Menu Utama', callback_data: 'main_menu' }]
                        ]
                    }
                }
            );
            return;
        }
        
        const userTransactions = referrals.transactions.filter(t => t.userId === userId);
        
        if (userTransactions.length === 0 && (userData.claimBonuses || []).length === 0 && !userData.shareBonusClaimed) {
            await editMessage(chatId, messageId, callbackQueryId,
                '<b>📋 RIWAYAT BONUS</b>\n\nBelum ada riwayat bonus.\n\nBagikan link referral Anda untuk mulai mendapatkan bonus!',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🔙 Kembali', callback_data: 'referral_menu' }]
                        ]
                    }
                }
            );
            return;
        }
        
        let message = `<b>📋 RIWAYAT BONUS REFERRAL</b>\n\n`;
        message += `<b>Total Bonus: ${formatCurrency(userData.totalEarned || 0)}</b>\n\n`;
        
        // Bonus Share
        if (userData.shareBonusClaimed) {
            const shareBonus = userTransactions.find(t => t.type === 'share_bonus');
            const date = shareBonus ? new Date(shareBonus.timestamp).toLocaleString('id-ID') : 'Diketahui';
            message += `<b>🎁 Bonus Share:</b>\n`;
            message += `├ Jumlah: ${formatCurrency(650)}\n`;
            message += `├ Status: ✅ Diklaim\n`;
            message += `└ Tanggal: ${date}\n\n`;
        }
        
        // Bonus Klaim
        if (userData.claimBonuses && userData.claimBonuses.length > 0) {
            message += `<b>🎯 Bonus Klaim (${userData.claimBonuses.length}x):</b>\n`;
            userData.claimBonuses.forEach((bonus, index) => {
                const date = new Date(bonus.timestamp).toLocaleString('id-ID');
                message += `${index + 1}. ${formatCurrency(bonus.amount)} - Order #${bonus.orderId}\n`;
                message += `   📅 ${date}\n`;
            });
            message += `\n`;
        }
        
        if (userData.totalReferrals && userData.totalReferrals > 0) {
            message += `<b>👥 Total Referral:</b> ${userData.totalReferrals} orang\n`;
        }
        
        message += `\n<i>Terus bagikan link referral Anda untuk mendapatkan lebih banyak bonus!</i>`;
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🔙 Kembali ke Menu', callback_data: 'referral_menu' }],
                    [{ text: '📤 Bagikan Link', callback_data: 'referral_share' }]
                ]
            },
            disable_web_page_preview: true
        });
        
    } catch (error) {
        console.error('Error showReferralHistory:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Gagal memuat riwayat bonus.\n\nSilakan coba lagi.',
            { parse_mode: 'HTML' }
        );
    }
}

// Bagikan link referral (DIPERBAIKI)
async function shareReferralLink(chatId, userId, messageId, callbackQueryId) {
    try {
        const referrals = loadReferrals();
        
        // REGISTRASI USER JIKA BELUM ADA
        if (!referrals.users[userId]) {
            registerUserReferral(userId);
            const newReferrals = loadReferrals();
            var userData = newReferrals.users[userId];
        } else {
            var userData = referrals.users[userId];
        }
        
        if (!userData || !userData.referralCode) {
            await editMessage(chatId, messageId, callbackQueryId,
                '<b>❌ GAGAL MEMBAGIKAN LINK</b>\n\nSilakan coba /start terlebih dahulu.',
                { parse_mode: 'HTML' }
            );
            return;
        }
        
        const botUsername = 'RikyshopOTP_bot';
        const referralLink = `https://t.me/${botUsername}?start=ref_${userData.referralCode}`;
        
        const shareMessage = `🎁 <b>DAPATKAN BONUS REFERRAL!</b>\n\n` +
            `Yuk gabung dan order layanan OTP termurah!\n\n` +
            `🔗 <b>Link Referral Saya:</b>\n` +
            `<code>${referralLink}</code>\n\n` +
            `✨ <b>Keuntungan:</b>\n` +
            `• Dapatkan bonus ${formatCurrency(650)} saat bagikan link\n` +
            `• Dapatkan ${formatCurrency(150)} per order teman\n` +
            `• Tanpa batas! Semakin banyak semakin untung\n\n` +
            `👥 Ajak teman-temanmu sekarang juga!`;
        
        await editMessage(chatId, messageId, callbackQueryId, shareMessage, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: '📋 Salin Link', callback_data: `referral_copy_${userData.referralCode}` },
                        { text: '🔙 Kembali', callback_data: 'referral_menu' }
                    ]
                ]
            },
            disable_web_page_preview: true
        });
        
    } catch (error) {
        console.error('Error shareReferralLink:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Gagal membagikan link.\n\nSilakan coba lagi.',
            { parse_mode: 'HTML' }
        );
    }
}

// Proses klaim bonus share (DIPERBAIKI)
async function processClaimShareBonus(chatId, userId, messageId, callbackQueryId) {
    try {
        const result = await claimShareBonus(chatId, userId);
        
        if (result.success) {
            await editMessage(chatId, messageId, callbackQueryId, result.message, {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '👥 Menu Referral', callback_data: 'referral_menu' }],
                        [{ text: '🏠 Menu Utama', callback_data: 'main_menu' }]
                    ]
                }
            });
        } else {
            await editMessage(chatId, messageId, callbackQueryId,
                `<b>❌ ${result.error || 'Gagal klaim bonus'}</b>`,
                {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🔙 Kembali', callback_data: 'referral_menu' }]
                        ]
                    }
                }
            );
        }
        
    } catch (error) {
        console.error('Error processClaimShareBonus:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Terjadi kesalahan saat klaim bonus.\n\nSilakan coba lagi.',
            { parse_mode: 'HTML' }
        );
    }
}

// Proses referral code saat start (DIPERBAIKI)
async function processReferralStart(userId, referralCode) {
    try {
        const referrals = loadReferrals();
        
        // Cek apakah kode referral valid
        if (!referrals.codes[referralCode]) {
            return { success: false, error: 'Kode referral tidak valid' };
        }
        
        const referrerId = referrals.codes[referralCode];
        
        // Jangan biarkan user merefer diri sendiri
        if (referrerId === userId) {
            return { success: false, error: 'Anda tidak bisa menggunakan kode referral sendiri' };
        }
        
        // Register user dengan referral
        const result = registerUserReferral(userId, referralCode);
        
        if (result.success) {
            return { 
                success: true, 
                message: `✅ Anda bergabung dengan referral ${referrerId}!\n\nGunakan menu Referral untuk klaim bonus share ${formatCurrency(650)} dengan membagikan link Anda!`,
                referrerId: referrerId
            };
        }
        
        return { success: false, error: 'Gagal memproses referral' };
        
    } catch (error) {
        console.error('Error processReferralStart:', error);
        return { success: false, error: 'Terjadi kesalahan sistem' };
    }
}

// Fungsi claim share bonus (DIPERBAIKI)
async function claimShareBonus(chatId, userId) {
    try {
        const referrals = loadReferrals();
        
        // Cek apakah user terdaftar
        if (!referrals.users[userId]) {
            const registerResult = registerUserReferral(userId);
            if (!registerResult.success) {
                return { success: false, error: 'Gagal mendaftarkan user' };
            }
            // Reload data
            const newReferrals = loadReferrals();
            var userData = newReferrals.users[userId];
        } else {
            var userData = referrals.users[userId];
        }
        
        if (!userData) {
            return { success: false, error: 'Silakan gunakan /start terlebih dahulu' };
        }
        
        // Cek apakah sudah pernah klaim
        if (userData.shareBonusClaimed) {
            return { success: false, error: 'Anda sudah pernah mengklaim bonus share sebelumnya!' };
        }
        
        // Berikan bonus 650
        const BONUS_SHARE = 650;
        const success = addUserBalance(userId, BONUS_SHARE);
        
        if (!success) {
            return { success: false, error: 'Gagal menambahkan saldo' };
        }
        
        // Update data referral
        userData.shareBonusClaimed = true;
        userData.totalEarned = (userData.totalEarned || 0) + BONUS_SHARE;
        
        // Catat transaksi
        referrals.transactions.push({
            id: `share_${Date.now()}_${userId}`,
            userId: userId,
            type: 'share_bonus',
            amount: BONUS_SHARE,
            status: 'completed',
            timestamp: new Date().toISOString()
        });
        
        // Update statistik
        referrals.stats.totalBonusGiven = (referrals.stats.totalBonusGiven || 0) + BONUS_SHARE;
        referrals.stats.totalShareBonus = (referrals.stats.totalShareBonus || 0) + BONUS_SHARE;
        
        // Simpan perubahan
        referrals.users[userId] = userData;
        saveReferrals(referrals);
        
        return {
            success: true,
            message: `✅ Anda mendapatkan bonus share sebesar ${formatCurrency(BONUS_SHARE)}!\n\nSaldo Anda sekarang: ${formatCurrency(getUserBalance(userId))}`,
            amount: BONUS_SHARE
        };
        
    } catch (error) {
        console.error('Error claimShareBonus:', error);
        return { success: false, error: 'Terjadi kesalahan sistem' };
    }
}

// Fungsi register user referral (DIPERBAIKI)
function registerUserReferral(userId, referredByCode = null) {
    try {
        const referrals = loadReferrals();
        const userIdStr = userId.toString();
        
        // Jika user sudah terdaftar
        if (referrals.users[userIdStr]) {
            return { success: true, isNew: false, referralCode: referrals.users[userIdStr].referralCode };
        }
        
        // Generate kode referral untuk user
        let referralCode = generateReferralCode(userIdStr);
        while (referrals.codes[referralCode]) {
            referralCode = generateReferralCode(userIdStr);
        }
        
        // Data user baru
        referrals.users[userIdStr] = {
            referralCode: referralCode,
            referredBy: null,
            referredByCode: null,
            totalReferrals: 0,
            totalEarned: 0,
            shareBonusClaimed: false,
            claimBonuses: [],
            createdAt: new Date().toISOString()
        };
        
        referrals.codes[referralCode] = userIdStr;
        
        // Jika ada kode referral yang digunakan saat register
        if (referredByCode && referrals.codes[referredByCode]) {
            const referrerId = referrals.codes[referredByCode];
            
            if (referrerId !== userIdStr) {
                referrals.users[userIdStr].referredBy = referrerId;
                referrals.users[userIdStr].referredByCode = referredByCode;
                
                // Increment total referral referrer
                if (referrals.users[referrerId]) {
                    referrals.users[referrerId].totalReferrals = (referrals.users[referrerId].totalReferrals || 0) + 1;
                }
            }
        }
        
        saveReferrals(referrals);
        return { success: true, isNew: true, referralCode: referralCode };
        
    } catch (error) {
        console.error('Error registerUserReferral:', error);
        return { success: false, error: error.message };
    }
}

// Tampilkan riwayat bonus referral
async function showReferralHistory(chatId, userId, messageId, callbackQueryId) {
    try {
        const referrals = loadReferrals();
        
        if (!referrals.users[userId]) {
            await editMessage(chatId, messageId, callbackQueryId,
                'Belum ada riwayat bonus.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🔙 Kembali', callback_data: 'referral_menu' }]
                        ]
                    }
                }
            );
            return;
        }
        
        const userData = referrals.users[userId];
        const userTransactions = referrals.transactions.filter(t => t.userId === userId);
        
        if (userTransactions.length === 0 && userData.claimBonuses.length === 0 && !userData.shareBonusClaimed) {
            await editMessage(chatId, messageId, callbackQueryId,
                '<b>📋 RIWAYAT BONUS</b>\n\nBelum ada riwayat bonus.\n\nBagikan link referral Anda untuk mulai mendapatkan bonus!',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🔙 Kembali', callback_data: 'referral_menu' }]
                        ]
                    }
                }
            );
            return;
        }
        
        let message = `<b>📋 RIWAYAT BONUS REFERRAL</b>\n\n`;
        message += `<b>Total Bonus: ${formatCurrency(userData.totalEarned)}</b>\n\n`;
        
        // Bonus Share
        if (userData.shareBonusClaimed) {
            const shareBonus = userTransactions.find(t => t.type === 'share_bonus');
            const date = shareBonus ? new Date(shareBonus.timestamp).toLocaleString('id-ID') : 'Diketahui';
            message += `<b>🎁 Bonus Share:</b>\n`;
            message += `├ Jumlah: ${formatCurrency(650)}\n`;
            message += `├ Status: ✅ Diklaim\n`;
            message += `└ Tanggal: ${date}\n\n`;
        }
        
        // Bonus Klaim
        if (userData.claimBonuses.length > 0) {
            message += `<b>🎯 Bonus Klaim (${userData.claimBonuses.length}x):</b>\n`;
            userData.claimBonuses.forEach((bonus, index) => {
                const date = new Date(bonus.timestamp).toLocaleString('id-ID');
                message += `${index + 1}. ${formatCurrency(bonus.amount)} - Order #${bonus.orderId}\n`;
                message += `   📅 ${date}\n`;
            });
            message += `\n`;
        }
        
        if (userData.totalReferrals > 0) {
            message += `<b>👥 Total Referral:</b> ${userData.totalReferrals} orang\n`;
        }
        
        message += `\n<i>Terus bagikan link referral Anda untuk mendapatkan lebih banyak bonus!</i>`;
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🔙 Kembali ke Menu', callback_data: 'referral_menu' }],
                    [{ text: '📤 Bagikan Link', callback_data: 'referral_share' }]
                ]
            },
            disable_web_page_preview: true
        });
        
    } catch (error) {
        console.error('Error showReferralHistory:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Gagal memuat riwayat bonus.',
            { parse_mode: 'HTML' }
        );
    }
}

// Bagikan link referral
async function shareReferralLink(chatId, userId, messageId, callbackQueryId) {
    try {
        const referrals = loadReferrals();
        
        if (!referrals.users[userId]) {
            registerUserReferral(userId);
        }
        
        const userData = referrals.users[userId];
        const botUsername = 'RikyshopOTP_bot'; // Ganti dengan username bot Anda
        const referralLink = `https://t.me/${botUsername}?start=ref_${userData.referralCode}`;
        
        const shareMessage = `🎁 <b>DAPATKAN BONUS REFERRAL!</b>\n\n` +
            `Yuk gabung dan order layanan OTP termurah!\n\n` +
            `🔗 <b>Link Referral Saya:</b>\n` +
            `<code>${referralLink}</code>\n\n` +
            `✨ <b>Keuntungan:</b>\n` +
            `• Dapatkan bonus ${formatCurrency(650)} saat bagikan link\n` +
            `• Dapatkan ${formatCurrency(150)} per order teman\n` +
            `• Tanpa batas! Semakin banyak semakin untung\n\n` +
            `👥 Ajak teman-temanmu sekarang juga!`;
        
        // Coba kirim sebagai pesan biasa (biar user bisa forward)
        await editMessage(chatId, messageId, callbackQueryId, shareMessage, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: '📋 Salin Link', callback_data: `referral_copy_${userData.referralCode}` },
                        { text: '🔙 Kembali', callback_data: 'referral_menu' }
                    ]
                ]
            },
            disable_web_page_preview: true
        });
        
    } catch (error) {
        console.error('Error shareReferralLink:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Gagal membagikan link.',
            { parse_mode: 'HTML' }
        );
    }
}

// Proses klaim bonus share
async function processClaimShareBonus(chatId, userId, messageId, callbackQueryId) {
    try {
        const result = await claimShareBonus(chatId, userId);
        
        if (result.success) {
            await editMessage(chatId, messageId, callbackQueryId, result.message, {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '👥 Menu Referral', callback_data: 'referral_menu' }],
                        [{ text: '🏠 Menu Utama', callback_data: 'main_menu' }]
                    ]
                }
            });
        } else {
            await editMessage(chatId, messageId, callbackQueryId,
                `❌ ${result.error}`,
                {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🔙 Kembali', callback_data: 'referral_menu' }]
                        ]
                    }
                }
            );
        }
        
    } catch (error) {
        console.error('Error processClaimShareBonus:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Terjadi kesalahan saat klaim bonus.',
            { parse_mode: 'HTML' }
        );
    }
}

// Proses referral code saat start
async function processReferralStart(userId, referralCode) {
    try {
        const referrals = loadReferrals();
        
        // Cek apakah kode referral valid
        if (!referrals.codes[referralCode]) {
            return { success: false, error: 'Kode referral tidak valid' };
        }
        
        const referrerId = referrals.codes[referralCode];
        
        // Jangan biarkan user merefer diri sendiri
        if (referrerId === userId) {
            return { success: false, error: 'Anda tidak bisa menggunakan kode referral sendiri' };
        }
        
        // Register user dengan referral
        const result = registerUserReferral(userId, referralCode);
        
        if (result.success) {
            return { 
                success: true, 
                message: `✅ Anda bergabung dengan referral ${referrerId}!\n\nGunakan menu Referral untuk klaim bonus share ${formatCurrency(650)} dengan membagikan link Anda!`,
                referrerId: referrerId
            };
        }
        
        return { success: false, error: 'Gagal memproses referral' };
        
    } catch (error) {
        console.error('Error processReferralStart:', error);
        return { success: false, error: 'Terjadi kesalahan sistem' };
    }
}

async function showWithdrawBrandProducts(chatId, userId, brand, menuPage, messageId, callbackQueryId, productPage = 0) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
                show_alert: true
            });
            return;
        }

        // Ambil data dari cache
        const productsData = await getWithdrawProducts();
        
        if (!productsData || !productsData.success) {
            await editMessage(chatId, messageId, callbackQueryId,
                '<b>❌ GAGAL MEMUAT PRODUK</b>',
                { parse_mode: 'HTML' }
            );
            return;
        }

        const allProducts = productsData.data || [];
        const ewalletProducts = filterEwalletProducts(allProducts);
        const brandProducts = getProductsByBrand(ewalletProducts, brand);
        
        // LOGGING UNTUK DEBUG
        console.log(`Brand: ${brand}, Total Products: ${brandProducts.length}, MenuPage: ${menuPage}, ProductPage: ${productPage}`);
        
        if (brandProducts.length === 0) {
            await editMessage(chatId, messageId, callbackQueryId,
                `<b>❌ TIDAK ADA PRODUK</b>\n\nTidak ada produk untuk ${brand.toUpperCase()}.`,
                { parse_mode: 'HTML' }
            );
            return;
        }

        // Sort products by price
        brandProducts.sort((a, b) => {
            const priceA = a.price_info?.price_discount || a.price || 0;
            const priceB = b.price_info?.price_discount || b.price || 0;
            return priceA - priceB;
        });

        const itemsPerPage = 8;
        const totalPages = Math.ceil(brandProducts.length / itemsPerPage);
        
        // Validasi productPage
        if (productPage < 0) productPage = 0;
        if (productPage >= totalPages) productPage = totalPages - 1;
        
        const startIndex = productPage * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, brandProducts.length);
        const pageProducts = brandProducts.slice(startIndex, endIndex);

        const brandEmoji = {
            'dana': '💙',
            'ovo': '💜',
            'gopay': '💚',
            'shopeepay': '🛒',
            'linkaja': '🔗'
        }[brand] || '💰';

        let message = `<b>${brandEmoji} ${brand.toUpperCase()} - PRODUK WITHDRAW</b>\n\n`;
        message += `<b>Total Produk:</b> ${brandProducts.length}\n`;
        message += `<b>Halaman Produk:</b> ${productPage + 1}/${totalPages}\n\n`;
        
        message += `<b>Daftar Produk (${startIndex + 1}-${endIndex} dari ${brandProducts.length}):</b>\n\n`;

        pageProducts.forEach((product, index) => {
            const num = startIndex + index + 1;
            const formatted = formatProductInfo(product);
            
            message += `<b>${num}. ${product.name}</b>\n`;
            message += `   📦 Kode: <code>${product.code}</code>\n`;
            
            if (formatted.discount_percent > 0) {
                message += `   💰 Harga: <s>${formatCurrency(formatted.original_price)}</s> → <b>${formatCurrency(formatted.price)}</b>\n`;
                message += `   🏷️ Diskon: ${formatted.discount_percent}%\n`;
            } else {
                message += `   💰 Harga: ${formatCurrency(formatted.price)}\n`;
            }
            
            if (product.note) {
                message += `   📝 Catatan: ${product.note}\n`;
            }
            
            message += `\n`;
        });

        const keyboard = [];

        // Product selection buttons
        for (let i = 0; i < pageProducts.length; i += 2) {
            const row = [];
            
            if (pageProducts[i]) {
                const product = pageProducts[i];
                const num = startIndex + i + 1;
                row.push({ 
                    text: `${num}. ${product.name.substring(0, 15)}`, 
                    callback_data: `withdraw_product_${product.code}_${brand}_${menuPage}_${productPage}` 
                });
            }
            
            if (pageProducts[i + 1]) {
                const product = pageProducts[i + 1];
                const num = startIndex + i + 2;
                row.push({ 
                    text: `${num}. ${product.name.substring(0, 15)}`, 
                    callback_data: `withdraw_product_${product.code}_${brand}_${menuPage}_${productPage}` 
                });
            }
            
            if (row.length > 0) {
                keyboard.push(row);
            }
        }

        // Product navigation buttons - PERBAIKAN UTAMA
        if (totalPages > 1) {
            const navRow = [];
            
            // Tombol Previous
            if (productPage > 0) {
                navRow.push({ 
                    text: '◀️ Prev', 
                    callback_data: `withdraw_brand_products_${brand}_${menuPage}_${productPage - 1}` 
                });
            } else {
                navRow.push({ 
                    text: '◀️', 
                    callback_data: 'no_action' 
                });
            }
            
            // Info halaman
            navRow.push({ 
                text: `📄 ${productPage + 1}/${totalPages}`, 
                callback_data: 'no_action' 
            });
            
            // Tombol Next
            if (productPage < totalPages - 1) {
                navRow.push({ 
                    text: '▶️ Next', 
                    callback_data: `withdraw_brand_products_${brand}_${menuPage}_${productPage + 1}` 
                });
            } else {
                navRow.push({ 
                    text: '▶️', 
                    callback_data: 'no_action' 
                });
            }
            
            if (navRow.length > 0) {
                keyboard.push(navRow);
            }
        }

        // Action buttons
        keyboard.push([
            { text: '🔙 Kembali ke Menu', callback_data: `withdraw_menu_page_${menuPage}` },
            { text: '📋 Riwayat', callback_data: 'withdraw_history' }
        ]);

        keyboard.push([
            { text: '🔙 Owner Menu', callback_data: 'owner_menu' },
            { text: '🏠 Menu Utama', callback_data: 'main_menu' }
        ]);

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard },
            disable_web_page_preview: true
        });

    } catch (error) {
        console.error('Error in showWithdrawBrandProducts:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            `<b>❌ ERROR</b>\n\nGagal memuat produk.\n\nError: ${error.message}`,
            { parse_mode: 'HTML' }
        );
    }
}

async function showWithdrawProductDetail(chatId, userId, productCode, brand, menuPage, productPage, messageId, callbackQueryId) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
                show_alert: true
            });
            return;
        }

        await editMessage(chatId, messageId, callbackQueryId,
            '⏳ Memuat detail produk...',
            { parse_mode: 'HTML' }
        );

        const productsData = await getWithdrawProducts();
        
        if (!productsData || !productsData.success) {
            await editMessage(chatId, messageId, callbackQueryId,
                '<b>❌ GAGAL MEMUAT PRODUK</b>',
                { parse_mode: 'HTML' }
            );
            return;
        }

        const allProducts = productsData.data || [];
        const product = allProducts.find(p => p.code === productCode);
        
        if (!product) {
            await editMessage(chatId, messageId, callbackQueryId,
                `<b>❌ PRODUK TIDAK DITEMUKAN</b>\n\nKode: <code>${productCode}</code>`,
                { parse_mode: 'HTML' }
            );
            return;
        }

        const formatted = formatProductInfo(product);
        
        // Set selection untuk input nomor tujuan
        const selection = {
            step: 'awaiting_withdraw_target',
            productCode: product.code,
            productName: product.name,
            productPrice: formatted.price,
            brand: brand,
            menuPage: menuPage,
            productPage: productPage,
            timestamp: Date.now()
        };
        userSelections.set(userId, selection);

        const brandEmoji = {
            'dana': '💙',
            'ovo': '💜',
            'gopay': '💚',
            'shopeepay': '🛒',
            'linkaja': '🔗'
        }[brand] || '💰';

        let message = `<b>${brandEmoji} DETAIL PRODUK WITHDRAW</b>\n\n`;
        
        message += `<b>Produk:</b> ${product.name}\n`;
        message += `<b>Kode:</b> <code>${product.code}</code>\n`;
        message += `<b>Brand:</b> ${product.brand || '-'}\n`;
        message += `<b>Kategori:</b> ${product.category || '-'}\n`;
        message += `<b>Tipe:</b> ${product.type || '-'}\n\n`;
        
        if (formatted.discount_percent > 0) {
            message += `<b>Harga Asli:</b> <s>${formatCurrency(formatted.original_price)}</s>\n`;
            message += `<b>Harga Diskon:</b> ${formatCurrency(formatted.price)}\n`;
            message += `<b>Diskon:</b> ${formatted.discount_percent}%\n`;
        } else {
            message += `<b>Harga:</b> ${formatCurrency(formatted.price)}\n`;
        }
        
        if (product.note) {
            message += `\n<b>Catatan:</b> ${product.note}\n`;
        }
        
        message += `\n<b>📱 MASUKKAN NOMOR TUJUAN</b>\n\n`;
        message += `Silakan kirim nomor tujuan withdraw:\n`;
        message += `• Contoh: <code>08123456789</code>\n`;
        message += `• Nomor harus aktif dan terdaftar di ${brand.toUpperCase()}\n\n`;
        message += `<i>Ketik 0 untuk membatalkan</i>`;

        const keyboard = [
            [
                { text: '🔙 Kembali', callback_data: `withdraw_brand_products_${brand}_${menuPage}_${productPage}` },
                { text: '❌ Batalkan', callback_data: `withdraw_brand_${brand}_${menuPage}` }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error in showWithdrawProductDetail:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            `<b>❌ ERROR</b>\n\nGagal memuat detail produk.\n\nError: ${error.message}`,
            { parse_mode: 'HTML' }
        );
    }
}

async function processWithdrawOrder(chatId, userId, productCode, targetNumber, messageId) {
    try {
        const loadingMsg = await bot.sendMessage(chatId,
            '⏳ <b>MEMPROSES WITHDRAW...</b>\n\nMengirim permintaan ke server...',
            { parse_mode: 'HTML' }
        );

        // Bersihkan nomor tujuan (hapus spasi, tanda hubung, dll)
        const cleanTarget = targetNumber.replace(/[^\d]/g, '');
        
        if (cleanTarget.length < 10 || cleanTarget.length > 15) {
            await bot.editMessageText(
                `❌ <b>NOMOR TIDAK VALID</b>\n\n` +
                `Nomor: <code>${targetNumber}</code>\n` +
                `Panjang nomor harus 10-15 digit.\n\n` +
                `Contoh format: <code>08123456789</code>`,
                {
                    chat_id: chatId,
                    message_id: loadingMsg.message_id,
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🔄 Coba Lagi', callback_data: 'withdraw_menu' }]
                        ]
                    }
                }
            );
            return;
        }

        // Create order
        const url = `https://www.rumahotp.io/api/v1/h2h/transaksi/create?target=${cleanTarget}&id=${productCode}}`;
        
        const options = {
            method: 'GET',
            url: url,
            headers: {
                'x-apikey': x_apikey,
                'Accept': 'application/json'
            }
        };

        const response = await axios(options);
        
        if (!response.data || !response.data.success) {
            await bot.editMessageText(
                `❌ <b>WITHDRAW GAGAL</b>\n\n` +
                `Pesan: ${response.data?.message || 'Tidak diketahui'}\n\n` +
                `Kode Produk: <code>${productCode}</code>\n` +
                `Tujuan: <code>${cleanTarget}</code>`,
                {
                    chat_id: chatId,
                    message_id: loadingMsg.message_id,
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🔄 Coba Lagi', callback_data: 'withdraw_menu' }]
                        ]
                    }
                }
            );
            return;
        }

        const orderData = response.data.data;
        const orderId = orderData.id;
        
        // Simpan ke database transaksi
        const transactionId = addTransaction('withdraw_orders', {
            userId: userId,
            orderId: orderId,
            productCode: productCode,
            targetNumber: cleanTarget,
            status: orderData.status || 'processing',
            price: orderData.sisa_balance || 0,
            productName: orderData.product || 'Unknown',
            raw_data: orderData,
            created_at: orderData.created_at
        });

        // Update loading message
        await bot.editMessageText(
            `✅ <b>WITHDRAW DIPROSES</b>\n\n` +
            `<b>ID Transaksi:</b> <code>${orderId}</code>\n` +
            `<b>Produk:</b> ${orderData.product || '-'}\n` +
            `<b>Tujuan:</b> <code>${orderData.tujuan || cleanTarget}</code>\n` +
            `<b>Status:</b> ${orderData.status || 'processing'}\n` +
            `<b>Sisa Saldo:</b> ${formatCurrency(orderData.sisa_balance || 0)}\n\n` +
            `⏳ <b>Memantau status transaksi...</b>\n\n` +
            `<i>Status akan diperbarui otomatis setiap 5 detik</i>`,
            {
                chat_id: chatId,
                message_id: loadingMsg.message_id,
                parse_mode: 'HTML'
            }
        );

        // Monitor status setiap 5 detik
        let retryCount = 0;
        const maxRetries = 120; // 10 menit
        
        const interval = setInterval(async () => {
            try {
                retryCount++;
                
                if (retryCount >= maxRetries) {
                    clearInterval(interval);
                    
                    await bot.editMessageText(
                        `⏱️ <b>WAKTU MONITORING HABIS</b>\n\n` +
                        `<b>ID Transaksi:</b> <code>${orderId}</code>\n\n` +
                        `Monitoring dihentikan setelah 10 menit.\n` +
                        `Gunakan menu Riwayat untuk cek status terbaru.`,
                        {
                            chat_id: chatId,
                            message_id: loadingMsg.message_id,
                            parse_mode: 'HTML',
                            reply_markup: {
                                inline_keyboard: [
                                    [{ text: '📋 Riwayat Withdraw', callback_data: 'withdraw_history' }],
                                    [{ text: '💰 Withdraw Lagi', callback_data: 'withdraw_menu' }]
                                ]
                            }
                        }
                    );
                    return;
                }

                const statusOptions = {
                    method: 'GET',
                    url: `https://www.rumahotp.io/api/v1/h2h/transaksi/status?transaksi_id=${orderId}`,
                    headers: {
                        'x-apikey': x_apikey,
                        'Accept': 'application/json'
                    }
                };

                const statusResponse = await axios(statusOptions);
                
                if (!statusResponse.data || !statusResponse.data.success) {
                    return;
                }

                const statusData = statusResponse.data.data;
                
                // Update status di database
                updateTransactionStatus('withdraw_orders', orderId, statusData.status);

                if (statusData.status === 'success') {
                    clearInterval(interval);
                    
                    const finishTime = statusData.finish_at ? 
                        new Date(statusData.finish_at).toLocaleString('id-ID') : 
                        new Date().toLocaleString('id-ID');
                    
                    const sn = statusData.response?.sn || '-';
                    const responseTime = statusData.response?.time || '-';
                    
                    await bot.editMessageText(
                        `✅ <b>WITHDRAW BERHASIL!</b>\n\n` +
                        `<b>ID Transaksi:</b> <code>${orderId}</code>\n` +
                        `<b>Produk:</b> ${statusData.product?.name || statusData.product || '-'}\n` +
                        `<b>Tujuan:</b> <code>${statusData.tujuan}</code>\n` +
                        `<b>Harga:</b> ${formatCurrency(statusData.price || 0)}\n` +
                        `<b>SN:</b> <code>${sn}</code>\n` +
                        `<b>Waktu Provider:</b> ${responseTime}\n` +
                        `<b>Selesai:</b> ${finishTime}\n\n` +
                        `💰 <b>Saldo Terkini:</b> ${formatCurrency(statusData.sisa_balance || 0)}`,
                        {
                            chat_id: chatId,
                            message_id: loadingMsg.message_id,
                            parse_mode: 'HTML',
                            reply_markup: {
                                inline_keyboard: [
                                    [
                                        { text: '💰 Withdraw Lagi', callback_data: 'withdraw_menu' },
                                        { text: '📋 Riwayat', callback_data: 'withdraw_history' }
                                    ],
                                    [
                                        { text: '🔙 Owner Menu', callback_data: 'owner_menu' }
                                    ]
                                ]
                            }
                        }
                    );

                    // Kirim notifikasi ke channel
                    if (channel) {
                        try {
                            await bot.sendMessage(channel,
                                `✅ <b>WITHDRAW BERHASIL</b>\n\n` +
                                `<b>ID:</b> <code>${orderId}</code>\n` +
                                `<b>Produk:</b> ${statusData.product?.name || '-'}\n` +
                                `<b>Tujuan:</b> <code>${statusData.tujuan}</code>\n` +
                                `<b>Jumlah:</b> ${formatCurrency(statusData.price || 0)}\n` +
                                `<b>SN:</b> <code>${sn}</code>\n` +
                                `<b>Waktu:</b> ${finishTime}`,
                                { parse_mode: 'HTML' }
                            );
                        } catch (error) {}
                    }

                } else if (statusData.status === 'failed' || statusData.status === 'canceled') {
                    clearInterval(interval);
                    
                    await bot.editMessageText(
                        `❌ <b>WITHDRAW GAGAL!</b>\n\n` +
                        `<b>ID Transaksi:</b> <code>${orderId}</code>\n` +
                        `<b>Produk:</b> ${statusData.product?.name || statusData.product || '-'}\n` +
                        `<b>Tujuan:</b> <code>${statusData.tujuan}</code>\n` +
                        `<b>Status:</b> ${statusData.status.toUpperCase()}\n` +
                        `<b>Pesan:</b> ${statusData.response?.status || '-'}\n` +
                        `<b>Refund:</b> ${statusData.refund ? '✅ Ya' : '❌ Tidak'}`,
                        {
                            chat_id: chatId,
                            message_id: loadingMsg.message_id,
                            parse_mode: 'HTML',
                            reply_markup: {
                                inline_keyboard: [
                                    [
                                        { text: '🔄 Coba Lagi', callback_data: 'withdraw_menu' },
                                        { text: '📋 Riwayat', callback_data: 'withdraw_history' }
                                    ]
                                ]
                            }
                        }
                    );

                    // Kirim notifikasi gagal ke channel
                    if (channel) {
                        try {
                            await bot.sendMessage(channel,
                                `❌ <b>WITHDRAW GAGAL</b>\n\n` +
                                `<b>ID:</b> <code>${orderId}</code>\n` +
                                `<b>Produk:</b> ${statusData.product?.name || '-'}\n` +
                                `<b>Tujuan:</b> <code>${statusData.tujuan}</code>\n` +
                                `<b>Status:</b> ${statusData.status.toUpperCase()}\n` +
                                `<b>Waktu:</b> ${new Date().toLocaleString('id-ID')}`,
                                { parse_mode: 'HTML' }
                            );
                        } catch (error) {}
                    }

                } else if (statusData.status === 'processing') {
                    // Update status setiap 30 detik
                    if (retryCount % 6 === 0) {
                        await bot.editMessageText(
                            `⏳ <b>WITHDRAW DIPROSES...</b>\n\n` +
                            `<b>ID Transaksi:</b> <code>${orderId}</code>\n` +
                            `<b>Produk:</b> ${statusData.product?.name || statusData.product || '-'}\n` +
                            `<b>Tujuan:</b> <code>${statusData.tujuan}</code>\n` +
                            `<b>Status:</b> processing\n` +
                            `<b>Waktu:</b> ${new Date().toLocaleString('id-ID')}\n\n` +
                            `<i>Pengecekan ke-${retryCount} / ${maxRetries}</i>`,
                            {
                                chat_id: chatId,
                                message_id: loadingMsg.message_id,
                                parse_mode: 'HTML'
                            }
                        );
                    }
                }

            } catch (error) {
                console.error('Error checking withdraw status:', error);
            }
        }, 5000);

        // Auto-clear interval after 10 minutes
        setTimeout(() => {
            clearInterval(interval);
        }, 10 * 60 * 1000);

    } catch (error) {
        console.error('Error in processWithdrawOrder:', error);
        
        let errorMessage = '❌ <b>GAGAL MEMPROSES WITHDRAW</b>\n\n';
        
        if (error.response) {
            errorMessage += `Error: ${error.response.data?.message || error.message}\n`;
        } else if (error.request) {
            errorMessage += `Error: Tidak dapat terhubung ke server\n`;
        } else {
            errorMessage += `Error: ${error.message}\n`;
        }
        
        errorMessage += `\nKode Produk: <code>${productCode}</code>\n`;
        errorMessage += `Tujuan: <code>${targetNumber}</code>`;
        
        await bot.sendMessage(chatId, errorMessage, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🔄 Coba Lagi', callback_data: 'withdraw_menu' }]
                ]
            }
        });
    }
}

// ========================= OWNER SCRIPT MANAGEMENT =========================

// Show owner script management menu
async function showOwnerScriptMenu(chatId, userId, messageId, callbackQueryId) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak! Hanya Owner yang bisa mengakses menu ini.',
                show_alert: true
            });
            return;
        }

        const scriptsData = loadScriptsData();
        const orders = loadScriptOrders();
        const totalScripts = scriptsData.scripts.length;
        const activeScripts = scriptsData.scripts.filter(s => s.isActive).length;
        
        let totalRevenue = 0;
        let totalOrders = 0;
        
        if (orders && orders.stats) {
            totalRevenue = orders.stats.totalRevenue || 0;
            totalOrders = orders.stats.totalOrders || 0;
        }
        
        const message = `
👑 *MANAJEMEN SCRIPT - OWNER PANEL* 👑
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 *STATISTIK SCRIPT*
├ 📜 Total Script: ${totalScripts}
├ ✅ Script Aktif: ${activeScripts}
├ 📦 Total Order: ${totalOrders}
└ 💰 Total Revenue: ${formatCurrency(totalRevenue)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 *MENU MANAJEMEN:*

1️⃣ ➕ *Tambah Script Baru*
2️⃣ ✏️ *Edit Script*
3️⃣ 🗑️ *Hapus Script*
4️⃣ 📋 *Lihat Semua Script*
5️⃣ 💰 *Atur Harga Script*
6️⃣ 🔄 *Aktif/Nonaktif Script*
7️⃣ 📊 *Statistik Penjualan*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();

        const keyboard = [
            [{ text: '➕ Tambah Script Baru', callback_data: 'owner_script_upload' }],
            [{ text: '✏️ Edit Script', callback_data: 'owner_script_edit_list' }],
            [{ text: '🗑️ Hapus Script', callback_data: 'owner_script_delete_list' }],
            [{ text: '📋 Lihat Semua Script', callback_data: 'owner_script_list' }],
            [{ text: '💰 Atur Harga Script', callback_data: 'owner_script_price_list' }],
            [{ text: '🔄 Aktif/Nonaktif Script', callback_data: 'owner_script_toggle_list' }],
            [{ text: '📊 Statistik Penjualan', callback_data: 'owner_script_stats' }],
            [{ text: '🔙 Kembali ke Owner Menu', callback_data: 'owner_menu' }]
        ];

        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, message, {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            });
        } else {
            await sendNewMessage(chatId, message, {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            });
        }

    } catch (error) {
        console.error('Error showOwnerScriptMenu:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Show list of scripts for owner actions
async function showOwnerScriptList(chatId, userId, action, messageId, callbackQueryId, page = 0) {
    try {
        const scriptsData = loadScriptsData();
        const scripts = scriptsData.scripts;
        const itemsPerPage = 5;
        const totalPages = Math.ceil(scripts.length / itemsPerPage);
        
        if (page < 0) page = 0;
        if (page >= totalPages && totalPages > 0) page = totalPages - 1;
        
        const startIndex = page * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, scripts.length);
        const pageScripts = scripts.slice(startIndex, endIndex);
        
        let actionTitle = '';
        let actionButtonText = '';
        let callbackPrefix = '';
        
        switch(action) {
            case 'edit':
                actionTitle = '✏️ EDIT SCRIPT';
                actionButtonText = '✏️ Edit';
                callbackPrefix = 'owner_script_edit_';
                break;
            case 'delete':
                actionTitle = '🗑️ HAPUS SCRIPT';
                actionButtonText = '🗑️ Hapus';
                callbackPrefix = 'owner_script_delete_confirm_';
                break;
            case 'price':
                actionTitle = '💰 ATUR HARGA SCRIPT';
                actionButtonText = '💰 Atur Harga';
                callbackPrefix = 'owner_script_price_set_';
                break;
            case 'toggle':
                actionTitle = '🔄 AKTIF/NONAKTIF SCRIPT';
                actionButtonText = '🔄 Toggle';
                callbackPrefix = 'owner_script_toggle_';
                break;
            default:
                actionTitle = '📋 DAFTAR SCRIPT';
                actionButtonText = 'Pilih';
                callbackPrefix = 'owner_script_select_';
        }
        
        let message = `👑 *${actionTitle}* 👑\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        
        if (scripts.length === 0) {
            message += `❌ *Belum ada script yang tersedia.*\n\nSilakan tambah script terlebih dahulu.`;
        } else {
            message += `📜 *Total Script:* ${scripts.length}\n`;
            message += `📄 *Halaman:* ${page + 1}/${totalPages}\n\n`;
            
            pageScripts.forEach((script, index) => {
                const num = startIndex + index + 1;
                const status = script.isActive ? '✅' : '❌';
                message += `${num}. ${status} *${script.name}*\n`;
                message += `   ├ 📂 Kategori: ${script.category}\n`;
                message += `   ├ 💰 Harga: ${formatCurrency(script.price)}\n`;
                message += `   ├ 📥 Download: ${script.downloads}x\n`;
                message += `   └ 🆔 ID: \`${script.id}\`\n\n`;
            });
        }
        
        const keyboard = [];
        
        // Script selection buttons
        pageScripts.forEach((script, index) => {
            const num = startIndex + index + 1;
            keyboard.push([
                { text: `${num}. ${script.name.substring(0, 25)}`, callback_data: `${callbackPrefix}${script.id}` }
            ]);
        });
        
        // Navigation buttons
        if (totalPages > 1) {
            const navRow = [];
            if (page > 0) {
                navRow.push({ text: '◀️ Prev', callback_data: `owner_script_list_${action}_${page - 1}` });
            }
            navRow.push({ text: `📄 ${page + 1}/${totalPages}`, callback_data: 'no_action' });
            if (page < totalPages - 1) {
                navRow.push({ text: 'Next ▶️', callback_data: `owner_script_list_${action}_${page + 1}` });
            }
            if (navRow.length > 0) {
                keyboard.push(navRow);
            }
        }
        
        keyboard.push([
            { text: '🔙 Kembali ke Menu Script', callback_data: 'owner_script_menu' }
        ]);
        
        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, message, {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            });
        } else {
            await sendNewMessage(chatId, message, {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard }
            });
        }

    } catch (error) {
        console.error('Error showOwnerScriptList:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Show edit script form
async function promptEditScript(chatId, userId, scriptId, messageId, callbackQueryId) {
    try {
        const script = getScriptById(scriptId);
        
        if (!script) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Script tidak ditemukan!', { parse_mode: "Markdown" });
            return;
        }
        
        userSelections.set(userId, { 
            step: 'owner_script_edit_field', 
            scriptId: scriptId,
            scriptData: { ...script },
            timestamp: Date.now() 
        });
        
        const message = `
✏️ *EDIT SCRIPT* ✏️
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📜 *Script:* ${script.name}
🆔 *ID:* \`${script.id}\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 *Field yang bisa diedit:*

1️⃣ *Nama Script*: ${script.name}
2️⃣ *Kategori*: ${script.category}
3️⃣ *Deskripsi*: ${script.description.substring(0, 50)}...
4️⃣ *Harga*: ${formatCurrency(script.price)}
5️⃣ *Isi Script*: (${script.content.length} karakter)
6️⃣ *Instruksi*: ${script.instructions ? script.instructions.substring(0, 50) + '...' : 'Kosong'}
7️⃣ *Tags*: ${script.tags ? script.tags.join(', ') : 'Kosong'}
8️⃣ *Versi*: ${script.version}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Pilih nomor field yang ingin diedit (1-8).

Ketik *0* untuk membatalkan.
`.trim();

        const keyboard = [
            [{ text: '1️⃣ Nama Script', callback_data: 'owner_script_edit_name' }],
            [{ text: '2️⃣ Kategori', callback_data: 'owner_script_edit_category' }],
            [{ text: '3️⃣ Deskripsi', callback_data: 'owner_script_edit_description' }],
            [{ text: '4️⃣ Harga', callback_data: 'owner_script_edit_price' }],
            [{ text: '5️⃣ Isi Script', callback_data: 'owner_script_edit_content' }],
            [{ text: '6️⃣ Instruksi', callback_data: 'owner_script_edit_instructions' }],
            [{ text: '7️⃣ Tags', callback_data: 'owner_script_edit_tags' }],
            [{ text: '8️⃣ Versi', callback_data: 'owner_script_edit_version' }],
            [{ text: '🔙 Kembali', callback_data: 'owner_script_edit_list' }]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: "Markdown",
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error promptEditScript:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Confirm delete script
async function confirmDeleteScript(chatId, userId, scriptId, messageId, callbackQueryId) {
    try {
        const script = getScriptById(scriptId);
        
        if (!script) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Script tidak ditemukan!', { parse_mode: "Markdown" });
            return;
        }
        
        const message = `
🗑️ *KONFIRMASI HAPUS SCRIPT* 🗑️
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📜 *Script:* ${script.name}
🆔 *ID:* \`${script.id}\`
💰 *Harga:* ${formatCurrency(script.price)}
📥 *Download:* ${script.downloads}x
📂 *Kategori:* ${script.category}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ *PERINGATAN!*
• Script akan dihapus PERMANEN
• Semua data penjualan tetap tersimpan
• Tindakan ini TIDAK DAPAT DIBATALKAN

Yakin ingin menghapus script ini?
`.trim();

        const keyboard = [
            [
                { text: '✅ Ya, Hapus!', callback_data: `owner_script_delete_execute_${scriptId}` },
                { text: '❌ Batal', callback_data: 'owner_script_delete_list' }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: "Markdown",
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error confirmDeleteScript:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Execute delete script
async function executeDeleteScript(chatId, userId, scriptId, messageId, callbackQueryId) {
    try {
        const scriptsData = loadScriptsData();
        const scriptIndex = scriptsData.scripts.findIndex(s => s.id === scriptId);
        
        if (scriptIndex === -1) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Script tidak ditemukan!', { parse_mode: "Markdown" });
            return;
        }
        
        const deletedScript = scriptsData.scripts[scriptIndex];
        scriptsData.scripts.splice(scriptIndex, 1);
        saveScriptsData(scriptsData);
        
        const message = `
✅ *SCRIPT BERHASIL DIHAPUS!* ✅
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📜 *Script:* ${deletedScript.name}
🆔 *ID:* \`${deletedScript.id}\`
💰 *Harga:* ${formatCurrency(deletedScript.price)}

Script telah dihapus dari database.
`.trim();

        const keyboard = [
            [{ text: '➕ Tambah Script', callback_data: 'owner_script_upload' }],
            [{ text: '📋 Lihat Script', callback_data: 'owner_script_list' }],
            [{ text: '🔙 Menu Script', callback_data: 'owner_script_menu' }]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: "Markdown",
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error executeDeleteScript:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Show set price form
async function promptSetScriptPrice(chatId, userId, scriptId, messageId, callbackQueryId) {
    try {
        const script = getScriptById(scriptId);
        
        if (!script) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Script tidak ditemukan!', { parse_mode: "Markdown" });
            return;
        }
        
        userSelections.set(userId, { 
            step: 'owner_script_set_price', 
            scriptId: scriptId,
            timestamp: Date.now() 
        });
        
        const message = `
💰 *ATUR HARGA SCRIPT* 💰
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📜 *Script:* ${script.name}
🆔 *ID:* \`${script.id}\`
💰 *Harga Saat Ini:* ${formatCurrency(script.price)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Silakan kirimkan *harga baru* untuk script ini.

Contoh: *5000* atau *10000* atau *15000*

📌 *Catatan:*
• Minimal harga: Rp 1.000
• Maksimal harga: Rp 500.000
• Harga akan langsung berlaku untuk pembelian berikutnya

Ketik *0* untuk membatalkan.
`.trim();

        const keyboard = [
            [
                { text: 'Rp 5.000', callback_data: `owner_script_price_quick_${scriptId}_5000` },
                { text: 'Rp 10.000', callback_data: `owner_script_price_quick_${scriptId}_10000` }
            ],
            [
                { text: 'Rp 15.000', callback_data: `owner_script_price_quick_${scriptId}_15000` },
                { text: 'Rp 20.000', callback_data: `owner_script_price_quick_${scriptId}_20000` }
            ],
            [
                { text: '🔙 Kembali', callback_data: 'owner_script_price_list' }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: "Markdown",
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error promptSetScriptPrice:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Execute set script price
async function executeSetScriptPrice(chatId, userId, scriptId, newPrice, messageId, callbackQueryId) {
    try {
        const scriptsData = loadScriptsData();
        const script = scriptsData.scripts.find(s => s.id === scriptId);
        
        if (!script) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Script tidak ditemukan!', { parse_mode: "Markdown" });
            return;
        }
        
        const oldPrice = script.price;
        script.price = newPrice;
        script.updatedAt = new Date().toISOString();
        saveScriptsData(scriptsData);
        
        const message = `
✅ *HARGA SCRIPT BERHASIL DIUBAH!* ✅
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📜 *Script:* ${script.name}
🆔 *ID:* \`${script.id}\`
💰 *Harga Lama:* ${formatCurrency(oldPrice)}
💰 *Harga Baru:* ${formatCurrency(newPrice)}

Perubahan harga akan langsung berlaku untuk pembelian berikutnya.
`.trim();

        const keyboard = [
            [
                { text: '💰 Atur Harga Lagi', callback_data: `owner_script_price_set_${scriptId}` },
                { text: '📋 Daftar Script', callback_data: 'owner_script_price_list' }
            ],
            [{ text: '🔙 Menu Script', callback_data: 'owner_script_menu' }]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: "Markdown",
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error executeSetScriptPrice:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Toggle script active status
async function toggleScriptStatus(chatId, userId, scriptId, messageId, callbackQueryId) {
    try {
        const scriptsData = loadScriptsData();
        const script = scriptsData.scripts.find(s => s.id === scriptId);
        
        if (!script) {
            await editMessage(chatId, messageId, callbackQueryId, '❌ Script tidak ditemukan!', { parse_mode: "Markdown" });
            return;
        }
        
        script.isActive = !script.isActive;
        script.updatedAt = new Date().toISOString();
        saveScriptsData(scriptsData);
        
        const statusText = script.isActive ? '✅ AKTIF' : '❌ NONAKTIF';
        const statusEmoji = script.isActive ? '✅' : '❌';
        
        const message = `
🔄 *STATUS SCRIPT BERUBAH!* 🔄
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📜 *Script:* ${script.name}
🆔 *ID:* \`${script.id}\`
📊 *Status Baru:* ${statusEmoji} ${statusText}

${script.isActive ? 
    'Script sekarang tersedia untuk dibeli oleh user.' : 
    'Script sekarang TIDAK tersedia untuk dibeli oleh user.'}
`.trim();

        const keyboard = [
            [
                { text: script.isActive ? '❌ Nonaktifkan' : '✅ Aktifkan', callback_data: `owner_script_toggle_${scriptId}` },
                { text: '📋 Daftar Script', callback_data: 'owner_script_toggle_list' }
            ],
            [{ text: '🔙 Menu Script', callback_data: 'owner_script_menu' }]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: "Markdown",
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error toggleScriptStatus:', error);
        await editMessage(chatId, messageId, callbackQueryId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Show script statistics
async function showScriptStatistics(chatId, userId, messageId, callbackQueryId) {
    try {
        const scriptsData = loadScriptsData();
        const orders = loadScriptOrders();
        const scripts = scriptsData.scripts;
        
        // Calculate statistics
        let totalDownloads = 0;
        let totalRevenue = orders.stats.totalRevenue || 0;
        let totalOrders = orders.stats.totalOrders || 0;
        
        scripts.forEach(script => {
            totalDownloads += script.downloads || 0;
        });
        
        // Top selling scripts
        const topScripts = [...scripts].sort((a, b) => (b.downloads || 0) - (a.downloads || 0)).slice(0, 5);
        
        // Recent orders
        const recentOrders = (orders.orders || []).slice(-10).reverse();
        
        let message = `
📊 *STATISTIK SCRIPT - LENGKAP* 📊
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📈 *OVERVIEW*
├ 📜 Total Script: ${scripts.length}
├ ✅ Script Aktif: ${scripts.filter(s => s.isActive).length}
├ 📦 Total Order: ${totalOrders}
├ 📥 Total Download: ${totalDownloads}
└ 💰 Total Revenue: ${formatCurrency(totalRevenue)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏆 *TOP 5 SCRIPT TERLARIS*
`;
        
        if (topScripts.length === 0) {
            message += `\n❌ Belum ada script yang terjual.\n`;
        } else {
            topScripts.forEach((script, index) => {
                message += `\n${index + 1}. *${script.name}*\n`;
                message += `   ├ 💰 Harga: ${formatCurrency(script.price)}\n`;
                message += `   ├ 📥 Terjual: ${script.downloads || 0}x\n`;
                message += `   └ 💵 Revenue: ${formatCurrency((script.price * (script.downloads || 0)))}\n`;
            });
        }
        
        message += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        
        if (recentOrders.length > 0) {
            message += `🕐 *10 TRANSAKSI TERAKHIR*\n`;
            recentOrders.forEach((order, index) => {
                const date = new Date(order.purchasedAt).toLocaleString('id-ID');
                message += `\n${index + 1}. *${order.scriptName}*\n`;
                message += `   ├ 👤 ${order.userName}\n`;
                message += `   ├ 💰 ${formatCurrency(order.amount)}\n`;
                message += `   └ 🕒 ${date}\n`;
            });
        } else {
            message += `🕐 *Belum ada transaksi script.*\n`;
        }
        
        message += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `📅 *Update Terakhir:* ${new Date().toLocaleString('id-ID')}`;

        const keyboard = [
            [
                { text: '🔄 Refresh', callback_data: 'owner_script_stats' },
                { text: '📋 Export Data', callback_data: 'owner_script_export' }
            ],
            [{ text: '🔙 Menu Script', callback_data: 'owner_script_menu' }]
        ];

        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, message, {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard },
                disable_web_page_preview: true
            });
        } else {
            await sendNewMessage(chatId, message, {
                parse_mode: "Markdown",
                reply_markup: { inline_keyboard: keyboard },
                disable_web_page_preview: true
            });
        }

    } catch (error) {
        console.error('Error showScriptStatistics:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

// Export script data
async function exportScriptData(chatId, userId, messageId, callbackQueryId) {
    try {
        const scriptsData = loadScriptsData();
        const orders = loadScriptOrders();
        
        const exportData = {
            exportedAt: new Date().toISOString(),
            scripts: scriptsData.scripts,
            orders: orders.orders,
            stats: orders.stats,
            categories: scriptsData.categories
        };
        
        const fileName = `script_export_${Date.now()}.json`;
        const filePath = path.join(dataDir, fileName);
        
        fs.writeFileSync(filePath, JSON.stringify(exportData, null, 2));
        
        await bot.sendDocument(chatId, filePath, {
            caption: `📊 *EXPORT DATA SCRIPT*\n\n📅 Tanggal: ${new Date().toLocaleString('id-ID')}\n📜 Total Script: ${scriptsData.scripts.length}\n📦 Total Order: ${orders.orders.length}\n💰 Total Revenue: ${formatCurrency(orders.stats.totalRevenue || 0)}`,
            parse_mode: "Markdown"
        });
        
        // Clean up temp file
        setTimeout(() => {
            fs.unlinkSync(filePath).catch(() => {});
        }, 5000);
        
        if (callbackQueryId) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '✅ Data berhasil diexport!',
                show_alert: false
            });
        }
        
    } catch (error) {
        console.error('Error exportScriptData:', error);
        await sendNewMessage(chatId, `❌ Error: ${error.message}`, { parse_mode: 'HTML' });
    }
}

async function showWithdrawHistory(chatId, userId, messageId, callbackQueryId, page = 0) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
                show_alert: true
            });
            return;
        }

        const transactions = loadTransactions();
        const withdrawOrders = transactions.withdraw_orders || [];
        
        // Sort by timestamp descending
        withdrawOrders.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        
        const itemsPerPage = 5;
        const totalPages = Math.ceil(withdrawOrders.length / itemsPerPage);
        if (page < 0) page = 0;
        if (page >= totalPages && totalPages > 0) page = totalPages - 1;
        
        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageOrders = withdrawOrders.slice(startIndex, endIndex);
        
        let message = `<b>📋 RIWAYAT WITHDRAW</b>\n\n`;
        
        if (withdrawOrders.length === 0) {
            message += `<i>Belum ada riwayat withdraw</i>\n`;
        } else {
            message += `<b>Total Transaksi:</b> ${withdrawOrders.length}\n`;
            message += `<b>Halaman:</b> ${page + 1}/${totalPages}\n\n`;
            
            pageOrders.forEach((order, index) => {
                const num = startIndex + index + 1;
                const orderData = order.data || {};
                const date = new Date(order.timestamp).toLocaleString('id-ID');
                
                let statusEmoji = '⏳';
                if (order.status === 'success') statusEmoji = '✅';
                else if (order.status === 'failed') statusEmoji = '❌';
                else if (order.status === 'canceled') statusEmoji = '🚫';
                
                message += `<b>${num}. ${statusEmoji} ID: <code>${orderData.orderId || order.id}</code></b>\n`;
                message += `   📦 Produk: ${orderData.productName || '-'}\n`;
                message += `   📱 Tujuan: <code>${orderData.targetNumber || '-'}</code>\n`;
                message += `   💰 Harga: ${formatCurrency(orderData.price || 0)}\n`;
                message += `   📊 Status: ${order.status}\n`;
                message += `   🕒 Waktu: ${date}\n\n`;
            });
        }

        const keyboard = [];
        
        // Navigation buttons
        if (totalPages > 1) {
            const navButtons = [];
            if (page > 0) {
                navButtons.push({ 
                    text: '◀️ Prev', 
                    callback_data: `withdraw_history_page_${page - 1}` 
                });
            } else {
                navButtons.push({ 
                    text: '◀️', 
                    callback_data: 'no_action' 
                });
            }
            
            navButtons.push({ 
                text: `📄 ${page + 1}/${totalPages}`, 
                callback_data: 'no_action' 
            });
            
            if (page < totalPages - 1) {
                navButtons.push({ 
                    text: '▶️ Next', 
                    callback_data: `withdraw_history_page_${page + 1}` 
                });
            } else {
                navButtons.push({ 
                    text: '▶️', 
                    callback_data: 'no_action' 
                });
            }
            
            if (navButtons.length > 0) {
                keyboard.push(navButtons);
            }
        }
        
        // Action buttons
        keyboard.push([
            { text: '💰 Withdraw Baru', callback_data: 'withdraw_menu' },
            { text: '🔄 Refresh', callback_data: `withdraw_history_page_${page}` }
        ]);
        
        keyboard.push([
            { text: '🔙 Owner Menu', callback_data: 'owner_menu' },
            { text: '🏠 Menu Utama', callback_data: 'main_menu' }
        ]);

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard },
            disable_web_page_preview: true
        });

    } catch (error) {
        console.error('Error in showWithdrawHistory:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            `<b>❌ ERROR</b>\n\nGagal memuat riwayat withdraw.\n\nError: ${error.message}`,
            { parse_mode: 'HTML' }
        );
    }
}

// Helper function untuk format waktu
function formatTimeAgo(date) {
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  
  if (diffMins < 1) return 'Baru saja';
  if (diffMins < 60) return `${diffMins} menit lalu`;
  if (diffHours < 24) return `${diffHours} jam lalu`;
  return `${diffDays} hari lalu`;
}

async function executeDeleteBackup(chatId, userId, backupFileName, messageId, callbackQueryId) {
    try {
        const backupDir = path.join(__dirname, 'backup');
        const backupPath = path.join(backupDir, backupFileName);
        
        if (!fs.existsSync(backupPath)) {
            await editMessage(chatId, messageId, callbackQueryId,
                `<b>❌ FILE TIDAK DITEMUKAN</b>\n\nFile backup sudah tidak ada:\n<code>${backupFileName}</code>`,
                {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Kembali ke Daftar', callback_data: 'restore_menu' }]
                        ]
                    }
                }
            );
            return;
        }

        const stats = fs.statSync(backupPath);
        const fileSize = (stats.size / 1024).toFixed(2);
        
        fs.unlinkSync(backupPath);

        await editMessage(chatId, messageId, callbackQueryId,
            `<b>✅ FILE TERHAPUS</b>\n\n` +
            `<b>File:</b> <code>${backupFileName}</code>\n` +
            `<b>Ukuran:</b> ${fileSize} KB\n` +
            `<b>Waktu:</b> ${new Date().toLocaleString('id-ID')}\n\n` +
            `<i>File backup telah dihapus permanen</i>`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '⬅️ Kembali ke Daftar', callback_data: 'restore_menu' }]
                    ]
                }
            }
        );

    } catch (error) {
        let errorMsg = error.message || 'Unknown error';
        await editMessage(chatId, messageId, callbackQueryId,
            `<b>❌ GAGAL MENGHAPUS</b>\n\nTerjadi kesalahan:\n\n<code>${errorMsg}</code>`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Kembali ke Daftar', callback_data: 'restore_menu' }]
                    ]
                }
            }
        );
    }
}

async function createBackupNow(chatId, userId, messageId, callbackQueryId) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
                show_alert: true
            });
            return;
        }

        await editMessage(chatId, messageId, callbackQueryId,
            `<b>🔄 MEMBUAT BACKUP</b>\n\nSedang membuat backup database...\n\nMohon tunggu sebentar.`,
            { parse_mode: 'HTML' }
        );

        await autoBackupTransactions('manual_backup', { manual: true, userId: userId });

        await editMessage(chatId, messageId, callbackQueryId,
            `<b>✅ BACKUP BERHASIL</b>\n\nBackup database telah dibuat.\n\nFile backup telah dikirim ke semua owner.`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '🔄 Refresh Daftar', callback_data: 'restore_menu' }],
                        [{ text: '⬅️ Kembali', callback_data: 'restore_menu' }]
                    ]
                }
            }
        );

    } catch (error) {
        let errorMsg = error.message || 'Unknown error';
        await editMessage(chatId, messageId, callbackQueryId,
            `<b>❌ BACKUP GAGAL</b>\n\nGagal membuat backup:\n\n<code>${errorMsg}</code>`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Coba Lagi', callback_data: 'create_backup_now' }],
                        [{ text: 'Kembali', callback_data: 'restore_menu' }]
                    ]
                }
            }
        );
    }
}

async function showCSStats(chatId, userId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString()) && !config.cs_admins?.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya admin atau CS yang bisa mengakses',
        show_alert: true
      });
      return;
    }
    
    const csAdmins = config.cs_admins || [];
    let totalThreads = 0;
    let activeThreads = 0;
    let pendingThreads = 0;
    let closedThreads = 0;
    let totalMessages = 0;
    
    if (global.csChatSessions) {
      totalThreads = global.csChatSessions.size;
      
      for (const session of global.csChatSessions.values()) {
        if (session.status === 'active') activeThreads++;
        if (session.status === 'pending') pendingThreads++;
        if (session.status === 'closed') closedThreads++;
        totalMessages += session.messages.length;
      }
    }
    
    const today = new Date().toISOString().split('T')[0];
    let todayThreads = 0;
    
    if (global.csChatSessions) {
      for (const session of global.csChatSessions.values()) {
        const createdDate = new Date(session.createdAt).toISOString().split('T')[0];
        if (createdDate === today) {
          todayThreads++;
        }
      }
    }
    
    let message = `<b>📊 CS STATISTICS</b>\n\n`;
    
    message += `<b>General Stats:</b>\n`;
    message += `├ Total CS Admins: ${csAdmins.length}\n`;
    message += `├ Total Threads: ${totalThreads}\n`;
    message += `├ Active Threads: ${activeThreads}\n`;
    message += `├ Pending Threads: ${pendingThreads}\n`;
    message += `├ Closed Threads: ${closedThreads}\n`;
    message += `├ Total Messages: ${totalMessages}\n`;
    message += `└ Today's Threads: ${todayThreads}\n\n`;
    
    message += `<b>CS Admins List:</b>\n`;
    if (csAdmins.length === 0) {
      message += `├ <i>Belum ada CS Admin</i>\n`;
    } else {
      csAdmins.forEach((adminId, index) => {
        // Hitung threads yang ditangani admin ini
        let adminThreads = 0;
        if (global.csChatSessions) {
          for (const session of global.csChatSessions.values()) {
            if (session.adminId === adminId) {
              adminThreads++;
            }
          }
        }
        
        message += `├ ${index + 1}. <code>${adminId}</code> (${adminThreads} threads)\n`;
      });
    }
    
    message += `\n<i>Last updated: ${new Date().toLocaleString('id-ID')}</i>`;
    
    const keyboard = [
      [
        { text: '💬 Active Threads', callback_data: 'cs_active_threads' },
        { text: '🔄 Refresh', callback_data: 'cs_stats' }
      ],
      [
        { text: '🔙 CS Menu', callback_data: 'owner_cs_menu' },
        { text: '🏠 Menu Utama', callback_data: 'main_menu' }
      ]
    ];
    
    await editMessage(chatId, messageId, callbackQueryId, message, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: keyboard },
      disable_web_page_preview: true
    });
    
  } catch (error) {
    console.error('Error showCSStats:', error);
  }
}

async function reloadDataAfterRestore(chatId, userId, messageId, callbackQueryId) {
    try {
        await editMessage(chatId, messageId, callbackQueryId,
            `<b>🔄 RELOAD DATA</b>\n\nMemuat ulang data dari database...`,
            { parse_mode: 'HTML' }
        );

        balanceCache.clear();
        userSelections.clear();
        userDepositMessages.clear();
        userPendingCommands.clear();
        orderProcessing.clear();
        depositProcessing.clear();
        sentNotifications.clear();
        servicesCache.data = null;
        servicesCache.timestamp = 0;
        voucherCache.clear();

        await preloadAllData();

        await editMessage(chatId, messageId, callbackQueryId,
            `<b>✅ DATA TELAH DIPERBARUI</b>\n\nSemua cache telah dihapus dan data telah dimuat ulang dari database.\n\nBot siap digunakan dengan data yang baru.`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '📊 Stats', callback_data: 'owner_stats' }],
                        [
                            { text: '📋 Owner Menu', callback_data: 'owner_menu' },
                            { text: '🏠 Menu Utama', callback_data: 'main_menu' }
                        ]
                    ]
                }
            }
        );

    } catch (error) {
        let errorMsg = error.message || 'Unknown error';
        await editMessage(chatId, messageId, callbackQueryId,
            `<b>❌ RELOAD GAGAL</b>\n\nGagal memuat ulang data:\n\n<code>${errorMsg}</code>`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Coba Lagi', callback_data: 'restore_reload' }],
                        [{ text: 'Kembali', callback_data: 'owner_menu' }]
                    ]
                }
            }
        );
    }
}

async function sendNewMessage(chatId, message, options = {}) {
  try {
    const lastMsgId = userLastMessage.get(chatId);
   /* if (lastMsgId) {
      try { //ini adalah untuk menghapus pesan lama ini
      //  bot.deleteMessage(chatId, lastMsgId).catch(() => {});
      } catch (e) {}
    }*/
    
    const newMessage = await bot.sendMessage(chatId, message, {
      parse_mode: 'HTML',
      disable_web_page_preview: true,
      disable_notification: true,
      ...options
    });
    
    userLastMessage.set(chatId, newMessage.message_id);
    return newMessage;
  } catch (error) {
    const newMessage = await bot.sendMessage(chatId, message, {
      parse_mode: 'HTML',
      disable_web_page_preview: true,
      disable_notification: true,
      ...options
    });
    userLastMessage.set(chatId, newMessage.message_id);
    return newMessage;
  }
}

async function editMessage(chatId, messageId, callbackQueryId, message, options = {}) {
  try {
    if (callbackQueryId) {
      bot.answerCallbackQuery(callbackQueryId).catch(() => {});
    }
    
    await bot.editMessageText(message, {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
      ...options
    });
    return true;
  } catch (error) {
    try {
      await sendNewMessage(chatId, message, options);
      return false;
    } catch (e) {
      return false;
    }
  }
}

function isMaintenance() {
  const settings = loadSettings();
  return settings.maintenance === true;
}

function getMaintenanceInfo() {
  const settings = loadSettings();
  if (!settings.maintenance) {
    return { active: false, reason: '' };
  }
  return {
    active: true,
    reason: settings.maintenance_reason || 'Bot sedang dalam perbaikan',
    time: settings.maintenance_time || ''
  };
}

function setMaintenance(active, reason = '') {
  const settings = loadSettings();
  
  settings.maintenance = active;
  if (active) {
    settings.maintenance_reason = reason;
    settings.maintenance_time = new Date().toLocaleString('id-ID');
  } else {
    settings.maintenance_reason = '';
    settings.maintenance_time = '';
  }
  
  saveSettings(settings);
  return active;
}

async function checkMaintenance(msg) {
  const userId = msg.from.id.toString();
  const chatId = msg.chat.id;
  
  const maintenance = getMaintenanceInfo();
  
  if (maintenance.active && !owner_ids.includes(userId)) {
    await bot.sendMessage(chatId,
      `<b>⚠️ Bot Sedang Maintenance</b>

<b>Status:</b> ⛔ Bot tidak bisa digunakan
<b>Alasan:</b> ${maintenance.reason}

<b>Mohon tunggu sampai maintenance selesai.</b>
<b>Owner:</b> @andinsukaapink`,
      { 
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: '🔄 Coba Lagi', callback_data: 'refresh_maintenance' }]
          ]
        }
      }
    );
    return false;
  }
  return true;
}

async function checkChannelMembership(userId) {
  try {
    const chatMember = await bot.getChatMember(channel, userId);
    return ["member", "administrator", "creator"].includes(chatMember.status);
  } catch {
    return false;
  }
}

async function requireJoin(msg) {
  const userId = msg.from.id;
  const isMember = await checkChannelMembership(userId);

  if (!isMember) {
    const originalCommand = msg.text || "/start";
    userPendingCommands.set(userId, originalCommand);

    await sendNewMessage(msg.chat.id, 
`<b>⚠️ Join Channel Terlebih Dahulu</b>

<i>Informasi User</i>
├ Username : <code>${msg.from.first_name}</code>
├ Status   : <code>Tidak termasuk member</code>
└ Akses    : <code>⛔ Terblokir</code>

🔒 <b>Perlu pengecekan akses</b>
└─ Member terlebih dahulu untuk mengakses fitur bot

🔰 <i>Tunggu terlebih dahulu sampai terverifikasi</i>`,

    {
      reply_markup: {
        inline_keyboard: [
          [{ 
            text: "➕ Join Channel", 
            url: `https://t.me/${channel.replace('@','')}` 
          },
          {
            text: "😡 Join Channel",
            url: `https://t.me/${aboutmilaa.replace('@','')}`
             }],
          [{ 
            text: "🔄 Verifikasi Ulang", 
            callback_data: "check_join_again" 
          }]
        ]
      },
      parse_mode: 'HTML'
    });
    return false;
  }
  
  if (userPendingCommands.has(userId)) {
    userPendingCommands.delete(userId);
  }
  
  return true;
}

function withRequireJoin(handler) {
  return async (msg, match) => {
    const ok = await requireJoin(msg);
    if (!ok) return;
    return handler(msg, match);
  };
}

// ========================= VOUCHER OWNER MENU FUNCTIONS =========================

async function showVoucherOwnerMenu(chatId, userId, messageId, callbackQueryId) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
                show_alert: true
            });
            return;
        }

        const vouchers = loadVouchers();
        const activeVouchers = getActiveVouchers();
        
        // Ensure voucher_stats exists
        const stats = vouchers.voucher_stats || {
            total_created: 0,
            total_used: 0,
            total_discount: 0
        };
        
        const message = `<b>🎫 VOUCHER MANAGEMENT</b>

<b>Statistik Voucher:</b>
Total Dibuat: ${stats.total_created || 0}
Total Digunakan: ${stats.total_used || 0}
Total Discount: ${formatCurrency(stats.total_discount || 0)}
Voucher Aktif: ${activeVouchers.length}

<b>Pilih menu:</b>`;

        const keyboard = [
            [
                { text: '➕ Buat Voucher', callback_data: 'voucher_create' },
                { text: '📋 List Voucher', callback_data: 'voucher_list' }
            ],
            [
                { text: '📊 Stats Detail', callback_data: 'voucher_stats_detail' },
                { text: '🔄 Refresh', callback_data: 'owner_voucher_menu' }
            ],
            [
                { text: '🔙 Owner Menu', callback_data: 'owner_menu' },
                { text: '🏠 Menu Utama', callback_data: 'main_menu' }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error('Error showVoucherOwnerMenu:', error);
        // Send error message to user
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Terjadi kesalahan saat memuat menu voucher. Silakan coba lagi.',
            { parse_mode: 'HTML' }
        );
    }
}

async function showCreateVoucherStep1(chatId, userId, messageId, callbackQueryId) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
                show_alert: true
            });
            return;
        }

        const message = `<b>🎫 BUAT VOUCHER - STEP 1/5</b>

<b>Pilih Tipe Voucher:</b>

1️⃣ <b>Persentase</b> - Diskon berdasarkan persentase harga
   Contoh: 10% diskon dari total belanja

2️⃣ <b>Fixed Amount</b> - Diskon nominal tetap
   Contoh: Rp 5.000 diskon dari total belanja

<i>Pilih salah satu:</i>`;

        const keyboard = [
            [
                { text: '📊 Persentase', callback_data: 'create_voucher_type_percentage' },
                { text: '💰 Fixed Amount', callback_data: 'create_voucher_type_fixed' }
            ],
            [
                { text: '🔙 Kembali', callback_data: 'owner_voucher_menu' },
                { text: '🏠 Menu Utama', callback_data: 'main_menu' }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error('Error showCreateVoucherStep1:', error);
    }
}

async function showCreateVoucherStep2(chatId, userId, messageId, callbackQueryId) {
    try {
        const selection = userSelections.get(userId);
        if (!selection || !selection.voucherData) {
            await editMessage(chatId, messageId, callbackQueryId,
                'Sesi tidak ditemukan. Silakan mulai dari awal.',
                { parse_mode: 'HTML' }
            );
            return;
        }

        const voucherType = selection.voucherData.type;
        const typeText = voucherType === 'percentage' ? 'Persentase' : 'Fixed Amount';
        
        const message = `<b>🎫 BUAT VOUCHER - STEP 2/5</b>

<b>Tipe:</b> ${typeText}

<b>Masukkan nilai voucher:</b>

${voucherType === 'percentage' ? 
    'Contoh: <code>10</code> untuk 10% diskon\n(Maksimal 100%)' : 
    'Contoh: <code>5000</code> untuk Rp 5.000 diskon\n(Maksimal Rp 1.000.000)'}

<i>Kirim nilai dalam angka saja:</i>`;

        const keyboard = [
            [
                { text: '🔙 Step Sebelumnya', callback_data: 'voucher_create' },
                { text: '❌ Batalkan', callback_data: 'owner_voucher_menu' }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

        selection.step = 'awaiting_voucher_value';
        userSelections.set(userId, selection);

    } catch (error) {
        console.error('Error showCreateVoucherStep2:', error);
    }
}

async function showCreateVoucherStep3(chatId, userId, messageId, callbackQueryId) {
    try {
        const selection = userSelections.get(userId);
        if (!selection || !selection.voucherData) {
            await editMessage(chatId, messageId, callbackQueryId,
                'Sesi tidak ditemukan. Silakan mulai dari awal.',
                { parse_mode: 'HTML' }
            );
            return;
        }

        const voucherType = selection.voucherData.type;
        const voucherValue = selection.voucherData.value;
        const typeText = voucherType === 'percentage' ? 'Persentase' : 'Fixed Amount';
        const valueText = voucherType === 'percentage' ? `${voucherValue}%` : formatCurrency(voucherValue);
        
        const message = `<b>🎫 BUAT VOUCHER - STEP 3/5</b>

<b>Tipe:</b> ${typeText}
<b>Nilai:</b> ${valueText}

<b>Aturan Penggunaan:</b>

1️⃣ <b>Minimum Pembelian</b>
   Voucher hanya bisa digunakan jika pembelian mencapai minimum tertentu
   Kosongkan atau 0 untuk tidak ada minimum

2️⃣ <b>Maksimal Discount</b> (Hanya untuk persentase)
   Batas maksimal discount yang diberikan
   Kosongkan untuk tidak ada batas

<i>Format: <code>min_purchase max_discount</code>
Contoh: <code>10000 5000</code> untuk min beli Rp 10.000 dan maks diskon Rp 5.000</i>`;

        const keyboard = [
            [
                { text: '🚫 Tanpa Minimum', callback_data: 'create_voucher_nomin' },
                { text: '💲 Custom', callback_data: 'create_voucher_custom_min' }
            ],
            [
                { text: '🔙 Step Sebelumnya', callback_data: `create_voucher_type_${voucherType}` },
                { text: '❌ Batalkan', callback_data: 'owner_voucher_menu' }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error('Error showCreateVoucherStep3:', error);
    }
}

async function showCreateVoucherStep4(chatId, userId, messageId, callbackQueryId) {
    try {
        const selection = userSelections.get(userId);
        if (!selection || !selection.voucherData) {
            await editMessage(chatId, messageId, callbackQueryId,
                'Sesi tidak ditemukan. Silakan mulai dari awal.',
                { parse_mode: 'HTML' }
            );
            return;
        }

        const voucherData = selection.voucherData;
        const typeText = voucherData.type === 'percentage' ? 'Persentase' : 'Fixed Amount';
        const valueText = voucherData.type === 'percentage' ? `${voucherData.value}%` : formatCurrency(voucherData.value);
        const minText = voucherData.min_purchase ? formatCurrency(voucherData.min_purchase) : 'Tidak ada';
        const maxText = voucherData.max_discount ? formatCurrency(voucherData.max_discount) : 'Tidak ada';
        
        const message = `<b>🎫 BUAT VOUCHER - STEP 4/5</b>

<b>Detail Voucher:</b>
├ Tipe: ${typeText}
├ Nilai: ${valueText}
├ Min Pembelian: ${minText}
└ Maks Discount: ${maxText}

<b>Pengaturan Penggunaan:</b>

1️⃣ <b>Limit Penggunaan</b>
   Berapa kali voucher bisa digunakan
   Contoh: <code>10</code> untuk 10x penggunaan

2️⃣ <b>Expiry Date</b> (Opsional)
   Tanggal kadaluarsa voucher
   Format: DD-MM-YYYY atau kosongkan

<i>Kirim dalam format: <code>limit expiry_date</code>
Contoh: <code>10 31-12-2024</code> untuk 10x penggunaan, expired 31 Des 2024</i>`;

        const keyboard = [
            [
                { text: '1x Usage', callback_data: 'create_voucher_limit_1' },
                { text: '10x Usage', callback_data: 'create_voucher_limit_10' },
                { text: '100x Usage', callback_data: 'create_voucher_limit_100' }
            ],
            [
                { text: '7 Hari', callback_data: 'create_voucher_expiry_7' },
                { text: '30 Hari', callback_data: 'create_voucher_expiry_30' },
                { text: '90 Hari', callback_data: 'create_voucher_expiry_90' }
            ],
            [
                { text: '🔙 Step Sebelumnya', callback_data: 'create_voucher_back_step3' },
                { text: '❌ Batalkan', callback_data: 'owner_voucher_menu' }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error('Error showCreateVoucherStep4:', error);
    }
}

async function showCreateVoucherStep5(chatId, userId, messageId, callbackQueryId) {
    try {
        const selection = userSelections.get(userId);
        if (!selection || !selection.voucherData) {
            await editMessage(chatId, messageId, callbackQueryId,
                'Sesi tidak ditemukan. Silakan mulai dari awal.',
                { parse_mode: 'HTML' }
            );
            return;
        }

        const voucherData = selection.voucherData;
        const typeText = voucherData.type === 'percentage' ? 'Persentase' : 'Fixed Amount';
        const valueText = voucherData.type === 'percentage' ? `${voucherData.value}%` : formatCurrency(voucherData.value);
        const minText = voucherData.min_purchase ? formatCurrency(voucherData.min_purchase) : 'Tidak ada';
        const maxText = voucherData.max_discount ? formatCurrency(voucherData.max_discount) : 'Tidak ada';
        const limitText = voucherData.usage_limit || '1';
        const expiryText = voucherData.expiry ? new Date(voucherData.expiry).toLocaleDateString('id-ID') : 'Tidak ada';
        
        const message = `<b>🎫 BUAT VOUCHER - STEP 5/5</b>

<b>Detail Voucher:</b>
├ Tipe: ${typeText}
├ Nilai: ${valueText}
├ Min Pembelian: ${minText}
├ Maks Discount: ${maxText}
├ Limit Penggunaan: ${limitText}x
└ Expired: ${expiryText}

<b>Pengaturan Tambahan:</b>

1️⃣ <b>Kode Voucher</b> (Opsional)
   Kode custom atau biarkan sistem generate

2️⃣ <b>Deskripsi</b> (Opsional)
   Deskripsi untuk voucher

<i>Kirim dalam format: <code>kode deskripsi</code>
Contoh: <code>DISKON50 Diskon 50% spesial</code></i>`;

        const keyboard = [
            [
                { text: '🎲 Random Code', callback_data: 'create_voucher_random_code' },
                { text: '📝 Custom Code', callback_data: 'create_voucher_custom_code' }
            ],
            [
                { text: '✅ Selesai (Tanpa Deskripsi)', callback_data: 'create_voucher_finalize' },
                { text: '📋 Tambah Deskripsi', callback_data: 'create_voucher_add_desc' }
            ],
            [
                { text: '🔙 Step Sebelumnya', callback_data: 'create_voucher_back_step4' },
                { text: '❌ Batalkan', callback_data: 'owner_voucher_menu' }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error('Error showCreateVoucherStep5:', error);
    }
}

async function showUserStats(chatId, userId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }

    const data = loadData();
    const balances = loadBalances();
    const bannedUsers = loadBannedUsers();
    const transactions = loadTransactions();
    
    const totalUsers = data.users?.length || 0;
    const usersWithBalance = Object.keys(balances).length;
    const activeBans = bannedUsers.filter(u => u.status === 'banned').length;
    
    // Hitung total balance
    const totalBalance = Object.values(balances).reduce((sum, b) => sum + (parseInt(b) || 0), 0);
    const avgBalance = usersWithBalance > 0 ? Math.round(totalBalance / usersWithBalance) : 0;
    
    // Top 5 users by balance
    const topUsers = Object.entries(balances)
      .map(([id, balance]) => ({ 
        id, 
        balance: parseInt(balance) || 0 
      }))
      .sort((a, b) => b.balance - a.balance)
      .slice(0, 5);
    
    let message = `<b>📊 USER STATISTICS</b>\n\n`;
    
    message += `<b>Overview:</b>\n`;
    message += `├ Total Users: ${totalUsers}\n`;
    message += `├ With Balance: ${usersWithBalance}\n`;
    message += `├ Banned Users: ${activeBans}\n`;
    message += `└ Active Rate: ${totalUsers > 0 ? ((usersWithBalance / totalUsers) * 100).toFixed(1) : 0}%\n\n`;
    
    message += `<b>Balance Stats:</b>\n`;
    message += `├ Total: ${formatCurrency(totalBalance)}\n`;
    message += `├ Average: ${formatCurrency(avgBalance)}\n`;
    message += `└ Highest: ${topUsers.length > 0 ? formatCurrency(topUsers[0].balance) : '0'}\n\n`;
    
    if (topUsers.length > 0) {
      message += `<b>Top 5 by Balance:</b>\n`;
      topUsers.forEach((user, index) => {
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '▫️';
        message += `${medal} <code>${user.id.substring(0, 8)}...</code>: ${formatCurrency(user.balance)}\n`;
      });
      message += `\n`;
    }
    
    message += `<i>Last updated: ${new Date().toLocaleString('id-ID')}</i>`;
    
    const keyboard = [
      [
        { text: '👥 User Manager', callback_data: 'owner_user_manager' },
        { text: '💰 Balance', callback_data: 'owner_balance_manager' }
      ],
      [
        { text: '🚫 Bans', callback_data: 'owner_ban_manager' },
        { text: '🔄 Refresh', callback_data: 'owner_user_stats' }
      ],
      [
        { text: '🔙 Settings', callback_data: 'owner_settings' },
        { text: '🏠 Main', callback_data: 'main_menu' }
      ]
    ];
    
    await editMessage(chatId, messageId, callbackQueryId, message, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: keyboard },
      disable_web_page_preview: true
    });

  } catch (error) {
    console.error('Error showUserStats:', error);
  }
}

async function finalizeVoucherCreation(chatId, userId, messageId, callbackQueryId) {
    try {
        const selection = userSelections.get(userId);
        if (!selection || !selection.voucherData) {
            await editMessage(chatId, messageId, callbackQueryId,
                'Sesi tidak ditemukan. Silakan mulai dari awal.',
                { parse_mode: 'HTML' }
            );
            return;
        }

        const voucherData = selection.voucherData;
        
        if (!voucherData.usage_limit) voucherData.usage_limit = 1;
        if (!voucherData.created_by) voucherData.created_by = userId.toString();
        
        const voucher = createVoucher(voucherData);
        
        if (!voucher) {
            await editMessage(chatId, messageId, callbackQueryId,
                'Gagal membuat voucher. Silakan coba lagi.',
                { parse_mode: 'HTML' }
            );
            return;
        }

        userSelections.delete(userId);
        
        const message = `<b>✅ VOUCHER BERHASIL DIBUAT</b>

<b>Detail Voucher:</b>
├ Kode: <code>${voucher.code}</code>
├ Tipe: ${voucher.type === 'percentage' ? 'Persentase' : 'Fixed Amount'}
├ Nilai: ${voucher.type === 'percentage' ? `${voucher.value}%` : formatCurrency(voucher.value)}
├ Min Pembelian: ${voucher.min_purchase ? formatCurrency(voucher.min_purchase) : 'Tidak ada'}
├ Maks Discount: ${voucher.max_discount ? formatCurrency(voucher.max_discount) : 'Tidak ada'}
├ Limit: ${voucher.usage_limit}x
├ Digunakan: 0x
└ Expired: ${voucher.expiry ? new Date(voucher.expiry).toLocaleDateString('id-ID') : 'Tidak ada'}

<b>Status:</b> ✅ Aktif
<b>Dibuat oleh:</b> ${voucher.created_by}
<b>Waktu:</b> ${new Date(voucher.created_at).toLocaleString('id-ID')}

<i>Voucher sudah aktif dan bisa digunakan user</i>`;

        const keyboard = [
            [
                { text: '📋 Lihat Voucher', callback_data: `voucher_detail_${voucher.id}` },
                { text: '➕ Buat Lagi', callback_data: 'voucher_create' }
            ],
            [
                { text: '🎫 Menu Voucher', callback_data: 'owner_voucher_menu' },
                { text: '🏠 Menu Utama', callback_data: 'main_menu' }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error('Error finalizeVoucherCreation:', error);
    }
}

async function showVoucherList(chatId, userId, messageId = null, callbackQueryId = null, page = 0) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            if (callbackQueryId) {
                await bot.answerCallbackQuery(callbackQueryId, {
                    text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
                    show_alert: true
                });
            }
            return;
        }

        const vouchers = loadVouchers();
        const itemsPerPage = 10;
        const totalPages = Math.ceil(vouchers.vouchers.length / itemsPerPage);
        
        if (page < 0) page = 0;
        if (page >= totalPages && totalPages > 0) page = totalPages - 1;
        
        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageVouchers = vouchers.vouchers.slice(startIndex, endIndex);
        
        let message = `<b>📋 DAFTAR VOUCHER</b>\n\n`;
        message += `<b>Total:</b> ${vouchers.vouchers.length} voucher\n`;
        message += `<b>Aktif:</b> ${getActiveVouchers().length} voucher\n`;
        message += `<b>Halaman:</b> ${page + 1}/${totalPages}\n\n`;
        
        if (pageVouchers.length === 0) {
            message += `<i>Tidak ada voucher ditemukan.</i>`;
        } else {
            pageVouchers.forEach((voucher, index) => {
                const num = startIndex + index + 1;
                const status = voucher.status === 'active' ? '✅' : '❌';
                const value = voucher.type === 'percentage' ? `${voucher.value}%` : formatCurrency(voucher.value);
                
                message += `<b>${num}. ${status} ${voucher.code}</b>\n`;
                message += `├ Tipe: ${voucher.type === 'percentage' ? 'Persentase' : 'Fixed'}\n`;
                message += `├ Nilai: ${value}\n`;
                message += `├ Used: ${voucher.used_count}/${voucher.usage_limit || '∞'}\n`;
                message += `└ Status: ${voucher.status}\n\n`;
            });
        }
        
        const keyboard = [];
        
        pageVouchers.forEach((voucher, index) => {
            const num = startIndex + index + 1;
            keyboard.push([
                { 
                    text: `${num}. ${voucher.code}`, 
                    callback_data: `voucher_detail_${voucher.id}` 
                }
            ]);
        });
        
        const navButtons = [];
        if (totalPages > 1) {
            if (page > 0) {
                navButtons.push({ 
                    text: '◀️ Sebelumnya', 
                    callback_data: `voucher_list_page_${page - 1}` 
                });
            }
            
            navButtons.push({ 
                text: `📄 ${page + 1}/${totalPages}`, 
                callback_data: 'no_action' 
            });
            
            if (page < totalPages - 1) {
                navButtons.push({ 
                    text: '▶️ Berikutnya', 
                    callback_data: `voucher_list_page_${page + 1}` 
                });
            }
            
            if (navButtons.length > 0) {
                keyboard.push(navButtons);
            }
        }
        
        keyboard.push([
            { text: '➕ Buat Voucher', callback_data: 'voucher_create' },
            { text: '🔄 Refresh', callback_data: 'voucher_list' }
        ]);
        
        keyboard.push([
            { text: '🔙 Menu Voucher', callback_data: 'owner_voucher_menu' },
            { text: '🏠 Menu Utama', callback_data: 'main_menu' }
        ]);

        const options = {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard },
            disable_web_page_preview: true
        };

        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, message, options);
        } else {
            await sendNewMessage(chatId, message, options);
        }

    } catch (error) {
        console.error('Error showVoucherList:', error);
    }
}

async function showVoucherDetail(chatId, userId, voucherId, messageId, callbackQueryId) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
                show_alert: true
            });
            return;
        }

        const vouchers = loadVouchers();
        const voucher = vouchers.vouchers.find(v => v.id === voucherId);
        
        if (!voucher) {
            await editMessage(chatId, messageId, callbackQueryId,
                '<b>❌ VOUCHER TIDAK DITEMUKAN</b>\n\nVoucher tidak ditemukan atau sudah dihapus.',
                { parse_mode: 'HTML' }
            );
            return;
        }

        const createdDate = new Date(voucher.created_at).toLocaleString('id-ID');
        const expiryDate = voucher.expiry ? new Date(voucher.expiry).toLocaleDateString('id-ID') : 'Tidak ada';
        const typeText = voucher.type === 'percentage' ? 'Persentase' : 'Fixed Amount';
        const valueText = voucher.type === 'percentage' ? `${voucher.value}%` : formatCurrency(voucher.value);
        const statusText = voucher.status === 'active' ? '✅ Aktif' : '❌ Nonaktif';
        
        let message = `<b>🎫 DETAIL VOUCHER</b>\n\n`;
        message += `<b>Kode:</b> <code>${voucher.code}</code>\n`;
        message += `<b>Tipe:</b> ${typeText}\n`;
        message += `<b>Nilai:</b> ${valueText}\n`;
        message += `<b>Status:</b> ${statusText}\n`;
        message += `<b>Min Pembelian:</b> ${formatCurrency(voucher.min_purchase)}\n`;
        
        if (voucher.max_discount) {
            message += `<b>Maks Discount:</b> ${formatCurrency(voucher.max_discount)}\n`;
        }
        
        message += `<b>Limit Penggunaan:</b> ${voucher.used_count}/${voucher.usage_limit || '∞'}\n`;
        message += `<b>Expired:</b> ${expiryDate}\n`;
        message += `<b>Dibuat oleh:</b> ${voucher.created_by}\n`;
        message += `<b>Tanggal Dibuat:</b> ${createdDate}\n`;
        
        if (voucher.description) {
            message += `<b>Deskripsi:</b> ${voucher.description}\n`;
        }

        const keyboard = [
            [
                { text: '✏️ Edit Voucher', callback_data: `voucher_edit_${voucherId}` },
                { text: '🗑️ Hapus Voucher', callback_data: `voucher_delete_${voucherId}` }
            ],
            [
                { text: '🔄 Aktif/Nonaktif', callback_data: `voucher_toggle_${voucherId}` },
                { text: '📋 List Penggunaan', callback_data: `voucher_usage_${voucherId}` }
            ],
            [
                { text: '🔙 List Voucher', callback_data: 'voucher_list' },
                { text: '🏠 Menu Utama', callback_data: 'main_menu' }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error showVoucherDetail:', error);
    }
}

async function confirmDeleteVoucher(chatId, userId, voucherId, messageId, callbackQueryId) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
                show_alert: true
            });
            return;
        }

        const vouchers = loadVouchers();
        const voucher = vouchers.vouchers.find(v => v.id === voucherId);
        
        if (!voucher) {
            await editMessage(chatId, messageId, callbackQueryId,
                '<b>❌ VOUCHER TIDAK DITEMUKAN</b>',
                { parse_mode: 'HTML' }
            );
            return;
        }

        // PERBAIKAN: Jangan gunakan 'const message' di sini
        let message = `<b>🗑️ KONFIRMASI HAPUS VOUCHER</b>\n\n`;
        message += `<b>Kode:</b> <code>${voucher.code}</code>\n`;
        message += `<b>Tipe:</b> ${voucher.type === 'percentage' ? 'Persentase' : 'Fixed'}\n`;
        message += `<b>Nilai:</b> ${voucher.type === 'percentage' ? `${voucher.value}%` : formatCurrency(voucher.value)}\n`;
        message += `<b>Status:</b> ${voucher.status}\n\n`;
        message += `<b>⚠️ PERINGATAN:</b>\n`;
        message += `• Voucher akan dihapus PERMANEN\n`;
        message += `• Tidak bisa dikembalikan\n`;
        message += `• History penggunaan tetap tersimpan\n\n`;
        message += `Yakin ingin menghapus voucher ini?`;

        const keyboard = [
            [
                { text: '✅ Ya, Hapus Sekarang', callback_data: `voucher_delete_confirm_${voucherId}` },
                { text: '❌ Batalkan', callback_data: `voucher_detail_${voucherId}` }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error confirmDeleteVoucher:', error);
    }
}

async function deleteVoucher(chatId, userId, voucherId, messageId, callbackQueryId) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
                show_alert: true
            });
            return;
        }

        const vouchers = loadVouchers();
        const voucherIndex = vouchers.vouchers.findIndex(v => v.id === voucherId);
        
        if (voucherIndex === -1) {
            await editMessage(chatId, messageId, callbackQueryId,
                '<b>❌ VOUCHER TIDAK DITEMUKAN</b>',
                { parse_mode: 'HTML' }
            );
            return;
        }

        const voucher = vouchers.vouchers[voucherIndex];
        vouchers.vouchers.splice(voucherIndex, 1);
        saveVouchers(vouchers);

        // PERBAIKAN: Jangan gunakan 'const message' di sini
        let message = `<b>✅ VOUCHER BERHASIL DIHAPUS</b>\n\n`;
        message += `<b>Kode:</b> <code>${voucher.code}</code>\n`;
        message += `<b>Tipe:</b> ${voucher.type === 'percentage' ? 'Persentase' : 'Fixed'}\n`;
        message += `<b>Nilai:</b> ${voucher.type === 'percentage' ? `${voucher.value}%` : formatCurrency(voucher.value)}\n`;
        message += `<b>Status:</b> Dihapus\n\n`;
        message += `<i>Voucher telah dihapus dari sistem</i>`;

        const keyboard = [
            [
                { text: '📋 List Voucher', callback_data: 'voucher_list' },
                { text: '🎫 Menu Voucher', callback_data: 'owner_voucher_menu' }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error deleteVoucher:', error);
    }
}

async function showVoucherStatsDetail(chatId, userId, messageId, callbackQueryId) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
                show_alert: true
            });
            return;
        }

        const vouchers = loadVouchers();
        const activeVouchers = getActiveVouchers();
        
        let mostUsedVoucher = null;
        let highestDiscount = 0;
        let mostUsedCount = 0;
        
        vouchers.vouchers.forEach(voucher => {
            if (voucher.used_count > mostUsedCount) {
                mostUsedCount = voucher.used_count;
                mostUsedVoucher = voucher;
            }
        });

        const today = new Date().toISOString().split('T')[0];
        const todayUsed = vouchers.used_vouchers.filter(uv => 
            uv.used_at.split('T')[0] === today
        ).length;

        let message = `<b>📊 DETAIL STATISTIK VOUCHER</b>\n\n`;
        message += `<b>📈 Statistik Umum:</b>\n`;
        message += `├ Total Dibuat: ${vouchers.voucher_stats.total_created}\n`;
        message += `├ Total Digunakan: ${vouchers.voucher_stats.total_used}\n`;
        message += `├ Total Discount: ${formatCurrency(vouchers.voucher_stats.total_discount)}\n`;
        message += `├ Voucher Aktif: ${activeVouchers.length}\n`;
        message += `└ Digunakan Hari Ini: ${todayUsed}\n\n`;
        
        message += `<b>🏆 Voucher Terpopuler:</b>\n`;
        if (mostUsedVoucher) {
            message += `├ Kode: <code>${mostUsedVoucher.code}</code>\n`;
            message += `├ Tipe: ${mostUsedVoucher.type === 'percentage' ? 'Persentase' : 'Fixed'}\n`;
            message += `├ Nilai: ${mostUsedVoucher.type === 'percentage' ? `${mostUsedVoucher.value}%` : formatCurrency(mostUsedVoucher.value)}\n`;
            message += `└ Digunakan: ${mostUsedVoucher.used_count}x\n\n`;
        } else {
            message += `├ <i>Belum ada voucher yang digunakan</i>\n\n`;
        }
        
        message += `<b>📅 Statistik 7 Hari Terakhir:</b>\n`;
        
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            const dayName = date.toLocaleDateString('id-ID', { weekday: 'short' });
            
            const dayUsed = vouchers.used_vouchers.filter(uv => 
                uv.used_at.split('T')[0] === dateStr
            ).length;
            
            message += `├ ${dayName}: ${dayUsed} penggunaan\n`;
        }
        
        message += `\n<i>Update: ${new Date().toLocaleString('id-ID')}</i>`;

        const keyboard = [
            [
                { text: '🔄 Refresh', callback_data: 'voucher_stats_detail' },
                { text: '📋 Export Data', callback_data: 'voucher_export_stats' }
            ],
            [
                { text: '🔙 Menu Voucher', callback_data: 'owner_voucher_menu' },
                { text: '🏠 Menu Utama', callback_data: 'main_menu' }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error showVoucherStatsDetail:', error);
    }
}

// ========================= VOUCHER USER FUNCTIONS =========================

async function showVoucherInput(chatId, userId, operatorId, providerId, price, messageId, callbackQueryId) {
    try {
        const userSelection = userSelections.get(userId);
        if (!userSelection) {
            console.log('User selection not found when showing voucher input');
            return;
        }
        
        const message = `
<b>🎫 Masukkan Kode Voucher</b>

Harga Order: ${formatCurrency(price)}
Layanan: ${userSelection.serviceName}
Negara: ${userSelection.countryName}

<b>Silakan kirim kode voucher:</b>
(Contoh: <code>DISKON50</code>)

<i>Kosongkan atau ketik 0 untuk membatalkan</i>`;
        
        userSelection.voucherInput = {
            operatorId: operatorId,
            providerId: providerId,
            price: price,
            step: 'awaiting_voucher'
        };
        userSelections.set(userId, userSelection);
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: '🔙 Kembali', callback_data: `nokos_operator_${operatorId}_${providerId}_${price}` },
                        { text: '🏠 Menu Utama', callback_data: 'main_menu' }
                    ]
                ]
            }
        });
        
    } catch (error) {
        console.error('Error in showVoucherInput:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Gagal menampilkan input voucher.',
            { 
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Kembali', callback_data: `nokos_operator_${operatorId}_${providerId}_${price}` }]
                    ]
                }
            }
        );
    }
}

async function resetDatabase(chatId, userId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa melakukan reset database',
        show_alert: true
      });
      return;
    }
    
    const backupResult = await autoBackupTransactions('pre_reset', { userId: userId });
    
    const dataDir = path.join(__dirname, 'database');
    
    // Daftar semua file JSON dan default values-nya
    const filesToReset = [
        { name: 'users.json', default: { users: [], settings: { maintenance: false } } },
        { name: 'balances.json', default: {} },
        { name: 'transactions.json', default: { nokos_orders: [], rumahotp_deposits: [], cashify_deposits: [] } },
        { name: 'settings.json', default: { maintenance: false, maintenance_reason: '', maintenance_time: '', payment_method: 'rumahotp' } },
        { name: 'vouchers.json', default: { vouchers: [], used_vouchers: [], voucher_stats: { total_created: 0, total_used: 0, total_discount: 0 } } },
        { name: 'scripts.json', default: { scripts: [], categories: ['Premium', 'Basic', 'Tools', 'Game', 'Social Media', 'Utility'] } },
        { name: 'script_orders.json', default: { orders: [], stats: { totalOrders: 0, totalRevenue: 0, completedOrders: 0 } } },
        { name: 'banned_users.json', default: [] },
        { name: 'referrals.json', default: { users: {}, codes: {}, transactions: [], stats: { totalReferrals: 0, totalBonusGiven: 0, totalShareBonus: 0, totalClaimBonus: 0 } } },
        { name: 'notified_users.json', default: { users: [], lastUpdated: new Date().toISOString() } }
    ];
    
    let resetCount = 0;
    for (const fileInfo of filesToReset) {
        const filePath = path.join(dataDir, fileInfo.name);
        try {
            fs.writeFileSync(filePath, JSON.stringify(fileInfo.default, null, 2));
            resetCount++;
        } catch (error) {
            console.error(`Failed to reset ${fileInfo.name}:`, error);
        }
    }
    
    // Clear semua cache
    balanceCache.clear();
    userSelections.clear();
    userDepositMessages.clear();
    userPendingCommands.clear();
    orderProcessing.clear();
    depositProcessing.clear();
    sentNotifications.clear();
    userFirstTimeNotifications.clear();
    voucherCache.clear();
    
    if (servicesCache) {
        servicesCache.data = null;
        servicesCache.timestamp = 0;
        if (servicesCache.countries) servicesCache.countries.clear();
        if (servicesCache.servers) servicesCache.servers.clear();
        if (servicesCache.filtered) servicesCache.filtered.clear();
    }
    
    if (global.csChatSessions) {
        global.csChatSessions.clear();
    }
    
    // Buat daftar file yang direset
    let resetList = '';
    filesToReset.forEach(f => {
        resetList += `• ${f.name}\n`;
    });
    
    await editMessage(chatId, messageId, callbackQueryId,
      `<b>✅ DATABASE RESET BERHASIL</b>\n\n` +
      `Reset ${resetCount} file database.\n\n` +
      `<b>File yang direset:</b>\n${resetList}\n` +
      `<b>Efek:</b>\n` +
      `• Semua user data dihapus\n` +
      `• Saldo user direset ke 0\n` +
      `• Riwayat transaksi dihapus\n` +
      `• Voucher dihapus\n` +
      `• User banned dihapus\n` +
      `• Data referral dihapus\n` +
      `• Data script dihapus\n\n` +
      `<i>Backup otomatis telah dibuat sebelum reset</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: '🔄 Reload Bot', callback_data: 'main_menu' }]
          ]
        }
      }
    );
    
  } catch (error) {
    await editMessage(chatId, messageId, callbackQueryId,
      `<b>❌ RESET DATABASE GAGAL</b>\n\n` +
      `Error: ${error.message}\n\n` +
      `Database tidak berubah.`,
      { parse_mode: 'HTML' }
    );
  }
}

async function validateAndApplyVoucher(chatId, userId, operatorId, providerId, price, voucherCode, messageId, callbackQueryId) {
    try {
        const userSelection = userSelections.get(userId);
        if (!userSelection) {
            console.log('User selection not found when applying voucher');
            await editMessage(chatId, messageId, callbackQueryId,
                '❌ Sesi tidak valid. Silakan mulai order dari awal.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Kembali ke Menu', callback_data: 'nokos_menu' }]
                        ]
                    }
                }
            );
            return;
        }

        await editMessage(chatId, messageId, callbackQueryId,
            '⏳ Memvalidasi voucher...',
            { parse_mode: 'HTML' }
        );

        // Clean voucher code
        const cleanVoucherCode = voucherCode.trim().toUpperCase();
        
        // Validasi voucher dengan data lengkap
        const validation = validateVoucher(
            cleanVoucherCode, 
            userId, 
            userSelection.serviceId,
            userSelection.numberId,
            Number(price)
        );

        if (!validation.valid) {
            await editMessage(chatId, messageId, callbackQueryId,
                `❌ Voucher tidak valid\n\n${validation.error}\n\nSilakan coba lagi dengan kode yang berbeda.`,
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: 'Coba Lagi', callback_data: `apply_voucher_${operatorId}_${providerId}_${price}` },
                                { text: '🔙 Tanpa Voucher', callback_data: `nokos_operator_${operatorId}_${providerId}_${price}` }
                            ]
                        ]
                    }
                }
            );
            return;
        }

        // Simpan data voucher yang valid
        userSelection.appliedVoucher = validation;
        userSelections.set(userId, userSelection);

        // Tampilkan konfirmasi order dengan voucher
        await showOrderConfirmationWithVoucher(chatId, userId, operatorId, providerId, price, validation, messageId, callbackQueryId);

    } catch (error) {
        console.error('Error in validateAndApplyVoucher:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Gagal memvalidasi voucher. Silakan coba lagi.',
            { 
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Coba Lagi', callback_data: `apply_voucher_${operatorId}_${providerId}_${price}` },
                            { text: '🔙 Kembali', callback_data: `nokos_operator_${operatorId}_${providerId}_${price}` }
                        ]
                    ]
                }
            }
        );
    }
}

// ========================= CS CHAT FUNCTIONS (FULLY FIXED) =========================

// Fungsi untuk memulai chat CS
async function startCSChat(chatId, userId, messageId, callbackQueryId) {
    try {
        // Hapus pesan sebelumnya
        if (messageId) {
            await bot.deleteMessage(chatId, messageId).catch(() => {});
        }

        // Cek apakah sudah ada thread aktif
        let existingThread = null;
        if (global.csChatSessions) {
            for (const [threadId, session] of global.csChatSessions) {
                if (session.userId === userId.toString() && 
                    (session.status === 'active' || session.status === 'pending')) {
                    existingThread = threadId;
                    break;
                }
            }
        }

        if (existingThread) {
            await sendNewMessage(chatId, 
                `💬 *CHAT CS AKTIF*

Anda sudah memiliki chat CS yang aktif.

📌 *Ketik /endcs untuk menutup chat*
📌 *Atau lanjutkan kirim pesan*`,
                { parse_mode: "Markdown" }
            );
            return;
        }

        // Dapatkan info user
        const user = await bot.getChat(userId).catch(() => ({
            id: userId,
            first_name: 'User',
            username: '-'
        }));

        const threadId = `CS_${userId}_${Date.now()}`;
        
        // Buat session baru
        if (!global.csChatSessions) {
            global.csChatSessions = new Map();
        }

        global.csChatSessions.set(threadId, {
            userId: userId.toString(),
            chatId: chatId,
            userName: user.first_name || 'User',
            userUsername: user.username || '-',
            adminId: null,
            adminName: null,
            status: 'pending',
            messages: [],
            createdAt: new Date().toISOString(),
            lastActivity: new Date().toISOString()
        });

        // Kirim notifikasi ke semua admin
        await notifyCSAdmins(threadId, user);

        // Tampilkan pesan sukses ke user
        await sendNewMessage(chatId, 
            `💬 *CHAT CS DIMULAI*

Halo ${user.first_name || 'User'}!

✅ Chat Anda telah terhubung ke CS.
⏳ Mohon tunggu, CS akan segera merespon.

🆔 Thread ID: \`${threadId}\`

📌 *Ketik /endcs untuk menutup chat*`,
            { parse_mode: "Markdown" }
        );

        // Set user session
        userSelections.set(userId, {
            step: 'cs_chat_active',
            threadId: threadId,
            timestamp: Date.now()
        });

        console.log(`✅ User ${userId} memulai chat CS dengan thread ${threadId}`);

    } catch (error) {
        console.error('Error starting CS chat:', error);
        await sendNewMessage(chatId, '❌ Gagal memulai chat CS. Silakan coba lagi.', { parse_mode: 'HTML' });
    }
}

// Notifikasi ke semua admin (DIPERBAIKI)
async function notifyCSAdmins(threadId, user) {
    try {
        // Ambil daftar admin dari config
        const csAdmins = config.cs_admins || [];
        const ownerAdmins = config.owner_ids || [];
        
        // Gabungkan semua admin
        const allAdmins = [...new Set([...csAdmins, ...ownerAdmins])];
        
        if (allAdmins.length === 0) {
            console.log('⚠️ Tidak ada CS Admin yang terdaftar di config.js');
            console.log('Tambahkan cs_admins: [\"user_id\"] di config.js');
            return;
        }

        const waktu = new Date().toLocaleString('id-ID');
        
        const message = `
<blockquote>🆕 *CHAT CS BARU*

👤 *User:* ${user.first_name || 'User'}
🆔 *ID:* ${user.id}
💬 *Thread:* \`${threadId}\`
🕐 *Waktu:* ${waktu}

📝 *Balas chat ini untuk membalas user.*
📌 *Ketik /endcs untuk menutup chat*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 *Cara membalas:*
1. Klik tombol "✅ Ambil Chat" di bawah
2. Atau ketik /join ${threadId}</blockquote>`;

        const keyboard = {
            inline_keyboard: [
                [{ text: "✅ Ambil Chat", callback_data: `cs_join_${threadId}` }],
                [{ text: "📋 Lihat Detail", callback_data: `cs_view_thread_${threadId}` }]
            ]
        };
        
        // Kirim ke semua admin
        let sentCount = 0;
        for (const adminId of allAdmins) {
            try {
                await bot.sendMessage(adminId, message, { 
                    parse_mode: "HTML",
                    reply_markup: keyboard
                });
                sentCount++;
                console.log(`✅ Notifikasi terkirim ke admin ${adminId}`);
            } catch (error) {
                console.error(`❌ Gagal kirim notifikasi ke admin ${adminId}:`, error.message);
            }
        }
        
        console.log(`📢 Notifikasi CS dikirim ke ${sentCount} admin`);
        
    } catch (error) {
        console.error('Error notifying CS admins:', error);
    }
}

// Admin mengambil / join thread
async function joinCSThread(chatId, userId, threadId, messageId, callbackQueryId) {
    try {
        console.log(`🔗 Admin ${userId} mencoba join thread ${threadId}`);
        
        // Hapus pesan callback jika ada
        if (messageId && callbackQueryId) {
            await bot.deleteMessage(chatId, messageId).catch(() => {});
        }

        if (!global.csChatSessions || !global.csChatSessions.has(threadId)) {
            await bot.sendMessage(chatId, '❌ Thread CS tidak ditemukan atau sudah ditutup.', { parse_mode: 'HTML' });
            return;
        }

        const session = global.csChatSessions.get(threadId);
        
        // Cek jika sudah ada admin lain
        if (session.adminId && session.adminId !== userId.toString()) {
            await bot.sendMessage(chatId, 
                `❌ Thread ini sudah ditangani oleh admin lain.\n\n👤 Admin: ${session.adminName}`,
                { parse_mode: 'HTML' }
            );
            return;
        }

        // Dapatkan info admin
        const admin = await bot.getChat(userId).catch(() => ({ 
            id: userId, 
            first_name: 'Admin',
            username: '-'
        }));

        // Update session
        session.adminId = userId.toString();
        session.adminName = admin.first_name || 'Admin';
        session.status = 'active';
        session.lastActivity = new Date().toISOString();
        global.csChatSessions.set(threadId, session);

        // Notifikasi ke user bahwa admin telah bergabung
        await bot.sendMessage(session.chatId, 
            `💬 *CS TELAH BERGABUNG*

👨‍💼 CS: ${session.adminName}
✅ Chat Anda sekarang aktif.

Silakan lanjutkan percakapan Anda.`,
            { parse_mode: "Markdown" }
        );

        // Tampilkan history chat ke admin
        let historyMsg = `📋 *HISTORY CHAT*

👤 User: ${session.userName}
🆔 ID: ${session.userId}
💬 Thread: \`${threadId}\`
📝 Total pesan: ${session.messages.length}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        
        if (session.messages.length === 0) {
            historyMsg += `*Belum ada pesan sebelumnya.*\n\n`;
        } else {
            historyMsg += `*Pesan sebelumnya:*\n`;
            session.messages.forEach((msg, idx) => {
                const sender = msg.sender === 'user' ? '👤 User' : '👨‍💼 CS';
                const time = new Date(msg.timestamp).toLocaleTimeString('id-ID');
                const content = msg.content.length > 100 ? msg.content.substring(0, 100) + '...' : msg.content;
                historyMsg += `\n${idx+1}. ${sender} (${time}): ${content}`;
            });
            historyMsg += `\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        }
        
        historyMsg += `💬 *Mulai ketik pesan Anda untuk membalas.*
📌 *Ketik /endcs untuk menutup chat*`;

        await bot.sendMessage(chatId, historyMsg, { parse_mode: "Markdown" });

        // Set admin session
        userSelections.set(userId, {
            step: 'cs_admin_chat',
            threadId: threadId,
            timestamp: Date.now()
        });

        console.log(`✅ Admin ${session.adminName} bergabung ke thread ${threadId}`);

        // Kirim pesan test ke admin untuk memastikan koneksi
        await bot.sendMessage(chatId, 
            `✅ *Anda sekarang terhubung dengan user ${session.userName}*\n\nKetik pesan Anda untuk memulai percakapan.`,
            { parse_mode: "Markdown" }
        );

    } catch (error) {
        console.error('Error joining CS thread:', error);
        await bot.sendMessage(chatId, '❌ Gagal bergabung ke thread CS.', { parse_mode: 'HTML' });
    }
}

// Handle pesan dari user ke CS (DIPERBAIKI)
async function handleUserToCSMessage(msg) {
    try {
        const userId = msg.from.id;
        const chatId = msg.chat.id;
        const selection = userSelections.get(userId);

        if (!selection || selection.step !== 'cs_chat_active') {
            console.log(`User ${userId} not in CS chat mode`);
            return;
        }

        const threadId = selection.threadId;
        if (!global.csChatSessions || !global.csChatSessions.has(threadId)) {
            console.log(`Thread ${threadId} not found`);
            await bot.sendMessage(chatId, '❌ Sesi chat tidak valid. Ketik /start untuk memulai ulang.', { parse_mode: 'HTML' });
            userSelections.delete(userId);
            return;
        }

        const session = global.csChatSessions.get(threadId);
        session.lastActivity = new Date().toISOString();
        
        let messageText = '';
        let messageType = 'text';
        let fileId = null;

        // Handle pesan /endcs dari user
        if (msg.text && msg.text.toLowerCase() === '/endcs') {
            await endCSChat(chatId, userId, null, null, true);
            return;
        }
        
        // Extract pesan
        if (msg.text) {
            messageText = msg.text;
        } else if (msg.photo) {
            messageType = 'photo';
            fileId = msg.photo[msg.photo.length - 1].file_id;
            messageText = msg.caption || '📷 Mengirim foto';
        } else if (msg.video) {
            messageType = 'video';
            fileId = msg.video.file_id;
            messageText = msg.caption || '🎥 Mengirim video';
        } else if (msg.document) {
            messageType = 'document';
            fileId = msg.document.file_id;
            messageText = msg.document.file_name || '📄 Mengirim file';
        } else if (msg.sticker) {
            messageType = 'sticker';
            fileId = msg.sticker.file_id;
            messageText = `Sticker: ${msg.sticker.emoji || ''}`;
        } else {
            await bot.sendMessage(chatId, '❌ Jenis pesan tidak didukung.', { parse_mode: 'HTML' });
            return;
        }

        // Simpan pesan
        const messageData = {
            sender: 'user',
            userId: userId.toString(),
            content: messageText,
            type: messageType,
            fileId: fileId,
            timestamp: new Date().toISOString()
        };
        session.messages.push(messageData);
        global.csChatSessions.set(threadId, session);

        console.log(`📨 Pesan dari user ${userId} ke thread ${threadId}: ${messageText.substring(0, 50)}`);

        // Forward ke admin jika ada
        if (session.adminId) {
            const waktu = new Date().toLocaleTimeString('id-ID');
            
            // Cek apakah admin masih online (dengan send chat action)
            try {
                await bot.sendChatAction(session.adminId, 'typing');
            } catch (e) {
                console.log(`Admin ${session.adminId} mungkin offline`);
            }
            
            const forwardMsg = `
<blockquote>💬 *PESAN DARI USER*

👤 *User:* ${session.userName}
🆔 *ID:* ${userId}
🕐 *Waktu:* ${waktu}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *Pesan:* 
${messageText}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 *Ketik pesan Anda untuk membalas.*
📌 *Ketik /endcs untuk menutup chat*</blockquote>`;

            try {
                if (messageType === 'text') {
                    await bot.sendMessage(session.adminId, forwardMsg, { parse_mode: "HTML" });
                } else if (messageType === 'photo') {
                    await bot.sendPhoto(session.adminId, fileId, { caption: forwardMsg, parse_mode: "HTML" });
                } else if (messageType === 'video') {
                    await bot.sendVideo(session.adminId, fileId, { caption: forwardMsg, parse_mode: "HTML" });
                } else if (messageType === 'document') {
                    await bot.sendDocument(session.adminId, fileId, { caption: forwardMsg, parse_mode: "HTML" });
                } else if (messageType === 'sticker') {
                    await bot.sendSticker(session.adminId, fileId);
                    await bot.sendMessage(session.adminId, forwardMsg, { parse_mode: "HTML" });
                }
                console.log(`✅ Pesan diteruskan ke admin ${session.adminId}`);
            } catch (error) {
                console.error(`❌ Gagal meneruskan pesan ke admin:`, error.message);
                await bot.sendMessage(chatId, '⚠️ CS sedang offline. Pesan akan diteruskan nanti.', { parse_mode: 'HTML' });
                // Hapus admin yang offline
                session.adminId = null;
                session.adminName = null;
                session.status = 'pending';
                global.csChatSessions.set(threadId, session);
                // Kirim notifikasi ulang
                await notifyCSAdmins(threadId, { first_name: session.userName, id: session.userId });
            }
        } else {
            // Jika belum ada admin, simpan dan notifikasi ulang
            console.log(`⚠️ Belum ada admin untuk thread ${threadId}, kirim notifikasi ulang`);
            await bot.sendMessage(chatId, '⏳ Menunggu CS bergabung. Pesan akan diteruskan saat CS online.', { parse_mode: 'HTML' });
            
            // Kirim notifikasi ulang ke admin
            await notifyCSAdmins(threadId, { first_name: session.userName, id: session.userId });
        }

        // Konfirmasi ke user
        if (messageType === 'text' && messageText !== '/endcs') {
            await bot.sendMessage(chatId, '✅', { parse_mode: 'HTML' });
        }

    } catch (error) {
        console.error('Error handling user to CS message:', error);
        await bot.sendMessage(msg.chat.id, '❌ Gagal mengirim pesan.', { parse_mode: 'HTML' });
    }
}

// Handle pesan dari CS ke user (DIPERBAIKI)
async function handleCSToUserMessage(msg) {
    try {
        const adminId = msg.from.id;
        const selection = userSelections.get(adminId);

        if (!selection || selection.step !== 'cs_admin_chat') {
            console.log(`Admin ${adminId} not in CS admin mode`);
            return;
        }

        const threadId = selection.threadId;
        if (!global.csChatSessions || !global.csChatSessions.has(threadId)) {
            console.log(`Thread ${threadId} not found for admin ${adminId}`);
            await bot.sendMessage(msg.chat.id, '❌ Thread CS tidak ditemukan.', { parse_mode: 'HTML' });
            userSelections.delete(adminId);
            return;
        }

        const session = global.csChatSessions.get(threadId);
        
        // Cek admin yang sesuai
        if (session.adminId !== adminId.toString()) {
            console.log(`Admin ${adminId} not authorized for thread ${threadId}`);
            await bot.sendMessage(msg.chat.id, '❌ Anda bukan admin yang menangani chat ini.', { parse_mode: 'HTML' });
            return;
        }

        session.lastActivity = new Date().toISOString();
        
        // Cek jika user mengakhiri chat
        if (msg.text && msg.text.toLowerCase() === '/endcs') {
            await endCSChat(session.chatId, parseInt(session.userId), null, null, true);
            await bot.sendMessage(msg.chat.id, '✅ Chat telah ditutup.', { parse_mode: 'HTML' });
            userSelections.delete(adminId);
            return;
        }
        
        let messageText = '';
        let messageType = 'text';
        let fileId = null;

        // Extract pesan
        if (msg.text) {
            messageText = msg.text;
        } else if (msg.photo) {
            messageType = 'photo';
            fileId = msg.photo[msg.photo.length - 1].file_id;
            messageText = msg.caption || '📷 Mengirim foto';
        } else if (msg.video) {
            messageType = 'video';
            fileId = msg.video.file_id;
            messageText = msg.caption || '🎥 Mengirim video';
        } else if (msg.document) {
            messageType = 'document';
            fileId = msg.document.file_id;
            messageText = msg.document.file_name || '📄 Mengirim file';
        } else if (msg.sticker) {
            messageType = 'sticker';
            fileId = msg.sticker.file_id;
            messageText = `Sticker: ${msg.sticker.emoji || ''}`;
        } else {
            await bot.sendMessage(msg.chat.id, '❌ Jenis pesan tidak didukung.', { parse_mode: 'HTML' });
            return;
        }

        // Simpan pesan
        const messageData = {
            sender: 'admin',
            adminId: adminId.toString(),
            adminName: session.adminName,
            content: messageText,
            type: messageType,
            fileId: fileId,
            timestamp: new Date().toISOString()
        };
        session.messages.push(messageData);
        global.csChatSessions.set(threadId, session);

        console.log(`📨 Pesan dari admin ${session.adminName} ke thread ${threadId}: ${messageText.substring(0, 50)}`);

        // Forward ke user
        const waktu = new Date().toLocaleTimeString('id-ID');
        const forwardMsg = `
💬 *Pesan dari CS*

👨‍💼 *CS:* ${session.adminName}
🕐 *Waktu:* ${waktu}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 ${messageText}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

*Ketik /endcs untuk menutup chat*`;

        try {
            if (messageType === 'text') {
                await bot.sendMessage(session.chatId, forwardMsg, { parse_mode: "Markdown" });
            } else if (messageType === 'photo') {
                await bot.sendPhoto(session.chatId, fileId, { caption: forwardMsg, parse_mode: "Markdown" });
            } else if (messageType === 'video') {
                await bot.sendVideo(session.chatId, fileId, { caption: forwardMsg, parse_mode: "Markdown" });
            } else if (messageType === 'document') {
                await bot.sendDocument(session.chatId, fileId, { caption: forwardMsg, parse_mode: "Markdown" });
            } else if (messageType === 'sticker') {
                await bot.sendSticker(session.chatId, fileId);
                await bot.sendMessage(session.chatId, forwardMsg, { parse_mode: "Markdown" });
            }
            console.log(`✅ Pesan dari admin ${session.adminName} terkirim ke user ${session.userId}`);
        } catch (error) {
            console.error(`❌ Gagal mengirim pesan ke user:`, error.message);
            await bot.sendMessage(msg.chat.id, '❌ Gagal mengirim pesan ke user. User mungkin sudah menutup chat.', { parse_mode: 'HTML' });
            // Tutup chat karena user offline
            await endCSChat(session.chatId, parseInt(session.userId), null, null, true);
            userSelections.delete(adminId);
            return;
        }

        // Konfirmasi ke admin
        await bot.sendMessage(msg.chat.id, '✅ Pesan terkirim', { parse_mode: 'HTML' });

    } catch (error) {
        console.error('Error handling CS to user message:', error);
        await bot.sendMessage(msg.chat.id, '❌ Gagal mengirim pesan.', { parse_mode: 'HTML' });
    }
}

// End CS Chat
async function endCSChat(chatId, userId, messageId, callbackQueryId, forceClose = false) {
    try {
        console.log(`🔚 Menutup chat CS untuk user ${userId}`);
        
        const selection = userSelections.get(userId);
        if (!selection) return;

        const threadId = selection.threadId;
        if (!global.csChatSessions || !global.csChatSessions.has(threadId)) {
            userSelections.delete(userId);
            return;
        }

        const session = global.csChatSessions.get(threadId);
        
        // Update status
        session.status = 'closed';
        session.closedAt = new Date().toISOString();
        global.csChatSessions.set(threadId, session);
        
        // Hapus selection
        userSelections.delete(userId);

        // Beri tahu user
        await sendNewMessage(session.chatId,
            `💬 *Chat CS Ditutup*

👤 User: ${session.userName}
📝 Total pesan: ${session.messages.length}
🕐 Waktu: ${new Date().toLocaleString('id-ID')}

Terima kasih telah menghubungi CS kami.

Ketik /start untuk kembali ke menu utama.`,
            { parse_mode: "Markdown" }
        );

        // Beri tahu admin jika ada
        if (session.adminId) {
            await bot.sendMessage(session.adminId,
                `💬 *Chat CS Ditutup*

👤 User: ${session.userName}
🆔 ID: ${session.userId}
📝 Total pesan: ${session.messages.length}
🕐 Waktu: ${new Date().toLocaleString('id-ID')}

Chat telah ditutup.`,
                { parse_mode: "Markdown" }
            );
            // Hapus admin selection
            userSelections.delete(parseInt(session.adminId));
        }

        // Hapus pesan callback jika ada
        if (messageId && callbackQueryId) {
            await bot.deleteMessage(chatId, messageId).catch(() => {});
        }

        console.log(`✅ Chat CS ${threadId} ditutup`);

    } catch (error) {
        console.error('Error ending CS chat:', error);
    }
}

// Lihat detail thread (untuk admin)
async function showCSThreadDetail(chatId, userId, threadId, messageId, callbackQueryId) {
    try {
        if (!global.csChatSessions || !global.csChatSessions.has(threadId)) {
            await bot.editMessageText('❌ Thread tidak ditemukan.', {
                chat_id: chatId,
                message_id: messageId,
                parse_mode: "HTML"
            });
            return;
        }

        const session = global.csChatSessions.get(threadId);
        
        let message = `<b>📋 DETAIL THREAD CS</b>\n\n`;
        message += `<b>Thread ID:</b> <code>${threadId}</code>\n`;
        message += `<b>User:</b> ${session.userName}\n`;
        message += `<b>User ID:</b> <code>${session.userId}</code>\n`;
        message += `<b>Status:</b> ${session.status === 'active' ? '✅ Aktif' : '🟡 Pending'}\n`;
        if (session.adminName) {
            message += `<b>Admin:</b> ${session.adminName}\n`;
        }
        message += `<b>Dibuat:</b> ${new Date(session.createdAt).toLocaleString('id-ID')}\n`;
        message += `<b>Total Pesan:</b> ${session.messages.length}\n\n`;
        
        if (session.messages.length > 0) {
            message += `<b>Riwayat Pesan:</b>\n`;
            session.messages.slice(-10).forEach((msg, idx) => {
                const sender = msg.sender === 'user' ? '👤 User' : '👨‍💼 CS';
                const time = new Date(msg.timestamp).toLocaleTimeString('id-ID');
                message += `\n${idx+1}. ${sender} (${time}):\n`;
                message += `${msg.content.substring(0, 100)}${msg.content.length > 100 ? '...' : ''}\n`;
            });
        } else {
            message += `<i>Belum ada pesan</i>\n`;
        }

        const keyboard = {
            inline_keyboard: [
                [{ text: "💬 Ambil Chat", callback_data: `cs_join_${threadId}` }],
                [{ text: "🔙 Kembali", callback_data: "owner_cs_menu" }]
            ]
        };

        await bot.editMessageText(message, {
            chat_id: chatId,
            message_id: messageId,
            parse_mode: "HTML",
            reply_markup: keyboard
        });

    } catch (error) {
        console.error('Error showing CS thread detail:', error);
    }
}

// CS Menu untuk owner
async function showCSMenu(chatId, userId, messageId, callbackQueryId) {
    try {
        if (!owner_ids.includes(userId.toString())) {
            await bot.answerCallbackQuery(callbackQueryId, {
                text: '⛔ Akses Ditolak!',
                show_alert: true
            });
            return;
        }

        const csAdmins = config.cs_admins || [];
        
        // Hitung thread aktif
        let activeThreads = [];
        let pendingThreads = [];
        
        if (global.csChatSessions) {
            for (const [threadId, session] of global.csChatSessions.entries()) {
                if (session.status === 'active') {
                    activeThreads.push({ threadId, ...session });
                }
                if (session.status === 'pending') {
                    pendingThreads.push({ threadId, ...session });
                }
            }
        }

        let message = `<b>💬 CS MANAGEMENT</b>\n\n`;
        message += `<b>📊 Statistik:</b>\n`;
        message += `├ CS Admin: ${csAdmins.length} orang\n`;
        message += `├ Thread Aktif: ${activeThreads.length}\n`;
        message += `├ Thread Pending: ${pendingThreads.length}\n`;
        message += `└ Total Session: ${global.csChatSessions?.size || 0}\n\n`;
        
        if (pendingThreads.length > 0) {
            message += `<b>🟡 Thread Menunggu:</b>\n`;
            pendingThreads.forEach((thread, idx) => {
                message += `${idx+1}. ${thread.userName} - <code>${thread.threadId}</code>\n`;
            });
            message += `\n`;
        }
        
        if (activeThreads.length > 0) {
            message += `<b>🟢 Thread Aktif:</b>\n`;
            activeThreads.forEach((thread, idx) => {
                message += `${idx+1}. ${thread.userName} (CS: ${thread.adminName}) - <code>${thread.threadId}</code>\n`;
            });
            message += `\n`;
        }
        
        message += `<b>💡 Informasi:</b>\n`;
        message += `• CS akan menerima notifikasi otomatis\n`;
        message += `• Balas pesan user langsung dari chat\n`;
        message += `• Ketik /endcs untuk menutup chat\n\n`;
        
        message += `<b>📌 Daftar CS Admin:</b>\n`;
        if (csAdmins.length > 0) {
            csAdmins.forEach((id, idx) => {
                message += `${idx+1}. <code>${id}</code>\n`;
            });
        } else {
            message += `<i>Belum ada CS Admin</i>\n`;
            message += `\n⚠️ Tambahkan di config.js:\n`;
            message += `<code>cs_admins: ['user_id_1', 'user_id_2']</code>\n`;
        }

        const keyboard = [];
        
        // Tombol untuk thread pending
        pendingThreads.slice(0, 5).forEach((thread) => {
            keyboard.push([
                { text: `🟡 ${thread.userName}`, callback_data: `cs_join_${thread.threadId}` }
            ]);
        });
        
        // Tombol untuk thread aktif
        activeThreads.slice(0, 5).forEach((thread) => {
            keyboard.push([
                { text: `🟢 ${thread.userName} (${thread.adminName})`, callback_data: `cs_view_thread_${thread.threadId}` }
            ]);
        });
        
        keyboard.push([
            { text: '🔄 Refresh', callback_data: 'owner_cs_menu' },
            { text: '🔙 Owner Menu', callback_data: 'owner_menu' }
        ]);

        await bot.editMessageText(message, {
            chat_id: chatId,
            message_id: messageId,
            parse_mode: "HTML",
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error showCSMenu:', error);
    }
}

// ========================= MAIN MENU FUNCTIONS =========================

async function showMainMenu(chatId, userId, user, messageId = null, callbackQueryId = null) {
    try {
        if (isUserBanned(userId.toString())) {
            await sendNewMessage(chatId, 
                `<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<tg-emoji emoji-id="5247149163132493357">⛔️</tg-emoji> <b>AKSES DIBLOKIR</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<b><tg-emoji emoji-id="5319118551427078910">🧡</tg-emoji>User ID</b> : <code>${userId}</code>
<b><tg-emoji emoji-id="6206396878532121864">🚫</tg-emoji> Status</b> : <b>DIBANNED</b>

Akses Anda ke bot telah diblokir.
Hubungi admin untuk informasi lebih lanjut.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`,
                { parse_mode: 'HTML' }
            );
            return;
        }
        
        userSelections.delete(userId);
        balanceCache.delete(userId.toString());
        
        const userBalance = getUserBalance(userId);
        const data = loadData();
        const transactions = loadTransactions();
        
        const totalUsers = data.users?.length || 0;
        
        const successfulOrders = transactions.nokos_orders?.filter(order => {
            if (order.status === 'completed' || order.data?.status === 'completed') return true;
            if (order.data?.otp_code && order.data.otp_code !== '-' && order.data.otp_code !== '' && order.data.otp_code !== null) return true;
            if (order.data?.otp_received === true) return true;
            return false;
        }) || [];
        
        const successfulCashifyDeposits = transactions.cashify_deposits?.filter(deposit => 
            deposit.status === 'success' || deposit.status === 'paid'
        ) || [];
        
        const successfulRumahotpDeposits = transactions.rumahotp_deposits?.filter(deposit => 
            deposit.status === 'success' || deposit.status === 'paid'
        ) || [];
        
        const totalOrders = successfulOrders.length;
        const totalDeposits = successfulCashifyDeposits.length + successfulRumahotpDeposits.length;
        
        const username = user.username ? `@${user.username}` : '-';
        const firstName = user.first_name || 'User';
        
        let csStatus = '';
        if (global.csChatSessions) {
            for (const [threadId, session] of global.csChatSessions) {
                if (session.userId === userId.toString() && 
                    (session.status === 'active' || session.status === 'pending')) {
                    csStatus = `<code>${threadId}</code>`;
                    break;
                }
            }
        }

        // Di dalam showMainMenu, perbaiki format pesan
const message = `
<blockquote>━━━━━━━━━━━━━━━━━
   <tg-emoji emoji-id="5359681227592854334">❤️</tg-emoji> <b>${config.namaStore}</b> <tg-emoji emoji-id="5359681227592854334">❤️</tg-emoji>
━━━━━━━━━━━━━━━━━

<b>Selamat Datang ${firstName}!</b>
<i>Tempat terbaik untuk layanan OTP</i>

┌────────────────
├ <b><tg-emoji emoji-id="5926764846518376076">📋</tg-emoji> PROFIL ANDA</b>
├────────────────
├ <b><tg-emoji emoji-id="5319118551427078910">🧡</tg-emoji> ID</b>         : <code>${userId}</code>
├ <b><tg-emoji emoji-id="5778295678295872471">👤</tg-emoji> Username</b>  : ${username}
├ <b><tg-emoji emoji-id="6206479140040743133">✔️</tg-emoji> Status</b>     : Aktif
└ <b><tg-emoji emoji-id="6190336264940559752">💰</tg-emoji> Saldo</b>      : <b><code>${formatCurrency(userBalance)}</code></b>
└──────────────────
├ <b><tg-emoji emoji-id="6206343625232619150">📊</tg-emoji> STATISTIK BOT</b>
├──────────────────
├ <b><tg-emoji emoji-id="5778295678295872471">👤</tg-emoji> Total User</b>   : ${totalUsers}
├ <b><tg-emoji emoji-id="5951982867255924070">✔️</tg-emoji> Order Sukses</b> : ${totalOrders} 
└ <b><tg-emoji emoji-id="6190336264940559752">💰</tg-emoji> Deposit Sukses</b>: ${totalDeposits}
└──────────────────
├ <b><tg-emoji emoji-id="6206495649895028694">💬</tg-emoji> Chat CS Aktif</b>: ${csStatus || 'Tidak ada'}
└──────────────────

━━━━━━━━━━━━━━━━━━━
<b><tg-emoji emoji-id="6318912252749554757">🍏</tg-emoji> © RikyShopOTP:</b>
━━━━━━━━━━━━━━━━━━</blockquote>`;

// Di dalam showMainMenu, update keyboard menjadi:
const keyboard = [
    [{ text: 'BELI NOKOS', callback_data: 'nokos_menu', style: 'success', icon_custom_emoji_id: '6318912252749554757' },
     { text: 'TOPUP SALDO', callback_data: 'deposit_main', style: 'success', icon_custom_emoji_id: '6339136888674192137' }],
    [{ text: 'RIWAYAT ORDER', callback_data: 'order_history', style: 'success', icon_custom_emoji_id: '5217939515754174728' }, 
     { text: 'RIWAYAT DEPOSIT', callback_data: 'deposit_history', style: 'success', icon_custom_emoji_id: '5404609089474948300' }],
    [{ text: 'BUY VPS', callback_data: 'vps_menu', style: 'success', icon_custom_emoji_id: '4915963371649499973' },
     { text: 'SUBDOMAIN', callback_data: 'subdomain_menu', style: 'success', icon_custom_emoji_id: '5080067857211982370' }],
    [{ text: 'REFERRAL', callback_data: 'referral_menu', style: 'success', icon_custom_emoji_id: '5215441850537618106' },
     { text: 'CHAT CS', callback_data: 'cs_chat', style: 'success', icon_custom_emoji_id: '6206495649895028694' }],
    [{ text: 'BELI SCRIPT', callback_data: 'script_menu', style: 'success', icon_custom_emoji_id: '5359681227592854334' },
     { text: 'BELI PANEL', callback_data: 'panel_menu', style: 'success', icon_custom_emoji_id: '4967762670104085632' }],
     [{ text: 'CHANNEL', url: `https://t.me/${channel.replace('@', '')}`, style: 'danger', icon_custom_emoji_id: '6098421155897545579' }],
];

        if (owner_ids.includes(userId.toString())) {
            keyboard.push([{ text: 'OWNER MENU', callback_data: 'owner_menu', style: 'danger', icon_custom_emoji_id: '5341715473882955310' }]);
        }

        if (config.cs_admins?.includes(userId.toString())) {
            keyboard.push([{ text: '👨‍💼 CS PANEL', callback_data: 'owner_cs_menu', style: 'primary' }]);
        }

        const options = {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML',
            disable_web_page_preview: true
        };

        if (messageId && callbackQueryId) {
            await editMessage(chatId, messageId, callbackQueryId, message, options);
        } else if (messageId) {
            await editMessage(chatId, messageId, null, message, options);
        } else {
            await sendNewMessage(chatId, message, options);
        }
        
    } catch (error) {
        console.error('Error in showMainMenu:', error);
        const errorMessage = `<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❌ <b>ERROR</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Terjadi kesalahan saat memuat data.
Silakan coba lagi.

<b>Menu Utama :</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`;
        
        const fallbackKeyboard = [
            [{ text: '📱 BELI NOKOS', callback_data: 'nokos_menu' }, { text: '💰 TOPUP SALDO', callback_data: 'deposit_main' }],
            [{ text: '💬 CHAT CS', callback_data: 'cs_chat' }],
            [{ text: '🔄 REFRESH', callback_data: 'main_menu' }]
        ];
        
        try {
            if (messageId && callbackQueryId) {
                await editMessage(chatId, messageId, callbackQueryId, errorMessage, {
                    reply_markup: { inline_keyboard: fallbackKeyboard },
                    parse_mode: 'HTML'
                });
            } else {
                await sendNewMessage(chatId, errorMessage, {
                    reply_markup: { inline_keyboard: fallbackKeyboard },
                    parse_mode: 'HTML'
                });
            }
        } catch (fallbackError) {
            console.error('Fallback error in showMainMenu:', fallbackError);
        }
    }
}

async function showOwnerSettings(chatId, userId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }

    // Hitung statistik user
    const data = loadData();
    const balances = loadBalances();
    const bannedUsers = loadBannedUsers();
    
    const totalUsers = data.users?.length || 0;
    const usersWithBalance = Object.keys(balances).filter(id => {
      const balance = parseInt(balances[id]) || 0;
      return balance > 0;
    }).length;
    
    const totalBalance = Object.values(balances).reduce((sum, balance) => 
      sum + (parseInt(balance) || 0), 0
    );
    
    const activeBans = bannedUsers.filter(user => user.status === 'banned').length;

    const message = `<b>⚙️ OWNER SETTINGS</b>

<b>📊 Quick Stats:</b>
├ Total Users: ${totalUsers}
├ Active Balance: ${formatCurrency(totalBalance)}
└ Banned Users: ${activeBans}

<b>📋 User Management:</b>
• View & manage all users
• Balance operations
• Ban/Unban users
• User activity history

<b>⚡ Quick Actions:</b>
• Add/Remove admin
• CS management
• Database operations

<i>Select management menu:</i>`;

    const keyboard = [
      [
        { text: '👥 User Manager', callback_data: 'owner_user_manager' },
        { text: '💰 Balance', callback_data: 'owner_balance_manager' }
      ],
      [
        { text: '🚫 Ban Control', callback_data: 'owner_ban_manager' },
        { text: '📊 Stats', callback_data: 'owner_user_stats' }
      ],
      [
        { text: '👥 Admins', callback_data: 'owner_admin_menu' },
        { text: '💬 CS', callback_data: 'owner_cs_menu' }
      ],
      [
        { text: '💾 Database', callback_data: 'owner_database' },
        { text: '🔄 Backup', callback_data: 'restore_menu' }
      ],
      [
        { text: '🔙 Owner Menu', callback_data: 'owner_menu' },
        { text: 'Create Vps For Owner', callback_data: 'owner_free_vps_info' },
        { text: '🏠 Main Menu', callback_data: 'main_menu' }
      ]
    ];

    await editMessage(chatId, messageId, callbackQueryId, message, {
      reply_markup: { inline_keyboard: keyboard },
      parse_mode: 'HTML'
    });

  } catch (error) {
    console.error('Error showOwnerSettings:', error);
    await editMessage(chatId, messageId, callbackQueryId,
      '❌ Gagal memuat menu settings.\n\nSilakan coba lagi.',
      { parse_mode: 'HTML' }
    );
  }
}

async function showUserManager(chatId, userId, messageId, callbackQueryId, page = 0) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }

    const data = loadData();
    const balances = loadBalances();
    const bannedUsers = loadBannedUsers();
    
    const users = data.users || [];
    const itemsPerPage = 8;
    const totalPages = Math.ceil(users.length / itemsPerPage);
    
    if (page < 0) page = 0;
    if (page >= totalPages && totalPages > 0) page = totalPages - 1;
    
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageUsers = users.slice(startIndex, endIndex);
    
    let message = `<b>👥 USER MANAGER</b>\n\n`;
    message += `<b>Page:</b> ${page + 1}/${totalPages}\n`;
    message += `<b>Total Users:</b> ${users.length}\n\n`;
    
    if (pageUsers.length === 0) {
      message += `<i>No users found</i>\n`;
    } else {
      message += `<b>User List:</b>\n\n`;
      
      for (let i = 0; i < pageUsers.length; i++) {
        const user = pageUsers[i];
        const balance = parseInt(balances[user]) || 0;
        const isBanned = bannedUsers.some(bu => bu.userId === user && bu.status === 'banned');
        const isOwner = owner_ids.includes(user);
        
        const userNum = startIndex + i + 1;
        
        message += `<b>${userNum}. User ${user.substring(0, 6)}...</b>\n`;
        message += `├ Balance: ${formatCurrency(balance)}\n`;
        message += `└ Status: ${isBanned ? '🚫 Banned' : (isOwner ? '👑 Owner' : '✅ Active')}\n\n`;
      }
    }
    
    const keyboard = [];
    
    // User list buttons
    pageUsers.forEach((user, index) => {
      const userNum = startIndex + index + 1;
      const balance = parseInt(balances[user]) || 0;
      const isBanned = bannedUsers.some(bu => bu.userId === user && bu.status === 'banned');
      
      let buttonText = `${userNum}. `;
      if (isBanned) buttonText += '🚫 ';
      buttonText += `${user.substring(0, 6)}...`;
      if (balance > 0) buttonText += ` (${formatCurrency(balance).replace('Rp', '')})`;
      
      keyboard.push([
        { 
          text: buttonText, 
          callback_data: `user_manage_${user}` 
        }
      ]);
    });
    
    // Navigation buttons
    const navButtons = [];
    if (totalPages > 1) {
      if (page > 0) {
        navButtons.push({ 
          text: '◀️ Prev', 
          callback_data: `user_manager_page_${page - 1}` 
        });
      }
      
      navButtons.push({ 
        text: `📄 ${page + 1}/${totalPages}`, 
        callback_data: 'no_action' 
      });
      
      if (page < totalPages - 1) {
        navButtons.push({ 
          text: '▶️ Next', 
          callback_data: `user_manager_page_${page + 1}` 
        });
      }
      
      if (navButtons.length > 0) {
        keyboard.push(navButtons);
      }
    }
    
    // Quick actions row
    keyboard.push([
      { text: '🔍 Search User', callback_data: 'search_user_quick' },
      { text: '🔄 Refresh', callback_data: `user_manager_page_${page}` }
    ]);
    
    // Navigation row
    keyboard.push([
      { text: '🔙 Settings', callback_data: 'owner_settings' },
      { text: '🏠 Main', callback_data: 'main_menu' }
    ]);
    
    await editMessage(chatId, messageId, callbackQueryId, message, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: keyboard },
      disable_web_page_preview: true
    });

  } catch (error) {
    console.error('Error showUserManager:', error);
  }
}

async function showUserManageDetail(chatId, userId, targetUserId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }
    
    // Load semua data
    const balances = loadBalances();
    const bannedUsers = loadBannedUsers();
    const transactions = loadTransactions();
    const data = loadData();
    
    const userBalance = parseInt(balances[targetUserId]) || 0;
    const isBanned = bannedUsers.some(bu => bu.userId === targetUserId && bu.status === 'banned');
    const isOwner = owner_ids.includes(targetUserId);
    const isInSystem = data.users?.includes(targetUserId) || false;
    
    // Hitung statistik user
    const userOrders = transactions.nokos_orders?.filter(order => 
      order.userId === targetUserId
    ) || [];
    
    const successfulOrders = userOrders.filter(order => 
      order.status === 'completed' || 
      order.data?.status === 'completed' ||
      order.data?.otp_received === true
    ).length;
    
    const totalOrderValue = userOrders.reduce((sum, order) => 
      sum + (parseInt(order.data?.price || order.data?.finalPrice || 0) || 0), 0
    );
    
    const userDeposits = [
      ...(transactions.cashify_deposits?.filter(deposit => 
        deposit.userId === targetUserId && 
        (deposit.status === 'success' || deposit.status === 'paid')
      ) || []),
      ...(transactions.rumahotp_deposits?.filter(deposit => 
        deposit.userId === targetUserId && 
        (deposit.status === 'success' || deposit.status === 'paid')
      ) || [])
    ];
    
    const totalDeposit = userDeposits.reduce((sum, deposit) => 
      sum + (parseInt(deposit.data?.amount || deposit.data?.total || 0) || 0), 0
    );
    
    const lastOrder = userOrders.length > 0 ? 
      new Date(userOrders[userOrders.length - 1].timestamp).toLocaleString('id-ID') : 
      'Belum pernah';
    
    const lastDeposit = userDeposits.length > 0 ? 
      new Date(userDeposits[userDeposits.length - 1].timestamp).toLocaleString('id-ID') : 
      'Belum pernah';
    
    // Coba dapatkan info user dari Telegram
    let userInfo = {};
    try {
      const chat = await bot.getChat(targetUserId);
      userInfo = {
        firstName: chat.first_name || 'Tidak diketahui',
        lastName: chat.last_name || '',
        username: chat.username ? `@${chat.username}` : 'Tidak ada',
        isBot: chat.is_bot || false,
        languageCode: chat.language_code || 'id'
      };
    } catch (error) {
      userInfo = {
        firstName: 'Tidak diketahui',
        lastName: '',
        username: 'Tidak ada',
        isBot: false,
        languageCode: 'id'
      };
    }
    
    // Format message
    let message = `<b>👤 USER MANAGEMENT</b>\n\n`;
    
    message += `<b>📋 User Information:</b>\n`;
    message += `├ ID: <code>${targetUserId}</code>\n`;
    message += `├ Name: ${userInfo.firstName} ${userInfo.lastName}\n`;
    message += `├ Username: ${userInfo.username}\n`;
    message += `├ Language: ${userInfo.languageCode.toUpperCase()}\n`;
    message += `├ Bot: ${userInfo.isBot ? '✅ Yes' : '❌ No'}\n`;
    message += `├ Status: ${isBanned ? '🚫 Banned' : (isOwner ? '👑 Owner' : '✅ Active')}\n`;
    message += `└ In System: ${isInSystem ? '✅ Yes' : '❌ No'}\n\n`;
    
    message += `<b>💰 Balance Information:</b>\n`;
    message += `├ Current Balance: ${formatCurrency(userBalance)}\n`;
    message += `├ Total Deposited: ${formatCurrency(totalDeposit)}\n`;
    message += `├ Total Spent: ${formatCurrency(totalOrderValue)}\n`;
    message += `└ Net Balance: ${formatCurrency(totalDeposit - totalOrderValue)}\n\n`;
    
    message += `<b>📊 Activity Statistics:</b>\n`;
    message += `├ Total Orders: ${userOrders.length}\n`;
    message += `├ Successful Orders: ${successfulOrders}\n`;
    message += `├ Success Rate: ${userOrders.length > 0 ? Math.round((successfulOrders / userOrders.length) * 100) : 0}%\n`;
    message += `├ Total Deposits: ${userDeposits.length}\n`;
    message += `├ Last Order: ${lastOrder}\n`;
    message += `└ Last Deposit: ${lastDeposit}\n\n`;
    
    message += `<b>⚡ Quick Actions:</b>\n`;
    message += `• Click buttons below to manage this user`;
    
    const keyboard = [];
    
    // Baris 1: Balance Management
    const balanceRow = [];
    balanceRow.push({ 
      text: '➕ Add Balance', 
      callback_data: `user_add_balance_${targetUserId}` 
    });
    balanceRow.push({ 
      text: '➖ Deduct Balance', 
      callback_data: `user_deduct_balance_${targetUserId}` 
    });
    if (userBalance > 0) {
      balanceRow.push({ 
        text: '🔄 Reset Balance', 
        callback_data: `user_reset_balance_${targetUserId}` 
      });
    }
    keyboard.push(balanceRow);
    
    // Baris 2: Ban/Status Management
    const statusRow = [];
    if (isBanned) {
      statusRow.push({ 
        text: '✅ Unban User', 
        callback_data: `user_unban_${targetUserId}` 
      });
    } else {
      statusRow.push({ 
        text: '🚫 Ban User', 
        callback_data: `user_ban_${targetUserId}` 
      });
    }
    
    if (!isOwner) {
      statusRow.push({ 
        text: isOwner ? '➖ Remove Admin' : '➕ Make Admin', 
        callback_data: isOwner ? `user_remove_admin_${targetUserId}` : `user_make_admin_${targetUserId}` 
      });
    }
    
    if (statusRow.length > 0) {
      keyboard.push(statusRow);
    }
    
    // Baris 4: Navigation
    const navRow = [
      { 
        text: '🔙 User List', 
        callback_data: 'owner_user_manager' 
      },
      { 
        text: '🔍 Find Another', 
        callback_data: 'search_user_quick' 
      },
      { 
        text: '🏠 Main', 
        callback_data: 'main_menu' 
      }
    ];
    keyboard.push(navRow);
    
    await editMessage(chatId, messageId, callbackQueryId, message, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: keyboard },
      disable_web_page_preview: true
    });

  } catch (error) {
    console.error('Error showUserManageDetail:', error);
    await editMessage(chatId, messageId, callbackQueryId,
      `❌ Gagal memuat detail user.\n\nError: ${error.message}`,
      { parse_mode: 'HTML' }
    );
  }
}

async function showBalanceManager(chatId, userId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }

    const balances = loadBalances();
    
    // Hitung statistik
    const totalBalance = Object.values(balances).reduce((sum, b) => sum + (parseInt(b) || 0), 0);
    const totalUsers = Object.keys(balances).length;
    const avgBalance = totalUsers > 0 ? Math.round(totalBalance / totalUsers) : 0;
    
    // Top 3 users dengan balance tertinggi
    const topUsers = Object.entries(balances)
      .map(([id, balance]) => ({ id, balance: parseInt(balance) || 0 }))
      .sort((a, b) => b.balance - a.balance)
      .slice(0, 3);
    
    let message = `<b>💰 BALANCE MANAGER</b>\n\n`;
    
    message += `<b>Balance Statistics:</b>\n`;
    message += `├ Total: ${formatCurrency(totalBalance)}\n`;
    message += `├ Users: ${totalUsers}\n`;
    message += `└ Average: ${formatCurrency(avgBalance)}\n\n`;
    
    message += `<b>Top 3 Users:</b>\n`;
    if (topUsers.length === 0) {
      message += `<i>No users with balance</i>\n\n`;
    } else {
      topUsers.forEach((user, index) => {
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '▫️';
        message += `${medal} <code>${user.id.substring(0, 8)}...</code>: ${formatCurrency(user.balance)}\n`;
      });
      message += `\n`;
    }
    
    message += `<b>Quick Actions:</b>\n`;
    message += `• Add balance to user\n`;
    message += `• Deduct balance\n`;
    message += `• Reset balance\n`;
    
    const keyboard = [];
    
    // Quick Balance Operations
    keyboard.push([
      { text: '➕ Add Balance', callback_data: 'balance_add_quick' },
      { text: '➖ Deduct', callback_data: 'balance_deduct_quick' },
      { text: '🔄 Reset', callback_data: 'balance_reset_quick' }
    ]);
    
    // Top Users
    const topUserButtons = [];
    topUsers.forEach((user, index) => {
      topUserButtons.push({
        text: `${index + 1}. ${formatCurrency(user.balance).replace('Rp', '')}`,
        callback_data: `user_manage_${userId}`
      });
    });
    
    // Tambahkan placeholder jika kurang dari 3
    while (topUserButtons.length < 3) {
      topUserButtons.push({
        text: '─',
        callback_data: 'no_action'
      });
    }
    
    keyboard.push(topUserButtons);
    
    // Tools
    keyboard.push([
      { text: '🔍 Find User', callback_data: 'search_user_quick' },
      { text: '📋 User List', callback_data: 'owner_user_manager' },
      { text: '🔄 Refresh', callback_data: 'owner_balance_manager' }
    ]);
    
    // Navigation
    keyboard.push([
      { text: '🔙 Settings', callback_data: 'owner_settings' },
      { text: '🏠 Main', callback_data: 'main_menu' }
    ]);
    
    await editMessage(chatId, messageId, callbackQueryId, message, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: keyboard },
      disable_web_page_preview: true
    });

  } catch (error) {
    console.error('Error showBalanceManager:', error);
  }
}

async function showBanManager(chatId, userId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }

    const bannedUsers = loadBannedUsers();
    const data = loadData();
    
    const activeBans = bannedUsers.filter(user => user.status === 'banned');
    const totalUsers = data.users?.length || 0;
    
    let message = `<b>🚫 BAN MANAGER</b>\n\n`;
    
    message += `<b>Ban Statistics:</b>\n`;
    message += `├ Total Banned: ${activeBans.length}\n`;
    message += `├ Total Users: ${totalUsers}\n`;
    message += `└ Ban Rate: ${totalUsers > 0 ? ((activeBans.length / totalUsers) * 100).toFixed(2) : 0}%\n\n`;
    
    if (activeBans.length === 0) {
      message += `<i>No users are currently banned</i>\n\n`;
    } else {
      message += `<b>Recently Banned:</b>\n\n`;
      
      // Tampilkan 3 terbaru
      const recentBans = activeBans
        .sort((a, b) => new Date(b.bannedAt) - new Date(a.bannedAt))
        .slice(0, 3);
      
      recentBans.forEach((ban, index) => {
        const banDate = new Date(ban.bannedAt).toLocaleDateString('id-ID');
        
        message += `<b>${index + 1}. User ${ban.userId.substring(0, 8)}...</b>\n`;
        message += `├ Reason: ${ban.reason || 'No reason'}\n`;
        message += `└ Date: ${banDate}\n\n`;
      });
    }
    
    message += `<b>Actions:</b>\n`;
    message += `• Ban user by ID\n`;
    message += `• Unban specific user\n`;
    message += `• View banned list\n`;
    
    const keyboard = [];
    
    // Main Actions
    keyboard.push([
      { text: '🚫 Ban User', callback_data: 'ban_user_quick' },
      { text: '✅ Unban User', callback_data: 'unban_user_quick' },
      { text: '📋 Ban List', callback_data: 'ban_list_full' }
    ]);
    
    // Recent Bans (jika ada)
    if (activeBans.length > 0) {
      const recentBanButtons = [];
      const displayBans = activeBans.slice(0, 3);
      
      displayBans.forEach((ban, index) => {
        recentBanButtons.push({
          text: `${index + 1}. ${ban.userId.substring(0, 6)}...`,
          callback_data: `user_manage_${ban.userId}`
        });
      });
      
      keyboard.push(recentBanButtons);
    }
    
    // Tools
    keyboard.push([
      { text: '🔍 Search', callback_data: 'search_user_quick' },
      { text: '👥 User Manager', callback_data: 'owner_user_manager' },
      { text: '🔄 Refresh', callback_data: 'owner_ban_manager' }
    ]);
    
    // Navigation
    keyboard.push([
      { text: '🔙 Settings', callback_data: 'owner_settings' },
      { text: '🏠 Main', callback_data: 'main_menu' }
    ]);
    
    await editMessage(chatId, messageId, callbackQueryId, message, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: keyboard },
      disable_web_page_preview: true
    });

  } catch (error) {
    console.error('Error showBanManager:', error);
  }
}

// ========================= USER MANAGEMENT FUNCTIONS =========================

async function showUserDetailsMenu(chatId, userId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }

    const message = `<b>👤 USER DETAILS MANAGEMENT</b>

<b>Cari user berdasarkan:</b>

1️⃣ <b>User ID</b> - Cari dengan ID Telegram
2️⃣ <b>Username</b> - Cari dengan @username
3️⃣ <b>Nama</b> - Cari dengan nama depan

<i>Pilih metode pencarian:</i>`;

    const keyboard = [
      [
        { text: '🔢 Cari by User ID', callback_data: 'search_user_by_id' },
        { text: '@ Cari by Username', callback_data: 'search_user_by_username' }
      ],
      [
        { text: '👤 Cari by Nama', callback_data: 'search_user_by_name' },
        { text: '📋 Top Users', callback_data: 'show_top_users' }
      ],
      [
        { text: '🔙 Settings Menu', callback_data: 'owner_settings' },
        { text: '🏠 Menu Utama', callback_data: 'main_menu' }
      ]
    ];

    await editMessage(chatId, messageId, callbackQueryId, message, {
      reply_markup: { inline_keyboard: keyboard },
      parse_mode: 'HTML'
    });

  } catch (error) {
    console.error('Error showUserDetailsMenu:', error);
  }
}

async function searchUserByID(chatId, userId, messageId, callbackQueryId) {
  try {
    await editMessage(chatId, messageId, callbackQueryId,
      `<b>🔢 CARI USER BY ID</b>\n\nKirim User ID yang ingin dicari:\n\nContoh: <code>123456789</code>\n\n<i>User ID harus berupa angka</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: '🔙 Kembali', callback_data: 'owner_user_details' }]
          ]
        }
      }
    );

    const selection = {
      step: 'search_user_id',
      timestamp: Date.now()
    };
    userSelections.set(userId, selection);

  } catch (error) {
    console.error('Error searchUserByID:', error);
  }
}

async function showUserDetails(userId, targetUserId, chatId, messageId, callbackQueryId) {
  try {
    const balances = loadBalances();
    const transactions = loadTransactions();
    
    const userBalance = parseInt(balances[targetUserId]) || 0;
    
    // Hitung statistik user
    const userOrders = transactions.nokos_orders?.filter(order => 
      order.userId === targetUserId
    ) || [];
    
    const successfulOrders = userOrders.filter(order => 
      order.status === 'completed' || 
      order.data?.status === 'completed' ||
      order.data?.otp_received === true
    ).length;
    
    const userDeposits = [
      ...(transactions.cashify_deposits?.filter(deposit => 
        deposit.userId === targetUserId && 
        (deposit.status === 'success' || deposit.status === 'paid')
      ) || []),
      ...(transactions.rumahotp_deposits?.filter(deposit => 
        deposit.userId === targetUserId && 
        (deposit.status === 'success' || deposit.status === 'paid')
      ) || [])
    ];
    
    const totalDeposit = userDeposits.reduce((sum, deposit) => 
      sum + (parseInt(deposit.data?.amount || deposit.data?.total || 0) || 0), 0
    );
    
    const lastOrder = userOrders.length > 0 ? 
      new Date(userOrders[userOrders.length - 1].timestamp).toLocaleString('id-ID') : 
      'Belum pernah order';
    
    const lastDeposit = userDeposits.length > 0 ? 
      new Date(userDeposits[userDeposits.length - 1].timestamp).toLocaleString('id-ID') : 
      'Belum pernah deposit';
    
    // Coba dapatkan info user dari Telegram
    let userInfo = {};
    try {
      const chat = await bot.getChat(targetUserId);
      userInfo = {
        firstName: chat.first_name || 'Tidak diketahui',
        lastName: chat.last_name || '',
        username: chat.username ? `@${chat.username}` : 'Tidak ada',
        isBot: chat.is_bot || false
      };
    } catch (error) {
      userInfo = {
        firstName: 'Tidak diketahui',
        lastName: '',
        username: 'Tidak ada',
        isBot: false
      };
    }
    
    const message = `<b>👤 DETAIL USER</b>\n\n` +
      `<b>Informasi User:</b>\n` +
      `├ ID: <code>${targetUserId}</code>\n` +
      `├ Nama: ${userInfo.firstName} ${userInfo.lastName}\n` +
      `├ Username: ${userInfo.username}\n` +
      `├ Bot: ${userInfo.isBot ? '✅ Ya' : '❌ Tidak'}\n` +
      `└ Status: ${owner_ids.includes(targetUserId) ? '👑 Owner' : '👤 User'}\n\n` +
      `<b>Statistik:</b>\n` +
      `├ Saldo: ${formatCurrency(userBalance)}\n` +
      `├ Total Order: ${userOrders.length}\n` +
      `├ Order Sukses: ${successfulOrders}\n` +
      `├ Total Deposit: ${formatCurrency(totalDeposit)}\n` +
      `├ Last Order: ${lastOrder}\n` +
      `└ Last Deposit: ${lastDeposit}\n\n` +
      `<b>Aksi:</b> Pilih aksi yang ingin dilakukan`;

    const keyboard = [
      [
        { text: '💰 Tambah Saldo', callback_data: `add_balance_${targetUserId}` },
        { text: '➖ Kurang Saldo', callback_data: `deduct_balance_${targetUserId}` }
      ],
      [
        { text: '📋 Riwayat Order', callback_data: `view_orders_${targetUserId}` },
        { text: '💳 Riwayat Deposit', callback_data: `view_deposits_${targetUserId}` }
      ],
      [
        { text: userBalance > 0 ? '🔴 Reset Saldo' : '✅ Reset Saldo', callback_data: `reset_balance_${targetUserId}` },
        { text: '🚫 Ban User', callback_data: `ban_user_${targetUserId}` }
      ],
      [
        { text: '🔙 Cari User Lain', callback_data: 'owner_user_details' },
        { text: '🏠 Menu Utama', callback_data: 'main_menu' }
      ]
    ];

    await editMessage(chatId, messageId, callbackQueryId, message, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: keyboard }
    });

  } catch (error) {
    console.error('Error showUserDetails:', error);
    await editMessage(chatId, messageId, callbackQueryId,
      `❌ Gagal mendapatkan detail user.\n\nError: ${error.message}`,
      { parse_mode: 'HTML' }
    );
  }
}

async function showUserBalanceManagement(chatId, userId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }

    const message = `<b>💰 USER BALANCE MANAGEMENT</b>

<b>Fitur:</b>

1️⃣ <b>Tambah Saldo User</b>
   Tambahkan saldo ke user tertentu

2️⃣ <b>Kurangi Saldo User</b>
   Kurangi saldo user (untuk koreksi)

3️⃣ <b>Reset Saldo User</b>
   Set saldo user menjadi 0

4️⃣ <b>Cek Saldo User</b>
   Cek saldo user tertentu

<i>Pilih aksi:</i>`;

    const keyboard = [
      [
        { text: '➕ Tambah Saldo', callback_data: 'add_user_balance' },
        { text: '➖ Kurangi Saldo', callback_data: 'deduct_user_balance' }
      ],
      [
        { text: '🔄 Reset Saldo', callback_data: 'reset_user_balance' },
        { text: '📊 Cek Saldo', callback_data: 'check_user_balance' }
      ],
      [
        { text: '🔙 Settings Menu', callback_data: 'owner_settings' },
        { text: '🏠 Menu Utama', callback_data: 'main_menu' }
      ]
    ];

    await editMessage(chatId, messageId, callbackQueryId, message, {
      reply_markup: { inline_keyboard: keyboard },
      parse_mode: 'HTML'
    });

  } catch (error) {
    console.error('Error showUserBalanceManagement:', error);
  }
}

async function showUserHistoryMenu(chatId, userId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }

    const message = `<b>📋 USER HISTORY MANAGEMENT</b>

<b>Lihat riwayat user:</b>

1️⃣ <b>Riwayat Order</b>
   Lihat semua order user tertentu

2️⃣ <b>Riwayat Deposit</b>
   Lihat semua deposit user

3️⃣ <b>Riwayat Voucher</b>
   Lihat penggunaan voucher user

4️⃣ <b>Riwayat Lengkap</b>
   Lihat semua aktivitas user

<i>Pilih jenis riwayat:</i>`;

    const keyboard = [
      [
        { text: '🛒 Order History', callback_data: 'view_user_orders' },
        { text: '💰 Deposit History', callback_data: 'view_user_deposits' }
      ],
      [
        { text: '🎫 Voucher History', callback_data: 'view_user_vouchers' },
        { text: '📊 Full History', callback_data: 'view_full_history' }
      ],
      [
        { text: '🔙 Settings Menu', callback_data: 'owner_settings' },
        { text: '🏠 Menu Utama', callback_data: 'main_menu' }
      ]
    ];

    await editMessage(chatId, messageId, callbackQueryId, message, {
      reply_markup: { inline_keyboard: keyboard },
      parse_mode: 'HTML'
    });

  } catch (error) {
    console.error('Error showUserHistoryMenu:', error);
  }
}

async function showBanManagement(chatId, userId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }

    const bannedUsers = loadBannedUsers();
    const activeBans = bannedUsers.filter(user => user.status === 'banned').length;

    const message = `<b>🚫 BAN/UNBAN MANAGEMENT</b>

<b>Statistik:</b>
Total User Banned: ${activeBans}

<b>Fitur:</b>
1️⃣ <b>Ban User</b> - Blokir akses user ke bot
2️⃣ <b>Unban User</b> - Buka blokir user
3️⃣ <b>List Banned</b> - Lihat daftar user banned
4️⃣ <b>Cek Status</b> - Cek status user

<i>Pilih aksi:</i>`;

    const keyboard = [
      [
        { text: '🚫 Ban User', callback_data: 'ban_user_menu' },
        { text: '✅ Unban User', callback_data: 'unban_user_menu' }
      ],
      [
        { text: '📋 List Banned', callback_data: 'list_banned_users' },
        { text: '🔍 Cek Status', callback_data: 'check_ban_status' }
      ],
      [
        { text: '🔙 Settings Menu', callback_data: 'owner_settings' },
        { text: '🏠 Menu Utama', callback_data: 'main_menu' }
      ]
    ];

    await editMessage(chatId, messageId, callbackQueryId, message, {
      reply_markup: { inline_keyboard: keyboard },
      parse_mode: 'HTML'
    });

  } catch (error) {
    console.error('Error showBanManagement:', error);
  }
}

// Load banned users function
function loadBannedUsers() {
  try {
    const bannedFile = path.join(dataDir, 'banned_users.json');
    if (!fs.existsSync(bannedFile)) {
      return [];
    }
    return JSON.parse(fs.readFileSync(bannedFile, 'utf8'));
  } catch (error) {
    return [];
  }
}

// Save banned users function
function saveBannedUsers(bannedUsers) {
  try {
    const bannedFile = path.join(dataDir, 'banned_users.json');
    fs.writeFileSync(bannedFile, JSON.stringify(bannedUsers, null, 2));
    return true;
  } catch (error) {
    return false;
  }
}

// Check if user is banned
function isUserBanned(userId) {
  const bannedUsers = loadBannedUsers();
  return bannedUsers.some(user => 
    user.userId === userId.toString() && user.status === 'banned'
  );
}

// Ban user function
function banUser(userId, reason = '', bannedBy = 'system') {
  const bannedUsers = loadBannedUsers();
  
  const existingIndex = bannedUsers.findIndex(user => user.userId === userId.toString());
  
  if (existingIndex !== -1) {
    bannedUsers[existingIndex].status = 'banned';
    bannedUsers[existingIndex].reason = reason;
    bannedUsers[existingIndex].bannedBy = bannedBy;
    bannedUsers[existingIndex].bannedAt = new Date().toISOString();
  } else {
    bannedUsers.push({
      userId: userId.toString(),
      status: 'banned',
      reason: reason,
      bannedBy: bannedBy,
      bannedAt: new Date().toISOString(),
      unbannedAt: null
    });
  }
  
  return saveBannedUsers(bannedUsers);
}

// Unban user function
function unbanUser(userId, unbannedBy = 'system') {
  const bannedUsers = loadBannedUsers();
  
  const userIndex = bannedUsers.findIndex(user => 
    user.userId === userId.toString() && user.status === 'banned'
  );
  
  if (userIndex !== -1) {
    bannedUsers[userIndex].status = 'unbanned';
    bannedUsers[userIndex].unbannedAt = new Date().toISOString();
    bannedUsers[userIndex].unbannedBy = unbannedBy;
    return saveBannedUsers(bannedUsers);
  }
  
  return false;
}

// Show list users function
async function showListUsers(chatId, userId, messageId, callbackQueryId, page = 0) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }

    const data = loadData();
    const balances = loadBalances();
    const bannedUsers = loadBannedUsers();
    
    const users = data.users || [];
    const itemsPerPage = 10;
    const totalPages = Math.ceil(users.length / itemsPerPage);
    
    if (page < 0) page = 0;
    if (page >= totalPages && totalPages > 0) page = totalPages - 1;
    
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageUsers = users.slice(startIndex, endIndex);
    
    let message = `<b>📊 LIST ALL USERS</b>\n\n`;
    message += `<b>Total Users:</b> ${users.length}\n`;
    message += `<b>Users with Balance:</b> ${Object.keys(balances).length}\n`;
    message += `<b>Banned Users:</b> ${bannedUsers.filter(u => u.status === 'banned').length}\n`;
    message += `<b>Page:</b> ${page + 1}/${totalPages}\n\n`;
    
    if (pageUsers.length === 0) {
      message += `<i>No users found</i>`;
    } else {
      for (let i = 0; i < pageUsers.length; i++) {
        const user = pageUsers[i];
        const balance = parseInt(balances[user]) || 0;
        const isBanned = isUserBanned(user);
        const isOwner = owner_ids.includes(user);
        
        let userInfo = `ID: <code>${user}</code>\n`;
        userInfo += `Saldo: ${formatCurrency(balance)}\n`;
        userInfo += `Status: ${isBanned ? '🚫 Banned' : (isOwner ? '👑 Owner' : '✅ Active')}\n`;
        
        message += `<b>${startIndex + i + 1}. User</b>\n${userInfo}\n`;
      }
    }
    
    const keyboard = [];
    
    pageUsers.forEach((user, index) => {
      const num = startIndex + index + 1;
      keyboard.push([
        { 
          text: `${num}. User ${user.substring(0, 8)}...`, 
          callback_data: `user_detail_${user}` 
        }
      ]);
    });
    
    const navButtons = [];
    if (totalPages > 1) {
      if (page > 0) {
        navButtons.push({ 
          text: '◀️ Prev', 
          callback_data: `list_users_page_${page - 1}` 
        });
      }
      
      navButtons.push({ 
        text: `📄 ${page + 1}/${totalPages}`, 
        callback_data: 'no_action' 
      });
      
      if (page < totalPages - 1) {
        navButtons.push({ 
          text: '▶️ Next', 
          callback_data: `list_users_page_${page + 1}` 
        });
      }
      
      if (navButtons.length > 0) {
        keyboard.push(navButtons);
      }
    }
    
    keyboard.push([
      { text: '🔍 Search User', callback_data: 'owner_user_details' },
      { text: '🔄 Refresh', callback_data: `list_users_page_${page}` }
    ]);
    
    keyboard.push([
      { text: '🔙 Settings Menu', callback_data: 'owner_settings' },
      { text: '🏠 Menu Utama', callback_data: 'main_menu' }
    ]);

    await editMessage(chatId, messageId, callbackQueryId, message, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: keyboard },
      disable_web_page_preview: true
    });

  } catch (error) {
    console.error('Error showListUsers:', error);
  }
}

// Database management function
async function showDatabaseMenu(chatId, userId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }

    const message = `<b>💾 DATABASE</b>

<b>Database Operations:</b>
• Reset database
• Manual backup
• Restore from backup

<b>Warning:</b>
Reset will delete all user data!

<i>Select operation:</i>`;

    const keyboard = [
      [
        { text: '🗑️ Reset', callback_data: 'reset_database_confirm' },
        { text: '💾 Backup', callback_data: 'create_backup_now' }
      ],
      [
        { text: '📥 Restore', callback_data: 'restore_menu' },
        { text: '🔄 Refresh', callback_data: 'owner_database' }
      ],
      [
        { text: '🔙 Settings', callback_data: 'owner_settings' },
        { text: '🏠 Main', callback_data: 'main_menu' }
      ]
    ];

    await editMessage(chatId, messageId, callbackQueryId, message, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: keyboard }
    });

  } catch (error) {
    console.error('Error showDatabaseMenu:', error);
  }
}

// Helper function to get file size
function getFileSize(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      const sizeInKB = (stats.size / 1024).toFixed(2);
      return `${sizeInKB} KB`;
    }
    return '0 KB';
  } catch (error) {
    return '0 KB';
  }
}

// Admin management function
async function showAdminMenu(chatId, userId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }

    const message = `<b>👥 ADMIN CONTROL</b>

<b>Current Admins:</b>
${owner_ids.map((id, index) => `${index + 1}. <code>${id}</code>`).join('\n')}

<b>Actions:</b>
• Add new admin
• Remove admin
• List all admins

<i>Select action:</i>`;

    const keyboard = [
      [
        { text: '➕ Add Admin', callback_data: 'add_admin' },
        { text: '➖ Remove Admin', callback_data: 'remove_admin' }
      ],
      [
        { text: '📋 List', callback_data: 'list_admins' },
        { text: '🔄 Refresh', callback_data: 'owner_admin_menu' }
      ],
      [
        { text: '🔙 Settings', callback_data: 'owner_settings' },
        { text: '🏠 Main', callback_data: 'main_menu' }
      ]
    ];

    await editMessage(chatId, messageId, callbackQueryId, message, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: keyboard }
    });

  } catch (error) {
    console.error('Error showAdminMenu:', error);
  }
}

async function addCSAdminHandler(chatId, userId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }

    // Set user selection untuk menunggu input user ID
    const selection = {
      step: 'awaiting_cs_admin_id',
      timestamp: Date.now()
    };
    userSelections.set(userId, selection);

    await editMessage(chatId, messageId, callbackQueryId,
      `<b>➕ ADD CS ADMIN</b>\n\n` +
      `Send User ID to add as CS Admin:\n\n` +
      `Example: <code>123456789</code>\n\n` +
      `<i>User must have started the bot before</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: '🔙 Back', callback_data: 'owner_cs_menu' }]
          ]
        }
      }
    );

  } catch (error) {
    console.error('Error addCSAdminHandler:', error);
  }
}

async function removeCSAdminHandler(chatId, userId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }

    const csAdmins = config.cs_admins || [];
    
    if (csAdmins.length === 0) {
      await editMessage(chatId, messageId, callbackQueryId,
        `<b>➖ REMOVE CS ADMIN</b>\n\n` +
        `No CS Admins to remove.\n\n` +
        `<i>Add CS Admins first</i>`,
        {
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [{ text: '➕ Add CS', callback_data: 'add_cs_admin' }],
              [{ text: '🔙 Back', callback_data: 'owner_cs_menu' }]
            ]
          }
        }
      );
      return;
    }

    // Set user selection untuk menunggu input user ID
    const selection = {
      step: 'awaiting_remove_cs_admin_id',
      timestamp: Date.now()
    };
    userSelections.set(userId, selection);

    let message = `<b>➖ REMOVE CS ADMIN</b>\n\n`;
    message += `<b>Current CS Admins:</b>\n`;
    csAdmins.forEach((id, index) => {
      message += `${index + 1}. <code>${id}</code>\n`;
    });
    message += `\nSend User ID to remove from CS Admins:\n\n`;
    message += `Example: <code>123456789</code>`;

    await editMessage(chatId, messageId, callbackQueryId, message, {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '🔙 Back', callback_data: 'owner_cs_menu' }]
        ]
      }
    });

  } catch (error) {
    console.error('Error removeCSAdminHandler:', error);
  }
}

async function listCSAdminsHandler(chatId, userId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }

    const csAdmins = config.cs_admins || [];
    
    let message = `<b>📋 CS ADMIN LIST</b>\n\n`;
    
    if (csAdmins.length === 0) {
      message += `<i>No CS Admins configured</i>\n\n`;
      message += `Add CS Admins to manage customer support.`;
    } else {
      message += `<b>Total CS Admins:</b> ${csAdmins.length}\n\n`;
      
      csAdmins.forEach((adminId, index) => {
        // Cek apakah admin juga merupakan owner
        const isOwner = owner_ids.includes(adminId);
        message += `<b>${index + 1}. <code>${adminId}</code></b>\n`;
        message += `├ Type: ${isOwner ? '👑 Owner + CS' : '💬 CS Only'}\n`;
        message += `└ Actions: [Manage](#)\n\n`;
      });
    }
    
    const keyboard = [];
    
    // Tambahkan tombol untuk setiap CS admin
    csAdmins.forEach((adminId, index) => {
      keyboard.push([
        { 
          text: `${index + 1}. ${adminId.substring(0, 8)}...`, 
          callback_data: `cs_admin_info_${adminId}` 
        }
      ]);
    });
    
    // Jika ada CS admins, tambahkan tombol aksi
    if (csAdmins.length > 0) {
      keyboard.push([
        { text: '➖ Remove CS', callback_data: 'remove_cs_admin' },
        { text: '➕ Add CS', callback_data: 'add_cs_admin' }
      ]);
    } else {
      keyboard.push([
        { text: '➕ Add CS Admin', callback_data: 'add_cs_admin' }
      ]);
    }
    
    keyboard.push([
      { text: '🔄 Refresh', callback_data: 'list_cs_admins' },
      { text: '🔙 Back', callback_data: 'owner_cs_menu' }
    ]);

    await editMessage(chatId, messageId, callbackQueryId, message, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: keyboard }
    });

  } catch (error) {
    console.error('Error listCSAdminsHandler:', error);
  }
}

async function showCSAdminInfo(chatId, userId, targetAdminId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }

    const csAdmins = config.cs_admins || [];
    const isCSAdmin = csAdmins.includes(targetAdminId);
    const isOwner = owner_ids.includes(targetAdminId);
    
    // Coba dapatkan info user
    let userInfo = {};
    try {
      const chat = await bot.getChat(targetAdminId);
      userInfo = {
        firstName: chat.first_name || 'Unknown',
        lastName: chat.last_name || '',
        username: chat.username ? `@${chat.username}` : 'No username',
        isBot: chat.is_bot || false
      };
    } catch (error) {
      userInfo = {
        firstName: 'Unknown',
        lastName: '',
        username: 'No username',
        isBot: false
      };
    }
    
    let message = `<b>💬 CS ADMIN INFO</b>\n\n`;
    
    message += `<b>User Information:</b>\n`;
    message += `├ ID: <code>${targetAdminId}</code>\n`;
    message += `├ Name: ${userInfo.firstName} ${userInfo.lastName}\n`;
    message += `├ Username: ${userInfo.username}\n`;
    message += `├ Bot: ${userInfo.isBot ? '✅ Yes' : '❌ No'}\n`;
    message += `├ Owner: ${isOwner ? '✅ Yes' : '❌ No'}\n`;
    message += `└ CS Admin: ${isCSAdmin ? '✅ Yes' : '❌ No'}\n\n`;
    
    if (isCSAdmin) {
      message += `<b>CS Admin Status:</b> Active\n`;
      message += `<i>This user can access CS features</i>\n\n`;
    } else {
      message += `<b>CS Admin Status:</b> Not CS Admin\n`;
      message += `<i>This user cannot access CS features</i>\n\n`;
    }
    
    const keyboard = [];
    
    // Tombol aksi berdasarkan status
    if (isCSAdmin) {
      keyboard.push([
        { 
          text: '➖ Remove as CS', 
          callback_data: `cs_remove_confirm_${targetAdminId}` 
        }
      ]);
    } else {
      keyboard.push([
        { 
          text: '➕ Add as CS', 
          callback_data: `cs_add_confirm_${targetAdminId}` 
        }
      ]);
    }
    
    // Tombol tambahan
    keyboard.push([
      { text: '📋 All CS Admins', callback_data: 'list_cs_admins' },
      { text: '➕ Add New CS', callback_data: 'add_cs_admin' }
    ]);
    
    keyboard.push([
      { text: '🔙 Back', callback_data: 'owner_cs_menu' }
    ]);

    await editMessage(chatId, messageId, callbackQueryId, message, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: keyboard }
    });

  } catch (error) {
    console.error('Error showCSAdminInfo:', error);
  }
}

async function confirmAddCSAdmin(chatId, userId, targetAdminId, messageId, callbackQueryId) {
  try {
    const success = addCSAdminToConfig(targetAdminId);
    
    if (success) {
      await editMessage(chatId, messageId, callbackQueryId,
        `<b>✅ CS ADMIN ADDED</b>\n\n` +
        `User ID: <code>${targetAdminId}</code>\n` +
        `Added by: ${userId}\n` +
        `Time: ${new Date().toLocaleString('id-ID')}\n\n` +
        `<i>User is now a CS Admin</i>`,
        {
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [
                { text: '📋 View All', callback_data: 'list_cs_admins' },
                { text: '➕ Add More', callback_data: 'add_cs_admin' }
              ],
              [
                { text: '🔙 CS Menu', callback_data: 'owner_cs_menu' }
              ]
            ]
          }
        }
      );
    } else {
      await editMessage(chatId, messageId, callbackQueryId,
        `<b>❌ FAILED TO ADD CS ADMIN</b>\n\n` +
        `User may already be a CS Admin or there was an error.`,
        {
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [{ text: '🔙 Try Again', callback_data: 'owner_cs_menu' }]
            ]
          }
        }
      );
    }
    
  } catch (error) {
    console.error('Error confirmAddCSAdmin:', error);
  }
}

async function confirmRemoveCSAdmin(chatId, userId, targetAdminId, messageId, callbackQueryId) {
  try {
    const success = removeCSAdminFromConfig(targetAdminId);
    
    if (success) {
      await editMessage(chatId, messageId, callbackQueryId,
        `<b>✅ CS ADMIN REMOVED</b>\n\n` +
        `User ID: <code>${targetAdminId}</code>\n` +
        `Removed by: ${userId}\n` +
        `Time: ${new Date().toLocaleString('id-ID')}\n\n` +
        `<i>User is no longer a CS Admin</i>`,
        {
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [
                { text: '📋 View All', callback_data: 'list_cs_admins' },
                { text: '➖ Remove More', callback_data: 'remove_cs_admin' }
              ],
              [
                { text: '🔙 CS Menu', callback_data: 'owner_cs_menu' }
              ]
            ]
          }
        }
      );
    } else {
      await editMessage(chatId, messageId, callbackQueryId,
        `<b>❌ FAILED TO REMOVE CS ADMIN</b>\n\n` +
        `User may not be a CS Admin or there was an error.`,
        {
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [{ text: '🔙 Try Again', callback_data: 'owner_cs_menu' }]
            ]
          }
        }
      );
    }
    
  } catch (error) {
    console.error('Error confirmRemoveCSAdmin:', error);
  }
}

// Add CS Admin to config
function addCSAdmin(userId) {
  try {
    const configPath = path.join(__dirname, 'config.js');
    let configContent = fs.readFileSync(configPath, 'utf8');
    
    // Cek jika cs_admins sudah ada di config
    if (!configContent.includes('cs_admins')) {
      // Tambahkan cs_admins setelah owner_ids
      configContent = configContent.replace(
        /owner_ids:\s*\[([^\]]+)\]/,
        `owner_ids: [$1],\n  cs_admins: ['${userId}']`
      );
    } else {
      // Update cs_admins yang sudah ada
      configContent = configContent.replace(
        /cs_admins:\s*\[([^\]]+)\]/,
        `cs_admins: [$1, '${userId}']`
      );
    }
    
    fs.writeFileSync(configPath, configContent);
    
    // Reload config
    delete require.cache[require.resolve('./config')];
    const newConfig = require('./config');
    
    // Update global config
    Object.assign(config, newConfig);
    
    return true;
  } catch (error) {
    console.error('Error adding CS admin:', error);
    return false;
  }
}

// ========================= OWNER MENU COMMAND BUTTONS =========================

// Update showOwnerMenu function menjadi lebih lengkap dengan button
async function showOwnerMenu(chatId, userId, messageId, callbackQueryId) {
  try {
    if (!owner_ids.includes(userId.toString())) {
      await bot.answerCallbackQuery(callbackQueryId, {
        text: '⛔ Akses Ditolak\nHanya owner yang bisa mengakses menu ini',
        show_alert: true
      });
      return;
    }

    // Hitung statistik cepat
    const data = loadData();
    const balances = loadBalances();
    const totalBalance = Object.values(balances).reduce((sum, b) => sum + (parseInt(b) || 0), 0);
    const totalUsers = data.users?.length || 0;
    
    // Hitung total VPS
    const vpsOrders = loadVPSOrders();
    const totalVPS = vpsOrders.orders?.length || 0;
    
    // Hitung total panel
    const panelOrders = loadPanelOrders();
    const totalPanel = panelOrders.orders?.length || 0;
    
    // Dapatkan status maintenance
    const maintenance = getMaintenanceInfo();
    const maintenanceStatus = maintenance.active ? '🔴 ON' : '🟢 OFF';
    
    const message = `<b>👑 OWNER CONTROL PANEL</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<b>📊 QUICK STATS:</b>
├ 👥 Total Users: ${totalUsers}
├ 💰 Total Balance: ${formatCurrency(totalBalance)}
├ 🖥️ Total VPS: ${totalVPS}
├ 📦 Total Panel: ${totalPanel}
├ 🎫 Active Vouchers: ${getActiveVouchers().length}
└ 🔧 Maintenance: ${maintenanceStatus}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<b>⚡ Pilih menu dibawah:</b>`;

    const keyboard = [
      // Baris 1: User Management
      [
        { text: '👥 User Manager', callback_data: 'owner_user_manager' },
        { text: '💰 Balance Manager', callback_data: 'owner_balance_manager' },
        { text: '🚫 Ban Control', callback_data: 'owner_ban_manager' }
      ],
      // Baris 2: Admin & CS
      [
        { text: '👑 Tambah Owner', callback_data: 'owner_admin_menu' },
        { text: '💬 CS Panel', callback_data: 'owner_cs_menu' },
        { text: '📊 Bot Stats', callback_data: 'owner_stats' }
      ],
      // Baris 3: Script & Voucher
      [
        { text: '📜 Script Manager', callback_data: 'owner_script_menu' },
        { text: '🎫 Voucher Manager', callback_data: 'owner_voucher_menu' }
      ],
      // Baris 4: VPS Management
      [
        { text: '📋 VPS Orders', callback_data: 'owner_vps_list' }
      ],
      // Baris 5: Panel Management
      [
        { text: '📦 Panel Orders', callback_data: 'owner_panel_list' }
      ],
      // Baris 6: Finance
      [
        { text: '💰 Withdraw', callback_data: 'withdraw_menu' },
        { text: '📋 Withdraw History', callback_data: 'withdraw_history' },
        { text: '💸 Set Profit', callback_data: 'owner_setprofit_menu' }
      ],
      // Baris 7: Database & Backup
      [
        { text: '💾 Database', callback_data: 'owner_database_menu' },
        { text: '📁 Restore Backup', callback_data: 'restore_menu' },
        { text: '🔄 Refresh Cache', callback_data: 'refresh_cache' }
      ],
      // Baris 8: Maintenance & Broadcast
      [
        { text: '🔧 Maintenance', callback_data: 'owner_maintenance_menu' },
        { text: '📢 Broadcast', callback_data: 'owner_broadcast_menu' },
        { text: '⚙️ Settings', callback_data: 'owner_settings' }
      ],
      // Baris 9: Tools & Info
      [
        { text: '📊 Referral Stats', callback_data: 'owner_refstats' },
        { text: '🔍 Check DB', callback_data: 'owner_checkdb' },
        { text: '📋 List Users', callback_data: 'owner_list_users' }
      ],
      // Baris 10: Return
      [
        { text: '🏠 Menu Utama', callback_data: 'main_menu' }
      ]
    ];

    await editMessage(chatId, messageId, callbackQueryId, message, {
      reply_markup: { inline_keyboard: keyboard },
      parse_mode: 'HTML'
    });

  } catch (error) {
    console.error('Error showOwnerMenu:', error);
    await editMessage(chatId, messageId, callbackQueryId,
      '❌ Gagal memuat Owner Menu.\n\nSilakan coba lagi.',
      { parse_mode: 'HTML' }
    );
  }
}

// Helper function untuk mendapatkan waktu backup terakhir
function getLastBackupTime() {
  try {
    const backupDir = path.join(__dirname, 'backup');
    if (!fs.existsSync(backupDir)) return 'Tidak ada';
    
    const backups = fs.readdirSync(backupDir)
      .filter(f => f.startsWith('backup_') && f.endsWith('.zip'))
      .map(f => ({
        name: f,
        mtime: fs.statSync(path.join(backupDir, f)).mtime
      }))
      .sort((a, b) => b.mtime - a.mtime);
    
    if (backups.length === 0) return 'Tidak ada';
    
    const lastBackup = backups[0].mtime;
    const now = new Date();
    const diffHours = Math.floor((now - lastBackup) / (1000 * 60 * 60));
    
    if (diffHours < 1) return 'Baru saja';
    if (diffHours < 24) return `${diffHours} jam lalu`;
    return `${Math.floor(diffHours / 24)} hari lalu`;
  } catch (error) {
    return 'Error';
  }
}

// ========================= OWNER ADDITIONAL MENUS =========================

// Menu Maintenance
async function showOwnerMaintenanceMenu(chatId, userId, messageId, callbackQueryId) {
  try {
    const maintenance = getMaintenanceInfo();
    const status = maintenance.active ? '🟢 ON' : '🔴 OFF';
    const statusEmoji = maintenance.active ? '⚠️' : '✅';
    
    let message = `<b>🔧 MAINTENANCE MODE</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<b>Status Saat Ini:</b> ${statusEmoji} ${status}

${maintenance.active ? `
<b>Alasan:</b> ${maintenance.reason}
<b>Waktu:</b> ${maintenance.time}
` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<b>Pilih tindakan:</b>`;

    const keyboard = [
      [
        { text: maintenance.active ? '🔴 Turn OFF' : '🟢 Turn ON', 
          callback_data: maintenance.active ? 'maintenance_off' : 'maintenance_on' }
      ],
      [
        { text: '📝 Set Reason', callback_data: 'maintenance_set_reason' },
        { text: '🔄 Refresh', callback_data: 'owner_maintenance_menu' }
      ],
      [
        { text: '🔙 Back', callback_data: 'owner_menu' }
      ]
    ];

    await editMessage(chatId, messageId, callbackQueryId, message, {
      reply_markup: { inline_keyboard: keyboard },
      parse_mode: 'HTML'
    });

  } catch (error) {
    console.error('Error showOwnerMaintenanceMenu:', error);
  }
}

// Menu Broadcast
async function showOwnerBroadcastMenu(chatId, userId, messageId, callbackQueryId) {
  try {
    const data = loadData();
    const totalUsers = data.users?.length || 0;
    
    const message = `<b>📢 BROADCAST MESSAGE</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<b>📊 Statistik:</b>
├ Total Users: ${totalUsers}
└ Status: Ready

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<b>Cara menggunakan:</b>
1️⃣ Reply pesan yang ingin di-broadcast
2️⃣ Ketik /broadcast

<b>Supported formats:</b>
• Text
• Photo + Caption
• Document + Caption
• Video + Caption

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<i>⚠️ Broadcast akan dikirim ke SEMUA user!</i>`;

    const keyboard = [
      [
        { text: '📝 Test Broadcast', callback_data: 'broadcast_test' },
        { text: '📊 Preview', callback_data: 'broadcast_preview' }
      ],
      [
        { text: '🔙 Back', callback_data: 'owner_menu' }
      ]
    ];

    await editMessage(chatId, messageId, callbackQueryId, message, {
      reply_markup: { inline_keyboard: keyboard },
      parse_mode: 'HTML'
    });

  } catch (error) {
    console.error('Error showOwnerBroadcastMenu:', error);
  }
}

// Menu Set Profit
async function showOwnerSetProfitMenu(chatId, userId, messageId, callbackQueryId) {
  try {
    const currentProfit = Number(config.UNTUNG_NOKOS) || 0;
    
    const message = `<b>💰 SET KEUNTUNGAN NOKOS</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<b>Keuntungan saat ini:</b>
${formatCurrency(currentProfit)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<b>Pilih nominal keuntungan:</b>

• Klik tombol dibawah
• Atau ketik /setprofit [jumlah]`;

    const keyboard = [
      [
        { text: '💰 0 (No Profit)', callback_data: 'setprofit_0' },
        { text: '💰 500', callback_data: 'setprofit_500' },
        { text: '💰 1.000', callback_data: 'setprofit_1000' }
      ],
      [
        { text: '💰 2.000', callback_data: 'setprofit_2000' },
        { text: '💰 5.000', callback_data: 'setprofit_5000' },
        { text: '💰 10.000', callback_data: 'setprofit_10000' }
      ],
      [
        { text: '✏️ Custom', callback_data: 'setprofit_custom' },
        { text: '🔄 Reset to 0', callback_data: 'setprofit_0' }
      ],
      [
        { text: '🔙 Back', callback_data: 'owner_menu' }
      ]
    ];

    await editMessage(chatId, messageId, callbackQueryId, message, {
      reply_markup: { inline_keyboard: keyboard },
      parse_mode: 'HTML'
    });

  } catch (error) {
    console.error('Error showOwnerSetProfitMenu:', error);
  }
}

// ========================= OWNER VPS LIST FUNCTIONS =========================

async function showOwnerVPSList(chatId, userId, messageId, callbackQueryId, page = 0) {
    try {
        const orders = loadVPSOrders();
        const userOrders = orders.orders || [];
        const itemsPerPage = 10;
        const totalPages = Math.ceil(userOrders.length / itemsPerPage);
        
        if (page < 0) page = 0;
        if (page >= totalPages && totalPages > 0) page = totalPages - 1;
        
        const startIndex = page * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, userOrders.length);
        const pageOrders = userOrders.slice(startIndex, endIndex);
        
        let message = `<b>🖥️ SEMUA VPS ORDER</b>\n\n`;
        message += `<b>Total:</b> ${userOrders.length} VPS\n`;
        message += `<b>Halaman:</b> ${page + 1}/${totalPages}\n\n`;
        
        if (pageOrders.length === 0) {
            message += `<i>Belum ada order VPS</i>`;
        } else {
            pageOrders.forEach((order, idx) => {
                const num = startIndex + idx + 1;
                const isFree = order.isFree === true;
                const status = order.status === 'active' ? '✅' : '❌';
                const date = new Date(order.createdAt).toLocaleDateString('id-ID');
                
                message += `${num}. ${status} ${isFree ? '🎁 FREE' : '💰 PAID'} - ${order.productName}\n`;
                message += `   ├ User: <code>${order.userId}</code>\n`;
                message += `   ├ IP: ${order.ip || 'N/A'}\n`;
                message += `   └ Tanggal: ${date}\n\n`;
            });
        }
        
        const keyboard = [];
        
        pageOrders.forEach((order, idx) => {
            const num = startIndex + idx + 1;
            keyboard.push([
                { text: `${num}. ${order.productName.substring(0, 25)}`, callback_data: `owner_vps_detail_${order.id}` }
            ]);
        });
        
        if (totalPages > 1) {
            const navRow = [];
            if (page > 0) navRow.push({ text: '◀️ Prev', callback_data: `owner_vps_list_page_${page - 1}` });
            navRow.push({ text: `📄 ${page + 1}/${totalPages}`, callback_data: 'no_action' });
            if (page < totalPages - 1) navRow.push({ text: 'Next ▶️', callback_data: `owner_vps_list_page_${page + 1}` });
            if (navRow.length > 0) keyboard.push(navRow);
        }
        
        keyboard.push([
            { text: '🔄 Refresh', callback_data: 'owner_vps_list' },
            { text: '🔙 Kembali', callback_data: 'owner_menu' }
        ]);
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error('Error showOwnerVPSList:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Gagal memuat daftar VPS.',
            { parse_mode: 'HTML' }
        );
    }
}

async function showOwnerVPSDetail(chatId, userId, orderId, messageId, callbackQueryId) {
    try {
        const orders = loadVPSOrders();
        const order = orders.orders.find(o => o.id === orderId);
        
        if (!order) {
            await editMessage(chatId, messageId, callbackQueryId,
                '❌ Order VPS tidak ditemukan.',
                { parse_mode: 'HTML' }
            );
            return;
        }
        
        const isFree = order.isFree === true;
        const date = new Date(order.createdAt).toLocaleString('id-ID');
        
        let message = `<b>🖥️ DETAIL VPS ORDER</b>\n\n`;
        message += `<b>Order ID:</b> <code>${order.id}</code>\n`;
        message += `<b>User ID:</b> <code>${order.userId}</code>\n`;
        message += `<b>Paket:</b> ${order.productName}\n`;
        message += `<b>Spesifikasi:</b> ${order.label || '-'}\n`;
        message += `<b>Harga:</b> ${isFree ? 'GRATIS 🎁' : formatCurrency(order.price)}\n`;
        message += `<b>Status:</b> ${order.status === 'active' ? '✅ Aktif' : '❌ Nonaktif'}\n\n`;
        
        message += `<b>📋 Informasi Login:</b>\n`;
        message += `<b>IP Address:</b> <code>${order.ip || 'N/A'}</code>\n`;
        message += `<b>Username:</b> <code>root</code>\n`;
        message += `<b>Password:</b> <code>${order.password || 'N/A'}</code>\n`;
        message += `<b>Hostname:</b> ${order.hostname || '-'}\n\n`;
        
        message += `<b>🌍 Detail Lainnya:</b>\n`;
        message += `<b>OS:</b> ${order.osName || order.os || '-'}\n`;
        message += `<b>Region:</b> ${order.regionName || order.region || '-'}\n`;
        message += `<b>Garansi:</b> ${order.garansi || '-'}\n`;
        message += `<b>Dibuat:</b> ${date}\n`;
        
        const keyboard = [
            [
                { text: '📋 Kembali ke Daftar', callback_data: 'owner_vps_list' },
                { text: '🔙 Owner Menu', callback_data: 'owner_menu' }
            ]
        ];
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error('Error showOwnerVPSDetail:', error);
    }
}

// ========================= OWNER PANEL LIST FUNCTIONS =========================

async function showOwnerPanelList(chatId, userId, messageId, callbackQueryId, page = 0) {
    try {
        const orders = loadPanelOrders();
        const userOrders = orders.orders || [];
        const itemsPerPage = 10;
        const totalPages = Math.ceil(userOrders.length / itemsPerPage);
        
        if (page < 0) page = 0;
        if (page >= totalPages && totalPages > 0) page = totalPages - 1;
        
        const startIndex = page * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, userOrders.length);
        const pageOrders = userOrders.slice(startIndex, endIndex);
        
        let message = `<b>📦 SEMUA PANEL ORDER</b>\n\n`;
        message += `<b>Total:</b> ${userOrders.length} Panel\n`;
        message += `<b>Halaman:</b> ${page + 1}/${totalPages}\n\n`;
        
        if (pageOrders.length === 0) {
            message += `<i>Belum ada order Panel</i>`;
        } else {
            pageOrders.forEach((order, idx) => {
                const num = startIndex + idx + 1;
                const status = order.status === 'active' ? '✅' : '❌';
                const isAdmin = order.isAdmin === true;
                const date = new Date(order.createdAt).toLocaleDateString('id-ID');
                
                message += `${num}. ${status} ${isAdmin ? '👑 ADMIN' : '🖥️ USER'} - ${order.productName}\n`;
                message += `   ├ User: <code>${order.userId}</code>\n`;
                message += `   ├ Username: ${order.username}\n`;
                message += `   └ Tanggal: ${date}\n\n`;
            });
        }
        
        const keyboard = [];
        
        pageOrders.forEach((order, idx) => {
            const num = startIndex + idx + 1;
            keyboard.push([
                { text: `${num}. ${order.username.substring(0, 20)}`, callback_data: `owner_panel_detail_${order.id}` }
            ]);
        });
        
        if (totalPages > 1) {
            const navRow = [];
            if (page > 0) navRow.push({ text: '◀️ Prev', callback_data: `owner_panel_list_page_${page - 1}` });
            navRow.push({ text: `📄 ${page + 1}/${totalPages}`, callback_data: 'no_action' });
            if (page < totalPages - 1) navRow.push({ text: 'Next ▶️', callback_data: `owner_panel_list_page_${page + 1}` });
            if (navRow.length > 0) keyboard.push(navRow);
        }
        
        keyboard.push([
            { text: '🔄 Refresh', callback_data: 'owner_panel_list' },
            { text: '🔙 Kembali', callback_data: 'owner_menu' }
        ]);
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error('Error showOwnerPanelList:', error);
    }
}

async function showOwnerPanelDetail(chatId, userId, orderId, messageId, callbackQueryId) {
    try {
        const orders = loadPanelOrders();
        const order = orders.orders.find(o => o.id === orderId);
        
        if (!order) {
            await editMessage(chatId, messageId, callbackQueryId,
                '❌ Order Panel tidak ditemukan.',
                { parse_mode: 'HTML' }
            );
            return;
        }
        
        const date = new Date(order.createdAt).toLocaleString('id-ID');
        const isAdmin = order.isAdmin === true;
        
        let message = `<b>📦 DETAIL PANEL ORDER</b>\n\n`;
        message += `<b>Order ID:</b> <code>${order.id}</code>\n`;
        message += `<b>User ID:</b> <code>${order.userId}</code>\n`;
        message += `<b>Paket:</b> ${order.productName}\n`;
        message += `<b>Harga:</b> ${formatCurrency(order.price)}\n`;
        message += `<b>Status:</b> ${order.status === 'active' ? '✅ Aktif' : '❌ Nonaktif'}\n\n`;
        
        message += `<b>📋 Informasi Login:</b>\n`;
        message += `<b>URL Panel:</b> <code>${panelDomain}</code>\n`;
        message += `<b>Username:</b> <code>${order.username}</code>\n`;
        message += `<b>Email:</b> <code>${order.email}</code>\n`;
        message += `<b>Password:</b> <code>${order.password}</code>\n\n`;
        
        if (!isAdmin) {
            message += `<b>📊 Spesifikasi:</b>\n`;
            message += `<b>Disk:</b> ${order.disk === 0 ? 'Unlimited' : `${order.disk} MB`}\n`;
            message += `<b>RAM:</b> ${order.memory} MB\n`;
            message += `<b>CPU:</b> ${order.cpu}%\n`;
            message += `<b>Expired:</b> ${new Date(order.expiresAt).toLocaleDateString('id-ID')}\n\n`;
        } else {
            message += `<b>👑 Role:</b> ROOT ADMIN\n`;
            message += `<b>Expired:</b> ${new Date(order.expiresAt).toLocaleDateString('id-ID')}\n\n`;
        }
        
        message += `<b>📅 Dibuat:</b> ${date}`;
        
        const keyboard = [
            [
                { text: '📋 Kembali ke Daftar', callback_data: 'owner_panel_list' },
                { text: '🔙 Owner Menu', callback_data: 'owner_menu' }
            ]
        ];
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error('Error showOwnerPanelDetail:', error);
    }
}

// ========================= OWNER MAINTENANCE MENU =========================

async function showOwnerMaintenanceMenu(chatId, userId, messageId, callbackQueryId) {
    try {
        const maintenance = getMaintenanceInfo();
        const status = maintenance.active ? '🔴 ON' : '🟢 OFF';
        const statusEmoji = maintenance.active ? '⚠️' : '✅';
        
        let message = `<b>🔧 MAINTENANCE MODE</b>\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        message += `<b>Status Saat Ini:</b> ${statusEmoji} ${status}\n`;
        
        if (maintenance.active) {
            message += `<b>Alasan:</b> ${maintenance.reason}\n`;
            message += `<b>Waktu:</b> ${maintenance.time}\n`;
        }
        
        message += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `<b>Pilih tindakan:</b>`;
        
        const keyboard = [
            [
                { text: maintenance.active ? '🔴 Turn OFF' : '🟢 Turn ON', 
                  callback_data: maintenance.active ? 'maintenance_off' : 'maintenance_on' }
            ],
            [
                { text: '📝 Set/Update Reason', callback_data: 'maintenance_set_reason' },
                { text: '🔄 Refresh', callback_data: 'owner_maintenance_menu' }
            ],
            [
                { text: '🔙 Kembali', callback_data: 'owner_menu' }
            ]
        ];
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error('Error showOwnerMaintenanceMenu:', error);
    }
}

// ========================= OWNER BROADCAST MENU =========================

async function showOwnerBroadcastMenu(chatId, userId, messageId, callbackQueryId) {
    try {
        const data = loadData();
        const totalUsers = data.users?.length || 0;
        
        const message = `<b>📢 BROADCAST MESSAGE</b>\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        message += `<b>📊 Statistik:</b>\n`;
        message += `├ Total Users: ${totalUsers}\n`;
        message += `└ Status: Ready\n\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        message += `<b>Cara menggunakan:</b>\n`;
        message += `1️⃣ Reply pesan yang ingin di-broadcast\n`;
        message += `2️⃣ Ketik /broadcast\n\n`;
        message += `<b>Supported formats:</b>\n`;
        message += `• Text\n`;
        message += `• Photo + Caption\n`;
        message += `• Document + Caption\n`;
        message += `• Video + Caption\n\n`;
        message += `<i>⚠️ Broadcast akan dikirim ke SEMUA user!</i>`;
        
        const keyboard = [
            [
                { text: '📝 Test Broadcast', callback_data: 'broadcast_test' },
                { text: '📊 Preview', callback_data: 'broadcast_preview' }
            ],
            [
                { text: '🔙 Kembali', callback_data: 'owner_menu' }
            ]
        ];
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error('Error showOwnerBroadcastMenu:', error);
    }
}

// ========================= OWNER SET PROFIT MENU =========================

async function showOwnerSetProfitMenu(chatId, userId, messageId, callbackQueryId) {
    try {
        const currentProfit = Number(config.UNTUNG_NOKOS) || 0;
        
        const message = `<b>💰 SET KEUNTUNGAN NOKOS</b>\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        message += `<b>Keuntungan saat ini:</b>\n`;
        message += `${formatCurrency(currentProfit)}\n\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
        message += `<b>Pilih nominal keuntungan:</b>\n\n`;
        message += `• Klik tombol dibawah\n`;
        message += `• Atau ketik /setprofit [jumlah]`;
        
        const keyboard = [
            [
                { text: '💰 0 (No Profit)', callback_data: 'setprofit_0' },
                { text: '💰 500', callback_data: 'setprofit_500' },
                { text: '💰 1.000', callback_data: 'setprofit_1000' }
            ],
            [
                { text: '💰 2.000', callback_data: 'setprofit_2000' },
                { text: '💰 5.000', callback_data: 'setprofit_5000' },
                { text: '💰 10.000', callback_data: 'setprofit_10000' }
            ],
            [
                { text: '💰 15.000', callback_data: 'setprofit_15000' },
                { text: '💰 20.000', callback_data: 'setprofit_20000' },
                { text: '💰 25.000', callback_data: 'setprofit_25000' }
            ],
            [
                { text: '✏️ Custom', callback_data: 'setprofit_custom' },
                { text: '🔄 Reset to 0', callback_data: 'setprofit_0' }
            ],
            [
                { text: '🔙 Kembali', callback_data: 'owner_menu' }
            ]
        ];
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error('Error showOwnerSetProfitMenu:', error);
    }
}

async function showNokosMenu(chatId, userId, messageId, callbackQueryId, page = 0) {
    try {
        const servicesData = await getServicesCached();
        
        if (!servicesData || !servicesData.success) {
            await editMessage(chatId, messageId, callbackQueryId, 
                '<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n❌ <b>GAGAL MEMUAT LAYANAN</b>\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nSilakan coba lagi nanti.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>',
                { parse_mode: 'HTML' }
            );
            return;
        }

        const services = servicesData.data;
        
        const popularServiceNames = ['whatsapp', 'telegram', 'dana', 'instagram', 'indomaret', 'tiktok'];
        
        const popularServices = [];
        const otherServices = [];
        
        for (const service of services) {
            const serviceNameLower = service.service_name.toLowerCase();
            let isPopular = false;
            for (const popularName of popularServiceNames) {
                if (serviceNameLower.includes(popularName)) {
                    isPopular = true;
                    popularServices.push(service);
                    break;
                }
            }
            if (!isPopular) otherServices.push(service);
        }
        
        const orderedPopular = [];
        for (const popularName of popularServiceNames) {
            const found = popularServices.find(s => s.service_name.toLowerCase().includes(popularName));
            if (found) orderedPopular.push(found);
        }
        
        otherServices.sort((a, b) => a.service_name.localeCompare(b.service_name));

        const itemsPerPage = 6;
        const totalOtherPages = Math.ceil(otherServices.length / itemsPerPage);
        
        if (page < 0) page = 0;
        if (page >= totalOtherPages && totalOtherPages > 0) page = totalOtherPages - 1;
        
        const startIndex = page * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, otherServices.length);
        const pageOtherServices = otherServices.slice(startIndex, endIndex);

        let message = `<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 <b>LAYANAN NOKOS</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<i>Pilih layanan untuk order nomor OTP</i>

<b>🌟 LAYANAN POPULER</b>\n`;
        
        orderedPopular.forEach((service, index) => {
            message += `${index + 1}. ${service.service_name}\n`;
        });
        
        message += `\n<b>📋 LAYANAN LAINNYA</b> (Halaman ${page + 1}/${totalOtherPages})\n\n`;
        
        pageOtherServices.forEach((service, index) => {
            const globalNumber = startIndex + index + 1;
            let displayName = service.service_name;
            if (displayName.length > 25) displayName = displayName.substring(0, 22) + '...';
            message += `${globalNumber}. ${displayName}\n`;
        });
        
        message += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`;

        const keyboard = [];
        
        for (let i = 0; i < orderedPopular.length; i += 2) {
            const row = [];
            if (orderedPopular[i]) {
                let buttonText = orderedPopular[i].service_name;
                if (buttonText.length > 12) buttonText = buttonText.substring(0, 10) + '..';
                row.push({ text: `🌟 ${buttonText}`, callback_data: `nokos_service_${orderedPopular[i].service_code}` });
            }
            if (orderedPopular[i + 1]) {
                let buttonText = orderedPopular[i + 1].service_name;
                if (buttonText.length > 12) buttonText = buttonText.substring(0, 10) + '..';
                row.push({ text: `🌟 ${buttonText}`, callback_data: `nokos_service_${orderedPopular[i + 1].service_code}` });
            }
            if (row.length > 0) keyboard.push(row);
        }

        for (let i = 0; i < pageOtherServices.length; i += 2) {
            const row = [];
            if (pageOtherServices[i]) {
                const globalNumber = startIndex + i + 1;
                let buttonText = pageOtherServices[i].service_name;
                if (buttonText.length > 15) buttonText = buttonText.substring(0, 12) + '..';
                row.push({ text: `${globalNumber}. ${buttonText}`, callback_data: `nokos_service_${pageOtherServices[i].service_code}` });
            }
            if (pageOtherServices[i + 1]) {
                const globalNumber = startIndex + i + 2;
                let buttonText = pageOtherServices[i + 1].service_name;
                if (buttonText.length > 15) buttonText = buttonText.substring(0, 12) + '..';
                row.push({ text: `${globalNumber}. ${buttonText}`, callback_data: `nokos_service_${pageOtherServices[i + 1].service_code}` });
            }
            if (row.length > 0) keyboard.push(row);
        }

        if (totalOtherPages > 1) {
            const navRow = [];
            if (page > 0) navRow.push({ text: '◀️ PREV', callback_data: `nokos_menu_prev_${page}` });
            else navRow.push({ text: '◀️', callback_data: 'no_action' });
            navRow.push({ text: `📄 ${page + 1}/${totalOtherPages}`, callback_data: 'no_action' });
            if (page < totalOtherPages - 1) navRow.push({ text: 'NEXT ▶️', callback_data: `nokos_menu_next_${page}` });
            else navRow.push({ text: '▶️', callback_data: 'no_action' });
            keyboard.push(navRow);
        }

        keyboard.push([{ text: '🔍 CARI LAYANAN', callback_data: 'search_service' }]);
        keyboard.push([{ text: '🏠 MENU UTAMA', callback_data: 'main_menu' }]);

        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });
        
    } catch (error) {
        console.error('Error in showNokosMenu:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            '<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n❌ <b>GAGAL MEMUAT MENU</b>\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nSilakan coba lagi.\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>',
            { 
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [[{ text: '🔄 COBA LAGI', callback_data: 'nokos_menu_page_0' }]]
                }
            }
        );
    }
}

async function showDepositMenu(chatId, userId, messageId, callbackQueryId) {
    const userBalance = getUserBalance(userId);
    
    const message = `<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 <b>TOPUP SALDO</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<b>💵 SALDO SAAT INI</b>
└ <b>${formatCurrency(userBalance)}</b>

<b>📋 INFORMASI DEPOSIT</b>
├ Minimal : Rp 2.000
├ Maksimal : Rp 5.000.000
└ Metode : QRIS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<b>💎 Pilih nominal dibawah :</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`;

    userSelections.set(userId, { step: 'rumahotp_deposit_amount' });
    
    await editMessage(chatId, messageId, callbackQueryId, message, {
        reply_markup: { 
            inline_keyboard: [
                [{ text: '💰 5.000', callback_data: 'deposit_amount_5000' }, { text: '💰 10.000', callback_data: 'deposit_amount_10000' }, { text: '💰 15.000', callback_data: 'deposit_amount_15000' }],
                [{ text: '💰 20.000', callback_data: 'deposit_amount_20000' }, { text: '💰 30.000', callback_data: 'deposit_amount_30000' }, { text: '💰 50.000', callback_data: 'deposit_amount_50000' }],
                [{ text: '💰 100.000', callback_data: 'deposit_amount_100000' }, { text: '💰 500.000', callback_data: 'deposit_amount_500000' }, { text: '💰 1.000.000', callback_data: 'deposit_amount_1000000' }],
                [{ text: '✏️ CUSTOM', callback_data: 'deposit_custom' }, { text: '🔙 KEMBALI', callback_data: 'main_menu' }]
            ] 
        },
        parse_mode: 'HTML'
    });
}

async function showOtherServices(chatId, userId, messageId, callbackQueryId, page = 0) {
    try {
        // Gunakan cache untuk services
        const servicesData = await getServicesCached();
        
        if (!servicesData || !servicesData.success) {
            await editMessage(chatId, messageId, callbackQueryId, 
                '<b>❌ Gagal mendapatkan layanan</b>\n\nSilakan coba lagi nanti.',
                { parse_mode: 'HTML' }
            );
            return;
        }

        const services = servicesData.data;

        // Filter layanan lainnya (tidak populer)
        const popularServiceNames = [
            'whatsapp', 'telegram', 'instagram', 'facebook', 
            'gojek', 'gopay', 'ovo', 'dana', 'tiktok', 'twitter'
        ];
        
        // Gunakan cache untuk hasil filter
        const cacheKey = 'other_services_filtered';
        let otherServices = servicesCache[cacheKey];
        
        if (!otherServices) {
            otherServices = [];
            for (const service of services) {
                const serviceNameLower = service.service_name.toLowerCase();
                let isPopular = false;
                
                for (const popularName of popularServiceNames) {
                    if (serviceNameLower.includes(popularName)) {
                        isPopular = true;
                        break;
                    }
                }
                
                if (!isPopular) {
                    otherServices.push(service);
                }
            }
            // Sort services alphabetically
            otherServices.sort((a, b) => a.service_name.localeCompare(b.service_name));
            servicesCache[cacheKey] = otherServices;
        }

        if (otherServices.length === 0) {
            await editMessage(chatId, messageId, callbackQueryId, 
                '<b>Layanan Lainnya</b>\n\nTidak ada layanan lainnya.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🔙 Kembali', callback_data: 'nokos_menu' }]
                        ]
                    }
                }
            );
            return;
        }

        const itemsPerPage = 10;
        const totalPages = Math.ceil(otherServices.length / itemsPerPage);
        
        // Validasi page
        if (page < 0) page = 0;
        if (page >= totalPages) page = totalPages - 1;
        
        const startIndex = page * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, otherServices.length);
        const pageServices = otherServices.slice(startIndex, endIndex);

        let message = `<b>📱 Layanan Lainnya</b>\n\n`;
        message += `<b>Total:</b> ${otherServices.length} layanan\n`;
        message += `<b>Halaman:</b> ${page + 1}/${totalPages}\n\n`;
        
        const keyboard = [];
        
        // Tampilkan layanan dengan nomor urut
        pageServices.forEach((service, index) => {
            const serviceNumber = startIndex + index + 1;
            const buttonText = `${serviceNumber}. ${service.service_name.substring(0, 25)}`;
            
            keyboard.push([
                { 
                    text: buttonText, 
                    callback_data: `nokos_service_${service.service_code}` 
                }
            ]);
        });

        // Navigation buttons - GESER NEXT DAN PREVIOUS
        const navButtons = [];
        
        // Tombol Previous
        if (page > 0) {
            navButtons.push({ 
                text: '◀️ Sebelumnya', 
                callback_data: `other_services_page_${page - 1}` 
            });
        } else {
            navButtons.push({ 
                text: '◀️', 
                callback_data: 'no_action' 
            });
        }
        
        // Info halaman
        navButtons.push({ 
            text: `📄 ${page + 1}/${totalPages}`, 
            callback_data: 'no_action' 
        });
        
        // Tombol Next
        if (page < totalPages - 1) {
            navButtons.push({ 
                text: '▶️ Berikutnya', 
                callback_data: `other_services_page_${page + 1}` 
            });
        } else {
            navButtons.push({ 
                text: '▶️', 
                callback_data: 'no_action' 
            });
        }
        
        if (navButtons.length > 0) {
            keyboard.push(navButtons);
        }

        // Search button
        keyboard.push([
            { text: '🔍 Cari Layanan', callback_data: 'search_service' },
            { text: '🔙 Kembali', callback_data: 'nokos_menu' }
        ]);

        keyboard.push([
            { text: '🏠 Menu Utama', callback_data: 'main_menu' }
        ]);

        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error('Error in showOtherServices:', error);
        await editMessage(chatId, messageId, callbackQueryId, 
            '❌ Gagal memuat layanan.\n\nSilakan coba lagi.',
            { 
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Coba Lagi', callback_data: 'nokos_menu' }]
                    ]
                }
            }
        );
    }
}

async function showCountryMenu(chatId, userId, serviceId, serviceName, messageId, callbackQueryId, page = 0) {
    try {
        const itemsPerPage = 30; // 5 baris x 6 tombol = 30 negara per halaman
        
        // Simpan data service di user selection
        let userSelection = userSelections.get(userId) || {};
        userSelection.step = 'nokos_country';
        userSelection.serviceId = serviceId;
        userSelection.serviceName = serviceName;
        userSelections.set(userId, userSelection);

        // Gunakan cache untuk countries
        const cacheKey = `countries_${serviceId}`;
        let countriesData = servicesCache[cacheKey];
        
        if (!countriesData) {
            await editMessage(chatId, messageId, callbackQueryId,
                '⏳ Memuat daftar negara...',
                { parse_mode: 'HTML' }
            );

            countriesData = await api.getCountries(serviceId);
            
            if (countriesData && countriesData.success) {
                servicesCache[cacheKey] = countriesData;
            }
        }
        
        if (!countriesData || !countriesData.success) {
            await editMessage(chatId, messageId, callbackQueryId, 
                '❌ Gagal mendapatkan daftar negara.\n\nSilakan coba lagi.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🔙 Kembali', callback_data: `nokos_service_${serviceId}` }]
                        ]
                    }
                }
            );
            return;
        }

        const allCountries = countriesData.data || [];
        
        if (allCountries.length === 0) {
            await editMessage(chatId, messageId, callbackQueryId, 
                `❌ Tidak ada negara tersedia untuk ${serviceName}.`,
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '📱 Pilih Layanan Lain', callback_data: 'nokos_menu' }]
                        ]
                    }
                }
            );
            return;
        }
 
        // Gunakan cache untuk sorted countries
        const sortedCacheKey = `sorted_countries_${serviceId}`;
        let sortedCountries = servicesCache[sortedCacheKey];
        
        if (!sortedCountries) {
            // Sort countries: Indonesia first, then others alphabetically
            const indonesiaCountries = [];
            const otherCountries = [];
            
            for (const country of allCountries) {
                const countryNameLower = country.name.toLowerCase();
                if (countryNameLower.includes('indonesia') || countryNameLower.includes('indo')) {
                    indonesiaCountries.push(country);
                } else {
                    otherCountries.push(country);
                }
            }
            
            otherCountries.sort((a, b) => a.name.localeCompare(b.name));
            sortedCountries = [...indonesiaCountries, ...otherCountries];
            servicesCache[sortedCacheKey] = sortedCountries;
        }

        const totalPages = Math.ceil(sortedCountries.length / itemsPerPage);
        if (page < 0) page = 0;
        if (page >= totalPages) page = totalPages - 1;

        const startIndex = page * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, sortedCountries.length);
        const currentCountries = sortedCountries.slice(startIndex, endIndex);

        let message = `<b>🌍 Pilih Negara</b>\n`;
        message += `📱 Layanan: ${serviceName}\n`;
        message += `📄 Halaman: ${page + 1}/${totalPages}\n`;
        message += `🌐 Total: ${sortedCountries.length} negara\n\n`;
        
        const keyboard = [];
       
        // 6 tombol per baris (5 baris = 30 negara)
        for (let i = 0; i < currentCountries.length; i += 5) {
            const row = [];
            
            for (let j = 0; j < 5; j++) {
                if (currentCountries[i + j]) {
                    const country = currentCountries[i + j];
                    
                    // Ambil kode negara untuk flag emoji
                    const flagEmoji = getFlagEmoji(country.iso_code);
                    
                    // Buat teks pendek untuk tombol (maks 10 karakter + flag)
                    let countryText = country.name;
                    if (countryText.length > 10) {
                        countryText = countryText.substring(0, 8) + '..';
                    }
                    
                    row.push({ 
                        text: `${flagEmoji} ${countryText}`, 
                        callback_data: `nokos_server_list_${country.number_id}_${encodeURIComponent(country.name)}` 
                    });
                } else {
                    // Tombol kosong jika tidak cukup
                    row.push({ 
                        text: '⬜', 
                        callback_data: 'no_action' 
                    });
                }
            }
            
            if (row.length > 0) {
                keyboard.push(row);
            }
        }

        // Navigation buttons - GESER NEXT DAN PREVIOUS
        const navButtons = [];
        
        // Tombol Previous
        if (page > 0) {
            navButtons.push({ 
                text: '◀️ Sebelumnya', 
                callback_data: `nokos_country_page_${serviceId}_${page - 1}` 
            });
        } else {
            navButtons.push({ 
                text: '◀️', 
                callback_data: 'no_action' 
            });
        }

        // Info halaman
        navButtons.push({ 
            text: `📄 ${page + 1}/${totalPages}`, 
            callback_data: 'no_action' 
        });

        // Tombol Next
        if (page < totalPages - 1) {
            navButtons.push({ 
                text: '▶️ Berikutnya', 
                callback_data: `nokos_country_page_${serviceId}_${page + 1}` 
            });
        } else {
            navButtons.push({ 
                text: '▶️', 
                callback_data: 'no_action' 
            });
        }
        
        keyboard.push(navButtons);

        // Search button
        keyboard.push([
            { text: '🔍 Cari Negara', callback_data: `search_country_${serviceId}` },
            { text: '📱 Layanan', callback_data: 'nokos_menu' }
        ]);

        keyboard.push([
            { text: '🏠 Menu Utama', callback_data: 'main_menu' }
        ]);

        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error('Error in showCountryMenu:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Terjadi kesalahan.\n\nSilakan coba lagi.',
            { 
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '🔄 Coba Lagi', callback_data: `nokos_service_${serviceId}` }],
                        [{ text: '🏠 Menu Utama', callback_data: 'main_menu' }]
                    ]
                }
            }
        );
    }
}

async function showSearchService(chatId, userId, messageId, callbackQueryId) {
    try {
        // Set user selection untuk menunggu input pencarian
        userSelections.set(userId, {
            step: 'search_service_input',
            timestamp: Date.now()
        });

        await editMessage(chatId, messageId, callbackQueryId,
            `<b>🔍 CARI LAYANAN</b>\n\n` +
            `Masukkan nama layanan yang ingin dicari:\n\n` +
            `Contoh: <code>whatsapp</code>\n` +
            `Contoh: <code>telegram</code>\n` +
            `Contoh: <code>instagram</code>\n\n` +
            `<i>Ketik 0 untuk membatalkan</i>`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '🔙 Kembali', callback_data: 'nokos_other_services_0' }]
                    ]
                }
            }
        );

    } catch (error) {
        console.error('Error in showSearchService:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Gagal memuat pencarian.',
            { parse_mode: 'HTML' }
        );
    }
}

async function searchService(chatId, userId, searchTerm, messageId) {
    try {
        const servicesData = await getServicesCached();
        
        if (!servicesData || !servicesData.success) {
            await sendNewMessage(chatId,
                '❌ Gagal mendapatkan data layanan.',
                { parse_mode: 'HTML' }
            );
            return;
        }

        const services = servicesData.data;
        
        // Filter services yang mengandung searchTerm (case insensitive)
        const searchLower = searchTerm.toLowerCase();
        const matchedServices = services.filter(service => 
            service.service_name.toLowerCase().includes(searchLower)
        );

        if (matchedServices.length === 0) {
            await sendNewMessage(chatId,
                `<b>🔍 HASIL PENCARIAN</b>\n\n` +
                `Pencarian: <code>${searchTerm}</code>\n` +
                `Hasil: Tidak ditemukan\n\n` +
                `<i>Coba dengan kata kunci lain</i>`,
                {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🔍 Cari Lagi', callback_data: 'search_service' }],
                            [{ text: '📱 Semua Layanan', callback_data: 'nokos_other_services_0' }]
                        ]
                    }
                }
            );
            return;
        }

        // Sort by relevance (exact match first, then alphabetical)
        matchedServices.sort((a, b) => {
            const aName = a.service_name.toLowerCase();
            const bName = b.service_name.toLowerCase();
            
            // Exact match priority
            if (aName === searchLower) return -1;
            if (bName === searchLower) return 1;
            
            // Starts with priority
            if (aName.startsWith(searchLower) && !bName.startsWith(searchLower)) return -1;
            if (!aName.startsWith(searchLower) && bName.startsWith(searchLower)) return 1;
            
            // Alphabetical
            return aName.localeCompare(bName);
        });

        const displayServices = matchedServices.slice(0, 15); // Maksimal 15 hasil

        let message = `<b>🔍 HASIL PENCARIAN</b>\n\n`;
        message += `Pencarian: <code>${searchTerm}</code>\n`;
        message += `Ditemukan: ${matchedServices.length} layanan\n\n`;

        const keyboard = [];

        displayServices.forEach((service, index) => {
            const buttonText = `${index + 1}. ${service.service_name}`;
            keyboard.push([
                { 
                    text: buttonText, 
                    callback_data: `nokos_service_${service.service_code}` 
                }
            ]);
        });

        if (matchedServices.length > 15) {
            message += `<i>... dan ${matchedServices.length - 15} layanan lainnya</i>\n\n`;
        }

        keyboard.push([
            { text: '🔍 Cari Lagi', callback_data: 'search_service' },
            { text: '📱 Semua Layanan', callback_data: 'nokos_other_services_0' }
        ]);

        keyboard.push([
            { text: '🏠 Menu Utama', callback_data: 'main_menu' }
        ]);

        await sendNewMessage(chatId, message, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error in searchService:', error);
        await sendNewMessage(chatId,
            '❌ Gagal melakukan pencarian.',
            { parse_mode: 'HTML' }
        );
    }
}

async function showSearchCountry(chatId, userId, serviceId, messageId, callbackQueryId) {
    try {
        // Set user selection untuk menunggu input pencarian negara
        userSelections.set(userId, {
            step: 'search_country_input',
            serviceId: serviceId,
            timestamp: Date.now()
        });

        await editMessage(chatId, messageId, callbackQueryId,
            `<b>🔍 CARI NEGARA</b>\n\n` +
            `Masukkan nama negara yang ingin dicari:\n\n` +
            `Contoh: <code>indonesia</code>\n` +
            `Contoh: <code>malaysia</code>\n` +
            `Contoh: <code>singapore</code>\n\n` +
            `<i>Ketik 0 untuk membatalkan</i>`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '🔙 Kembali', callback_data: `nokos_service_${serviceId}` }]
                    ]
                }
            }
        );

    } catch (error) {
        console.error('Error in showSearchCountry:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Gagal memuat pencarian.',
            { parse_mode: 'HTML' }
        );
    }
}

async function searchCountry(chatId, userId, serviceId, searchTerm, messageId) {
    try {
        const countriesData = await api.getCountries(serviceId);
        
        if (!countriesData || !countriesData.success) {
            await sendNewMessage(chatId,
                '❌ Gagal mendapatkan data negara.',
                { parse_mode: 'HTML' }
            );
            return;
        }

        const countries = countriesData.data || [];
        
        // Filter countries yang mengandung searchTerm (case insensitive)
        const searchLower = searchTerm.toLowerCase();
        const matchedCountries = countries.filter(country => 
            country.name.toLowerCase().includes(searchLower)
        );

        // Dapatkan info layanan
        const servicesData = await getServicesCached();
        const service = servicesData?.data?.find(s => s.service_code == serviceId);
        const serviceName = service?.service_name || 'Layanan';

        if (matchedCountries.length === 0) {
            await sendNewMessage(chatId,
                `<b>🔍 HASIL PENCARIAN NEGARA</b>\n\n` +
                `Layanan: ${serviceName}\n` +
                `Pencarian: <code>${searchTerm}</code>\n` +
                `Hasil: Tidak ditemukan\n\n` +
                `<i>Coba dengan kata kunci lain</i>`,
                {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🔍 Cari Lagi', callback_data: `search_country_${serviceId}` }],
                            [{ text: '🌍 Semua Negara', callback_data: `nokos_service_${serviceId}` }]
                        ]
                    }
                }
            );
            return;
        }

        // Sort countries alphabetically
        matchedCountries.sort((a, b) => a.name.localeCompare(b.name));

        const displayCountries = matchedCountries.slice(0, 20); // Maksimal 20 hasil

        let message = `<b>🔍 HASIL PENCARIAN NEGARA</b>\n\n`;
        message += `📱 Layanan: ${serviceName}\n`;
        message += `🔍 Pencarian: <code>${searchTerm}</code>\n`;
        message += `🌐 Ditemukan: ${matchedCountries.length} negara\n\n`;

        const keyboard = [];

        // 2 tombol per baris untuk hasil pencarian
        for (let i = 0; i < displayCountries.length; i += 2) {
            const row = [];
            
            if (displayCountries[i]) {
                const country = displayCountries[i];
                const flagEmoji = getFlagEmoji(country.iso_code);
                let countryText = country.name;
                if (countryText.length > 15) {
                    countryText = countryText.substring(0, 12) + '..';
                }
                
                row.push({ 
                    text: `${flagEmoji} ${countryText}`, 
                    callback_data: `nokos_server_list_${country.number_id}_${encodeURIComponent(country.name)}` 
                });
            }
            
            if (displayCountries[i + 1]) {
                const country = displayCountries[i + 1];
                const flagEmoji = getFlagEmoji(country.iso_code);
                let countryText = country.name;
                if (countryText.length > 15) {
                    countryText = countryText.substring(0, 12) + '..';
                }
                
                row.push({ 
                    text: `${flagEmoji} ${countryText}`, 
                    callback_data: `nokos_server_list_${country.number_id}_${encodeURIComponent(country.name)}` 
                });
            }
            
            if (row.length > 0) {
                keyboard.push(row);
            }
        }

        if (matchedCountries.length > 20) {
            message += `<i>... dan ${matchedCountries.length - 20} negara lainnya</i>\n\n`;
        }

        keyboard.push([
            { text: '🔍 Cari Lagi', callback_data: `search_country_${serviceId}` },
            { text: '🌍 Semua Negara', callback_data: `nokos_service_${serviceId}` }
        ]);

        keyboard.push([
            { text: '🏠 Menu Utama', callback_data: 'main_menu' }
        ]);

        await sendNewMessage(chatId, message, {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard }
        });

    } catch (error) {
        console.error('Error in searchCountry:', error);
        await sendNewMessage(chatId,
            '❌ Gagal melakukan pencarian negara.',
            { parse_mode: 'HTML' }
        );
    }
}

// Modifikasi fungsi showServerList yang sudah ada
async function showServerList(chatId, userId, numberId, countryName, messageId, callbackQueryId) {
    try {
        let userSelection = userSelections.get(userId);
        
        if (!userSelection || !userSelection.serviceId) {
            await editMessage(chatId, messageId, callbackQueryId,
                '❌ Sesi Tidak Lengkap\n\nSilakan pilih layanan dari awal.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '📱 Mulai Dari Awal', callback_data: 'nokos_menu' }]
                        ]
                    }
                }
            );
            return;
        }
        
        // Gunakan cache untuk countries
        const cacheKey = `countries_${userSelection.serviceId}`;
        let countriesData = servicesCache[cacheKey];
        
        if (!countriesData) {
            await editMessage(chatId, messageId, callbackQueryId,
                '⏳ Memuat server...',
                { parse_mode: 'HTML' }
            );

            countriesData = await api.getCountries(userSelection.serviceId);
            
            if (countriesData && countriesData.success) {
                servicesCache[cacheKey] = countriesData;
            }
        }
        
        if (!countriesData || !countriesData.success) {
            await editMessage(chatId, messageId, callbackQueryId,
                '❌ Gagal memuat data.\n\nSilakan coba lagi.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🔄 Coba Lagi', callback_data: `nokos_service_${userSelection.serviceId}` }]
                        ]
                    }
                }
            );
            return;
        }
        
        const countries = countriesData.data || [];
        const selectedCountry = countries.find(c => c.number_id == numberId);
        
        if (!selectedCountry || !selectedCountry.pricelist || selectedCountry.pricelist.length === 0) {
            await editMessage(chatId, messageId, callbackQueryId,
                `❌ Tidak ada server tersedia untuk ${countryName}.`,
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🌍 Pilih Negara Lain', callback_data: `nokos_service_${userSelection.serviceId}` }]
                        ]
                    }
                }
            );
            return;
        }
        
        let servers = selectedCountry.pricelist;
        // Sort by original price
        servers.sort((a, b) => a.price - b.price);

        // TAMBAHKAN PROFIT KE HARGA YANG DITAMPILKAN
        const serversWithProfit = servers.map(server => ({
            ...server,
            original_price: server.price,
            final_price: addProfitToPrice(server.price),
            profit: Number(config.UNTUNG_NOKOS) || 0
        }));

        userSelection.step = 'nokos_server';
        userSelection.numberId = numberId;
        userSelection.countryName = countryName;
        userSelection.countryData = selectedCountry;
        userSelection.servers = serversWithProfit; // Simpan servers dengan profit
        userSelections.set(userId, userSelection);
        
        const countryCode = getCountryCode(selectedCountry.iso_code);
        const profitAmount = Number(config.UNTUNG_NOKOS) || 0;
        
        let message = `<b>🌍 ${countryName}</b>\n`;
        message += `📱 Layanan: ${userSelection.serviceName}\n`;
        message += `📦 Stok: ${selectedCountry.stock_total} nomor\n`;
        message += `🖥️ Server: ${servers.length} tersedia\n`;
        
        // Tampilkan 15 server pertama dengan harga
        const maxButtons = 20;
        const serversToShow = serversWithProfit.slice(0, maxButtons);
        
        message += `\n<b>💰 Harga Server (dengan profit):</b>\n`;
        for (let i = 0; i < Math.min(serversToShow.length, 20); i++) {
            const server = serversToShow[i];
            const serverNumber = i + 1;
            message += `S${serverNumber}: ${formatCurrency(server.final_price)}`;
            if (i % 3 === 2 || i === serversToShow.length - 1) {
                message += '\n';
            } else {
                message += ' | ';
            }
        }
        message += '\n';
        
        const keyboard = [];
        const buttonsPerRow = 3;
        
        for (let i = 0; i < serversToShow.length; i += buttonsPerRow) {
            const row = [];
            for (let j = 0; j < buttonsPerRow; j++) {
                if (serversToShow[i + j]) {
                    const server = serversToShow[i + j];
                    const serverNumber = i + j + 1;
                    const buttonText = `S${serverNumber}`;
                    // Kirim final_price (dengan profit) ke callback
                    const callbackData = `nokos_server_${server.provider_id}_${server.final_price}_${server.rate}_${server.stock}`;
                    
                    row.push({ 
                        text: buttonText, 
                        callback_data: callbackData
                    });
                }
            }
            if (row.length > 0) {
                keyboard.push(row);
            }
        }
        
        keyboard.push([
            { text: '🌍 Kembali ke Negara', callback_data: `nokos_service_${userSelection.serviceId}` },
            { text: '🏠 Menu Utama', callback_data: 'main_menu' }
        ]);
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });
        
    } catch (error) {
        console.error('Error in showServerList:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Terjadi kesalahan.\n\nSilakan coba lagi.',
            { 
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '🔄 Coba Lagi', callback_data: `nokos_service_${userSelections.get(userId)?.serviceId || 'nokos_menu'}` }]
                    ]
                }
            }
        );
    }
}

async function showServerListEnhanced(chatId, userId, numberId, countryName, messageId, callbackQueryId, startIndex = 0) {
    try {
        let userSelection = userSelections.get(userId);
        
        if (!userSelection || !userSelection.serviceId) {
            await editMessage(chatId, messageId, callbackQueryId,
                'Sesi tidak lengkap.\n\nSilakan pilih layanan dari awal.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Mulai Dari Awal', callback_data: 'nokos_menu' }]
                        ]
                    }
                }
            );
            return;
        }
        
        await editMessage(chatId, messageId, callbackQueryId,
            'Memuat server...',
            { parse_mode: 'HTML' }
        );
        
        const countriesData = await api.getCountries(userSelection.serviceId);
        if (!countriesData || !countriesData.success) {
            await editMessage(chatId, messageId, callbackQueryId,
                'Gagal memuat data.\n\nSilakan coba lagi.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Coba Lagi', callback_data: `nokos_service_${userSelection.serviceId}` }]
                        ]
                    }
                }
            );
            return;
        }
        
        const countries = countriesData.data || [];
        const selectedCountry = countries.find(c => c.number_id == numberId);
        
        if (!selectedCountry || !selectedCountry.pricelist || selectedCountry.pricelist.length === 0) {
            await editMessage(chatId, messageId, callbackQueryId,
                `Tidak ada server tersedia untuk ${countryName}.`,
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Pilih Negara Lain', callback_data: `nokos_service_${userSelection.serviceId}` }]
                        ]
                    }
                }
            );
            return;
        }
        
        let servers = selectedCountry.pricelist;
        servers.sort((a, b) => a.price - b.price);

        userSelection.step = 'nokos_server';
        userSelection.numberId = numberId;
        userSelection.countryName = countryName;
        userSelection.countryData = selectedCountry;
        userSelections.set(userId, userSelection);
        
        const flagEmoji = getFlagEmoji(selectedCountry.iso_code);
        const countryCode = getCountryCode(selectedCountry.iso_code); 
        const serversPerPage = 9;
        const currentPage = Math.floor(startIndex / serversPerPage) + 1;
        const totalPages = Math.ceil(servers.length / serversPerPage);
        const displayStart = (currentPage - 1) * serversPerPage;
        const displayEnd = displayStart + serversPerPage;
        const displayServers = servers.slice(displayStart, displayEnd);
        
        let message = `<b>${flagEmoji} ${countryName}</b>\n`;
        message += `<i>Layanan:</i> ${userSelection.serviceName}\n`;
        message += `<i>Stok Total:</i> ${selectedCountry.stock_total} nomor\n`;
        message += `<i>Server Tersedia:</i> ${servers.length}\n`;
        message += `\n<b>Pilih Server:</b> Halaman ${currentPage}/${totalPages}\n\n`;

        const rowsPerGrid = 3;
        for (let row = 0; row < rowsPerGrid; row++) {
            const rowStart = row * rowsPerGrid;
            const rowServers = displayServers.slice(rowStart, rowStart + rowsPerGrid);
            
            if (rowServers.length === 0) break;
            
            message += `<b>`;
            rowServers.forEach((server, colIndex) => {
                const serverNumber = displayStart + rowStart + colIndex + 1;
                message += `S${serverNumber} `;
            });
            message += `</b>\n`;
            
            rowServers.forEach((server, colIndex) => {
                const serverNumber = displayStart + rowStart + colIndex + 1;
                message += `Rp${server.price.toLocaleString('id-ID')} `;
            });
            message += `\n`;
            
            rowServers.forEach((server, colIndex) => {
                message += `(${server.rate}%) `;
            });
            message += `\n`;
            
            message += `\n`;
        }
        
        const keyboard = [];
        
        for (let row = 0; row < rowsPerGrid; row++) {
            const rowStart = row * rowsPerGrid;
            const rowServers = displayServers.slice(rowStart, rowStart + rowsPerGrid);
            
            if (rowServers.length === 0) break;
            
            const buttonRow = [];
            rowServers.forEach((server, colIndex) => {
                const serverNumber = displayStart + rowStart + colIndex + 1;
                const buttonText = `S${serverNumber}`; 
                const callbackData = `nokos_server_${server.provider_id}_${server.price}_${server.rate}_${server.stock}`;
                
                buttonRow.push({ 
                    text: buttonText, 
                    callback_data: callbackData 
                });
            });
            
            if (buttonRow.length > 0) {
                keyboard.push(buttonRow);
            }
        }
        
        const navButtons = [];
        
        if (currentPage > 1) {
            navButtons.push({ 
                text: '◀️', 
                callback_data: `server_prev_${numberId}_${encodeURIComponent(countryName)}_${displayStart - serversPerPage}` 
            });
        } else {
            navButtons.push({ 
                text: '◀️', 
                callback_data: 'no_action' 
            });
        }
        
        navButtons.push({ 
            text: `Page ${currentPage}/${totalPages}`, 
            callback_data: 'no_action' 
        });
        
        if (currentPage < totalPages) {
            navButtons.push({ 
                text: '▶️', 
                callback_data: `server_next_${numberId}_${encodeURIComponent(countryName)}_${displayStart + serversPerPage}` 
            });
        } else {
            navButtons.push({ 
                text: '▶️', 
                callback_data: 'no_action' 
            });
        }
        
        keyboard.push(navButtons);
        
        keyboard.push([
            { text: 'Kembali', callback_data: `nokos_service_${userSelection.serviceId}` },
            { text: 'Menu Utama', callback_data: 'main_menu' }
        ]);
        
        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });
        
    } catch (error) {
        await editMessage(chatId, messageId, callbackQueryId,
            'Terjadi kesalahan.\n\nSilakan coba lagi.',
            { 
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Coba Lagi', callback_data: `nokos_service_${userSelections.get(userId)?.serviceId || 'nokos_menu'}` }]
                    ]
                }
            }
        );
    }
}

function getCountryCode(isoCode) {
    const countryCodes = {
        'id': '+62',
        'ph': '+63',
        'us': '+1',
        'gb': '+44',
        'sg': '+65',
        'my': '+60',
        'th': '+66',
        'vn': '+84'
    };
    
    return countryCodes[isoCode?.toLowerCase()] || `+${isoCode?.toUpperCase() || '62'}`;
}

function getFlagEmoji(countryCode) {
    if (!countryCode || typeof countryCode !== 'string') return '🌐';
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

async function showOperatorMenu(chatId, userId, numberId, price, countryName, messageId, callbackQueryId) {
    try {
        const userSelection = userSelections.get(userId);
        
        if (!userSelection) {
            await editMessage(chatId, messageId, callbackQueryId,
                '❌ Sesi tidak ditemukan.\n\nSilakan mulai kembali dari menu utama.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Menu Utama', callback_data: 'main_menu' }]
                        ]
                    }
                }
            );
            return;
        }
        
        // Update user selection - price sudah termasuk profit
        userSelection.step = 'nokos_operator';
        userSelection.numberId = numberId;
        userSelection.price = Number(price); // Ini sudah termasuk profit
        userSelection.countryName = countryName;
        userSelections.set(userId, userSelection);

        await editMessage(chatId, messageId, callbackQueryId,
            '⏳ Mencari operator...',
            { parse_mode: 'HTML' }
        );

        const countriesData = await api.getCountries(userSelection.serviceId);
        
        if (!countriesData || !countriesData.success) {
            await editMessage(chatId, messageId, callbackQueryId,
                '❌ Gagal mendapatkan data operator.\n\nSilakan coba lagi.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Coba Lagi', callback_data: `nokos_server_list_${numberId}_${encodeURIComponent(countryName)}` }]
                        ]
                    }
                }
            );
            return;
        }

        const countries = countriesData.data || [];
        const selectedCountry = countries.find(c => c.number_id == numberId);
        
        if (!selectedCountry) {
            await editMessage(chatId, messageId, callbackQueryId,
                `❌ Data negara "${countryName}" tidak ditemukan.`,
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Kembali', callback_data: `nokos_service_${userSelection.serviceId}` }]
                        ]
                    }
                }
            );
            return;
        }

        if (!selectedCountry.pricelist || selectedCountry.pricelist.length === 0) {
            await editMessage(chatId, messageId, callbackQueryId,
                `❌ Tidak ada operator tersedia untuk ${countryName}.`,
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Pilih Negara Lain', callback_data: `nokos_service_${userSelection.serviceId}` }]
                        ]
                    }
                }
            );
            return;
        }

        const providerId = userSelection.providerId || selectedCountry.pricelist[0].provider_id;
        userSelection.providerId = providerId;
        userSelections.set(userId, userSelection);

        const operatorsData = await api.getOperators(selectedCountry.name, providerId);
        
        if (!operatorsData || !operatorsData.success) {
            const errorMsg = operatorsData?.message || 'Gagal terhubung ke server operator';
            await editMessage(chatId, messageId, callbackQueryId,
                `❌ ${errorMsg}`,
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Kembali', callback_data: `nokos_server_list_${numberId}_${encodeURIComponent(countryName)}` }]
                        ]
                    }
                }
            );
            return;
        }

        const operators = operatorsData.data || [];
        
        if (operators.length === 0) {
            await editMessage(chatId, messageId, callbackQueryId,
                `❌ Belum ada operator yang tersedia untuk ${countryName}.\n\nSilakan pilih negara lain.`,
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Pilih Negara Lain', callback_data: `nokos_service_${userSelection.serviceId}` }]
                        ]
                    }
                }
            );
            return;
        }

        // Hitung harga asli (tanpa profit)
        const originalPrice = removeProfitFromPrice(Number(price));
        const profit = Number(price) - originalPrice;

        let message = `<b>Pilih Operator</b>\n`;
        message += `Layanan: ${userSelection.serviceName}\n`;
        message += `Negara: ${countryName}\n`;
        message += `Harga: ${formatCurrency(Number(price))}\n`;
        
        if (userSelection.rate) {
            message += `Rate: ${userSelection.rate}%\n`;
        }
        
        message += `\n${operators.length} operator tersedia:`;

        const keyboard = [];

        const displayOperators = operators.slice(0, 6);
        
        for (let i = 0; i < displayOperators.length; i += 2) {
            const row = [];
            
            if (displayOperators[i]) {
                const op = displayOperators[i];
                const buttonText = op.name ? `${op.name.substring(0, 12)}` : `Operator ${i+1}`;
                row.push({ 
                    text: buttonText, 
                    callback_data: `nokos_operator_${op.id}_${providerId}_${price}` // price sudah termasuk profit
                });
            }
            
            if (displayOperators[i + 1]) {
                const op = displayOperators[i + 1];
                const buttonText = op.name ? `${op.name.substring(0, 12)}` : `Operator ${i+2}`;
                row.push({ 
                    text: buttonText, 
                    callback_data: `nokos_operator_${op.id}_${providerId}_${price}` 
                });
            }
            
            if (row.length > 0) {
                keyboard.push(row);
            }
        }

        if (operators.length > 6) {
            keyboard.push([
                { text: '📋 Lihat Semua Operator', callback_data: `nokos_all_operators_${numberId}_${providerId}_${price}_${encodeURIComponent(countryName)}` }
            ]);
        }

        keyboard.push([
            { 
                text: '🔙 Kembali', 
                callback_data: `nokos_server_list_${numberId}_${encodeURIComponent(countryName)}` 
            },
            { 
                text: '🏠 Menu Utama', 
                callback_data: 'main_menu' 
            }
        ]);

        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error('Error in showOperatorMenu:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Terjadi kesalahan sistem.\n\nSilakan coba lagi.',
            { 
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Coba Lagi', callback_data: `nokos_server_list_${numberId}_${encodeURIComponent(countryName)}` }]
                    ]
                }
            }
        );
    }
}

async function showOrderConfirmation(chatId, userId, operatorId, providerId, price, messageId, callbackQueryId) {
    try {
        const userSelection = userSelections.get(userId);
        
        if (!userSelection) {
            console.log(`User selection not found for user ${userId}`);
            await editMessage(chatId, messageId, callbackQueryId,
                '❌ Sesi tidak ditemukan. Silakan mulai order dari awal.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Kembali ke Menu', callback_data: 'nokos_menu' }]
                        ]
                    }
                }
            );
            return;
        }
        
        if (!userSelection.serviceName || !userSelection.countryName) {
            console.log('Missing required data in userSelection:', userSelection);
            await editMessage(chatId, messageId, callbackQueryId,
                '❌ Data order tidak lengkap. Silakan mulai order dari awal.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Kembali ke Menu', callback_data: 'nokos_menu' }]
                        ]
                    }
                }
            );
            return;
        }

        const userBalance = getUserBalance(userId);
        const finalPrice = Number(price); // Sudah termasuk profit
        
        // Hitung harga asli
        const originalPrice = removeProfitFromPrice(finalPrice);
        const profit = finalPrice - originalPrice;
        
        let canOrder = userBalance >= finalPrice;      
        
        const appliedVoucher = userSelection.appliedVoucher;
        
        let discount = 0;
        let finalPriceWithVoucher = finalPrice;
        let voucherMessage = '';
        
        if (appliedVoucher && appliedVoucher.valid) {
            discount = appliedVoucher.discount;
            finalPriceWithVoucher = appliedVoucher.final_amount;
            voucherMessage = `\nVoucher: ${appliedVoucher.voucher.code}\nDiskon: ${formatCurrency(discount)}\n`;
            
            if (userBalance >= finalPriceWithVoucher) {
                canOrder = true;
            }
        }
        
        const message = `
<b>Konfirmasi Order</b>

<b>Detail Order:</b>
Layanan: ${userSelection.serviceName}
Negara: ${userSelection.countryName}
Harga: ${formatCurrency(finalPrice)} ${voucherMessage} ${discount > 0 ? `
<b>Total Setelah Diskon: ${formatCurrency(finalPriceWithVoucher)}</b>` : ''}
Saldo Anda: ${formatCurrency(userBalance)}

<b>Status:</b> ${canOrder ? '✅ Saldo Cukup' : '❌ Saldo Tidak Cukup'}

${canOrder ? 
    'Klik Lanjutkan untuk melanjutkan pembelian.' : 
    'Saldo Anda tidak cukup. Silakan deposit terlebih dahulu.'}
        `.trim();

        userSelection.operatorId = operatorId;
        userSelection.providerId = providerId;
        userSelection.price = originalPrice; // Simpan harga asli untuk keperluan internal
        userSelection.finalPrice = finalPrice; // Simpan harga final
        userSelection.profit = profit; // Simpan profit
        userSelection.discount = discount;
        userSelections.set(userId, userSelection);

        const keyboard = [];
        
        if (!appliedVoucher) {
            keyboard.push([
                { 
                    text: '🎫 Pakai Voucher', 
                    callback_data: `apply_voucher_${operatorId}_${providerId}_${finalPrice}`
                }
            ]);
        } else {
            keyboard.push([
                { 
                    text: '✏️ Ganti Voucher', 
                    callback_data: `change_voucher_${operatorId}_${providerId}_${finalPrice}`
                },
                { 
                    text: '❌ Hapus Voucher', 
                    callback_data: `remove_voucher_${operatorId}_${providerId}_${finalPrice}`
                }
            ]);
        }
        
        keyboard.push([
            { 
                text: canOrder ? '🚀 Lanjutkan' : '💰 Deposit', 
                callback_data: canOrder ? 
                    `nokos_confirm_${userSelection.numberId}_${providerId}_${operatorId}_${finalPriceWithVoucher}_${appliedVoucher ? appliedVoucher.voucher.code : 'no'}` : 
                    'deposit_main' 
            }
        ]);
        
        keyboard.push([
            { 
                text: '🔙 Kembali', 
                callback_data: `nokos_server_list_${userSelection.numberId}_${encodeURIComponent(userSelection.countryName)}` 
            },
            { 
                text: '🏠 Menu Utama', 
                callback_data: 'main_menu' 
            }
        ]);

        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });
    } catch (error) {
        console.error('Error in showOrderConfirmation:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Gagal menampilkan konfirmasi order.\n\nSilakan coba lagi atau hubungi admin.',
            { 
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Kembali ke Menu', callback_data: 'nokos_menu' }]
                    ]
                }
            }
        );
    }
}

async function showOrderConfirmationWithVoucher(chatId, userId, operatorId, providerId, price, voucherValidation, messageId, callbackQueryId) {
    try {
        const userSelection = userSelections.get(userId);
        
        if (!userSelection) {
            await editMessage(chatId, messageId, callbackQueryId,
                '❌ Sesi tidak ditemukan.',
                { parse_mode: 'HTML' }
            );
            return;
        }

        const userBalance = getUserBalance(userId);
        const discount = voucherValidation.discount || 0;
        const finalPrice = voucherValidation.final_amount || Number(price);
        const canOrder = userBalance >= finalPrice;

        const message = `
<b>Konfirmasi Order</b>

Detail Order:
Layanan: ${userSelection.serviceName}
Negara: ${userSelection.countryName}
Harga: ${formatCurrency(price)}
Voucher: ${voucherValidation.voucher.code}
Diskon: ${formatCurrency(discount)}
<b>Total Bayar: ${formatCurrency(finalPrice)}</b>
Saldo Anda: ${formatCurrency(userBalance)}

Status: ${canOrder ? '✅ Saldo Cukup' : '❌ Saldo Tidak Cukup'}

${canOrder ? 
    'Klik Lanjutkan untuk melanjutkan pembelian.' : 
    'Saldo Anda tidak cukup. Silakan deposit terlebih dahulu.'}
        `.trim();

        // Update user selection dengan data voucher
        userSelection.operatorId = operatorId;
        userSelection.providerId = providerId;
        userSelection.price = price;
        userSelection.finalPrice = finalPrice;
        userSelection.discount = discount;
        userSelection.appliedVoucher = voucherValidation;
        userSelections.set(userId, userSelection);

        const keyboard = [
            [
                { 
                    text: '✏️ Ganti Voucher', 
                    callback_data: `change_voucher_${operatorId}_${providerId}_${price}`
                },
                { 
                    text: '❌ Hapus Voucher', 
                    callback_data: `remove_voucher_${operatorId}_${providerId}_${price}`
                }
            ],
            [
                { 
                    text: canOrder ? '🚀 Lanjutkan' : '💰 Deposit', 
                    callback_data: canOrder ? 
                        `nokos_confirm_${userSelection.numberId}_${providerId}_${operatorId}_${finalPrice}_${voucherValidation.voucher.code}` : 
                        'deposit_main' 
                }
            ],
            [
                { 
                    text: '🔙 Kembali', 
                    callback_data: `nokos_server_list_${userSelection.numberId}_${encodeURIComponent(userSelection.countryName)}` 
                },
                { 
                    text: '🏠 Menu Utama', 
                    callback_data: 'main_menu' 
                }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

    } catch (error) {
        console.error('Error in showOrderConfirmationWithVoucher:', error);
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Gagal menampilkan konfirmasi.',
            { parse_mode: 'HTML' }
        );
    }
}

async function checkAndAutoRefund(chatId, userId, orderId, amount) {
    try {
        const transactions = loadTransactions();
        const order = transactions.nokos_orders?.find(o => 
            o.id === orderId || o.data?.orderId === orderId
        );
        
        if (!order) {
            console.log(`Order ${orderId} not found for auto-refund`);
            return;
        }

        // Cek jika OTP sudah diterima
        const otpReceived = order.data?.otpReceived === true || 
                           order.data?.otp_received === true ||
                           (order.data?.otp_code && order.data.otp_code !== '-' && order.data.otp_code !== '');
        
        // Cek jika sudah direfund
        const alreadyRefunded = order.data?.refunded === true;
        
        // Cek jika order sudah completed
        const isCompleted = order.status === 'completed' || order.data?.status === 'completed';
        
        if (otpReceived || alreadyRefunded || isCompleted) {
            console.log(`Order ${orderId} tidak memenuhi syarat auto-refund:`, {
                otpReceived,
                alreadyRefunded,
                isCompleted
            });
            return;
        }

        console.log(`Processing auto-refund for order ${orderId}`);
        
        // Update status transaksi
        updateTransactionStatus('nokos_orders', orderId, 'auto_refunded');
        
        // Refund saldo - gunakan final_price yang dibayar user
        const refundAmount = Number(order.data?.final_price || amount || 0);
        if (refundAmount > 0) {
            const refundSuccess = addUserBalance(userId, refundAmount);
            if (refundSuccess) {
                // Update transaction data
                if (transactions.nokos_orders) {
                    const orderIndex = transactions.nokos_orders.findIndex(o => 
                        o.id === orderId || o.data?.orderId === orderId
                    );
                    if (orderIndex !== -1) {
                        transactions.nokos_orders[orderIndex].data.refunded = true;
                        transactions.nokos_orders[orderIndex].data.refundedAt = new Date().toISOString();
                        transactions.nokos_orders[orderIndex].data.refundType = 'auto_5min';
                        saveTransactions(transactions);
                    }
                }
                
                // Kirim notifikasi ke user
                await sendNewMessage(chatId,
                    `💰 <b>AUTO REFUND BERHASIL</b>\n\n` +
                    `Order ID: <code>#${orderId}</code>\n` +
                    `Alasan: OTP tidak diterima dalam 5 menit\n` +
                    `Jumlah: ${formatCurrency(refundAmount)}\n` +
                    `Saldo telah dikembalikan ke akun Anda.\n\n` +
                    `Saldo sekarang: ${formatCurrency(getUserBalance(userId))}`,
                    { 
                        parse_mode: 'HTML',
                        reply_markup: {
                            inline_keyboard: [
                                [
                                    { text: '🔄 Order Baru', callback_data: 'nokos_menu' },
                                    { text: '🏠 Menu Utama', callback_data: 'main_menu' }
                                ]
                            ]
                        }
                    }
                );
                
                console.log(`Auto-refund successful for order ${orderId}: ${refundAmount}`);
            }
        }
        
    } catch (error) {
        console.error(`Error in checkAndAutoRefund for order ${orderId}:`, error);
    }
}

// Fungsi untuk mengirim OTP ke channel dengan auto-delete 5 menit
async function sendOTPToChannelWithAutoDelete(orderData, user, price, formattedOTP, voucherInfo = '') {
    try {
        const maskedPhone = maskPhoneNumber(orderData.phone_number);
        
        // PERBAIKAN: Gunakan price yang diterima (sudah termasuk profit)
        // atau ambil dari orderData jika ada
        let finalPrice = Number(price);
        
        // Jika price tidak valid atau 0, coba ambil dari orderData
        if (!finalPrice || finalPrice === 0) {
            // Coba ambil dari database transaksi
            const transactions = loadTransactions();
            const order = transactions.nokos_orders?.find(o => 
                o.id === orderData.order_id || o.data?.orderId === orderData.order_id
            );
            
            if (order && order.data) {
                finalPrice = Number(order.data.final_price) || Number(order.data.price) || 0;
            }
        }
        
        // Hitung harga asli (tanpa profit) untuk tampilan
        const originalPrice = removeProfitFromPrice(finalPrice);
        const profitAmount = finalPrice - originalPrice;
        
        const formattedPrice = formatCurrency(finalPrice);
        const formattedOriginalPrice = formatCurrency(originalPrice);
        const dateStr = new Date().toLocaleString('id-ID', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        // Tampilan harga yang digabung dengan elegan
        let priceDisplay = '';
        if (profitAmount > 0 && finalPrice > 0) {
            priceDisplay = `<b>💰 Harga:</b> <code>${formattedOriginalPrice}</code> → <b><code>${formattedPrice}</code></b> <i>(+${formatCurrency(profitAmount)})</i>`;
        } else if (finalPrice > 0) {
            priceDisplay = `<b>💰 Harga:</b> <code>${formattedPrice}</code>`;
        } else {
            // Fallback jika tetap 0
            priceDisplay = `<b>💰 Harga:</b> <code>${formatCurrency(originalPrice)}</code>`;
        }
        
        const channelMessage = `
<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   🎉 <b>ORDER SUKSES - OTP DITERIMA</b> 🎉
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${voucherInfo}
┌─────────────────────────────────
├ <b>🆔 ID Order</b> : <code>${orderData.order_id}</code>
├ <b>👤 User</b>      : ${user.first_name || 'User'}
├ <b>📱 Nomor</b>     : <code>${maskedPhone}</code>
├ <b>🔑 Kode OTP</b>  : <code><b>${formattedOTP}</b></code>
├─────────────────────────────────
├ ${priceDisplay}
└─────────────────────────────────
├ <b>📦 Layanan</b>   : ${orderData.service || '-'}
├ <b>🌍 Negara</b>    : ${orderData.country || '-'}
└ <b>📅 Tanggal</b>   : ${dateStr}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<i>⚠️ Kode verifikasi anda ${formattedOTP}</i>
<i>🔒 Jangan berikan kode ini pada siapapun!</i>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`;
        
        const keyboard = {
            inline_keyboard: [
                [
                    { 
                        text: 'Order Lagi', 
                        url: 'https://t.me/RikyshopOTP_bot', icon_custom_emoji_id: '5359681227592854334'
                    },
                    { 
                        text: '💬 Support', 
                        url: `https://t.me/${channel.replace('@', '')}`
                    }
                ]
            ]
        };
        
        // Kirim pesan ke channel
        const sentMessage = await bot.sendMessage(channel, channelMessage, {
            parse_mode: 'HTML',
            disable_web_page_preview: true,
            reply_markup: keyboard
        });
        
        // Simpan informasi pesan untuk auto-delete
        const messageId = sentMessage.message_id;
        
        // Set timeout untuk menghapus pesan setelah 10 menit
        const deleteTimeout = setTimeout(async () => {
            try {
                await bot.deleteMessage(channel, messageId);
                channelOTPMessages.delete(messageId);
                console.log(`OTP message ${messageId} auto-deleted after 10 minutes`);
            } catch (error) {
                console.error(`Failed to auto-delete OTP message ${messageId}:`, error);
            }
        }, 10 * 60 * 1000);
        
        channelOTPMessages.set(messageId, {
            orderId: orderData.order_id,
            deleteTimeout,
            timestamp: Date.now()
        });
        
        return sentMessage;
        
    } catch (error) {
        console.error('Error sending OTP to channel with auto-delete:', error);
    }
}

// Fungsi untuk menghapus pesan OTP secara manual (jika diperlukan)
async function deleteOTPMessageManually(messageId) {
    try {
        if (channelOTPMessages.has(messageId)) {
            const messageData = channelOTPMessages.get(messageId);
            clearTimeout(messageData.deleteTimeout);
            
            await bot.deleteMessage(channel, messageId);
            channelOTPMessages.delete(messageId);
            
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error manually deleting OTP message:', error);
        return false;
    }
}

// Fungsi untuk membersihkan timeout yang kadaluarsa
function cleanupChannelOTPMessages() {
    const now = Date.now();
    const maxAge = 10 * 60 * 1000; // 10 menit (cadangan)
    
    for (const [messageId, data] of channelOTPMessages.entries()) {
        if (now - data.timestamp > maxAge) {
            clearTimeout(data.deleteTimeout);
            channelOTPMessages.delete(messageId);
        }
    }
}

// Jadwalkan cleanup setiap 5 menit
setInterval(cleanupChannelOTPMessages, 5 * 60 * 1000);
        
async function processNokosOrder(chatId, userId, numberId, providerId, operatorId, price, messageId, callbackQueryId, callbackData = null) {
    let orderKey;
    
    try {
        const dataParts = callbackData ? callbackData.split('_') : `nokos_confirm_${numberId}_${providerId}_${operatorId}_${price}_no`.split('_');
        const voucherCode = dataParts.length > 6 ? dataParts[6] : null;
        
        orderKey = `${userId}_${Date.now()}`;

        if (isOrderProcessing(orderKey)) {
            await editMessage(chatId, messageId, callbackQueryId,
                'Order sedang diproses, mohon tunggu...',
                { parse_mode: 'HTML' }
            );
            return;
        }
        
        setOrderProcessing(orderKey, true);
        
        const userSelection = userSelections.get(userId);
        let appliedVoucher = userSelection?.appliedVoucher;
        let finalPrice = Number(price);
        let discount = 0;
        
        // Harga asli yang akan dibayar ke API (tanpa profit)
        const originalPrice = removeProfitFromPrice(finalPrice);
        const profit = finalPrice - originalPrice;
        
        if (voucherCode && voucherCode !== 'no') {
            const validation = validateVoucher(
                voucherCode,
                userId,
                userSelection?.serviceId,
                userSelection?.numberId,
                finalPrice // Validasi voucher menggunakan harga final
            );
            
            if (validation.valid) {
                appliedVoucher = validation;
                discount = validation.discount;
                finalPrice = validation.final_amount;
            }
        }
        
        const userBalance = getUserBalance(userId);
        
        if (userBalance < finalPrice || isNaN(finalPrice)) {
            await editMessage(chatId, messageId, callbackQueryId,
                'Saldo tidak cukup untuk melakukan order ini.',
                { parse_mode: 'HTML' }
            );
            setOrderProcessing(orderKey, false);
            return;
        }

        const deductionSuccess = deductUserBalance(userId, finalPrice);
        
        if (!deductionSuccess) {
            await editMessage(chatId, messageId, callbackQueryId,
                'Gagal memotong saldo. Silakan hubungi admin.',
                { parse_mode: 'HTML' }
            );
            setOrderProcessing(orderKey, false);
            return;
        }
        
        // Buat order ke API dengan harga asli (tanpa profit)
        const orderResult = await api.createOrder(numberId, providerId, operatorId);
        
        if (!orderResult || !orderResult.success) {
            const errorMsg = orderResult?.error?.message || 
                           orderResult?.message || 
                           orderResult?.data?.message ||
                           'Error dari API';
            
            // Refund full (harga final) karena gagal
            addUserBalance(userId, finalPrice);
            
            await editMessage(chatId, messageId, callbackQueryId,
                `Gagal membuat order.\n\n${errorMsg}\n\nSaldo telah dikembalikan.`,
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ 
                                text: 'Coba Lagi', 
                                callback_data: `nokos_confirm_${numberId}_${providerId}_${operatorId}_${price}` 
                            }],
                            [{ 
                                text: 'Menu Utama', 
                                callback_data: 'main_menu' 
                            }]
                        ]
                    }
                }
            );
            setOrderProcessing(orderKey, false);
            return;
        }

        const orderData = orderResult.data;
        const expiresInMinutes = orderData.expires_in_minute || 15;
        const expiresAt = Date.now() + (expiresInMinutes * 60 * 1000);
        const apiPrice = orderData.price ? Number(orderData.price) : originalPrice; // Harga dari API
        
        if (appliedVoucher && appliedVoucher.valid) {
            useVoucher(appliedVoucher.voucher.code, userId, orderData.order_id, finalPrice, discount);
        }
        
        // Simpan dengan informasi harga lengkap
        const transactionId = addTransaction('nokos_orders', {
             userId: userId,
             orderId: orderData.order_id,
             phoneNumber: orderData.phone_number,
             service: orderData.service,
             country: orderData.country,
             operator: orderData.operator,
             original_price: originalPrice, // Harga asli dari API
             profit: profit, // Keuntungan
             final_price: finalPrice, // Harga final yang dibayar user
             api_price: apiPrice, // Harga yang tercatat di API
             voucher_code: appliedVoucher ? appliedVoucher.voucher.code : null,
             discount: discount,
             status: 'active',
             expiresAt: expiresAt,
             expiresInMinutes: expiresInMinutes,
             autoRefundAt: Date.now() + (5 * 60 * 1000),
             deductedAmount: finalPrice,
             refunded: false,
             otpReceived: false
        });

        try {
            const user = await bot.getChat(userId).catch(() => ({ 
                id: userId, 
                first_name: 'User' 
            }));
            await notifyOrderSuccess(user, orderData, finalPrice, false);
        } catch (error) {}

        let voucherInfo = '';
        if (appliedVoucher && appliedVoucher.valid) {
            voucherInfo = `\nVoucher: ${appliedVoucher.voucher.code}\nDiskon: ${formatCurrency(discount)}`;
        }
        
        const message = `
<b>✅ ORDER BERHASIL</b>${voucherInfo}

<u>Detail Order:</u>
ID Order: <code>${orderData.order_id}</code>
Nomor: <code>${orderData.phone_number}</code>
Layanan: ${orderData.service}
Negara: ${orderData.country}
Operator: ${orderData.operator}
Harga: ${formatCurrency(finalPrice)}
<b>Total Bayar: ${formatCurrency(finalPrice)}</b>
${discount > 0 ? `Diskon: ${formatCurrency(discount)}\n` : ''}
Durasi: ${expiresInMinutes} menit

<u>Instruksi:</u>
1. Gunakan nomor untuk registrasi
2. Tunggu SMS OTP masuk
3. Klik tombol <b>Cek OTP</b> untuk melihat kode

<u>Perhatian:</u>
⚠️ <b>Auto Refund dalam 5 menit</b> jika OTP tidak diterima
⚠️ Order otomatis expired dalam ${expiresInMinutes} menit
💰 Saldo terpotong: ${formatCurrency(finalPrice)}
💰 Saldo sekarang: ${formatCurrency(getUserBalance(userId))}`;

        const keyboard = [
            [
                { 
                    text: '🔄 Cek OTP', 
                    callback_data: `nokos_check_${orderData.order_id}` 
                }
            ],
            [
                { 
                    text: '📱 Order Baru', 
                    callback_data: 'nokos_menu' 
                },
                { 
                    text: '🏠 Menu Utama', 
                    callback_data: 'main_menu' 
                }
            ]
        ];

        await editMessage(chatId, messageId, callbackQueryId, message, {
            reply_markup: { inline_keyboard: keyboard },
            parse_mode: 'HTML'
        });

        // Mulai monitor OTP dengan auto-refund 5 menit
        setTimeout(() => {
            monitorOTP(chatId, userId, orderData.order_id, finalPrice, expiresInMinutes);
        }, 5000);

        // Schedule auto-refund setelah 5 menit
        setTimeout(() => {
            checkAndAutoRefund(chatId, userId, orderData.order_id, finalPrice);
        }, 5 * 60 * 1000); // 5 menit

        setOrderProcessing(orderKey, false);

    } catch (error) {
        console.error('Error in processNokosOrder:', error);
        
        try {
            const refundAmount = Number(price) || 0;
            if (refundAmount > 0) {
                addUserBalance(userId, refundAmount);
            }
        } catch (refundError) {
            console.error('Error refunding balance:', error);
        }
        
        let errorMessage = 'Terjadi kesalahan sistem.\n\n';
        errorMessage += `Pesan Error: ${error.message || 'Unknown error'}\n`;
        errorMessage += `Waktu: ${new Date().toLocaleTimeString('id-ID')}\n\n`;
        errorMessage += `Silakan coba lagi atau hubungi admin`;
        
        await editMessage(chatId, messageId, callbackQueryId, errorMessage,
            { 
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ 
                            text: 'Coba Lagi', 
                            callback_data: `nokos_confirm_${numberId}_${providerId}_${operatorId}_${price}` 
                        }],
                        [{ 
                            text: 'Menu Utama', 
                            callback_data: 'main_menu' 
                        }]
                    ]
                }
            }
        );
        
        if (orderKey) {
            setOrderProcessing(orderKey, false);
        }
    }
}

async function monitorOTP(chatId, userId, orderId, price, expiresInMinutes = 15) {
    const maxRetries = Math.floor(expiresInMinutes * 6);
    let retryCount = 0;
    let errorCount = 0;
    const maxErrors = 3;
    
    const monitorInterval = setInterval(async () => {
        retryCount++;
        
        if (retryCount >= maxRetries) {
            clearInterval(monitorInterval);
            return;
        }

        try {
            const statusResult = await api.getOrderStatus(orderId);
            
            if (!statusResult || !statusResult.success) {
                errorCount++;
                if (errorCount >= maxErrors) {
                    clearInterval(monitorInterval);
                }
                return;
            }

            const orderData = statusResult.data;
            
            if (!orderData) {
                return;
            }
            
            const transactions = loadTransactions();
            const order = transactions.nokos_orders?.find(o => 
                o.id === orderId || o.data?.orderId === orderId
            );
            
            // Cek jika sudah direfund (auto refund 5 menit)
            const alreadyRefunded = order?.data?.refunded === true;
            if (alreadyRefunded) {
                clearInterval(monitorInterval);
                return;
            }
            
            if (orderData.otp_code && orderData.otp_code !== '-') {
                clearInterval(monitorInterval);
                
                updateTransactionStatus('nokos_orders', orderId, 'completed');
                
                if (transactions.nokos_orders) {
                    const orderIndex = transactions.nokos_orders?.findIndex(o => 
                        o.id === orderId || o.data?.orderId === orderId
                    );
                    if (orderIndex !== -1) {
                        transactions.nokos_orders[orderIndex].data.otp_received = true;
                        transactions.nokos_orders[orderIndex].data.otpReceived = true;
                        transactions.nokos_orders[orderIndex].data.otp_code = orderData.otp_code;
                        saveTransactions(transactions);
                    }
                }
                
                await sendNewMessage(chatId,
                    `✅ <b>OTP DITERIMA!</b>\n\n` +
                    `Order ID: <code>#${orderId}</code>\n` +
                    `Nomor: <code>${orderData.phone_number}</code>\n` +
                    `Kode OTP: <code>${orderData.otp_code}</code>\n\n` +
                    `Status: Order selesai ✅\n` +
                    `Saldo sudah terpakai.`,
                    { 
                        parse_mode: 'HTML',
                        reply_markup: {
                            inline_keyboard: [
                                [
                                    { text: '🔄 Order Baru', callback_data: 'nokos_menu' },
                                    { text: '🏠 Menu Utama', callback_data: 'main_menu' }
                                ]
                            ]
                        }
                    }
                );
                
                try {
                    const user = await bot.getChat(userId).catch(() => ({ 
                        id: userId, 
                        first_name: 'User' 
                    }));
                    await notifyOrderSuccess(user, orderData, price, true);
                } catch {}
                
            } else if (orderData.status === 'completed' || orderData.status === 'canceled' || orderData.status === 'expired') {
                clearInterval(monitorInterval);
                
                updateTransactionStatus('nokos_orders', orderId, orderData.status);
                
                const transactions = loadTransactions();
                const order = transactions.nokos_orders?.find(o => 
                    o.id === orderId || o.data?.orderId === orderId
                );
                
                const otpReceived = order?.data?.otp_received === true || order?.data?.otpReceived === true;
                
                // JANGAN refund otomatis di sini - biarkan auto-refund 5 menit yang handle
                if (orderData.status === 'completed' && !otpReceived) {
                    // Mark as completed but OTP not received
                    if (transactions.nokos_orders) {
                        const orderIndex = transactions.nokos_orders.findIndex(o => 
                            o.id === orderId || o.data?.orderId === orderId
                        );
                        if (orderIndex !== -1) {
                            transactions.nokos_orders[orderIndex].data.otp_received = false;
                            saveTransactions(transactions);
                        }
                    }
                }
            }
            
            errorCount = 0;
            
        } catch {
            errorCount++;
            if (errorCount >= maxErrors) {
                clearInterval(monitorInterval);
            }
        }
    }, 10000);
}

async function checkOTP(chatId, orderId, messageId, callbackQueryId) {
    try {
        await editMessage(chatId, messageId, callbackQueryId,
            '⏳ Mengecek OTP...',
            { parse_mode: 'HTML' }
        );

        const statusResult = await api.getOrderStatus(orderId);
        
        if (!statusResult || !statusResult.success) {
            await editMessage(chatId, messageId, callbackQueryId,
                '❌ Gagal mengecek OTP.\n\nSilakan coba lagi nanti.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🔄 Coba Lagi', callback_data: `nokos_check_${orderId}` }],
                            [{ text: '🏠 Menu Utama', callback_data: 'main_menu' }]
                        ]
                    }
                }
            );
            return;
        }

        const orderData = statusResult.data;
        const transactions = loadTransactions();
        const orderIndex = transactions.nokos_orders?.findIndex(o => 
            o.id === orderId || o.data?.orderId === orderId
        );
        
        // Cek jika sudah direfund
        const alreadyRefunded = orderIndex !== -1 && 
                               transactions.nokos_orders[orderIndex]?.data?.refunded === true;
        
        if (alreadyRefunded) {
            await editMessage(chatId, messageId, callbackQueryId,
                `❌ ORDER SUDAH DIREFUND\n\n` +
                `Order ID: <code>#${orderId}</code>\n` +
                `Status: Sudah direfund (OTP tidak diterima dalam 5 menit)\n` +
                `Saldo sudah dikembalikan ke akun Anda.`,
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: '🔄 Order Baru', callback_data: 'nokos_menu' },
                                { text: '🏠 Menu Utama', callback_data: 'main_menu' }
                            ]
                        ]
                    }
                }
            );
            return;
        }
        
        if (orderData.otp_code && orderData.otp_code !== '-') {
            if (orderIndex !== -1) {
                transactions.nokos_orders[orderIndex].data.otp_received = true;
                transactions.nokos_orders[orderIndex].data.otpReceived = true;
                transactions.nokos_orders[orderIndex].data.otp_code = orderData.otp_code;
                transactions.nokos_orders[orderIndex].data.status = 'completed';
                saveTransactions(transactions);
                
                try {
                    const user = await bot.getChat(chatId).catch(() => ({ 
                        id: chatId, 
                        first_name: 'User' 
                    }));
                    const orderPrice = transactions.nokos_orders[orderIndex].data.price || 0;
                    await notifyOrderSuccess(user, orderData, orderPrice, true);
                } catch (error) {}
            }
            
            await editMessage(chatId, messageId, callbackQueryId,
                `✅ <b>OTP DITEMUKAN!</b>\n\n` +
                `Order ID: <code>#${orderId}</code>\n` +
                `Nomor: ${orderData.phone_number}\n` +
                `Kode OTP: <code>${orderData.otp_code}</code>\n\n` +
                `<b>Status:</b> Order selesai ✅\n` +
                `<b>Saldo sudah terpakai.</b>`,
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: '🔄 Order Baru', callback_data: 'nokos_menu' },
                                { text: '🏠 Menu Utama', callback_data: 'main_menu' }
                            ]
                        ]
                    }
                }
            );
            
            updateTransactionStatus('nokos_orders', orderId, 'completed');
            
        } else {
            await editMessage(chatId, messageId, callbackQueryId,
                `⏳ <b>MENUNGGU OTP</b>\n\n` +
                `Order ID: <code>#${orderId}</code>\n` +
                `Nomor: ${orderData.phone_number}\n` +
                `Status: ${orderData.status}\n\n` +
                `OTP belum diterima. Silakan coba lagi nanti.\n\n` +
                `⚠️ <i>Auto refund dalam 5 menit jika OTP tidak diterima</i>`,
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: '🔄 Cek Lagi', callback_data: `nokos_check_${orderId}` }
                            ],
                            [
                                { text: '🏠 Menu Utama', callback_data: 'main_menu' }
                            ]
                        ]
                    }
                }
            );
        }
    } catch (error) {
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Gagal mengecek OTP.',
            { parse_mode: 'HTML' }
        );
    }
}

function formatTimeRemaining(minutes) {
    if (minutes >= 60) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours} jam ${mins} menit`;
    }
    return `${minutes} menit`;
}

function hasOTPBeenReceived(orderId) {
    try {
        const transactions = loadTransactions();
        const order = transactions.nokos_orders?.find(o => 
            o.id === orderId || o.data?.orderId === orderId
        );
        
        const dbCheck = order?.data?.otp_received === true;
        const otpCheck = order?.data?.otp_code && 
                       order.data.otp_code !== '-' && 
                       order.data.otp_code !== '';
        
        return dbCheck || otpCheck;
    } catch (error) {
        return false;
    }
}

/*async function cancelOrder(chatId, userId, orderId, messageId, callbackQueryId) {
  try {
    const transactions = loadTransactions();
    const order = transactions.nokos_orders?.find(o => o.id === orderId || o.data?.orderId === orderId);
    
    if (!order) {
      if (callbackQueryId) {
        await bot.answerCallbackQuery(callbackQueryId, {
          text: 'Order tidak ditemukan',
          show_alert: true
        });
      }
      return;
    }

    let orderTime;
    try {
        if (order.timestamp instanceof Date) {
            orderTime = order.timestamp.getTime();
        } else if (typeof order.timestamp === 'string') {
            orderTime = new Date(order.timestamp).getTime();
        } else if (order.timestamp && typeof order.timestamp === 'number') {
            orderTime = order.timestamp;
        } else {
            orderTime = Date.now();
        }
        
        if (isNaN(orderTime)) {
            orderTime = Date.now();
        }
    } catch (error) {
        orderTime = Date.now();
    }

    const now = Date.now();
    const threeMinutes = 3 * 60 * 1000;
    
    if (now - orderTime < threeMinutes) {
      const timeLeft = Math.ceil((threeMinutes - (now - orderTime)) / 1000);
      const minutesLeft = Math.floor(timeLeft / 60);
      const secondsLeft = timeLeft % 60;
      
      if (callbackQueryId) {
        await bot.answerCallbackQuery(callbackQueryId, {
          text: `Tunggu ${minutesLeft}m ${secondsLeft}s sebelum membatalkan`,
          show_alert: true
        });
      }
      return;
    }

    await editMessage(chatId, messageId, callbackQueryId,
      'Membatalkan order...',
      { parse_mode: 'HTML' }
    );

    const statusResult = await api.getOrderStatus(orderId);
    
    let otpReceived = false;
    if (statusResult && statusResult.success && statusResult.data) {
      const orderData = statusResult.data;
      otpReceived = orderData.otp_code && orderData.otp_code !== '-' && orderData.otp_code !== '';
    }

    const dbOtpReceived = order?.data?.otp_received === true;
    
    if (otpReceived || dbOtpReceived) {
        await editMessage(chatId, messageId, callbackQueryId,
            `Order tidak dapat dibatalkan!\n\nOrder ID: #${orderId}\n\nAlasan: OTP sudah diterima.\nStatus: Order selesai\nSaldo tidak dapat dikembalikan.`,
            { 
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Order Baru', callback_data: 'nokos_menu' },
                            { text: 'Menu Utama', callback_data: 'main_menu' }
                        ]
                    ]
                }
            }
        );
        return;
    }
    
    if (order?.status === 'cancelled' || order?.status === 'expired' || order?.status === 'completed') {
      await editMessage(chatId, messageId, callbackQueryId,
        `Order sudah dalam status: ${order.status}\n\nOrder ID: #${orderId}\n\nTidak bisa dibatalkan lagi.`,
        { 
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [
                { text: 'Order Baru', callback_data: 'nokos_menu' },
                { text: 'Menu Utama', callback_data: 'main_menu' }
              ]
            ]
          }
        }
      );
      return;
    }

    const alreadyRefunded = order?.data?.refunded === true;
    
    if (alreadyRefunded) {
      await editMessage(chatId, messageId, callbackQueryId,
        `Refund sudah diberikan.\n\nSaldo untuk order ini sudah dikembalikan sebelumnya.`,
        { parse_mode: 'HTML' }
      );
      return;
    }

    const cancelResult = await api.setOrderStatus(orderId, 'cancel');
    
    if (!cancelResult || !cancelResult.success) {
      const errorMsg = cancelResult?.message || 'Provider menolak pembatalan';
      
      if (errorMsg.includes('wait') || errorMsg.includes('tunggu') || errorMsg.includes('minute')) {
        await editMessage(chatId, messageId, callbackQueryId,
          `Provider sedang memproses order.\n\nSilakan tunggu beberapa saat lagi sebelum membatalkan.`,
          { 
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [
                [
                  { text: 'Coba Lagi', callback_data: `nokos_cancel_${orderId}` },
                  { text: 'Menu Utama', callback_data: 'main_menu' }
                ]
              ]
            }
          }
        );
      } else {
        await editMessage(chatId, messageId, callbackQueryId,
          `Gagal membatalkan order.\n\n${errorMsg}`,
          { 
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [
                [
                  { text: 'Coba Lagi', callback_data: `nokos_cancel_${orderId}` },
                  { text: 'Menu Utama', callback_data: 'main_menu' }
                ]
              ]
            }
          }
        );
      }
      return;
    }

    updateTransactionStatus('nokos_orders', orderId, 'cancelled');

    if (transactions.nokos_orders) {
      const orderIndex = transactions.nokos_orders.findIndex(o => o.id === orderId || o.data?.orderId === orderId);
      if (orderIndex !== -1) {
        transactions.nokos_orders[orderIndex].data.refunded = true;
        transactions.nokos_orders[orderIndex].data.manually_cancelled = true;
        saveTransactions(transactions);
      }
    }
    
    let refundMessage = '';
    const orderPrice = order.data?.price || 0;
    const refundAmount = Number(orderPrice);
    
    if (!isNaN(refundAmount) && refundAmount > 0) {
      const success = addUserBalance(userId, refundAmount);
      
      if (success) {
        balanceCache.delete(userId.toString());
        
        const currentBalance = getUserBalance(userId);
        refundMessage = `\n\nRefund: ${formatCurrency(refundAmount)}\nSaldo sekarang: ${formatCurrency(currentBalance)}`;
      }
    }

    await editMessage(chatId, messageId, callbackQueryId,
      `Order Dibatalkan\n\nOrder ID: #${orderId}${refundMessage}`,
      { 
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'Order Baru', callback_data: 'nokos_menu' },
              { text: 'Menu Utama', callback_data: 'main_menu' }
            ]
          ]
        }
      }
    );
  } catch (error) {
    await editMessage(chatId, messageId, callbackQueryId,
      `Gagal membatalkan order.\n\n${error.message || 'Error sistem'}`,
      { 
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'Coba Lagi', callback_data: `nokos_cancel_${orderId}` },
              { text: 'Menu Utama', callback_data: 'main_menu' }
            ]
          ]
        }
      }
    );
  }
}

async function autoCancelOrder(chatId, userId, orderId, price) {
  try {
    const transactions = loadTransactions();
    const order = transactions.nokos_orders?.find(o => 
        o.id === orderId || o.data?.orderId === orderId
    );
    
    if (!order) return;

    const manuallyCancelled = order?.data?.manually_cancelled === true;
    const alreadyRefunded = order?.data?.refunded === true;
    
    if (manuallyCancelled || alreadyRefunded) {
      return;
    }

    const cancelResult = await api.setOrderStatus(orderId, 'cancel');
    
    if (cancelResult && cancelResult.success) {
      updateTransactionStatus('nokos_orders', orderId, 'expired');
      
      if (transactions.nokos_orders) {
        const orderIndex = transactions.nokos_orders.findIndex(o => 
            o.id === orderId || o.data?.orderId === orderId
        );
        if (orderIndex !== -1) {
          transactions.nokos_orders[orderIndex].data.refunded = true;
          saveTransactions(transactions);
        }
      }
      
      const refundAmount = Number(price);
      
      if (!isNaN(refundAmount) && refundAmount > 0) {
        addUserBalance(userId, refundAmount);
        balanceCache.delete(userId.toString());
      }
      
      await sendNewMessage(chatId,
        `Order Expired\n\nOrder ID: #${orderId}\n\nOTP tidak diterima dalam waktu yang ditentukan.\nSaldo sebesar ${formatCurrency(price)} telah dikembalikan.`,
        { parse_mode: 'HTML' }
      );
    }
  } catch (error) {}
}*/

async function handleRumahOTPDeposit(chatId, userId, amount) {
    try {
        const depositKey = `${userId}_deposit`;

        if (depositProcessing.has(depositKey)) {
            await sendNewMessage(chatId,
                'Deposit sedang diproses, mohon tunggu...',
                { parse_mode: 'HTML' }
            );
            return;
        }
        
        depositProcessing.set(depositKey, Date.now());
        
        const amountValidation = validateAmount(amount);
        if (!amountValidation.valid) {
            await sendNewMessage(chatId,
                `Jumlah tidak valid: ${amountValidation.error}`,
                { parse_mode: 'HTML' }
            );
            depositProcessing.delete(depositKey);
            return;
        }
        
        const depositAmount = amountValidation.amount;
        
        if (depositAmount < 2000) {
            await sendNewMessage(chatId,
                'Minimal deposit adalah Rp 2,000',
                { parse_mode: 'HTML' }
            );
            depositProcessing.delete(depositKey);
            return;
        }
        
        if (depositAmount > 5000000) {
            await sendNewMessage(chatId,
                'Maksimal deposit adalah Rp 5,000,000',
                { parse_mode: 'HTML' }
            );
            depositProcessing.delete(depositKey);
            return;
        }

        const loadingMessage = await sendNewMessage(chatId, 'Memproses deposit...', { parse_mode: 'HTML' });

        const paymentMethod = getPaymentMethod();
        let depositResult;
        
        try {
            if (paymentMethod === 'cashify') {
                depositResult = await cashifyService.createDeposit(userId.toString(), depositAmount);
            } else {
                depositResult = await api.createRumahOTPDeposit(depositAmount);
            }
        } catch (apiError) {
            depositProcessing.delete(depositKey);
            await editMessage(chatId, loadingMessage.message_id, null,
                `Gagal membuat deposit: ${apiError.message || 'Koneksi error'}`,
                { 
                    parse_mode: 'HTML',
                    reply_markup: { 
                        inline_keyboard: [
                            [{ text: 'Coba Lagi', callback_data: 'deposit_main' }],
                            [{ text: 'Menu Utama', callback_data: 'main_menu' }]
                        ] 
                    } 
                }
            );
            return;
        }
        
        const isCashify = paymentMethod === 'cashify';
        const successCheck = isCashify ? 
            depositResult?.success : 
            depositResult?.success;
        
        if (!successCheck) {
            const errorMsg = depositResult?.message || 
                           depositResult?.error?.message || 
                           depositResult?.error || 
                           'Terjadi kesalahan sistem';
            
            await editMessage(chatId, loadingMessage.message_id, null,
                `Gagal membuat deposit.\n\n${errorMsg}`,
                { 
                    parse_mode: 'HTML',
                    reply_markup: { 
                        inline_keyboard: [
                            [{ text: 'Coba Lagi', callback_data: 'deposit_main' }],
                            [{ text: 'Menu Utama', callback_data: 'main_menu' }]
                        ] 
                    } 
                }
            );
            depositProcessing.delete(depositKey);
            return;
        }

        let depositData;
        let depositId;
        const transactionType = isCashify ? 'cashify_deposits' : 'rumahotp_deposits';
        
        if (isCashify) {
            depositData = depositResult.data;
            depositId = depositData.id;
            
            depositData = {
                id: depositId,
                method: 'QRIS',
                qr_string: depositData.qr_string || depositData.qr_code || '',
                total: depositAmount,
                diterima: depositData.diterima || depositAmount,
                fee: depositData.fee || 0,
                status: 'pending'
            };
        } else {
            depositData = depositResult.data;
            depositId = depositData.id || depositData.no_inv;
        }

        if (!depositId) {
            await editMessage(chatId, loadingMessage.message_id, null,
                'Gagal mendapatkan ID deposit dari provider',
                { 
                    parse_mode: 'HTML',
                    reply_markup: { 
                        inline_keyboard: [
                            [{ text: 'Coba Lagi', callback_data: 'deposit_main' }],
                            [{ text: 'Menu Utama', callback_data: 'main_menu' }]
                        ] 
                    } 
                }
            );
            depositProcessing.delete(depositKey);
            return;
        }
        
        addTransaction(transactionType, {
            userId: userId,
            id: depositId,
            amount: depositAmount,
            total: depositData.total || depositAmount,
            fee: depositData.fee || 0,
            diterima: depositData.diterima || depositAmount,
            method: 'QRIS', 
            status: 'pending',
            raw_data: depositResult
        });

        try {
            await notifyOwnerDepositCreated(depositData, userId, depositAmount, paymentMethod);
        } catch (error) {}

        const message = `
Deposit Diproses

Informasi Deposit:
ID: #${depositId}
Jumlah: ${formatCurrency(depositAmount)}
Metode: QRIS
Fee: ${formatCurrency(depositData.fee || 0)}
Diterima: ${formatCurrency(depositData.diterima || depositAmount)}
Status: Menunggu Pembayaran

Silakan scan QR untuk pembayaran
Batas waktu: 20 menit`;

        const keyboard = {
            inline_keyboard: [
                [
                    { text: 'Periksa Status', callback_data: `deposit_status_${depositId}` },
                    { text: 'Batalkan', callback_data: `deposit_cancel_${depositId}` }
                ],
                [
                    { text: 'Deposit Lagi', callback_data: 'deposit_main' },
                    { text: 'Menu Utama', callback_data: 'main_menu' }
                ]
            ]
        };

        await bot.deleteMessage(chatId, loadingMessage.message_id).catch(() => {});
        
        if (isCashify && depositData.qr_string && depositData.qr_string.trim() !== '') {
            try {
                const qrBuffer = await QRCode.toBuffer(depositData.qr_string, {
                    errorCorrectionLevel: 'H',
                    margin: 1,
                    width: 300
                });
                
                const qrMessage = await bot.sendPhoto(chatId, qrBuffer, {
                    caption: message,
                    parse_mode: 'HTML',
                    reply_markup: keyboard
                });
                userDepositMessages.set(`${userId}_${depositId}`, qrMessage.message_id);
            } catch (qrError) {
                const textMessage = await sendNewMessage(chatId, 
                    `${message}\n\nQR Text:\n<code>${depositData.qr_string.substring(0, 100)}...</code>`,
                    { 
                        parse_mode: 'HTML',
                        reply_markup: keyboard 
                    }
                );
                userDepositMessages.set(`${userId}_${depositId}`, textMessage.message_id);
            }
        } else if (depositData.qr_string && depositData.qr_string.trim() !== '') {
            try {
                const qrBuffer = await QRCode.toBuffer(depositData.qr_string, {
                    errorCorrectionLevel: 'H',
                    margin: 1,
                    width: 300
                });
                
                const qrMessage = await bot.sendPhoto(chatId, qrBuffer, {
                    caption: message,
                    parse_mode: 'HTML',
                    reply_markup: keyboard
                });
                userDepositMessages.set(`${userId}_${depositId}`, qrMessage.message_id);
            } catch (qrError) {
                const textMessage = await sendNewMessage(chatId, 
                    `${message}\n\nQR Text:\n<code>${depositData.qr_string.substring(0, 100)}...</code>`,
                    { 
                        parse_mode: 'HTML',
                        reply_markup: keyboard 
                    }
                );
                userDepositMessages.set(`${userId}_${depositId}`, textMessage.message_id);
            }
        } else {
            const textMessage = await sendNewMessage(chatId, message, { 
                parse_mode: 'HTML',
                reply_markup: keyboard 
            });
            userDepositMessages.set(`${userId}_${depositId}`, textMessage.message_id);
        }

        depositProcessing.delete(depositKey);
        
        setTimeout(() => checkDepositStatus(chatId, depositId, userId), 10000);
    } catch (error) {
        depositProcessing.delete(`${userId}_deposit`);
        
        await sendNewMessage(chatId,
            `Gagal memproses deposit.\n\n${error.message || 'Terjadi kesalahan sistem.'}`,
            { parse_mode: 'HTML' }
        );
    }
}

async function checkDepositStatus(chatId, depositId, userId, messageId = null, retryCount = 0) {
    const maxRetries = 120;
    
    if (retryCount >= maxRetries) {
        if (messageId) {
            await editMessage(chatId, messageId, null, 
                'Pemeriksaan status deposit dibatalkan.\n\nWaktu pemeriksaan status deposit telah habis.\nSilakan ulangi transaksi lagi.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: { 
                        inline_keyboard: [
                            [{ text: 'Menu Utama', callback_data: 'main_menu' }]
                        ] 
                    } 
                }
            );
        }
        return;
    }

    const paymentMethod = getPaymentMethod();
    let statusResult;
    
    if (paymentMethod === 'cashify') {
        statusResult = await cashifyService.checkDepositStatus(depositId);
    } else {
        statusResult = await api.checkRumahOTPDepositStatus(depositId);
    }
    
    const isCashify = paymentMethod === 'cashify';
    const successCheck = isCashify ? 
        statusResult?.success : 
        statusResult?.success;
    
    if (!successCheck) {
        setTimeout(() => {
            checkDepositStatus(chatId, depositId, userId, messageId, retryCount + 1);
        }, 10000);
        return;
    }

    let deposit;
    if (isCashify) {
        deposit = statusResult.data;

        if (deposit.status === 'paid') {
            deposit.status = 'success';
            
            const transactions = loadTransactions();
            const transactionType = 'cashify_deposits';
            const existingDeposit = transactions[transactionType]?.find(d => d.data.id === depositId);
            
            if (!existingDeposit || existingDeposit.status !== 'success') {
                const amountToAdd = deposit.diterima || deposit.total || 0;
                
                if (amountToAdd > 0) {
                    addUserBalance(userId, amountToAdd);
                    updateTransactionStatus(transactionType, depositId, 'success');

                    try {
                        const user = await bot.getChat(userId).catch(() => ({ 
                            id: userId, 
                            first_name: 'User' 
                        }));
                        await notifyDepositSuccess(user, amountToAdd, depositId, getUserBalance(userId));
                    } catch (error) {}

                    const depositKey = `${userId}_${depositId}`;
                    const qrMessageId = userDepositMessages.get(depositKey);
                    if (qrMessageId) {
                        try {
                            await bot.deleteMessage(chatId, qrMessageId);
                        } catch (deleteError) {}
                        userDepositMessages.delete(depositKey);
                    }
                    
                    const successMessage = `
Deposit Berhasil

${formatCurrency(amountToAdd)} telah ditambahkan ke saldo Anda
Saldo sekarang: ${formatCurrency(getUserBalance(userId))}

Terima kasih telah melakukan deposit`;
                    
                    const keyboard = {
                        inline_keyboard: [
                            [
                                { text: 'Deposit Lagi', callback_data: 'deposit_main' },
                                { text: 'Menu Utama', callback_data: 'main_menu' }
                            ]
                        ]
                    };
                    
                    if (messageId) {
                        await editMessage(chatId, messageId, null, successMessage, {
                            parse_mode: 'HTML',
                            reply_markup: keyboard
                        });
                    } else {
                        await sendNewMessage(chatId, successMessage, {
                            parse_mode: 'HTML',
                            reply_markup: keyboard
                        });
                    }
                }
            }
            return; 
        }
    } else {
        deposit = statusResult.data;
    }
    
    if (deposit.status === 'success' || deposit.status === 'paid') {
        const amountToAdd = deposit.diterima || deposit.total || depositAmount;
        
        const transactions = loadTransactions();
        const transactionType = isCashify ? 'cashify_deposits' : 'rumahotp_deposits';
        const existingDeposit = transactions[transactionType]?.find(d => d.data.id === depositId);
        
        if (!existingDeposit || existingDeposit.status !== 'success') {
            addUserBalance(userId, amountToAdd);
            updateTransactionStatus(transactionType, depositId, 'success');

            try {
                const user = await bot.getChat(userId).catch(() => ({ 
                    id: userId, 
                    first_name: 'User' 
                }));
                await notifyDepositSuccess(user, amountToAdd, depositId, getUserBalance(userId));
            } catch (error) {}
        }

        const depositKey = `${userId}_${depositId}`;
        const qrMessageId = userDepositMessages.get(depositKey);
        if (qrMessageId) {
            try {
                await bot.deleteMessage(chatId, qrMessageId);
            } catch (deleteError) {}
            userDepositMessages.delete(depositKey);
        }
        
        const successMessage = `
Deposit Berhasil

${formatCurrency(amountToAdd)} telah ditambahkan ke saldo Anda
Saldo sekarang: ${formatCurrency(getUserBalance(userId))}

Terima kasih telah melakukan deposit`;
        
        const keyboard = {
            inline_keyboard: [
                [
                    { text: 'Deposit Lagi', callback_data: 'deposit_main' },
                    { text: 'Menu Utama', callback_data: 'main_menu' }
                ]
            ]
        };
        
        if (messageId) {
            await editMessage(chatId, messageId, null, successMessage, {
                parse_mode: 'HTML',
                reply_markup: keyboard
            });
        } else {
            await sendNewMessage(chatId, successMessage, {
                parse_mode: 'HTML',
                reply_markup: keyboard
            });
        }
        
    } else if ((deposit.status === 'pending' || deposit.status === 'waiting') && messageId) {
        const updateMessage = `
Status Deposit

ID: #${depositId}
Jumlah: ${formatCurrency(deposit.total || depositAmount || 0)}
Status: Menunggu pembayaran`;
        
        await editMessage(chatId, messageId, null, updateMessage, {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Periksa Status', callback_data: `deposit_status_${depositId}` },
                        { text: 'Batalkan', callback_data: `deposit_cancel_${depositId}` }
                    ],
                    [
                        { text: 'Menu Utama', callback_data: 'main_menu' }
                    ]
                ]
            }
        });
        
        setTimeout(() => {
            checkDepositStatus(chatId, depositId, userId, messageId, retryCount + 1);
        }, 10000);
        
    } else if (deposit.status === 'cancel' || deposit.status === 'cancelled' || deposit.status === 'expired' || deposit.status === 'failed') {
        const transactionType = isCashify ? 'cashify_deposits' : 'rumahotp_deposits';
        updateTransactionStatus(transactionType, depositId, deposit.status);

        const failedMessage = `
Deposit ${deposit.status.toUpperCase()}

ID: #${depositId}
Jumlah: ${formatCurrency(deposit.total || depositAmount || 0)}
Status: ${deposit.status}

Silakan ulangi deposit lagi.`;
    
        if (messageId) {
            await editMessage(chatId, messageId, null, failedMessage, {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Ulangi Deposit', callback_data: 'deposit_main' },
                            { text: 'Menu Utama', callback_data: 'main_menu' }
                        ]
                    ]
                }
            });
        }
    } else {
        setTimeout(() => {
            checkDepositStatus(chatId, depositId, userId, messageId, retryCount + 1);
        }, 10000);
    }
}

// ========================= MESSAGE HANDLER =========================

bot.on('message', async (msg) => {
  if (msg.text && msg.text.startsWith('/')) return;
  
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const text = msg.text;
  
  const selection = userSelections.get(userId);
  
  // Handler untuk input hostname
  if (selection && selection.step === 'awaiting_hostname') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const hostname = text.trim().toLowerCase();
    
    // Validasi hostname
    const hostnameRegex = /^[a-z0-9][a-z0-9-]{1,28}[a-z0-9]$/;
    if (!hostnameRegex.test(hostname) || hostname.length < 3 || hostname.length > 30) {
      await sendNewMessage(chatId,
        `<blockquote>❌ <b>HOSTNAME TIDAK VALID!</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<b>Aturan hostname:</b>
• Hanya huruf kecil (a-z), angka (0-9), dan tanda hubung (-)
• Tidak boleh diawali/akhir dengan tanda hubung
• Minimal 3 karakter
• Maksimal 30 karakter

<b>Contoh valid:</b>
• <code>myapp</code>
• <code>bot-service</code>
• <code>api-v2</code>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Silakan coba dengan hostname lain.</blockquote>`,
        { parse_mode: 'HTML' }
      );
      return;
    }
    
    const domains = Object.keys(config.subdomain);
    const selectedDomain = domains[selection.domainIndex];
    
    if (!selectedDomain) {
      userSelections.delete(userId);
      await sendNewMessage(chatId, '❌ Domain tidak ditemukan!', { parse_mode: 'HTML' });
      return;
    }
    
    // Simpan data hostname dan lanjut ke input IP
    userSelections.set(userId, {
      step: 'awaiting_target_ip',
      hostname: hostname,
      domainIndex: selection.domainIndex,
      selectedDomain: selectedDomain,
      timestamp: Date.now()
    });
    
    await sendNewMessage(chatId,
      `<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 <b>BUAT SUBDOMAIN</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📛 <b>Domain:</b> <code>${selectedDomain}</code>
🔤 <b>Hostname:</b> <code>${hostname}</code>
🔗 <b>Hasil:</b> <code>${hostname}.${selectedDomain}</code>

<b>Step 2/2:</b> Masukkan IP Tujuan

<b>📋 Masukkan IP address yang ingin diarahkan:</b>
Contoh: <code>192.168.1.100</code> atau <code>123.456.789.0</code>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ Ketik <b>0</b> atau <b>batal</b> untuk membatalkan
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`,
      { parse_mode: 'HTML' }
    );
    return;
  }
  
  // Handler untuk input target IP
  if (selection && selection.step === 'awaiting_target_ip') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const targetIP = text.trim();
    
    // Cek pembatalan
    if (targetIP === '0' || targetIP.toLowerCase() === 'batal') {
      userSelections.delete(userId);
      await sendNewMessage(chatId,
        `<blockquote>✅ <b>PEMBUATAN SUBDOMAIN DIBATALKAN</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Gunakan menu Subdomain untuk membuat lagi.</blockquote>`,
        { parse_mode: 'HTML' }
      );
      return;
    }
    
    // Validasi IP
    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipRegex.test(targetIP)) {
      await sendNewMessage(chatId,
        `<blockquote>❌ <b>IP TIDAK VALID!</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IP yang dimasukkan: <code>${targetIP}</code>

Format IP yang benar: <code>192.168.1.1</code>

Silakan coba dengan IP yang valid.</blockquote>`,
        { parse_mode: 'HTML' }
      );
      return;
    }
    
    const hostname = selection.hostname;
    const domainIndex = selection.domainIndex;
    const selectedDomain = selection.selectedDomain;
    
    // Eksekusi pembuatan subdomain
    await executeCreateSubdomain(chatId, userId, domainIndex, hostname, targetIP, null, null);
    userSelections.delete(userId);
    return;
  }

// Handler untuk input username panel setelah pembayaran QRIS
if (selection && selection.step === 'awaiting_panel_username') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const username = text.trim();
    
    if (username === '0' || username.toLowerCase() === 'batal') {
        userSelections.delete(userId);
        if (activePanelDeposit[userId]) {
            await cancelPanelDeposit(chatId, userId, activePanelDeposit[userId].kodeTrx);
        }
        await sendNewMessage(chatId, '❌ Pembuatan panel dibatalkan.', { parse_mode: 'HTML' });
        return;
    }
    
    const result = await processPanelCreation(userId, username);
    
    if (!result.success) {
        await sendNewMessage(chatId, `❌ Gagal membuat panel.\n\n${result.error}`, { parse_mode: 'HTML' });
    }
    return;
}

// Handler untuk input username panel dengan pembayaran saldo
if (selection && selection.step === 'awaiting_panel_username_with_balance') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const username = text.trim();
    
    if (username === '0' || username.toLowerCase() === 'batal') {
        userSelections.delete(userId);
        await sendNewMessage(chatId, '❌ Pembuatan panel dibatalkan.', { parse_mode: 'HTML' });
        return;
    }
    
    const result = await processPanelCreationWithBalance(chatId, userId, username);
    
    if (!result.success) {
        await sendNewMessage(chatId, `❌ Gagal membuat panel.\n\n${result.error}`, { parse_mode: 'HTML' });
    }
    return;
}
  
  // Handler untuk instalasi panel
if (pendingInstalls.has(userId)) {
    const pending = pendingInstalls.get(userId);
    if (pending && pending.command === 'installpanel') {
        await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
        
        // Step: IP VPS
        if (pending.step === 'waiting_ip') {
            const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
            if (!ipRegex.test(text)) {
                return sendNewMessage(chatId,
                    `<blockquote>❌ Format IP tidak valid!

Contoh IP yang benar: <code>192.168.1.1</code>

⚠️ Ketik /cancelinstall untuk membatalkan</blockquote>`,
                    { parse_mode: 'HTML' }
                );
            }
            
            pending.data.ip = text;
            pending.step = 'waiting_password';
            pendingInstalls.set(userId, pending);
            
            return sendNewMessage(chatId,
                `<blockquote>⚡ <b>INSTALL ${pending.data.selectedType === 'panel' ? 'PANEL' : 'WINGS'}</b>

✅ IP: <code>${pending.data.ip}</code>

📝 <b>Step 2/${pending.data.selectedType === 'panel' ? '5' : '4'}:</b> Masukkan Password VPS

⚠️ <b>Catatan:</b>
• Password root VPS
• Bot TIDAK menyimpan password
• Password akan digunakan untuk koneksi SSH

💡 Ketik /cancelinstall untuk membatalkan</blockquote>`,
                { parse_mode: 'HTML' }
            );
        }
        
        // Step: Password
        if (pending.step === 'waiting_password') {
            if (!text || text.length < 4) {
                return sendNewMessage(chatId,
                    `<blockquote>❌ Password tidak valid!

Password minimal 4 karakter.

⚠️ Ketik /cancelinstall untuk membatalkan</blockquote>`,
                    { parse_mode: 'HTML' }
                );
            }
            
            pending.data.password = text;
            pending.step = 'waiting_domain_panel';
            pendingInstalls.set(userId, pending);
            
            return sendNewMessage(chatId,
                `<blockquote>⚡ <b>INSTALL ${pending.data.selectedType === 'panel' ? 'PANEL' : 'WINGS'}</b>

✅ IP: <code>${pending.data.ip}</code>
✅ Password: ••••••••

📝 <b>Step 3/${pending.data.selectedType === 'panel' ? '5' : '4'}:</b> Masukkan Domain Panel

<b>Contoh:</b> <code>panel.domain.com</code>

⚠️ <b>Catatan:</b>
• Domain HARUS sudah diarahkan ke IP VPS
• Contoh: panel.domain.com atau pterodactyl.domain.com
• Pastikan DNS sudah tersetting

💡 Ketik /cancelinstall untuk membatalkan</blockquote>`,
                { parse_mode: 'HTML' }
            );
        }
        
        // Step: Domain Panel
        if (pending.step === 'waiting_domain_panel') {
            const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!domainRegex.test(text)) {
                return sendNewMessage(chatId,
                    `<blockquote>❌ Format domain tidak valid!

Domain harus dalam format: <code>domain.com</code> atau <code>sub.domain.com</code>

Contoh: <code>panel.website.com</code>

⚠️ Ketik /cancelinstall untuk membatalkan</blockquote>`,
                    { parse_mode: 'HTML' }
                );
            }
            
            pending.data.domainPanel = text;
            
            if (pending.data.selectedType === 'wings') {
                pending.step = 'waiting_domain_node';
            } else {
                pending.step = 'waiting_domain_node';
            }
            pendingInstalls.set(userId, pending);
            
            if (pending.data.selectedType === 'wings') {
                return sendNewMessage(chatId,
                    `<blockquote>⚡ <b>INSTALL WINGS</b>

✅ IP: <code>${pending.data.ip}</code>
✅ Password: ••••••••
✅ Domain Panel: <code>${pending.data.domainPanel}</code>

📝 <b>Step 4/4:</b> Masukkan Domain Node

<b>Contoh:</b> <code>node.domain.com</code>

⚠️ <b>Catatan:</b>
• Domain node harus berbeda dengan domain panel
• Contoh: node.website.com
• Pastikan DNS sudah tersetting

💡 Ketik /cancelinstall untuk membatalkan</blockquote>`,
                    { parse_mode: 'HTML' }
                );
            } else {
                return sendNewMessage(chatId,
                    `<blockquote>⚡ <b>INSTALL PANEL</b>

✅ IP: <code>${pending.data.ip}</code>
✅ Password: ••••••••
✅ Domain Panel: <code>${pending.data.domainPanel}</code>

📝 <b>Step 4/5:</b> Masukkan Domain Node

<b>Contoh:</b> <code>node.domain.com</code>

⚠️ <b>Catatan:</b>
• Domain node harus berbeda dengan domain panel
• Contoh: node.website.com
• Pastikan DNS sudah tersetting

💡 Ketik /cancelinstall untuk membatalkan</blockquote>`,
                    { parse_mode: 'HTML' }
                );
            }
        }
        
        // Step: Domain Node
        if (pending.step === 'waiting_domain_node') {
            const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!domainRegex.test(text)) {
                return sendNewMessage(chatId,
                    `<blockquote>❌ Format domain tidak valid!

Domain harus dalam format: <code>domain.com</code> atau <code>sub.domain.com</code>

Contoh: <code>node.website.com</code>

⚠️ Ketik /cancelinstall untuk membatalkan</blockquote>`,
                    { parse_mode: 'HTML' }
                );
            }
            
            pending.data.domainNode = text;
            
            if (pending.data.selectedType === 'panel') {
                pending.step = 'waiting_ram';
            } else {
                pending.step = 'waiting_confirmation';
            }
            pendingInstalls.set(userId, pending);
            
            if (pending.data.selectedType === 'panel') {
                return sendNewMessage(chatId,
                    `<blockquote>⚡ <b>INSTALL PANEL</b>

✅ IP: <code>${pending.data.ip}</code>
✅ Password: ••••••••
✅ Domain Panel: <code>${pending.data.domainPanel}</code>
✅ Domain Node: <code>${pending.data.domainNode}</code>

📝 <b>Step 5/5:</b> Masukkan RAM (dalam MB)

<b>Contoh:</b>
• <code>1024</code> (1GB RAM)
• <code>2048</code> (2GB RAM)
• <code>4096</code> (4GB RAM)

⚠️ Minimal 1024 MB (1GB)
⚠️ Ketik /cancelinstall untuk membatalkan</blockquote>`,
                    { parse_mode: 'HTML' }
                );
            } else {
                const confirmMsg = `<blockquote>⚡ <b>KONFIRMASI INSTALASI WINGS</b>

<b>Review Konfigurasi:</b>
├ IP VPS: <code>${pending.data.ip}</code>
├ Domain Panel: <code>${pending.data.domainPanel}</code>
├ Domain Node: <code>${pending.data.domainNode}</code>
└ Waktu: ${new Date().toLocaleString('id-ID')}

<b>⚠️ PERINGATAN PENTING!</b>
• Proses instalasi akan memakan waktu 10-20 menit
• Jangan tutup chat ini selama instalasi
• Pastikan panel sudah terinstall

<b>Ketik:</b>
• <code>YA</code> - Untuk memulai instalasi
• <code>BATAL</code> - Untuk membatalkan</blockquote>`;

                pending.step = 'waiting_confirmation';
                pendingInstalls.set(userId, pending);
                return sendNewMessage(chatId, confirmMsg, { parse_mode: 'HTML' });
            }
        }
        
        // Step: RAM
        if (pending.step === 'waiting_ram') {
            const ram = parseInt(text);
            if (isNaN(ram) || ram < 1024) {
                return sendNewMessage(chatId,
                    `<blockquote>❌ RAM tidak valid!

Minimal RAM: 1024 MB (1GB)
Maksimal: 32768 MB (32GB)

Contoh: <code>2048</code> untuk 2GB RAM

⚠️ Ketik /cancelinstall untuk membatalkan</blockquote>`,
                    { parse_mode: 'HTML' }
                );
            }
            
            pending.data.ram = ram;
            pending.step = 'waiting_confirmation';
            pendingInstalls.set(userId, pending);
            
            const confirmMsg = `<blockquote>⚡ <b>KONFIRMASI INSTALASI PANEL</b>

<b>Review Konfigurasi:</b>
├ IP VPS: <code>${pending.data.ip}</code>
├ Domain Panel: <code>${pending.data.domainPanel}</code>
├ Domain Node: <code>${pending.data.domainNode}</code>
├ RAM: <code>${ram} MB</code>
└ Waktu: ${new Date().toLocaleString('id-ID')}

<b>⚠️ PERINGATAN PENTING!</b>
• Proses instalasi akan memakan waktu 20-30 menit
• Jangan tutup chat ini selama instalasi
• Pastikan koneksi internet stabil
• Domain sudah diarahkan ke IP VPS

<b>Ketik:</b>
• <code>YA</code> - Untuk memulai instalasi
• <code>BATAL</code> - Untuk membatalkan</blockquote>`;

            return sendNewMessage(chatId, confirmMsg, { parse_mode: 'HTML' });
        }
        
        // Step: Konfirmasi
        if (pending.step === 'waiting_confirmation') {
            const confirmation = text.toUpperCase();
            
            if (confirmation === 'BATAL') {
                pendingInstalls.delete(userId);
                return sendNewMessage(chatId,
                    `<blockquote>✅ <b>INSTALASI DIBATALKAN</b>

Gunakan /install untuk memulai kembali.</blockquote>`,
                    { parse_mode: 'HTML' }
                );
            }
            
            if (confirmation !== 'YA') {
                return sendNewMessage(chatId,
                    `<blockquote>❌ <b>KONFIRMASI DIBATALKAN</b>

Ketik <code>YA</code> untuk memulai instalasi
atau <code>BATAL</code> untuk membatalkan.</blockquote>`,
                    { parse_mode: 'HTML' }
                );
            }
            
            const context = {
                xy: msg,
                isOwner: false,
                reply: async (text, options) => {
                    return await sendNewMessage(chatId, text, options);
                },
                mess: { owner: '' },
                text: text,
                command: 'installpanel',
                generateReadableString: generateReadableString,
                prefix: '/'
            };
            
            installPterodactylPanel(context);
            return;
        }
        
        return;
    }
}

// Handler untuk maintenance reason
if (selection && selection.step === 'maintenance_set_reason') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const reason = text.trim();
    
    if (reason === '0' || reason.toLowerCase() === 'batal') {
        userSelections.delete(userId);
        await showOwnerMaintenanceMenu(chatId, userId, null, null);
        return;
    }
    
    if (selection.action === 'on') {
        setMaintenance(true, reason);
        await sendNewMessage(chatId,
            `<b>✅ MAINTENANCE MODE DIAKTIFKAN</b>\n\n` +
            `<b>Alasan:</b> ${reason}\n\n` +
            `Bot sekarang dalam mode maintenance.\n` +
            `User biasa tidak dapat menggunakan bot.`,
            { 
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '🔙 Kembali', callback_data: 'owner_maintenance_menu' }]
                    ]
                }
            }
        );
    } else {
        const current = getMaintenanceInfo();
        setMaintenance(current.active, reason);
        await sendNewMessage(chatId,
            `<b>✅ ALASAN MAINTENANCE DIPERBARUI</b>\n\n` +
            `<b>Alasan baru:</b> ${reason}`,
            { 
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '🔙 Kembali', callback_data: 'owner_maintenance_menu' }]
                    ]
                }
            }
        );
    }
    
    userSelections.delete(userId);
    return;
}

// Handler untuk custom profit
if (selection && selection.step === 'setprofit_custom') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const profitInput = text.trim();
    
    if (profitInput === '0' || profitInput.toLowerCase() === 'batal') {
        userSelections.delete(userId);
        await showOwnerSetProfitMenu(chatId, userId, null, null);
        return;
    }
    
    let profit = parseInt(profitInput);
    if (isNaN(profit) || profit < 0 || profit > 100000) {
        await sendNewMessage(chatId,
            `❌ Nominal tidak valid.\n\nMinimal: 0\nMaksimal: 100.000\n\nSilakan coba lagi.`,
            { parse_mode: 'HTML' }
        );
        return;
    }
    
    // Update via command
    const simulatedMsg = {
        chat: { id: chatId },
        from: msg.from,
        text: `/setprofit ${profit}`
    };
    bot.emit('text', simulatedMsg);
    
    userSelections.delete(userId);
    return;
}

// Handler untuk maintenance reason
if (selection && selection.step === 'maintenance_set_reason') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const reason = text.trim();
  
  if (reason === '0' || reason.toLowerCase() === 'batal') {
    userSelections.delete(userId);
    await showOwnerMaintenanceMenu(chatId, userId, null, null);
    return;
  }
  
  if (selection.action === 'on') {
    setMaintenance(true, reason);
    await sendNewMessage(chatId,
      `<b>✅ MAINTENANCE MODE DIAKTIFKAN</b>\n\n` +
      `<b>Alasan:</b> ${reason}\n\n` +
      `Bot sekarang dalam mode maintenance.\n` +
      `User biasa tidak dapat menggunakan bot.`,
      { parse_mode: 'HTML' }
    );
  } else {
    const current = getMaintenanceInfo();
    setMaintenance(current.active, reason);
    await sendNewMessage(chatId,
      `<b>✅ ALASAN MAINTENANCE DIPERBARUI</b>\n\n` +
      `<b>Alasan baru:</b> ${reason}`,
      { parse_mode: 'HTML' }
    );
  }
  
  userSelections.delete(userId);
  return;
}

// Handler untuk custom profit
if (selection && selection.step === 'setprofit_custom') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const profitInput = text.trim();
  
  if (profitInput === '0' || profitInput.toLowerCase() === 'batal') {
    userSelections.delete(userId);
    await showOwnerSetProfitMenu(chatId, userId, null, null);
    return;
  }
  
  let profit = parseInt(profitInput);
  if (isNaN(profit) || profit < 0 || profit > 100000) {
    await sendNewMessage(chatId,
      `❌ Nominal tidak valid.\n\nMinimal: 0\nMaksimal: 100.000\n\nSilakan coba lagi.`,
      { parse_mode: 'HTML' }
    );
    return;
  }
  
  // Update via command
  const simulatedMsg = {
    chat: { id: chatId },
    from: msg.from,
    text: `/setprofit ${profit}`
  };
  bot.emit('text', simulatedMsg);
  
  userSelections.delete(userId);
  return;
}
  
// Handler untuk input panel info setelah pembayaran
if (selection && selection.step === 'awaiting_panel_info') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const userInfo = text.trim();
    
    if (userInfo === '0' || userInfo.toLowerCase() === 'batal') {
        userSelections.delete(userId);
        if (activePanelDeposit[userId]) {
            await cancelPanelDeposit(chatId, userId, activePanelDeposit[userId].kodeTrx);
        }
        await sendNewMessage(chatId, '❌ Pembuatan panel dibatalkan.', { parse_mode: 'HTML' });
        return;
    }
    
    const result = await processPanelCreation(userId, userInfo);
    
    if (!result.success) {
        await sendNewMessage(chatId, `❌ Gagal membuat panel.\n\n${result.error}`, { parse_mode: 'HTML' });
    }
    return;
}

// Handler untuk admin panel info
if (selection && selection.step === 'awaiting_admin_panel_info') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const panelInfo = text.trim();
    
    if (panelInfo === '0' || panelInfo.toLowerCase() === 'batal') {
        userSelections.delete(userId);
        await sendNewMessage(chatId, '❌ Pembelian admin panel dibatalkan.', { parse_mode: 'HTML' });
        return;
    }
    
    const result = await processAdminPanelCreation(chatId, userId, panelInfo);
    
    if (!result.success) {
        await sendNewMessage(chatId, `❌ Gagal membuat admin panel.\n\n${result.error}`, { parse_mode: 'HTML' });
    }
    return;
}

// Handler untuk upload file script (owner)
if (selection && selection.step === 'owner_script_upload_file') {
    // Check if message contains a document
    if (!msg.document) {
        await sendNewMessage(chatId,
            '❌ Silakan upload file (bukan teks).\n\n' +
            'Kirimkan file script yang ingin dijual.\n' +
            'Ketik *0* untuk membatalkan.',
            { parse_mode: "Markdown" }
        );
        return;
    }
    
    const document = msg.document;
    const fileName = document.file_name;
    const fileSize = document.file_size;
    const fileSizeMB = (fileSize / (1024 * 1024)).toFixed(2);
    
    // Check file size (max 50 MB)
    if (fileSize > 50 * 1024 * 1024) {
        await sendNewMessage(chatId,
            `❌ File terlalu besar! (${fileSizeMB} MB)\n\n` +
            `Maksimal ukuran file adalah 50 MB.\n\n` +
            `Silakan upload file yang lebih kecil.`,
            { parse_mode: "HTML" }
        );
        return;
    }
    
    // Show loading
    const loadingMsg = await sendNewMessage(chatId, '⏳ Mengupload file...', { parse_mode: 'HTML' });
    
    try {
        // Get file from Telegram
        const fileLink = await bot.getFileLink(document.file_id);
        
        // Download file
        const response = await axios({
            method: 'GET',
            url: fileLink,
            responseType: 'arraybuffer'
        });
        
        // Convert to base64 for storage
        const fileContent = Buffer.from(response.data).toString('base64');
        
        // Store in selection
        selection.scriptData = {
            fileName: fileName,
            fileSize: fileSize,
            fileSizeMB: fileSizeMB,
            fileContent: fileContent,
            isBinary: true
        };
        selection.step = 'owner_script_add_name_from_file';
        userSelections.set(userId, selection);
        
        await bot.deleteMessage(chatId, loadingMsg.message_id).catch(() => {});
        
        await sendNewMessage(chatId,
            `✅ *File berhasil diupload!*\n\n` +
            `📁 Nama file: ${fileName}\n` +
            `📦 Ukuran: ${fileSizeMB} MB\n\n` +
            `📝 *Langkah 2/5: Nama Script*\n\n` +
            `Silakan kirimkan *nama script* untuk file ini.\n\n` +
            `Contoh: *Premium Auto Bot*\n\n` +
            `Ketik *0* untuk membatalkan.`,
            { parse_mode: "Markdown" }
        );
        
    } catch (error) {
        await bot.deleteMessage(chatId, loadingMsg.message_id).catch(() => {});
        await sendNewMessage(chatId,
            `❌ Gagal mengupload file.\n\nError: ${error.message}`,
            { parse_mode: 'HTML' }
        );
    }
    return;
}

// Handler untuk nama script dari file upload
if (selection && selection.step === 'owner_script_add_name_from_file') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const scriptName = text.trim();
    
    if (scriptName === '0' || scriptName.toLowerCase() === 'batal') {
        userSelections.delete(userId);
        await sendNewMessage(chatId, '❌ Penambahan script dibatalkan.', { parse_mode: 'HTML' });
        return;
    }
    
    if (scriptName.length < 3) {
        await sendNewMessage(chatId, '❌ Nama script minimal 3 karakter.', { parse_mode: 'HTML' });
        return;
    }
    
    selection.scriptData.name = scriptName;
    selection.step = 'owner_script_add_category_from_file';
    userSelections.set(userId, selection);
    
    const categories = ['Premium', 'Basic', 'Tools', 'Game', 'Social Media', 'Utility'];
    let catMsg = `➕ *TAMBAH SCRIPT (FILE)* ➕\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    catMsg += `📝 *Langkah 3/5: Kategori Script*\n\n`;
    catMsg += `📜 *Nama:* ${scriptName}\n`;
    catMsg += `📁 *File:* ${selection.scriptData.fileName}\n\n`;
    catMsg += `Pilih *kategori script*:\n\n`;
    categories.forEach((cat, i) => {
        catMsg += `${i + 1}. ${cat}\n`;
    });
    catMsg += `\nKetik nomor kategori (1-6) atau ketik *0* untuk batal.`;
    
    await sendNewMessage(chatId, catMsg, { parse_mode: "Markdown" });
    return;
}

// Handler untuk kategori dari file upload
if (selection && selection.step === 'owner_script_add_category_from_file') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const categoryInput = text.trim();
    const categories = ['Premium', 'Basic', 'Tools', 'Game', 'Social Media', 'Utility'];
    const categoryIndex = parseInt(categoryInput) - 1;
    
    if (categoryInput === '0') {
        userSelections.delete(userId);
        await sendNewMessage(chatId, '❌ Penambahan script dibatalkan.', { parse_mode: 'HTML' });
        return;
    }
    
    let category = categoryInput;
    if (!isNaN(categoryIndex) && categories[categoryIndex]) {
        category = categories[categoryIndex];
    } else if (!categories.includes(categoryInput)) {
        await sendNewMessage(chatId, `❌ Kategori tidak valid.\n\nPilihan: ${categories.join(', ')}\n\nSilakan coba lagi.`, { parse_mode: 'HTML' });
        return;
    }
    
    selection.scriptData.category = category;
    selection.step = 'owner_script_add_price_from_file';
    userSelections.set(userId, selection);
    
    await sendNewMessage(chatId,
        `➕ *TAMBAH SCRIPT (FILE)* ➕\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `📝 *Langkah 4/5: Harga Script*\n\n` +
        `📜 *Nama:* ${selection.scriptData.name}\n` +
        `📂 *Kategori:* ${category}\n` +
        `📁 *File:* ${selection.scriptData.fileName}\n\n` +
        `Silakan kirimkan *harga script*:\n\n` +
        `Contoh: *5000* atau *10000* atau *15000*\n\n` +
        `📌 Minimal: Rp 1.000\n` +
        `📌 Maksimal: Rp 500.000\n\n` +
        `Ketik *0* untuk batal.`,
        { parse_mode: "Markdown" }
    );
    return;
}

// Handler untuk harga dari file upload
if (selection && selection.step === 'owner_script_add_price_from_file') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const priceInput = text.trim();
    
    if (priceInput === '0') {
        userSelections.delete(userId);
        await sendNewMessage(chatId, '❌ Penambahan script dibatalkan.', { parse_mode: 'HTML' });
        return;
    }
    
    let price = parseInt(priceInput);
    if (isNaN(price) || price < 1000 || price > 500000) {
        await sendNewMessage(chatId, '❌ Harga tidak valid. Minimal Rp 1.000, maksimal Rp 500.000.\n\nSilakan coba lagi.', { parse_mode: 'HTML' });
        return;
    }
    
    selection.scriptData.price = price;
    selection.step = 'owner_script_add_instructions_from_file';
    userSelections.set(userId, selection);
    
    await sendNewMessage(chatId,
        `➕ *TAMBAH SCRIPT (FILE)* ➕\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `📝 *Langkah 5/5: Instruksi Penggunaan*\n\n` +
        `📜 *Nama:* ${selection.scriptData.name}\n` +
        `📂 *Kategori:* ${selection.scriptData.category}\n` +
        `💰 *Harga:* ${formatCurrency(price)}\n` +
        `📁 *File:* ${selection.scriptData.fileName} (${selection.scriptData.fileSizeMB} MB)\n\n` +
        `Silakan kirimkan *instruksi penggunaan* (opsional):\n\n` +
        `Contoh:\n` +
        `1. Download file\n` +
        `2. Extract jika ZIP\n` +
        `3. Ikuti panduan di dalam folder\n\n` +
        `Ketik *skip* untuk melewati, atau *0* untuk batal.`,
        { parse_mode: "Markdown" }
    );
    return;
}

// Handler untuk instruksi dari file upload
if (selection && selection.step === 'owner_script_add_instructions_from_file') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const instructions = text.trim();
    
    if (instructions === '0') {
        userSelections.delete(userId);
        await sendNewMessage(chatId, '❌ Penambahan script dibatalkan.', { parse_mode: 'HTML' });
        return;
    }
    
    // Generate unique ID
    const scriptId = `SCRIPT_${Date.now()}_${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    
    // Save script to database with file content
    const scriptsData = loadScriptsData();
    const newScript = {
        id: scriptId,
        name: selection.scriptData.name,
        description: `File script: ${selection.scriptData.fileName}\nUkuran: ${selection.scriptData.fileSizeMB} MB`,
        category: selection.scriptData.category,
        price: selection.scriptData.price,
        content: selection.scriptData.fileContent, // Store as base64
        instructions: instructions.toLowerCase() !== 'skip' ? instructions : '',
        preview: `File: ${selection.scriptData.fileName}`,
        version: "1.0",
        tags: [selection.scriptData.category.toLowerCase()],
        downloads: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isActive: true,
        isFile: true,
        fileName: selection.scriptData.fileName,
        fileSize: selection.scriptData.fileSize,
        fileSizeMB: selection.scriptData.fileSizeMB
    };
    
    scriptsData.scripts.push(newScript);
    saveScriptsData(scriptsData);
    await notifyNewScriptToChannel(newScript, userId);
    
    const message = `
✅ *SCRIPT BERHASIL DITAMBAHKAN!* ✅
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📜 *Nama:* ${selection.scriptData.name}
🆔 *ID:* \`${scriptId}\`
📂 *Kategori:* ${selection.scriptData.category}
💰 *Harga:* ${formatCurrency(selection.scriptData.price)}
📁 *File:* ${selection.scriptData.fileName}
📦 *Ukuran:* ${selection.scriptData.fileSizeMB} MB
📥 *Total Download:* 0x
📅 *Dibuat:* ${new Date().toLocaleString('id-ID')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Script sudah tersedia untuk dibeli oleh user!
`.trim();

    const keyboard = {
        inline_keyboard: [
            [
                { text: '➕ Tambah Lagi', callback_data: 'owner_script_upload' },
                { text: '📋 Lihat Script', callback_data: 'owner_script_list' }
            ],
            [{ text: '🔙 Menu Script', callback_data: 'owner_script_menu' }]
        ]
    };

    await sendNewMessage(chatId, message, {
        parse_mode: "Markdown",
        reply_markup: keyboard
    });
    
    userSelections.delete(userId);
    return;
}

// Handler untuk input nama script (owner add script)
if (selection && selection.step === 'owner_script_add_name') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const scriptName = text.trim();
    
    if (scriptName === '0' || scriptName.toLowerCase() === 'batal') {
        userSelections.delete(userId);
        await sendNewMessage(chatId, '❌ Penambahan script dibatalkan.', { parse_mode: 'HTML' });
        return;
    }
    
    if (scriptName.length < 3) {
        await sendNewMessage(chatId, '❌ Nama script minimal 3 karakter.', { parse_mode: 'HTML' });
        return;
    }
    
    // Update selection
    selection.scriptData = selection.scriptData || {};
    selection.scriptData.name = scriptName;
    selection.step = 'owner_script_add_category';
    userSelections.set(userId, selection);
    
    const categories = ['Premium', 'Basic', 'Tools', 'Game', 'Social Media', 'Utility'];
    let catMsg = `➕ *TAMBAH SCRIPT* ➕\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    catMsg += `📝 *Langkah 2/6: Kategori Script*\n\n`;
    catMsg += `📜 *Nama:* ${scriptName}\n\n`;
    catMsg += `Pilih *kategori script*:\n\n`;
    categories.forEach((cat, i) => {
        catMsg += `${i + 1}. ${cat}\n`;
    });
    catMsg += `\nKetik nomor kategori (1-6) atau ketik *0* untuk batal.`;
    
    await sendNewMessage(chatId, catMsg, { parse_mode: "Markdown" });
    return;
}

// Handler untuk input kategori script
if (selection && selection.step === 'owner_script_add_category') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const categoryInput = text.trim();
    const categories = ['Premium', 'Basic', 'Tools', 'Game', 'Social Media', 'Utility'];
    const categoryIndex = parseInt(categoryInput) - 1;
    
    if (categoryInput === '0') {
        userSelections.delete(userId);
        await sendNewMessage(chatId, '❌ Penambahan script dibatalkan.', { parse_mode: 'HTML' });
        return;
    }
    
    let category = categoryInput;
    if (!isNaN(categoryIndex) && categories[categoryIndex]) {
        category = categories[categoryIndex];
    } else if (!categories.includes(categoryInput)) {
        await sendNewMessage(chatId, `❌ Kategori tidak valid.\n\nPilihan: ${categories.join(', ')}\n\nSilakan coba lagi.`, { parse_mode: 'HTML' });
        return;
    }
    
    selection.scriptData.category = category;
    selection.step = 'owner_script_add_description';
    userSelections.set(userId, selection);
    
    await sendNewMessage(chatId,
        `➕ *TAMBAH SCRIPT* ➕\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `📝 *Langkah 3/6: Deskripsi Script*\n\n` +
        `📜 *Nama:* ${selection.scriptData.name}\n` +
        `📂 *Kategori:* ${category}\n\n` +
        `Silakan kirimkan *deskripsi script*:\n\n` +
        `Contoh: Script auto claim bonus harian dari berbagai platform.\n\n` +
        `Minimal 10 karakter.\n\n` +
        `Ketik *0* untuk batal.`,
        { parse_mode: "Markdown" }
    );
    return;
}

// Handler untuk input deskripsi script
if (selection && selection.step === 'owner_script_add_description') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const description = text.trim();
    
    if (description === '0') {
        userSelections.delete(userId);
        await sendNewMessage(chatId, '❌ Penambahan script dibatalkan.', { parse_mode: 'HTML' });
        return;
    }
    
    if (description.length < 10) {
        await sendNewMessage(chatId, '❌ Deskripsi script minimal 10 karakter.\n\nSilakan coba lagi.', { parse_mode: 'HTML' });
        return;
    }
    
    selection.scriptData.description = description;
    selection.step = 'owner_script_add_price';
    userSelections.set(userId, selection);
    
    await sendNewMessage(chatId,
        `➕ *TAMBAH SCRIPT* ➕\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `📝 *Langkah 4/6: Harga Script*\n\n` +
        `📜 *Nama:* ${selection.scriptData.name}\n` +
        `📂 *Kategori:* ${selection.scriptData.category}\n` +
        `📝 *Deskripsi:* ${description.substring(0, 50)}...\n\n` +
        `Silakan kirimkan *harga script*:\n\n` +
        `Contoh: *5000* atau *10000* atau *15000*\n\n` +
        `📌 Minimal: Rp 1.000\n` +
        `📌 Maksimal: Rp 500.000\n\n` +
        `Ketik *0* untuk batal.`,
        { parse_mode: "Markdown" }
    );
    return;
}

// Handler untuk input harga script
if (selection && selection.step === 'owner_script_add_price') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const priceInput = text.trim();
    
    if (priceInput === '0') {
        userSelections.delete(userId);
        await sendNewMessage(chatId, '❌ Penambahan script dibatalkan.', { parse_mode: 'HTML' });
        return;
    }
    
    let price = parseInt(priceInput);
    if (isNaN(price) || price < 1000 || price > 500000) {
        await sendNewMessage(chatId, '❌ Harga tidak valid. Minimal Rp 1.000, maksimal Rp 500.000.\n\nSilakan coba lagi.', { parse_mode: 'HTML' });
        return;
    }
    
    selection.scriptData.price = price;
    selection.step = 'owner_script_add_content';
    userSelections.set(userId, selection);
    
    await sendNewMessage(chatId,
        `➕ *TAMBAH SCRIPT* ➕\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `📝 *Langkah 5/6: Isi/Konten Script*\n\n` +
        `📜 *Nama:* ${selection.scriptData.name}\n` +
        `📂 *Kategori:* ${selection.scriptData.category}\n` +
        `💰 *Harga:* ${formatCurrency(price)}\n\n` +
        `Silakan kirimkan *isi/konten script* (kode program):\n\n` +
        `📌 Script akan dikirim sebagai file .txt ke pembeli\n` +
        `📌 Support JavaScript, Python, PHP, dll\n` +
        `📌 Minimal 20 karakter\n\n` +
        `Ketik *0* untuk batal.`,
        { parse_mode: "Markdown" }
    );
    return;
}

// Handler untuk input konten script
if (selection && selection.step === 'owner_script_add_content') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const content = text;
    
    if (content === '0') {
        userSelections.delete(userId);
        await sendNewMessage(chatId, '❌ Penambahan script dibatalkan.', { parse_mode: 'HTML' });
        return;
    }
    
    if (content.length < 50) {
        await sendNewMessage(chatId, '❌ Konten script terlalu pendek. Minimal 50 karakter.\n\nSilakan coba lagi.', { parse_mode: 'HTML' });
        return;
    }
    
    selection.scriptData.content = content;
    selection.step = 'owner_script_add_instructions';
    userSelections.set(userId, selection);
    
    await sendNewMessage(chatId,
        `➕ *TAMBAH SCRIPT* ➕\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `📝 *Langkah 6/6: Instruksi Penggunaan*\n\n` +
        `📜 *Nama:* ${selection.scriptData.name}\n` +
        `📂 *Kategori:* ${selection.scriptData.category}\n` +
        `💰 *Harga:* ${formatCurrency(selection.scriptData.price)}\n` +
        `📝 *Konten:* ${content.length} karakter\n\n` +
        `Silakan kirimkan *instruksi penggunaan* (opsional):\n\n` +
        `Contoh:\n` +
        `1. Install Node.js\n` +
        `2. Jalankan npm install\n` +
        `3. Edit config.json\n` +
        `4. Jalankan node index.js\n\n` +
        `Ketik *skip* untuk melewati, atau *0* untuk batal.`,
        { parse_mode: "Markdown" }
    );
    return;
}

// Handler untuk input instruksi script
if (selection && selection.step === 'owner_script_add_instructions') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const instructions = text.trim();
    
    if (instructions === '0') {
        userSelections.delete(userId);
        await sendNewMessage(chatId, '❌ Penambahan script dibatalkan.', { parse_mode: 'HTML' });
        return;
    }
    
    if (instructions.toLowerCase() !== 'skip') {
        selection.scriptData.instructions = instructions;
    } else {
        selection.scriptData.instructions = '';
    }
    
    // Generate unique ID
    const scriptId = `SCRIPT_${Date.now()}_${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    selection.scriptData.id = scriptId;
    selection.scriptData.version = "1.0";
    selection.scriptData.tags = [];
    selection.scriptData.downloads = 0;
    selection.scriptData.createdAt = new Date().toISOString();
    selection.scriptData.updatedAt = new Date().toISOString();
    selection.scriptData.isActive = true;
    
    // Save to database
    const scriptsData = loadScriptsData();
    scriptsData.scripts.push(selection.scriptData);
    saveScriptsData(scriptsData);
    await notifyNewScriptToChannel(newScript, userId);
    
    const message = `
✅ *SCRIPT BERHASIL DITAMBAHKAN!* ✅
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📜 *Nama:* ${selection.scriptData.name}
🆔 *ID:* \`${scriptId}\`
📂 *Kategori:* ${selection.scriptData.category}
💰 *Harga:* ${formatCurrency(selection.scriptData.price)}
📥 *Total Download:* 0x
📅 *Dibuat:* ${new Date().toLocaleString('id-ID')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Script sudah tersedia untuk dibeli oleh user!
`.trim();

    const keyboard = {
        inline_keyboard: [
            [
                { text: '➕ Tambah Lagi', callback_data: 'owner_script_upload' },
                { text: '📋 Lihat Script', callback_data: 'owner_script_list' }
            ],
            [{ text: '🔙 Menu Script', callback_data: 'owner_script_menu' }]
        ]
    };

    await sendNewMessage(chatId, message, {
        parse_mode: "Markdown",
        reply_markup: keyboard
    });
    
    userSelections.delete(userId);
    return;
}

// Handler untuk set harga script (owner)
if (selection && selection.step === 'owner_script_set_price') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const priceInput = text.trim();
    
    if (priceInput === '0') {
        userSelections.delete(userId);
        await showOwnerScriptList(chatId, userId, 'price', null, null);
        return;
    }
    
    let newPrice = parseInt(priceInput);
    if (isNaN(newPrice) || newPrice < 1000 || newPrice > 500000) {
        await sendNewMessage(chatId, '❌ Harga tidak valid. Minimal Rp 1.000, maksimal Rp 500.000.\n\nSilakan coba lagi.', { parse_mode: 'HTML' });
        return;
    }
    
    await executeSetScriptPrice(chatId, userId, selection.scriptId, newPrice, null, null);
    userSelections.delete(userId);
    return;
}

// Handler untuk edit script (owner)
if (selection && selection.step === 'owner_script_edit_value') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const newValue = text.trim();
    
    if (newValue === '0') {
        userSelections.delete(userId);
        await showOwnerScriptList(chatId, userId, 'edit', null, null);
        return;
    }
    
    const scriptId = selection.scriptId;
    const fieldName = selection.editField;
    const scriptsData = loadScriptsData();
    const scriptIndex = scriptsData.scripts.findIndex(s => s.id === scriptId);
    
    if (scriptIndex === -1) {
        await sendNewMessage(chatId, '❌ Script tidak ditemukan!', { parse_mode: 'HTML' });
        userSelections.delete(userId);
        return;
    }
    
    // Validate based on field
    let isValid = true;
    let errorMsg = '';
    
    switch(fieldName) {
        case 'name':
            if (newValue.length < 3) {
                isValid = false;
                errorMsg = 'Nama script minimal 3 karakter.';
            }
            break;
        case 'category':
            const validCategories = ['Premium', 'Basic', 'Tools', 'Game', 'Social Media', 'Utility'];
            if (!validCategories.includes(newValue)) {
                isValid = false;
                errorMsg = `Kategori harus salah satu dari: ${validCategories.join(', ')}`;
            }
            break;
        case 'description':
            if (newValue.length < 10) {
                isValid = false;
                errorMsg = 'Deskripsi minimal 10 karakter.';
            }
            break;
        case 'price':
            const price = parseInt(newValue);
            if (isNaN(price) || price < 1000 || price > 500000) {
                isValid = false;
                errorMsg = 'Harga harus antara Rp 1.000 - Rp 500.000';
            }
            break;
        case 'content':
            if (newValue.length < 20) {
                isValid = false;
                errorMsg = 'Konten script minimal 20 karakter.';
            }
            break;
        case 'version':
            if (newValue.length < 3) {
                isValid = false;
                errorMsg = 'Versi minimal 3 karakter (contoh: 1.0).';
            }
            break;
    }
    
    if (!isValid) {
        await sendNewMessage(chatId, `❌ ${errorMsg}\n\nSilakan coba lagi.`, { parse_mode: 'HTML' });
        return;
    }
    
    // Update value
    if (fieldName === 'price') {
        scriptsData.scripts[scriptIndex][fieldName] = parseInt(newValue);
    } else if (fieldName === 'tags') {
        scriptsData.scripts[scriptIndex][fieldName] = newValue.split(',').map(t => t.trim());
    } else {
        scriptsData.scripts[scriptIndex][fieldName] = newValue;
    }
    
    scriptsData.scripts[scriptIndex].updatedAt = new Date().toISOString();
    saveScriptsData(scriptsData);
    await notifyNewScriptToChannel(selection.scriptData, userId);
    
    await sendNewMessage(chatId,
        `✅ *${fieldName.toUpperCase()} berhasil diupdate!*\n\n` +
        `Script: ${scriptsData.scripts[scriptIndex].name}\n` +
        `Nilai baru: ${fieldName === 'price' ? formatCurrency(parseInt(newValue)) : newValue}`,
        { parse_mode: "Markdown" }
    );
    
    userSelections.delete(userId);
    await showOwnerScriptList(chatId, userId, 'edit', null, null);
    return;
}
  
  // Handler untuk input pencarian script
if (selection && selection.step === 'script_search_input') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const searchTerm = text.trim();
    
    if (searchTerm === '0' || searchTerm.toLowerCase() === 'batal') {
        userSelections.delete(userId);
        await showBuyScriptMenu(chatId, userId, null, null);
        return;
    }
    
    if (searchTerm.length < 2) {
        await sendNewMessage(chatId,
            '❌ Kata kunci terlalu pendek. Minimal 2 karakter.\n\nSilakan coba lagi.',
            { parse_mode: 'HTML' }
        );
        return;
    }
    
    await searchScriptsAndShow(chatId, userId, searchTerm, msg.message_id);
    userSelections.delete(userId);
    return;
}
  
  // Handler untuk input pencarian layanan
if (selection && selection.step === 'search_service_input') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const searchTerm = text.trim();
    
    if (searchTerm === '0' || searchTerm.toLowerCase() === 'batal') {
        userSelections.delete(userId);
        await showOtherServices(chatId, userId, msg.message_id, callbackQueryId, 0);
        return;
    }
    
    if (searchTerm.length < 2) {
        await sendNewMessage(chatId,
            '❌ Kata kunci terlalu pendek. Minimal 2 karakter.\n\nSilakan coba lagi.',
            { parse_mode: 'HTML' }
        );
        return;
    }
    
    await searchService(chatId, userId, searchTerm, msg.message_id);
    userSelections.delete(userId);
    return;
}

// Handler untuk input pencarian negara
if (selection && selection.step === 'search_country_input') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const searchTerm = text.trim();
    const serviceId = selection.serviceId;
    
    if (searchTerm === '0' || searchTerm.toLowerCase() === 'batal') {
        userSelections.delete(userId);
        await showCountryMenu(chatId, userId, serviceId, selection.serviceName, msg.message_id, callbackQueryId, 0);
        return;
    }
    
    if (searchTerm.length < 2) {
        await sendNewMessage(chatId,
            '❌ Kata kunci terlalu pendek. Minimal 2 karakter.\n\nSilakan coba lagi.',
            { parse_mode: 'HTML' }
        );
        return;
    }
    
    await searchCountry(chatId, userId, serviceId, searchTerm, msg.message_id);
    userSelections.delete(userId);
    return;
}
  
  if (selection && selection.step === 'awaiting_withdraw_target') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const targetNumber = text.trim();
    
    if (targetNumber === '0' || targetNumber.toLowerCase() === 'batal') {
        userSelections.delete(userId);
        
        await sendNewMessage(chatId,
            '❌ Withdraw dibatalkan.',
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '💰 Withdraw Menu', callback_data: 'withdraw_menu' }]
                    ]
                }
            }
        );
        return;
    }
    
    // Validasi nomor
    const cleanNumber = targetNumber.replace(/[^\d]/g, '');
    if (cleanNumber.length < 10 || cleanNumber.length > 15) {
        await sendNewMessage(chatId,
            `❌ <b>NOMOR TIDAK VALID</b>\n\n` +
            `Nomor: <code>${targetNumber}</code>\n` +
            `Panjang nomor harus 10-15 digit.\n\n` +
            `Contoh: <code>08123456789</code>\n\n` +
            `Silakan kirim nomor yang valid atau ketik 0 untuk batal.`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '❌ Batalkan', callback_data: `withdraw_brand_${selection.brand}_${selection.menuPage}` }]
                    ]
                }
            }
        );
        return;
    }
    
    // Proses withdraw
    await processWithdrawOrder(chatId, userId, selection.productCode, cleanNumber);
    
    userSelections.delete(userId);
    return;
}
  
// Handler untuk pesan CS Chat (user)
if (selection && selection.step === 'cs_chat_active') {
    await handleUserToCSMessage(msg);
    return;
}

// Handler untuk balasan CS Admin
if (selection && selection.step === 'cs_admin_chat') {
    await handleCSToUserMessage(msg);
    return;
}
  
// Handler untuk Add CS Admin
if (selection && selection.step === 'awaiting_cs_admin_id') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const targetUserId = text.trim();
  
  if (!/^\d+$/.test(targetUserId)) {
    await sendNewMessage(chatId,
      'Invalid User ID. Must be numbers only.\nExample: 123456789',
      { parse_mode: 'HTML' }
    );
    userSelections.delete(userId);
    return;
  }
  
  // Cek apakah sudah menjadi CS admin
  const csAdmins = config.cs_admins || [];
  if (csAdmins.includes(targetUserId)) {
    await sendNewMessage(chatId,
      `User <code>${targetUserId}</code> is already a CS Admin.`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '➖ Remove CS', callback_data: `cs_remove_confirm_${targetUserId}` },
              { text: '🔙 Back', callback_data: 'owner_cs_menu' }
            ]
          ]
        }
      }
    );
    userSelections.delete(userId);
    return;
  }
  
  // Konfirmasi penambahan
  await sendNewMessage(chatId,
    `<b>➕ CONFIRM ADD CS ADMIN</b>\n\n` +
    `User ID: <code>${targetUserId}</code>\n\n` +
    `Are you sure you want to add this user as CS Admin?\n\n` +
    `<i>User will be able to access CS features</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [
            { text: '✅ Yes, Add', callback_data: `cs_add_confirm_${targetUserId}` },
            { text: '❌ Cancel', callback_data: 'owner_cs_menu' }
          ]
        ]
      }
    }
  );
  
  userSelections.delete(userId);
  return;
}

// Handler untuk Remove CS Admin
if (selection && selection.step === 'awaiting_remove_cs_admin_id') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const targetUserId = text.trim();
  const csAdmins = config.cs_admins || [];
  
  if (!csAdmins.includes(targetUserId)) {
    await sendNewMessage(chatId,
      `User <code>${targetUserId}</code> is not a CS Admin.\n\n` +
      `Check the CS Admin list first.`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '📋 List CS Admins', callback_data: 'list_cs_admins' },
              { text: '🔙 Back', callback_data: 'owner_cs_menu' }
            ]
          ]
        }
      }
    );
    userSelections.delete(userId);
    return;
  }
  
  // Konfirmasi penghapusan
  await sendNewMessage(chatId,
    `<b>➖ CONFIRM REMOVE CS ADMIN</b>\n\n` +
    `User ID: <code>${targetUserId}</code>\n\n` +
    `Are you sure you want to remove this user as CS Admin?\n\n` +
    `<i>User will no longer access CS features</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [
            { text: '✅ Yes, Remove', callback_data: `cs_remove_confirm_${targetUserId}` },
            { text: '❌ Cancel', callback_data: 'owner_cs_menu' }
          ]
        ]
      }
    }
  );
  
  userSelections.delete(userId);
  return;
}
  
// Quick balance add any user
if (selection && selection.step === 'balance_add_any') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const parts = text.trim().split(/\s+/);
  if (parts.length < 2) {
    await sendNewMessage(chatId,
      'Invalid format. Use: user_id amount\nExample: 123456789 10000',
      { parse_mode: 'HTML' }
    );
    userSelections.delete(userId);
    return;
  }
  
  const targetUserId = parts[0];
  const amount = parseInt(parts[1]);
  
  if (isNaN(amount) || amount < 1000) {
    await sendNewMessage(chatId,
      'Invalid amount. Minimum: 1000',
      { parse_mode: 'HTML' }
    );
    userSelections.delete(userId);
    return;
  }
  
  // Cek user exists
  const data = loadData();
  if (!data.users?.includes(targetUserId)) {
    await sendNewMessage(chatId,
      `User ${targetUserId} not found in system.`,
      { parse_mode: 'HTML' }
    );
    userSelections.delete(userId);
    return;
  }
  
  const oldBalance = getUserBalance(targetUserId);
  const success = addUserBalance(targetUserId, amount);
  const newBalance = getUserBalance(targetUserId);
  
  if (success) {
    await sendNewMessage(chatId,
      `<b>✅ BALANCE ADDED</b>\n\n` +
      `User: ${targetUserId}\n` +
      `Amount: ${formatCurrency(amount)}\n` +
      `Old: ${formatCurrency(oldBalance)}\n` +
      `New: ${formatCurrency(newBalance)}\n\n` +
      `<i>Balance updated</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '➕ Add More', callback_data: 'balance_add_quick' },
              { text: '🔙 Balance Manager', callback_data: 'owner_balance_manager' }
            ]
          ]
        }
      }
    );
  }
  
  userSelections.delete(userId);
  return;
}

// Quick balance deduct any user
if (selection && selection.step === 'balance_deduct_any') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const parts = text.trim().split(/\s+/);
  if (parts.length < 2) {
    await sendNewMessage(chatId,
      'Invalid format. Use: user_id amount\nExample: 123456789 5000',
      { parse_mode: 'HTML' }
    );
    userSelections.delete(userId);
    return;
  }
  
  const targetUserId = parts[0];
  const amount = parseInt(parts[1]);
  const currentBalance = getUserBalance(targetUserId);
  
  if (isNaN(amount) || amount <= 0) {
    await sendNewMessage(chatId,
      'Invalid amount.',
      { parse_mode: 'HTML' }
    );
    userSelections.delete(userId);
    return;
  }
  
  if (amount > currentBalance) {
    await sendNewMessage(chatId,
      `Insufficient balance.\nCurrent: ${formatCurrency(currentBalance)}`,
      { parse_mode: 'HTML' }
    );
    userSelections.delete(userId);
    return;
  }
  
  const success = deductUserBalance(targetUserId, amount);
  const newBalance = getUserBalance(targetUserId);
  
  if (success) {
    await sendNewMessage(chatId,
      `<b>✅ BALANCE DEDUCTED</b>\n\n` +
      `User: ${targetUserId}\n` +
      `Amount: ${formatCurrency(amount)}\n` +
      `Old: ${formatCurrency(currentBalance)}\n` +
      `New: ${formatCurrency(newBalance)}\n\n` +
      `<i>Balance updated</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '➖ Deduct More', callback_data: 'balance_deduct_quick' },
              { text: '🔙 Balance Manager', callback_data: 'owner_balance_manager' }
            ]
          ]
        }
      }
    );
  }
  
  userSelections.delete(userId);
  return;
}

// Quick balance reset any user
if (selection && selection.step === 'balance_reset_any') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const targetUserId = text.trim();
  const oldBalance = getUserBalance(targetUserId);
  
  const success = setUserBalance(targetUserId, 0);
  
  if (success) {
    await sendNewMessage(chatId,
      `<b>✅ BALANCE RESET</b>\n\n` +
      `User: ${targetUserId}\n` +
      `Old Balance: ${formatCurrency(oldBalance)}\n` +
      `New Balance: ${formatCurrency(0)}\n\n` +
      `<i>Balance reset to 0</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '🔄 Reset More', callback_data: 'balance_reset_quick' },
              { text: '🔙 Balance Manager', callback_data: 'owner_balance_manager' }
            ]
          ]
        }
      }
    );
  }
  
  userSelections.delete(userId);
  return;
}

// Quick ban any user
if (selection && selection.step === 'ban_any_user') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const parts = text.trim().split(/\s+/);
  const targetUserId = parts[0];
  const reason = parts.slice(1).join(' ') || 'No reason';
  
  const success = banUser(targetUserId, reason, userId.toString());
  
  if (success) {
    await sendNewMessage(chatId,
      `<b>✅ USER BANNED</b>\n\n` +
      `User: ${targetUserId}\n` +
      `Reason: ${reason}\n` +
      `By: ${user.first_name}\n\n` +
      `<i>User has been banned</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '🚫 Ban More', callback_data: 'ban_user_quick' },
              { text: '🔙 Ban Manager', callback_data: 'owner_ban_manager' }
            ]
          ]
        }
      }
    );
  }
  
  userSelections.delete(userId);
  return;
}

// Quick unban any user
if (selection && selection.step === 'unban_any_user') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const targetUserId = text.trim();
  const success = unbanUser(targetUserId, userId.toString());
  
  if (success) {
    await sendNewMessage(chatId,
      `<b>✅ USER UNBANNED</b>\n\n` +
      `User: ${targetUserId}\n` +
      `By: ${user.first_name}\n\n` +
      `<i>User can now access bot</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '✅ Unban More', callback_data: 'unban_user_quick' },
              { text: '🔙 Ban Manager', callback_data: 'owner_ban_manager' }
            ]
          ]
        }
      }
    );
  }
  
  userSelections.delete(userId);
  return;
}

// Handler untuk user management
if (selection && selection.step === 'add_balance_user') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const amount = parseInt(text.replace(/[^\d]/g, ''));
  const targetUserId = selection.targetUserId;
  
  if (isNaN(amount) || amount < 1000) {
    await sendNewMessage(chatId,
      `Invalid amount.\n\nMinimum: Rp 1,000\n\nPlease try again.`,
      { parse_mode: 'HTML' }
    );
    return;
  }
  
  const oldBalance = getUserBalance(targetUserId);
  const success = addUserBalance(targetUserId, amount);
  const newBalance = getUserBalance(targetUserId);
  
  if (success) {
    await sendNewMessage(chatId,
      `<b>✅ BALANCE ADDED SUCCESSFULLY</b>\n\n` +
      `User ID: <code>${targetUserId}</code>\n` +
      `Amount Added: ${formatCurrency(amount)}\n` +
      `Old Balance: ${formatCurrency(oldBalance)}\n` +
      `New Balance: ${formatCurrency(newBalance)}\n` +
      `Added by: ${msg.from.first_name}\n\n` +
      `<i>Balance has been updated</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '➕ Add More', callback_data: `user_add_balance_${targetUserId}` },
              { text: '🔙 User Details', callback_data: `user_manage_${targetUserId}` }
            ]
          ]
        }
      }
    );
  } else {
    await sendNewMessage(chatId,
      'Failed to add balance. Please try again.',
      { parse_mode: 'HTML' }
    );
  }
  
  userSelections.delete(userId);
  return;
}

if (selection && selection.step === 'deduct_balance_user') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const amount = parseInt(text.replace(/[^\d]/g, ''));
  const targetUserId = selection.targetUserId;
  const currentBalance = getUserBalance(targetUserId);
  
  if (isNaN(amount) || amount <= 0) {
    await sendNewMessage(chatId,
      'Invalid amount. Please try again.',
      { parse_mode: 'HTML' }
    );
    return;
  }
  
  if (amount > currentBalance) {
    await sendNewMessage(chatId,
      `Amount too high.\n\nCurrent balance: ${formatCurrency(currentBalance)}\nRequested: ${formatCurrency(amount)}`,
      { parse_mode: 'HTML' }
    );
    return;
  }
  
  const success = deductUserBalance(targetUserId, amount);
  const newBalance = getUserBalance(targetUserId);
  
  if (success) {
    await sendNewMessage(chatId,
      `<b>✅ BALANCE DEDUCTED SUCCESSFULLY</b>\n\n` +
      `User ID: <code>${targetUserId}</code>\n` +
      `Amount Deducted: ${formatCurrency(amount)}\n` +
      `Old Balance: ${formatCurrency(currentBalance)}\n` +
      `New Balance: ${formatCurrency(newBalance)}\n` +
      `Deducted by: ${msg.from.first_name}\n\n` +
      `<i>Balance has been updated</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '➖ Deduct More', callback_data: `user_deduct_balance_${targetUserId}` },
              { text: '🔙 User Details', callback_data: `user_manage_${targetUserId}` }
            ]
          ]
        }
      }
    );
  } else {
    await sendNewMessage(chatId,
      'Failed to deduct balance. Please try again.',
      { parse_mode: 'HTML' }
    );
  }
  
  userSelections.delete(userId);
  return;
}

if (selection && selection.step === 'ban_user_reason') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const reason = text || 'No reason provided';
  const targetUserId = selection.targetUserId;
  
  const success = banUser(targetUserId, reason, userId.toString());
  
  if (success) {
    await sendNewMessage(chatId,
      `<b>✅ USER BANNED SUCCESSFULLY</b>\n\n` +
      `User ID: <code>${targetUserId}</code>\n` +
      `Reason: ${reason}\n` +
      `Banned by: ${msg.from.first_name}\n` +
      `Time: ${new Date().toLocaleString('id-ID')}\n\n` +
      `<i>User has been banned from the bot</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '🔙 User Details', callback_data: `user_manage_${targetUserId}` },
              { text: '🚫 Ban Manager', callback_data: 'owner_ban_manager' }
            ]
          ]
        }
      }
    );
  }
  
  userSelections.delete(userId);
  return;
}

if (selection && selection.step === 'search_user_quick') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const searchTerm = text.trim();
  
  if (searchTerm.toLowerCase() === 'banned') {
    // Tampilkan daftar banned users
    const bannedUsers = loadBannedUsers();
    const activeBans = bannedUsers.filter(u => u.status === 'banned');
    
    if (activeBans.length === 0) {
      await sendNewMessage(chatId,
        'No banned users found.',
        { parse_mode: 'HTML' }
      );
      userSelections.delete(userId);
      return;
    }
    
    let message = `<b>🚫 BANNED USERS LIST</b>\n\n`;
    message += `<b>Total:</b> ${activeBans.length} users\n\n`;
    
    activeBans.slice(0, 10).forEach((ban, index) => {
      const banDate = new Date(ban.bannedAt).toLocaleDateString('id-ID');
      message += `<b>${index + 1}. User ${ban.userId.substring(0, 8)}...</b>\n`;
      message += `├ Reason: ${ban.reason || 'No reason'}\n`;
      message += `├ Banned by: ${ban.bannedBy || 'System'}\n`;
      message += `└ Date: ${banDate}\n\n`;
    });
    
    if (activeBans.length > 10) {
      message += `... and ${activeBans.length - 10} more\n`;
    }
    
    const keyboard = [];
    
    // Tambahkan tombol untuk 5 banned user pertama
    activeBans.slice(0, 5).forEach((ban, index) => {
      keyboard.push([
        { 
          text: `${index + 1}. ${ban.userId.substring(0, 8)}...`, 
          callback_data: `user_manage_${ban.userId}` 
        }
      ]);
    });
    
    keyboard.push([
      { text: '🚫 Ban Manager', callback_data: 'owner_ban_manager' },
      { text: '👥 User Manager', callback_data: 'owner_user_manager' }
    ]);
    
    await sendNewMessage(chatId, message, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: keyboard }
    });
    
    userSelections.delete(userId);
    return;
  }
  
  // Cari user berdasarkan ID atau username
  let targetUserId = '';
  
  if (searchTerm.startsWith('@')) {
    // Cari berdasarkan username
    const username = searchTerm.substring(1);
    // Di sini perlu query ke database atau cache untuk mencari username
    // Untuk sederhananya, kita minta user ID
    await sendNewMessage(chatId,
      `Please provide User ID instead of username.\n\n` +
      `You can get User ID by forwarding a message from the user to @userinfobot`,
      { parse_mode: 'HTML' }
    );
    userSelections.delete(userId);
    return;
  } else if (/^\d+$/.test(searchTerm)) {
    // Valid user ID
    targetUserId = searchTerm;
  } else {
    await sendNewMessage(chatId,
      'Invalid search term. Please provide User ID (numbers only).',
      { parse_mode: 'HTML' }
    );
    userSelections.delete(userId);
    return;
  }
  
  // Cek apakah user ada di sistem
  const data = loadData();
  if (!data.users?.includes(targetUserId)) {
    await sendNewMessage(chatId,
      `User <code>${targetUserId}</code> not found in system.\n\n` +
      `User may not have started the bot yet.`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '➕ Add to System', callback_data: `force_add_user_${targetUserId}` },
              { text: '🔍 Search Again', callback_data: 'search_user_quick' }
            ]
          ]
        }
      }
    );
    userSelections.delete(userId);
    return;
  }
  
  // Tampilkan detail user
  await showUserManageDetail(chatId, userId, targetUserId);
  userSelections.delete(userId);
  return;
}
  
  // Tambahkan di message handler untuk add/remove admin
if (selection && selection.step === 'add_admin_input') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const newAdminId = text.trim();
  
  if (!/^\d+$/.test(newAdminId)) {
    await sendNewMessage(chatId,
      'User ID tidak valid. Harus berupa angka.\n\nContoh: 123456789',
      { parse_mode: 'HTML' }
    );
    userSelections.delete(userId);
    return;
  }
  
  // Cek apakah sudah menjadi admin
  if (owner_ids.includes(newAdminId)) {
    await sendNewMessage(chatId,
      `User ID <code>${newAdminId}</code> sudah menjadi admin.`,
      { parse_mode: 'HTML' }
    );
    userSelections.delete(userId);
    return;
  }
  
  // Tambahkan ke config
  try {
    const configPath = path.join(__dirname, 'config.js');
    let configContent = fs.readFileSync(configPath, 'utf8');
    
    // Update owner_ids array
    configContent = configContent.replace(
      /owner_ids:\s*\[([^\]]+)\]/,
      `owner_ids: [$1, '${newAdminId}']`
    );
    
    fs.writeFileSync(configPath, configContent);
    
    // Reload config
    delete require.cache[require.resolve('./config')];
    const newConfig = require('./config');
    
    // Update global arrays
    owner_ids.length = 0;
    owner_ids.push(...newConfig.owner_ids);
    
    await sendNewMessage(chatId,
      `<b>✅ ADMIN BERHASIL DITAMBAH</b>\n\n` +
      `User ID: <code>${newAdminId}</code>\n` +
      `Ditambahkan oleh: ${msg.from.first_name}\n` +
      `Waktu: ${new Date().toLocaleString('id-ID')}\n\n` +
      `<i>User sekarang memiliki akses owner menu</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: '🔙 Admin Menu', callback_data: 'owner_admin_menu' }]
          ]
        }
      }
    );
    
  } catch (error) {
    await sendNewMessage(chatId,
      `❌ Gagal menambah admin.\n\nError: ${error.message}`,
      { parse_mode: 'HTML' }
    );
  }
  
  userSelections.delete(userId);
  return;
}

if (selection && selection.step === 'remove_admin_input') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const adminIdToRemove = text.trim();
  
  // Cek apakah user ID valid
  if (!/^\d+$/.test(adminIdToRemove)) {
    await sendNewMessage(chatId,
      'User ID tidak valid. Harus berupa angka.',
      { parse_mode: 'HTML' }
    );
    userSelections.delete(userId);
    return;
  }
  
  // Cek apakah memang admin
  if (!owner_ids.includes(adminIdToRemove)) {
    await sendNewMessage(chatId,
      `User ID <code>${adminIdToRemove}</code> bukan admin.`,
      { parse_mode: 'HTML' }
    );
    userSelections.delete(userId);
    return;
  }
  
  // Cek apakah mencoba menghapus diri sendiri
  if (adminIdToRemove === userId.toString()) {
    await sendNewMessage(chatId,
      '❌ Tidak bisa menghapus diri sendiri sebagai admin.',
      { parse_mode: 'HTML' }
    );
    userSelections.delete(userId);
    return;
  }
  
  // Hapus dari config
  try {
    const configPath = path.join(__dirname, 'config.js');
    let configContent = fs.readFileSync(configPath, 'utf8');
    
    // Dapatkan current owner_ids
    const match = configContent.match(/owner_ids:\s*\[([^\]]+)\]/);
    if (match) {
      const ownersArray = match[1].split(',').map(id => id.trim().replace(/'/g, '').replace(/"/g, ''));
      const filteredOwners = ownersArray.filter(id => id !== adminIdToRemove);
      
      configContent = configContent.replace(
        /owner_ids:\s*\[([^\]]+)\]/,
        `owner_ids: [${filteredOwners.map(id => `'${id}'`).join(', ')}]`
      );
      
      fs.writeFileSync(configPath, configContent);
      
      // Reload config
      delete require.cache[require.resolve('./config')];
      const newConfig = require('./config');
      
      // Update global arrays
      owner_ids.length = 0;
      owner_ids.push(...newConfig.owner_ids);
      
      await sendNewMessage(chatId,
        `<b>✅ ADMIN BERHASIL DIHAPUS</b>\n\n` +
        `User ID: <code>${adminIdToRemove}</code>\n` +
        `Dihapus oleh: ${msg.from.first_name}\n` +
        `Waktu: ${new Date().toLocaleString('id-ID')}\n\n` +
        `<i>User tidak lagi memiliki akses owner menu</i>`,
        {
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [{ text: '🔙 Admin Menu', callback_data: 'owner_admin_menu' }]
            ]
          }
        }
      );
    }
    
  } catch (error) {
    await sendNewMessage(chatId,
      `❌ Gagal menghapus admin.\n\nError: ${error.message}`,
      { parse_mode: 'HTML' }
    );
  }
  
  userSelections.delete(userId);
  return;
}

if (selection && selection.step === 'search_user_id') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const targetUserId = text.trim();
  
  if (!/^\d+$/.test(targetUserId)) {
    await sendNewMessage(chatId,
      'User ID tidak valid. Harus berupa angka.\n\nContoh: 123456789',
      { parse_mode: 'HTML' }
    );
    return;
  }
  
  await showUserDetails(userId, targetUserId, chatId);
  userSelections.delete(userId);
  return;
}

if (selection && selection.step === 'add_balance') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const amount = parseInt(text.replace(/[^\d]/g, ''));
  const targetUserId = selection.targetUserId;
  
  if (isNaN(amount) || amount < 2000) {
    await sendNewMessage(chatId,
      `Jumlah tidak valid.\n\nMinimal: Rp 1,000\n\nSilakan coba lagi.`,
      { parse_mode: 'HTML' }
    );
    return;
  }
  
  const oldBalance = getUserBalance(targetUserId);
  const success = addUserBalance(targetUserId, amount);
  const newBalance = getUserBalance(targetUserId);
  
  if (success) {
    await sendNewMessage(chatId,
      `<b>✅ SALDO BERHASIL DITAMBAH</b>\n\n` +
      `User ID: <code>${targetUserId}</code>\n` +
      `Jumlah: ${formatCurrency(amount)}\n` +
      `Saldo Lama: ${formatCurrency(oldBalance)}\n` +
      `Saldo Baru: ${formatCurrency(newBalance)}\n` +
      `Admin: ${user.first_name}\n\n` +
      `<i>Saldo telah berhasil ditambahkan</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: '🔙 User Details', callback_data: `user_detail_${targetUserId}` }]
          ]
        }
      }
    );
  } else {
    await sendNewMessage(chatId,
      'Gagal menambah saldo. Silakan coba lagi.',
      { parse_mode: 'HTML' }
    );
  }
  
  userSelections.delete(userId);
  return;
}

if (selection && selection.step === 'deduct_balance') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  const amount = parseInt(text.replace(/[^\d]/g, ''));
  const targetUserId = selection.targetUserId;
  
  if (isNaN(amount) || amount <= 0) {
    await sendNewMessage(chatId,
      'Jumlah tidak valid. Silakan coba lagi.',
      { parse_mode: 'HTML' }
    );
    return;
  }
  
  const oldBalance = getUserBalance(targetUserId);
  
  if (amount > oldBalance) {
    await sendNewMessage(chatId,
      `Jumlah terlalu besar.\n\nSaldo user: ${formatCurrency(oldBalance)}\nJumlah yang diminta: ${formatCurrency(amount)}`,
      { parse_mode: 'HTML' }
    );
    return;
  }
  
  const success = deductUserBalance(targetUserId, amount);
  const newBalance = getUserBalance(targetUserId);
  
  if (success) {
    await sendNewMessage(chatId,
      `<b>✅ SALDO BERHASIL DIKURANGI</b>\n\n` +
      `User ID: <code>${targetUserId}</code>\n` +
      `Jumlah: ${formatCurrency(amount)}\n` +
      `Saldo Lama: ${formatCurrency(oldBalance)}\n` +
      `Saldo Baru: ${formatCurrency(newBalance)}\n` +
      `Admin: ${user.first_name}\n\n` +
      `<i>Saldo telah berhasil dikurangi</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: '🔙 User Details', callback_data: `user_detail_${targetUserId}` }]
          ]
        }
      }
    );
  } else {
    await sendNewMessage(chatId,
      'Gagal mengurangi saldo. Silakan coba lagi.',
      { parse_mode: 'HTML' }
    );
  }
  
  userSelections.delete(userId);
  return;
}

if (selection && selection.step === 'ban_user') {
  await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
  
  selection.reason = text || 'No reason provided';
  userSelections.set(userId, selection);
  
  const targetUserId = selection.targetUserId;
  
  await editMessage(chatId, selection.messageId, null,
    `<b>🚫 KONFIRMASI BAN USER</b>\n\n` +
    `User ID: <code>${targetUserId}</code>\n` +
    `Alasan: ${selection.reason}\n\n` +
    `Yakin ingin memblokir user ini?`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [
            { text: '✅ Ya, Ban User', callback_data: `confirm_ban_${targetUserId}` },
            { text: '❌ Batalkan', callback_data: `user_detail_${targetUserId}` }
          ]
        ]
      }
    }
  );
  return;
}
  
  if (selection && selection.step === 'awaiting_voucher_value') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const value = parseInt(text);
    
    if (isNaN(value) || value <= 0) {
        await sendNewMessage(chatId,
            'Nilai tidak valid. Silakan masukkan angka yang benar.',
            { parse_mode: 'HTML' }
        );
        return;
    }
    
    const voucherType = selection.voucherData.type;
    
    if (voucherType === 'percentage' && value > 100) {
        await sendNewMessage(chatId,
            'Persentase tidak boleh lebih dari 100%.',
            { parse_mode: 'HTML' }
        );
        return;
    }
    
    if (voucherType === 'fixed' && value > 1000000) {
        await sendNewMessage(chatId,
            'Fixed amount tidak boleh lebih dari Rp 1.000.000.',
            { parse_mode: 'HTML' }
        );
        return;
    }
    
    selection.voucherData.value = value;
    selection.step = 'awaiting_voucher_minmax';
    userSelections.set(userId, selection);
    
    await showCreateVoucherStep3(chatId, userId);
    return;
  }
  
  if (selection && selection.step === 'awaiting_voucher_minmax') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const parts = text.trim().split(/\s+/);
    
    if (parts.length === 1 && parts[0].toLowerCase() === 'skip') {
        selection.voucherData.min_purchase = 0;
        selection.voucherData.max_discount = null;
    } else {
        const minPurchase = parseInt(parts[0]) || 0;
        const maxDiscount = parts[1] ? parseInt(parts[1]) : null;
        
        selection.voucherData.min_purchase = minPurchase;
        selection.voucherData.max_discount = maxDiscount;
    }
    
    selection.step = 'awaiting_voucher_limit';
    userSelections.set(userId, selection);
    
    await showCreateVoucherStep4(chatId, userId);
    return;
  }
  
  if (selection && selection.step === 'awaiting_voucher_limit') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const parts = text.trim().split(/\s+/);
    
    if (parts.length === 1 && parts[0].toLowerCase() === 'skip') {
        selection.voucherData.usage_limit = 1;
        selection.voucherData.expiry = null;
    } else {
        const limit = parseInt(parts[0]) || 1;
        let expiry = null;
        
        if (parts[1]) {
            const dateParts = parts[1].split('-');
            if (dateParts.length === 3) {
                const day = parseInt(dateParts[0]);
                const month = parseInt(dateParts[1]) - 1;
                const year = parseInt(dateParts[2]);
                
                if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
                    expiry = new Date(year, month, day, 23, 59, 59).toISOString();
                }
            }
        }
        
        selection.voucherData.usage_limit = limit;
        selection.voucherData.expiry = expiry;
    }
    
    selection.step = 'awaiting_voucher_final';
    userSelections.set(user.id, selection);
    
    await showCreateVoucherStep5(chatId, user.id);
    return;
  }
  
  if (selection && selection.step === 'awaiting_voucher_final') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const parts = text.trim().split(/\s+/);
    let code = null;
    let description = null;
    
    if (parts.length > 0) {
        code = parts[0].toUpperCase();
        description = parts.slice(1).join(' ') || null;
    }
    
    if (code && code !== 'SKIP') {
        selection.voucherData.code = code;
    }
    
    if (description && description !== 'SKIP') {
        selection.voucherData.description = description;
    }
    
    await finalizeVoucherCreation(chatId, userId);
    
    userSelections.delete(user.id);
    return;
  }
  
  if (selection && selection.voucherInput && selection.voucherInput.step === 'awaiting_voucher') {
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    const voucherInput = selection.voucherInput;
    
    if (text === '0' || text.toLowerCase() === 'batal') {
      delete selection.voucherInput;
      userSelections.set(userId, selection);
      
      await showOrderConfirmation(chatId, userId, voucherInput.operatorId, voucherInput.providerId, voucherInput.price);
      return;
    }
    
    await validateAndApplyVoucher(chatId, userId, voucherInput.operatorId, voucherInput.providerId, voucherInput.price, text.toUpperCase());
    
    delete selection.voucherInput;
    userSelections.set(userId, selection);
    
    return;
  }
  
  if (selection && selection.step === 'rumahotp_deposit_amount') {
    const amount = parseInt(text.replace(/[^\d]/g, ''));
    
    if (isNaN(amount) || amount < 2000 || amount > 5000000) {
        await sendNewMessage(chatId,
            `Nilai tidak valid.\n\nMinimal: Rp 2,000\nMaksimal: Rp 5,000,000`,
            { 
              parse_mode: 'HTML',
              reply_markup: { 
                inline_keyboard: [
                  [{ text: 'Coba Lagi', callback_data: 'deposit_main' }]
                ] 
              } 
            }
        );
        userSelections.delete(userId);
        return;
    }

    userSelections.delete(userId);
    
    await bot.deleteMessage(chatId, msg.message_id).catch(() => {});
    
    await handleRumahOTPDeposit(chatId, userId, amount);
  }
});

// ========================= CALLBACK QUERY HANDLER =========================

bot.on("callback_query", async (callbackQuery) => {
  const msg = callbackQuery.message;
  const user = callbackQuery.from;
  const data = callbackQuery.data;
  const chatId = msg.chat.id;
  const messageId = msg.message_id;
  const callbackQueryId = callbackQuery.id;
  
  try {
    bot.answerCallbackQuery(callbackQueryId, { 
      text: '',
      show_alert: false 
    }).catch(() => {});
    
// Panel menu
if (data === 'panel_menu') {
    await showBuyPanelMenu(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data.startsWith('panel_menu_page_')) {
    const page = parseInt(data.replace('panel_menu_page_', ''));
    await showBuyPanelMenu(chatId, user.id, messageId, callbackQueryId, page);
    return;
}

if (data.startsWith('panel_buy_')) {
    const productKey = data.replace('panel_buy_', '');
    await createPanelOrder(chatId, user.id, productKey);
    await bot.deleteMessage(chatId, messageId).catch(() => {});
    return;
}

if (data === 'panel_buy_admin') {
    await buyAdminPanel(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data === 'panel_my_list') {
    await showMyPanels(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data.startsWith('panel_my_page_')) {
    const page = parseInt(data.replace('panel_my_page_', ''));
    await showMyPanels(chatId, user.id, messageId, callbackQueryId, page);
    return;
}

if (data.startsWith('panel_detail_')) {
    const orderId = data.replace('panel_detail_', '');
    await showPanelDetail(chatId, user.id, orderId, messageId, callbackQueryId);
    return;
}

if (data.startsWith('batalkan_panel_')) {
    const kodeTrx = data.replace('batalkan_panel_', '');
    await cancelPanelDeposit(chatId, user.id, kodeTrx);
    await bot.deleteMessage(chatId, messageId).catch(() => {});
    return;
}

if (data.startsWith('cek_admin_payment_')) {
    const kodeTrx = data.replace('cek_admin_payment_', '');
    await bot.sendMessage(chatId, '⏳ Silakan tunggu, sistem sedang mengecek pembayaran...', { parse_mode: 'Markdown' });
    return;
}

if (data.startsWith('batal_admin_payment_')) {
    const kodeTrx = data.replace('batal_admin_payment_', '');
    userSelections.delete(user.id);
    await bot.sendMessage(chatId, '✅ Pembelian admin panel dibatalkan.', { parse_mode: 'Markdown' });
    await bot.deleteMessage(chatId, messageId).catch(() => {});
    return;
}
    
 if (data === 'owner_script_upload') {
    await promptUploadScriptFile(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data === 'owner_script_menu') {
    await showOwnerScriptMenu(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data === 'owner_script_add') {
    await promptAddScript(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data === 'owner_script_list') {
    await showOwnerScriptList(chatId, user.id, 'list', messageId, callbackQueryId);
    return;
}

if (data === 'owner_script_edit_list') {
    await showOwnerScriptList(chatId, user.id, 'edit', messageId, callbackQueryId);
    return;
}

if (data === 'owner_script_delete_list') {
    await showOwnerScriptList(chatId, user.id, 'delete', messageId, callbackQueryId);
    return;
}

if (data === 'owner_script_price_list') {
    await showOwnerScriptList(chatId, user.id, 'price', messageId, callbackQueryId);
    return;
}

if (data === 'owner_script_toggle_list') {
    await showOwnerScriptList(chatId, user.id, 'toggle', messageId, callbackQueryId);
    return;
}

if (data === 'owner_script_stats') {
    await showScriptStatistics(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data === 'owner_script_export') {
    await exportScriptData(chatId, user.id, messageId, callbackQueryId);
    return;
}

// Handle script list pagination
if (data.startsWith('owner_script_list_')) {
    const parts = data.replace('owner_script_list_', '').split('_');
    const action = parts[0];
    const page = parseInt(parts[1]);
    await showOwnerScriptList(chatId, user.id, action, messageId, callbackQueryId, page);
    return;
}

// Handle edit script
if (data.startsWith('owner_script_edit_') && !data.includes('_list')) {
    const scriptId = data.replace('owner_script_edit_', '');
    await promptEditScript(chatId, user.id, scriptId, messageId, callbackQueryId);
    return;
}

// Handle edit field selection
if (data.startsWith('owner_script_edit_')) {
    const field = data.replace('owner_script_edit_', '');
    const selection = userSelections.get(user.id);
    
    if (!selection || selection.step !== 'owner_script_edit_field') {
        await bot.answerCallbackQuery(callbackQueryId, {
            text: 'Sesi tidak valid, silakan pilih script lagi.',
            show_alert: true
        });
        return;
    }
    
    const fieldMap = {
        'name': 'name',
        'category': 'category',
        'description': 'description',
        'price': 'price',
        'content': 'content',
        'instructions': 'instructions',
        'tags': 'tags',
        'version': 'version'
    };
    
    const fieldName = fieldMap[field];
    if (!fieldName) return;
    
    selection.editField = fieldName;
    userSelections.set(user.id, selection);
    
    let prompt = '';
    switch(fieldName) {
        case 'name':
            prompt = 'Kirimkan *nama baru* untuk script ini:';
            break;
        case 'category':
            prompt = 'Kirimkan *kategori baru* (Premium/Basic/Tools/Game/Social Media/Utility):';
            break;
        case 'description':
            prompt = 'Kirimkan *deskripsi baru* untuk script ini:';
            break;
        case 'price':
            prompt = 'Kirimkan *harga baru* untuk script ini (contoh: 5000):';
            break;
        case 'content':
            prompt = 'Kirimkan *isi/konten script baru*:';
            break;
        case 'instructions':
            prompt = 'Kirimkan *instruksi baru* untuk script ini:';
            break;
        case 'tags':
            prompt = 'Kirimkan *tags baru* (pisahkan dengan koma, contoh: auto,claim,bot):';
            break;
        case 'version':
            prompt = 'Kirimkan *versi baru* (contoh: 1.0, 1.1, 2.0):';
            break;
    }
    
    await editMessage(chatId, messageId, callbackQueryId,
        `✏️ *EDIT SCRIPT* ✏️\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `📜 *Script:* ${selection.scriptData.name}\n` +
        `✏️ *Field:* ${fieldName.toUpperCase()}\n` +
        `📋 *Nilai Saat Ini:* ${selection.scriptData[fieldName] || 'Kosong'}\n\n` +
        `${prompt}\n\n` +
        `Ketik *0* untuk batal.`,
        { parse_mode: "Markdown" }
    );
    return;
}

// Handle delete script confirm
if (data.startsWith('owner_script_delete_confirm_')) {
    const scriptId = data.replace('owner_script_delete_confirm_', '');
    await confirmDeleteScript(chatId, user.id, scriptId, messageId, callbackQueryId);
    return;
}

// Handle delete script execute
if (data.startsWith('owner_script_delete_execute_')) {
    const scriptId = data.replace('owner_script_delete_execute_', '');
    await executeDeleteScript(chatId, user.id, scriptId, messageId, callbackQueryId);
    return;
}

// Handle set price
if (data.startsWith('owner_script_price_set_')) {
    const scriptId = data.replace('owner_script_price_set_', '');
    await promptSetScriptPrice(chatId, user.id, scriptId, messageId, callbackQueryId);
    return;
}

// Handle quick price set
if (data.startsWith('owner_script_price_quick_')) {
    const parts = data.replace('owner_script_price_quick_', '').split('_');
    const scriptId = parts[0];
    const price = parseInt(parts[1]);
    await executeSetScriptPrice(chatId, user.id, scriptId, price, messageId, callbackQueryId);
    return;
}

// Handle toggle script
if (data.startsWith('owner_script_toggle_')) {
    const scriptId = data.replace('owner_script_toggle_', '');
    await toggleScriptStatus(chatId, user.id, scriptId, messageId, callbackQueryId);
    return;
}

if (data === 'script_menu') {
    await showBuyScriptMenu(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data.startsWith('script_detail_')) {
    const scriptId = data.replace('script_detail_', '');
    await showScriptDetail(chatId, user.id, scriptId, messageId, callbackQueryId);
    return;
}

if (data.startsWith('script_buy_')) {
    const scriptId = data.replace('script_buy_', '');
    await createScriptOrder(chatId, user.id, scriptId);
    await bot.deleteMessage(chatId, messageId).catch(() => {});
    return;
}

if (data === 'script_history') {
    await showScriptPurchaseHistory(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data === 'script_search') {
    await showSearchScriptMenu(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data.startsWith('batalscript_')) {
    const kodeTrx = data.replace('batalscript_', '');
    await cancelScriptDeposit(chatId, user.id, kodeTrx);
    await bot.deleteMessage(chatId, messageId).catch(() => {});
    return;
}
    
// Handler untuk menu referral
if (data === 'referral_menu') {
    await showReferralMenu(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data === 'referral_history') {
    await showReferralHistory(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data === 'referral_share') {
    await shareReferralLink(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data === 'referral_claim_share') {
    await processClaimShareBonus(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data.startsWith('referral_copy_')) {
    const referralCode = data.replace('referral_copy_', '');
    const botUsername = 'RikyshopOTP_bot';
    const referralLink = `https://t.me/${botUsername}?start=ref_${referralCode}`;
    
    await bot.answerCallbackQuery(callbackQueryId, {
        text: `Link referral disalin!\n\n${referralLink}`,
        show_alert: true
    });
    return;
}
    
    // Handler untuk tombol Previous (◀️)
if (data.startsWith('nokos_menu_prev_')) {
    const currentPage = parseInt(data.replace('nokos_menu_prev_', ''));
    const newPage = currentPage - 1;
    console.log(`Previous clicked: currentPage=${currentPage}, newPage=${newPage}`);
    await showNokosMenu(chatId, user.id, messageId, callbackQueryId, newPage);
    return;
}

// Handler untuk tombol Next (▶️)
if (data.startsWith('nokos_menu_next_')) {
    const currentPage = parseInt(data.replace('nokos_menu_next_', ''));
    const newPage = currentPage + 1;
    console.log(`Next clicked: currentPage=${currentPage}, newPage=${newPage}`);
    await showNokosMenu(chatId, user.id, messageId, callbackQueryId, newPage);
    return;
}

// Handler untuk page tertentu (jika masih ada)
if (data.startsWith('nokos_menu_page_')) {
    const page = parseInt(data.replace('nokos_menu_page_', ''));
    console.log(`Direct page: ${page}`);
    await showNokosMenu(chatId, user.id, messageId, callbackQueryId, page);
    return;
}
    
    // Handler untuk pagination menu utama (layanan lainnya)
if (data.startsWith('nokos_menu_page_')) {
    const page = parseInt(data.replace('nokos_menu_page_', ''));
    await showNokosMenu(chatId, user.id, messageId, callbackQueryId, 0);
    return;
}
    
// Handler untuk pagination layanan lainnya
if (data.startsWith('other_services_page_')) {
    const page = parseInt(data.replace('other_services_page_', ''));
    await showOtherServices(chatId, user.id, messageId, callbackQueryId, page);
    return;
}

// Handler untuk pagination negara
if (data.startsWith('nokos_country_page_')) {
    const parts = data.replace('nokos_country_page_', '').split('_');
    const serviceId = parts[0];
    const page = parseInt(parts[1]);
    
    // Dapatkan service name dari cache atau selection
    const servicesData = await getServicesCached();
    if (servicesData && servicesData.success) {
        const service = servicesData.data.find(s => s.service_code == serviceId);
        if (service) {
            await showCountryMenu(chatId, user.id, serviceId, service.service_name, messageId, callbackQueryId, page);
        }
    }
    return;
}

// Handler untuk pencarian layanan
if (data === 'search_service') {
    await showSearchService(chatId, user.id, messageId, callbackQueryId);
    return;
}

// Handler untuk pencarian negara
if (data.startsWith('search_country_')) {
    const serviceId = data.replace('search_country_', '');
    await showSearchCountry(chatId, user.id, serviceId, messageId, callbackQueryId);
    return;
}

// Handler untuk pagination script menu
if (data.startsWith('script_menu_page_')) {
    const page = parseInt(data.replace('script_menu_page_', ''));
    await showBuyScriptMenu(chatId, user.id, messageId, callbackQueryId, page);
    return;
}

// VPS Menu
if (data === 'vps_menu') {
    await showVPSMenu(chatId, user.id, messageId, callbackQueryId);
    return;
}

// VPS Category
if (data.startsWith('vps_category_')) {
    const category = data.replace('vps_category_', '');
    await showVPSProductsByCategory(chatId, user.id, category, messageId, callbackQueryId, 0);
    return;
}

// VPS Category Page
if (data.startsWith('vps_category_page_')) {
    const parts = data.replace('vps_category_page_', '').split('_');
    const category = parts[0];
    const page = parseInt(parts[1]);
    await showVPSProductsByCategory(chatId, user.id, category, messageId, callbackQueryId, page);
    return;
}

// VPS Product
if (data.startsWith('vps_product_')) {
    const productId = data.replace('vps_product_', '');
    await selectVPSProduct(chatId, user.id, productId, messageId, callbackQueryId);
    return;
}

// VPS OS
if (data.startsWith('vps_os_')) {
    const osValue = data.replace('vps_os_', '');
    await selectVPSOS(chatId, user.id, osValue, messageId, callbackQueryId);
    return;
}

// VPS Region
if (data.startsWith('vps_region_')) {
    const regionValue = data.replace('vps_region_', '');
    await selectVPSRegion(chatId, user.id, regionValue, messageId, callbackQueryId);
    return;
}

// VPS Check Status
if (data.startsWith('vps_cek_status_')) {
    const kodeTrx = data.replace('vps_cek_status_', '');
    await checkVPSPaymentStatus(chatId, user.id, kodeTrx, messageId, callbackQueryId);
    return;
}

// VPS Cancel
if (data.startsWith('vps_batal_')) {
    const kodeTrx = data.replace('vps_batal_', '');
    await cancelVPSTransaction(chatId, user.id, kodeTrx, messageId, callbackQueryId);
    return;
}

// Di dalam callback_query handler, tambahkan:

// VPS Refresh Stock
if (data === 'vps_refresh_stock') {
    await refreshVPSStock(chatId, user.id, messageId, callbackQueryId, 'vps_menu');
    return;
}

if (data.startsWith('vps_category_refresh_')) {
    const category = data.replace('vps_category_refresh_', '');
    await refreshVPSStock(chatId, user.id, messageId, callbackQueryId, `vps_category_${category}`);
    return;
}

// Di dalam callback_query handler, TAMBAHKAN:

// FREE VPS Menu
if (data === 'vps_free_menu') {
    await showFreeVPSMenu(chatId, user.id, messageId, callbackQueryId, 0);
    return;
}

if (data.startsWith('vps_free_menu_page_')) {
    const page = parseInt(data.replace('vps_free_menu_page_', ''));
    await showFreeVPSMenu(chatId, user.id, messageId, callbackQueryId, page);
    return;
}

if (data.startsWith('vps_free_select_')) {
    const productId = data.replace('vps_free_select_', '');
    await selectFreeVPSProduct(chatId, user.id, productId, messageId, callbackQueryId);
    return;
}

if (data.startsWith('vps_free_os_')) {
    const osValue = data.replace('vps_free_os_', '');
    await selectFreeVPSOS(chatId, user.id, osValue, messageId, callbackQueryId);
    return;
}

if (data.startsWith('vps_free_region_')) {
    const regionValue = data.replace('vps_free_region_', '');
    await selectFreeVPSRegion(chatId, user.id, regionValue, messageId, callbackQueryId);
    return;
}

// Handler untuk pilihan tipe instalasi
if (data === 'install_type_panel') {
    const pending = pendingInstalls.get(user.id);
    if (!pending || pending.command !== 'installpanel') {
        pendingInstalls.set(user.id, {
            command: 'installpanel',
            step: 'waiting_ip',
            data: { selectedType: 'panel' },
            timestamp: Date.now()
        });
    } else {
        pending.data.selectedType = 'panel';
        pending.step = 'waiting_ip';
        pendingInstalls.set(user.id, pending);
    }
    
    await editMessage(chatId, messageId, callbackQueryId,
        `<blockquote>⚡ <b>INSTALL PANEL PTERODACTYL</b>

📝 <b>Step 1/5:</b> Masukkan IP VPS

Contoh: <code>192.168.1.1</code>

⚠️ <b>Catatan:</b>
• VPS harus Ubuntu 20.04/22.04
• Minimal RAM 2GB
• Domain sudah diarahkan ke IP VPS

💡 Ketik /cancelinstall untuk membatalkan</blockquote>`,
        { parse_mode: 'HTML' }
    );
    return;
}

if (data === 'install_type_wings') {
    const pending = pendingInstalls.get(user.id);
    if (!pending || pending.command !== 'installpanel') {
        pendingInstalls.set(user.id, {
            command: 'installpanel',
            step: 'waiting_ip',
            data: { selectedType: 'wings' },
            timestamp: Date.now()
        });
    } else {
        pending.data.selectedType = 'wings';
        pending.step = 'waiting_ip';
        pendingInstalls.set(user.id, pending);
    }
    
    await editMessage(chatId, messageId, callbackQueryId,
        `<blockquote>⚡ <b>INSTALL WINGS PTERODACTYL</b>

📝 <b>Step 1/4:</b> Masukkan IP VPS

Contoh: <code>192.168.1.1</code>

⚠️ <b>Catatan:</b>
• VPS harus Ubuntu 20.04/22.04
• Panel harus sudah terinstall
• Domain node sudah diarahkan ke IP VPS

💡 Ketik /cancelinstall untuk membatalkan</blockquote>`,
        { parse_mode: 'HTML' }
    );
    return;
}

if (data === 'install_type_cancel') {
    pendingInstalls.delete(user.id);
    await editMessage(chatId, messageId, callbackQueryId,
        `<blockquote>✅ <b>INSTALASI DIBATALKAN</b>

Gunakan /install untuk memulai kembali.</blockquote>`,
        { parse_mode: 'HTML' }
    );
    return;
}

if (data === 'subdomain_menu') {
    await showSubdomainMenu(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data === 'subdomain_create') {
    await showSubdomainDomainList(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data === 'subdomain_list_domains') {
    await showSubdomainDomainList(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data.startsWith('subdomain_select_domain_')) {
    const domainIndex = parseInt(data.replace('subdomain_select_domain_', ''));
    await showSubdomainInputHostname(chatId, user.id, domainIndex, messageId, callbackQueryId);
    return;
}

if (data.startsWith('subdomain_create_')) {
    const parts = data.replace('subdomain_create_', '').split('_');
    const domainIndex = parseInt(parts[0]);
    const hostname = parts[1];
    const vpsIndex = parseInt(parts[2]);
    await executeCreateSubdomain(chatId, user.id, domainIndex, hostname, vpsIndex, messageId, callbackQueryId);
    return;
}

// VPS Payment Method Handlers
if (data.startsWith('vps_pay_qris_')) {
    const regionValue = data.replace('vps_pay_qris_', '');
    // Lanjutkan ke pembayaran QRIS seperti biasa
    await createVPSPaymentQRIS(chatId, user.id, global.vpsOrderSession[user.id], messageId, callbackQueryId, await checkStockAndGetApi());
    return;
}

if (data.startsWith('vps_pay_balance_')) {
    const regionValue = data.replace('vps_pay_balance_', '');
    await handleVPSPaymentWithBalance(chatId, user.id, regionValue, messageId, callbackQueryId);
    return;
}

if (data.startsWith('vps_confirm_balance_')) {
    const regionValue = data.replace('vps_confirm_balance_', '');
    await executeVPSPurchaseWithBalance(chatId, user.id, regionValue, messageId, callbackQueryId);
    return;
}

// Panel Payment Method Handlers
if (data.startsWith('panel_pay_qris_')) {
    const productKey = data.replace('panel_pay_qris_', '');
    // Lanjutkan ke pembayaran QRIS seperti biasa
    await createPanelOrderQRIS(chatId, user.id, productKey);
    await bot.deleteMessage(chatId, messageId).catch(() => {});
    return;
}

if (data.startsWith('panel_pay_balance_')) {
    const productKey = data.replace('panel_pay_balance_', '');
    await handlePanelPaymentWithBalance(chatId, user.id, productKey, messageId, callbackQueryId);
    return;
}

// Script Payment Method Handlers
if (data.startsWith('script_pay_qris_')) {
    const scriptId = data.replace('script_pay_qris_', '');
    // Lanjutkan ke pembayaran QRIS seperti biasa
    await createScriptOrderQRIS(chatId, user.id, scriptId);
    await bot.deleteMessage(chatId, messageId).catch(() => {});
    return;
}

if (data.startsWith('script_pay_balance_')) {
    const scriptId = data.replace('script_pay_balance_', '');
    await handleScriptPaymentWithBalance(chatId, user.id, scriptId, messageId, callbackQueryId);
    return;
}

if (data.startsWith('script_confirm_balance_')) {
    const scriptId = data.replace('script_confirm_balance_', '');
    await executeScriptPurchaseWithBalance(chatId, user.id, scriptId, messageId, callbackQueryId);
    return;
}

// Di dalam callback_query handler, tambahkan:

if (data === 'subdomain_delete_list') {
    await showSubdomainDeleteList(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data.startsWith('subdomain_delete_page_')) {
    const page = parseInt(data.replace('subdomain_delete_page_', ''));
    await showSubdomainDeleteList(chatId, user.id, messageId, callbackQueryId, page);
    return;
}

if (data.startsWith('subdomain_delete_confirm_')) {
    const subdomainId = data.replace('subdomain_delete_confirm_', '');
    await confirmDeleteSubdomain(chatId, user.id, subdomainId, messageId, callbackQueryId);
    return;
}

if (data.startsWith('subdomain_delete_execute_')) {
    const subdomainId = data.replace('subdomain_delete_execute_', '');
    await executeDeleteSubdomain(chatId, user.id, subdomainId, messageId, callbackQueryId);
    return;
}

// ========================= ADDITIONAL OWNER CALLBACK HANDLERS =========================
// Tambahkan di dalam callback_query handler (setelah handler yang sudah ada)

// Owner Menu - VPS Orders List
if (data === 'owner_vps_list') {
    await showOwnerVPSList(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data.startsWith('owner_vps_list_page_')) {
    const page = parseInt(data.replace('owner_vps_list_page_', ''));
    await showOwnerVPSList(chatId, user.id, messageId, callbackQueryId, page);
    return;
}

if (data.startsWith('owner_vps_detail_')) {
    const orderId = data.replace('owner_vps_detail_', '');
    await showOwnerVPSDetail(chatId, user.id, orderId, messageId, callbackQueryId);
    return;
}

// Owner Menu - Panel Orders List
if (data === 'owner_panel_list') {
    await showOwnerPanelList(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data.startsWith('owner_panel_list_page_')) {
    const page = parseInt(data.replace('owner_panel_list_page_', ''));
    await showOwnerPanelList(chatId, user.id, messageId, callbackQueryId, page);
    return;
}

if (data.startsWith('owner_panel_detail_')) {
    const orderId = data.replace('owner_panel_detail_', '');
    await showOwnerPanelDetail(chatId, user.id, orderId, messageId, callbackQueryId);
    return;
}

// Owner Menu - Maintenance
if (data === 'owner_maintenance_menu') {
    await showOwnerMaintenanceMenu(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data === 'maintenance_on') {
    const selection = {
        step: 'maintenance_set_reason',
        action: 'on',
        timestamp: Date.now()
    };
    userSelections.set(user.id, selection);
    
    await editMessage(chatId, messageId, callbackQueryId,
        `<b>🔧 MAINTENANCE MODE - SET REASON</b>\n\n` +
        `Silakan kirimkan alasan maintenance:\n\n` +
        `Contoh: <code>Perbaikan server, akan selesai dalam 30 menit</code>\n\n` +
        `Ketik *0* untuk membatalkan.`,
        { parse_mode: 'HTML' }
    );
    return;
}

if (data === 'maintenance_off') {
    setMaintenance(false);
    await editMessage(chatId, messageId, callbackQueryId,
        `<b>✅ MAINTENANCE MODE DIMATIKAN</b>\n\n` +
        `Bot sekarang dapat digunakan oleh semua user.`,
        { 
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🔙 Kembali', callback_data: 'owner_maintenance_menu' }]
                ]
            }
        }
    );
    return;
}

if (data === 'maintenance_set_reason') {
    const selection = {
        step: 'maintenance_set_reason',
        action: 'update',
        timestamp: Date.now()
    };
    userSelections.set(user.id, selection);
    
    await editMessage(chatId, messageId, callbackQueryId,
        `<b>🔧 MAINTENANCE MODE - UPDATE REASON</b>\n\n` +
        `Silakan kirimkan alasan maintenance baru:\n\n` +
        `Contoh: <code>Update sistem, akan selesai dalam 1 jam</code>\n\n` +
        `Ketik *0* untuk membatalkan.`,
        { parse_mode: 'HTML' }
    );
    return;
}

// Owner Menu - Broadcast
if (data === 'owner_broadcast_menu') {
    await showOwnerBroadcastMenu(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data === 'broadcast_test') {
    await bot.answerCallbackQuery(callbackQueryId, {
        text: 'Fitur broadcast: Reply pesan yang ingin di-broadcast, lalu ketik /broadcast',
        show_alert: true
    });
    return;
}

if (data === 'broadcast_preview') {
    await bot.answerCallbackQuery(callbackQueryId, {
        text: 'Preview: Pastikan pesan yang akan di-broadcast sudah sesuai',
        show_alert: true
    });
    return;
}

// Owner Menu - Set Profit
if (data === 'owner_setprofit_menu') {
    await showOwnerSetProfitMenu(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data.startsWith('setprofit_')) {
    let profit = parseInt(data.replace('setprofit_', ''));
    if (isNaN(profit)) profit = 0;
    
    // Update via command
    const simulatedMsg = {
        chat: { id: chatId },
        from: user,
        text: `/setprofit ${profit}`
    };
    bot.emit('text', simulatedMsg);
    return;
}

if (data === 'setprofit_custom') {
    const selection = {
        step: 'setprofit_custom',
        timestamp: Date.now()
    };
    userSelections.set(user.id, selection);
    
    await editMessage(chatId, messageId, callbackQueryId,
        `<b>💰 SET KEUNTUNGAN CUSTOM</b>\n\n` +
        `Silakan kirimkan nominal keuntungan yang diinginkan:\n\n` +
        `Contoh: <code>2500</code>\n\n` +
        `Ketik *0* untuk membatalkan.`,
        { parse_mode: 'HTML' }
    );
    return;
}

// Owner Menu - Database
if (data === 'owner_database_menu') {
    await showDatabaseMenu(chatId, user.id, messageId, callbackQueryId);
    return;
}

// Owner Menu - Refresh Cache
if (data === 'refresh_cache') {
    if (!owner_ids.includes(user.id.toString())) {
        await bot.answerCallbackQuery(callbackQueryId, {
            text: '⛔ Akses Ditolak',
            show_alert: true
        });
        return;
    }
    
    // Clear semua cache
    balanceCache.clear();
    userSelections.clear();
    userDepositMessages.clear();
    userPendingCommands.clear();
    orderProcessing.clear();
    depositProcessing.clear();
    sentNotifications.clear();
    voucherCache.clear();
    
    // Clear services cache
    if (servicesCache) {
        servicesCache.data = null;
        servicesCache.timestamp = 0;
        if (servicesCache.countries) servicesCache.countries.clear();
        if (servicesCache.servers) servicesCache.servers.clear();
        if (servicesCache.filtered) servicesCache.filtered.clear();
    }
    
    // Clear VPS stock cache
    if (vpsStockCache) {
        vpsStockCache.stock = null;
        vpsStockCache.lastCheck = 0;
    }
    
    await bot.answerCallbackQuery(callbackQueryId, {
        text: '✅ Cache berhasil dibersihkan!',
        show_alert: false
    });
    
    await editMessage(chatId, messageId, callbackQueryId,
        `<b>✅ CACHE BERHASIL DIBERSIHKAN</b>\n\n` +
        `Cache berikut telah di-reset:\n` +
        `• Balance cache\n` +
        `• User sessions\n` +
        `• Order processing\n` +
        `• Deposit processing\n` +
        `• Services cache\n` +
        `• VPS stock cache\n\n` +
        `Bot akan berjalan normal.`,
        {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🔙 Kembali ke Owner Menu', callback_data: 'owner_menu' }]
                ]
            }
        }
    );
    return;
}

// Owner Menu - Referral Stats
if (data === 'owner_refstats') {
    const simulatedMsg = {
        chat: { id: chatId },
        from: user,
        text: '/refstats'
    };
    bot.emit('text', simulatedMsg);
    return;
}

// Owner Menu - Check DB
if (data === 'owner_checkdb') {
    const simulatedMsg = {
        chat: { id: chatId },
        from: user,
        text: '/checkdb'
    };
    bot.emit('text', simulatedMsg);
    return;
}

// Owner Menu - List Users
if (data === 'owner_list_users') {
    await showListUsers(chatId, user.id, messageId, callbackQueryId);
    return;
}

// Owner Menu - Admin Menu
if (data === 'owner_admin_menu') {
    await showAdminMenu(chatId, user.id, messageId, callbackQueryId);
    return;
}

// Owner Menu - Settings
if (data === 'owner_settings') {
    await showOwnerSettings(chatId, user.id, messageId, callbackQueryId);
    return;
}

// Owner Menu - User Manager
if (data === 'owner_user_manager') {
    await showUserManager(chatId, user.id, messageId, callbackQueryId);
    return;
}

// Owner Menu - Balance Manager
if (data === 'owner_balance_manager') {
    await showBalanceManager(chatId, user.id, messageId, callbackQueryId);
    return;
}

// Owner Menu - Ban Manager
if (data === 'owner_ban_manager') {
    await showBanManager(chatId, user.id, messageId, callbackQueryId);
    return;
}

// WITHDRAW CALLBACK HANDLERS
if (data === 'withdraw_menu') {
    await showWithdrawMenu(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data.startsWith('withdraw_menu_page_')) {
    const page = parseInt(data.replace('withdraw_menu_page_', ''));
    await showWithdrawMenu(chatId, user.id, messageId, callbackQueryId, page);
    return;
}

if (data.startsWith('withdraw_brand_')) {
    const parts = data.replace('withdraw_brand_', '').split('_');
    const brand = parts[0];
    const menuPage = parseInt(parts[1]) || 0;
    await showWithdrawBrandProducts(chatId, user.id, brand, menuPage, messageId, callbackQueryId);
    return;
}

if (data.startsWith('withdraw_brand_products_')) {
    const parts = data.replace('withdraw_brand_products_', '').split('_');
    const brand = parts[0];
    const menuPage = parseInt(parts[1]) || 0;
    const productPage = parseInt(parts[2]) || 0;
    await showWithdrawBrandProducts(chatId, user.id, brand, menuPage, messageId, callbackQueryId, productPage);
    return;
}

if (data.startsWith('withdraw_product_')) {
    const parts = data.replace('withdraw_product_', '').split('_');
    const productCode = parts[0];
    const brand = parts[1];
    const menuPage = parseInt(parts[2]) || 0;
    const productPage = parseInt(parts[3]) || 0;
    await showWithdrawProductDetail(chatId, user.id, productCode, brand, menuPage, productPage, messageId, callbackQueryId);
    return;
}

if (data === 'withdraw_history') {
    await showWithdrawHistory(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data.startsWith('withdraw_history_page_')) {
    const page = parseInt(data.replace('withdraw_history_page_', ''));
    await showWithdrawHistory(chatId, user.id, messageId, callbackQueryId, page);
    return;
}
    
// CS Chat Callbacks
if (data === 'cs_chat') {
    await startCSChat(chatId, user.id, messageId, callbackQueryId);
    return;
}

if (data.startsWith('cs_join_')) {
    const threadId = data.replace('cs_join_', '');
    await joinCSThread(chatId, user.id, threadId, messageId, callbackQueryId);
    return;
}

if (data.startsWith('cs_view_thread_')) {
    const threadId = data.replace('cs_view_thread_', '');
    await showCSThreadDetail(chatId, user.id, threadId, messageId, callbackQueryId);
    return;
}

if (data === 'owner_cs_menu') {
    await showCSMenu(chatId, user.id, messageId, callbackQueryId);
    return;
}
    
    // CS Admin Callback Handlers
if (data === 'add_cs_admin') {
  await addCSAdminHandler(chatId, user.id, messageId, callbackQueryId);
  return;
}

if (data === 'remove_cs_admin') {
  await removeCSAdminHandler(chatId, user.id, messageId, callbackQueryId);
  return;
}

if (data === 'list_cs_admins') {
  await listCSAdminsHandler(chatId, user.id, messageId, callbackQueryId);
  return;
}

if (data.startsWith('cs_admin_info_')) {
  const targetAdminId = data.replace('cs_admin_info_', '');
  await showCSAdminInfo(chatId, user.id, targetAdminId, messageId, callbackQueryId);
  return;
}

if (data.startsWith('cs_add_confirm_')) {
  const targetAdminId = data.replace('cs_add_confirm_', '');
  await confirmAddCSAdmin(chatId, user.id, targetAdminId, messageId, callbackQueryId);
  return;
}

if (data.startsWith('cs_remove_confirm_')) {
  const targetAdminId = data.replace('cs_remove_confirm_', '');
  await confirmRemoveCSAdmin(chatId, user.id, targetAdminId, messageId, callbackQueryId);
  return;
}
    
    if (data === 'ban_list_full') {
  const bannedUsers = loadBannedUsers();
  const activeBans = bannedUsers.filter(user => user.status === 'banned');
  
  if (activeBans.length === 0) {
    await editMessage(chatId, messageId, callbackQueryId,
      `<b>🚫 BANNED USERS</b>\n\nNo users are currently banned.`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: '🔙 Back', callback_data: 'owner_ban_manager' }]
          ]
        }
      }
    );
    return;
  }
  
  let message = `<b>🚫 FULL BAN LIST</b>\n\n`;
  message += `<b>Total Banned:</b> ${activeBans.length}\n\n`;
  
  activeBans.forEach((ban, index) => {
    const banDate = new Date(ban.bannedAt).toLocaleDateString('id-ID');
    message += `<b>${index + 1}. User ${ban.userId}</b>\n`;
    message += `├ Reason: ${ban.reason || 'No reason'}\n`;
    message += `├ By: ${ban.bannedBy || 'System'}\n`;
    message += `└ Date: ${banDate}\n\n`;
  });
  
  const keyboard = [];
  
  // Add buttons for first 5 banned users
  activeBans.slice(0, 5).forEach((ban, index) => {
    keyboard.push([
      { 
        text: `${index + 1}. ${ban.userId.substring(0, 8)}...`, 
        callback_data: `user_manage_${ban.userId}` 
      }
    ]);
  });
  
  keyboard.push([
    { text: '🔙 Back', callback_data: 'owner_ban_manager' },
    { text: '🔄 Refresh', callback_data: 'ban_list_full' }
  ]);
  
  await editMessage(chatId, messageId, callbackQueryId, message, {
    parse_mode: 'HTML',
    reply_markup: { inline_keyboard: keyboard },
    disable_web_page_preview: true
  });
  
  return;
}

if (data === 'balance_add_quick') {
  const selection = {
    step: 'balance_add_any',
    timestamp: Date.now()
  };
  userSelections.set(userId, selection);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>➕ ADD BALANCE</b>\n\n` +
    `Send user ID and amount:\n\n` +
    `Format: <code>user_id amount</code>\n` +
    `Example: <code>123456789 10000</code>\n\n` +
    `<i>User must exist in system</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '🔙 Back', callback_data: 'owner_balance_manager' }]
        ]
      }
    }
  );
  return;
}

if (data === 'balance_deduct_quick') {
  const selection = {
    step: 'balance_deduct_any',
    timestamp: Date.now()
  };
  userSelections.set(userId, selection);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>➖ DEDUCT BALANCE</b>\n\n` +
    `Send user ID and amount:\n\n` +
    `Format: <code>user_id amount</code>\n` +
    `Example: <code>123456789 5000</code>\n\n` +
    `<i>User must have enough balance</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '🔙 Back', callback_data: 'owner_balance_manager' }]
        ]
      }
    }
  );
  return;
}

if (data === 'balance_reset_quick') {
  const selection = {
    step: 'balance_reset_any',
    timestamp: Date.now()
  };
  userSelections.set(userId, selection);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>🔄 RESET BALANCE</b>\n\n` +
    `Send user ID to reset balance to 0:\n\n` +
    `Example: <code>123456789</code>\n\n` +
    `<i>This cannot be undone!</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '🔙 Back', callback_data: 'owner_balance_manager' }]
        ]
      }
    }
  );
  return;
}

if (data === 'ban_user_quick') {
  const selection = {
    step: 'ban_any_user',
    timestamp: Date.now()
  };
  userSelections.set(userId, selection);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>🚫 BAN USER</b>\n\n` +
    `Send user ID and reason:\n\n` +
    `Format: <code>user_id reason</code>\n` +
    `Example: <code>123456789 spamming</code>\n\n` +
    `<i>User will be banned immediately</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '🔙 Back', callback_data: 'owner_ban_manager' }]
        ]
      }
    }
  );
  return;
}

if (data === 'unban_user_quick') {
  const selection = {
    step: 'unban_any_user',
    timestamp: Date.now()
  };
  userSelections.set(userId, selection);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>✅ UNBAN USER</b>\n\n` +
    `Send user ID to unban:\n\n` +
    `Example: <code>123456789</code>\n\n` +
    `<i>User will be able to use bot again</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '🔙 Back', callback_data: 'owner_ban_manager' }]
        ]
      }
    }
  );
  return;
}
    
    if (data === 'owner_database') {
  await showDatabaseMenu(chatId, user.id, messageId, callbackQueryId);
  return;
}
    
if (data === 'owner_user_stats') {
  await showUserStats(chatId, user.id, messageId, callbackQueryId);
  return;
}

// Owner Settings Sub-menus
if (data === 'owner_user_manager') {
  await showUserManager(chatId, user.id, messageId, callbackQueryId);
  return;
}

if (data === 'owner_balance_manager') {
  await showBalanceManager(chatId, user.id, messageId, callbackQueryId);
  return;
}

if (data === 'owner_ban_manager') {
  await showBanManager(chatId, user.id, messageId, callbackQueryId);
  return;
}

if (data.startsWith('user_manager_page_')) {
  const page = parseInt(data.replace('user_manager_page_', ''));
  await showUserManager(chatId, user.id, messageId, callbackQueryId, page);
  return;
}

if (data.startsWith('user_manage_')) {
  const targetUserId = data.replace('user_manage_', '');
  await showUserManageDetail(chatId, user.id, targetUserId, messageId, callbackQueryId);
  return;
}

// Balance actions
if (data.startsWith('user_add_balance_')) {
  const targetUserId = data.replace('user_add_balance_', '');
  const selection = {
    step: 'add_balance_user',
    targetUserId: targetUserId,
    timestamp: Date.now()
  };
  userSelections.set(user.id, selection);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>➕ ADD BALANCE TO USER</b>\n\n` +
    `User ID: <code>${targetUserId}</code>\n\n` +
    `Enter amount to add:\n` +
    `Example: <code>10000</code> for Rp 10,000\n\n` +
    `<i>Minimum: Rp 1,000</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '💰 Quick: 10K', callback_data: `quick_add_${targetUserId}_10000` }],
          [{ text: '💰 Quick: 50K', callback_data: `quick_add_${targetUserId}_50000` }],
          [{ text: '💰 Quick: 100K', callback_data: `quick_add_${targetUserId}_100000` }],
          [
            { text: '🔙 Back', callback_data: `user_manage_${targetUserId}` },
            { text: '❌ Cancel', callback_data: `user_manage_${targetUserId}` }
          ]
        ]
      }
    }
  );
  return;
}

if (data.startsWith('quick_add_')) {
  const parts = data.replace('quick_add_', '').split('_');
  const targetUserId = parts[0];
  const amount = parseInt(parts[1]);
  
  const oldBalance = getUserBalance(targetUserId);
  const success = addUserBalance(targetUserId, amount);
  const newBalance = getUserBalance(targetUserId);
  
  if (success) {
    await editMessage(chatId, messageId, callbackQueryId,
      `<b>✅ BALANCE ADDED SUCCESSFULLY</b>\n\n` +
      `User ID: <code>${targetUserId}</code>\n` +
      `Amount Added: ${formatCurrency(amount)}\n` +
      `Old Balance: ${formatCurrency(oldBalance)}\n` +
      `New Balance: ${formatCurrency(newBalance)}\n` +
      `Added by: ${user.first_name}\n\n` +
      `<i>Balance has been updated</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '➕ Add More', callback_data: `user_add_balance_${targetUserId}` },
              { text: '🔙 Back', callback_data: `user_manage_${targetUserId}` }
            ]
          ]
        }
      }
    );
  }
  return;
}

if (data.startsWith('user_deduct_balance_')) {
  const targetUserId = data.replace('user_deduct_balance_', '');
  const currentBalance = getUserBalance(targetUserId);
  
  const selection = {
    step: 'deduct_balance_user',
    targetUserId: targetUserId,
    timestamp: Date.now()
  };
  userSelections.set(user.id, selection);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>➖ DEDUCT BALANCE FROM USER</b>\n\n` +
    `User ID: <code>${targetUserId}</code>\n` +
    `Current Balance: ${formatCurrency(currentBalance)}\n\n` +
    `Enter amount to deduct:\n` +
    `Example: <code>5000</code> for Rp 5,000\n\n` +
    `<i>Maximum: ${formatCurrency(currentBalance)}</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [
            { text: '🔙 Back', callback_data: `user_manage_${targetUserId}` },
            { text: '❌ Cancel', callback_data: `user_manage_${targetUserId}` }
          ]
        ]
      }
    }
  );
  return;
}

if (data.startsWith('user_reset_balance_')) {
  const targetUserId = data.replace('user_reset_balance_', '');
  const currentBalance = getUserBalance(targetUserId);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>🔄 RESET USER BALANCE</b>\n\n` +
    `User ID: <code>${targetUserId}</code>\n` +
    `Current Balance: ${formatCurrency(currentBalance)}\n\n` +
    `Are you sure you want to reset this user's balance to 0?\n\n` +
    `<i>This action cannot be undone!</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [
            { text: '✅ Yes, Reset to 0', callback_data: `confirm_reset_balance_${targetUserId}` },
            { text: '❌ Cancel', callback_data: `user_manage_${targetUserId}` }
          ]
        ]
      }
    }
  );
  return;
}

if (data.startsWith('confirm_reset_balance_')) {
  const targetUserId = data.replace('confirm_reset_balance_', '');
  const oldBalance = getUserBalance(targetUserId);
  
  const success = setUserBalance(targetUserId, 0);
  
  if (success) {
    await editMessage(chatId, messageId, callbackQueryId,
      `<b>✅ BALANCE RESET SUCCESSFULLY</b>\n\n` +
      `User ID: <code>${targetUserId}</code>\n` +
      `Old Balance: ${formatCurrency(oldBalance)}\n` +
      `New Balance: ${formatCurrency(0)}\n` +
      `Reset by: ${user.first_name}\n\n` +
      `<i>Balance has been reset to 0</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '🔙 Back', callback_data: `user_manage_${targetUserId}` },
              { text: '👥 User List', callback_data: 'owner_user_manager' }
            ]
          ]
        }
      }
    );
  }
  return;
}

// Ban actions
if (data.startsWith('user_ban_')) {
  const targetUserId = data.replace('user_ban_', '');
  const selection = {
    step: 'ban_user_reason',
    targetUserId: targetUserId,
    timestamp: Date.now()
  };
  userSelections.set(user.id, selection);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>🚫 BAN USER</b>\n\n` +
    `User ID: <code>${targetUserId}</code>\n\n` +
    `Enter ban reason:\n` +
    `Example: <code>Violating terms of service</code>\n\n` +
    `<i>Leave empty for no reason</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [
            { text: '🚫 Spamming', callback_data: `quick_ban_${targetUserId}_spamming` },
            { text: '💰 Chargeback', callback_data: `quick_ban_${targetUserId}_chargeback` }
          ],
          [
            { text: '📛 Harassment', callback_data: `quick_ban_${targetUserId}_harassment` },
            { text: '⚖️ Terms Violation', callback_data: `quick_ban_${targetUserId}_terms` }
          ],
          [
            { text: '🔙 Back', callback_data: `user_manage_${targetUserId}` },
            { text: '❌ Cancel', callback_data: `user_manage_${targetUserId}` }
          ]
        ]
      }
    }
  );
  return;
}

if (data.startsWith('quick_ban_')) {
  const parts = data.replace('quick_ban_', '').split('_');
  const targetUserId = parts[0];
  const reasonType = parts[1];
  
  const reasonMap = {
    'spamming': 'Spamming/Flooding',
    'chargeback': 'Payment chargeback',
    'harassment': 'Harassment/Abuse',
    'terms': 'Terms of service violation'
  };
  
  const reason = reasonMap[reasonType] || 'Violation of rules';
  const success = banUser(targetUserId, reason, user.id.toString());
  
  if (success) {
    await editMessage(chatId, messageId, callbackQueryId,
      `<b>✅ USER BANNED SUCCESSFULLY</b>\n\n` +
      `User ID: <code>${targetUserId}</code>\n` +
      `Reason: ${reason}\n` +
      `Banned by: ${user.first_name}\n` +
      `Time: ${new Date().toLocaleString('id-ID')}\n\n` +
      `<i>User has been banned from the bot</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '🔙 Back', callback_data: `user_manage_${targetUserId}` },
              { text: '🚫 Ban List', callback_data: 'owner_ban_manager' }
            ]
          ]
        }
      }
    );
  }
  return;
}

if (data.startsWith('user_unban_')) {
  const targetUserId = data.replace('user_unban_', '');
  const success = unbanUser(targetUserId, user.id.toString());
  
  if (success) {
    await editMessage(chatId, messageId, callbackQueryId,
      `<b>✅ USER UNBANNED SUCCESSFULLY</b>\n\n` +
      `User ID: <code>${targetUserId}</code>\n` +
      `Unbanned by: ${user.first_name}\n` +
      `Time: ${new Date().toLocaleString('id-ID')}\n\n` +
      `<i>User can now access the bot again</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [
              { text: '🔙 Back', callback_data: `user_manage_${targetUserId}` },
              { text: '🚫 Ban Manager', callback_data: 'owner_ban_manager' }
            ]
          ]
        }
      }
    );
  }
  return;
}

// Quick search
if (data === 'search_user_quick') {
  const selection = {
    step: 'search_user_quick',
    timestamp: Date.now()
  };
  userSelections.set(user.id, selection);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>🔍 QUICK USER SEARCH</b>\n\n` +
    `Send user ID or username to search:\n\n` +
    `Examples:\n` +
    `• <code>123456789</code> (User ID)\n` +
    `• <code>@username</code> (Username)\n` +
    `• <code>banned</code> (Search banned users)\n\n` +
    `<i>User must have started the bot before</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '🔙 Back', callback_data: 'owner_user_manager' }]
        ]
      }
    }
  );
  return;
}
    
    if (data === 'cs_active_threads') {
  await showActiveCSThreads(chatId, user.id, messageId, callbackQueryId);
  return;
}

if (data === 'cs_stats') {
  await showCSStats(chatId, user.id, messageId, callbackQueryId);
  return;
}
    
    // CS Chat Callback Handlers
if (data.startsWith('cs_start_reply_')) {
  const chatThreadId = data.replace('cs_start_reply_', '');
  
  // Cari chat session
  const chatSession = global.csChatSessions?.get(chatThreadId);
  if (!chatSession) {
    await bot.answerCallbackQuery(callbackQueryId, {
      text: '❌ Thread chat tidak ditemukan',
      show_alert: true
    });
    return;
  }
  
  // Set admin sebagai penanggung jawab
  chatSession.adminId = user.id.toString();
  chatSession.adminName = user.first_name;
  chatSession.status = 'active';
  
  // Update session
  global.csChatSessions.set(chatThreadId, chatSession);
  
  // Set user selection untuk admin
  const adminSelection = {
    step: 'cs_admin_reply',
    csThreadId: chatThreadId,
    targetUserId: chatSession.userId,
    targetUserName: chatSession.userName,
    timestamp: Date.now()
  };
  userSelections.set(user.id, adminSelection);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>💬 BALAS PESAN USER</b>\n\n` +
    `<b>Thread ID:</b> <code>${chatThreadId}</code>\n` +
    `<b>User:</b> ${chatSession.userName}\n` +
    `<b>User ID:</b> <code>${chatSession.userId}</code>\n\n` +
    `<b>Pesan Terakhir:</b>\n${chatSession.messages[chatSession.messages.length - 1]?.message || 'Tidak ada pesan'}\n\n` +
    `<b>Kirim balasan Anda:</b>\n` +
    `<i>Ketik pesan yang ingin dikirim ke user</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '👁️ Lihat Thread Lengkap', callback_data: `cs_view_thread_${chatThreadId}` }],
          [{ text: '❌ Batalkan', callback_data: `cs_cancel_reply_${chatThreadId}` }]
        ]
      }
    }
  );
  
  await bot.answerCallbackQuery(callbackQueryId, {
    text: '✅ Anda sekarang menangani chat ini',
    show_alert: false
  });
  
  return;
}

if (data.startsWith('cs_view_thread_')) {
  const chatThreadId = data.replace('cs_view_thread_', '');
  
  const chatSession = global.csChatSessions?.get(chatThreadId);
  if (!chatSession) {
    await bot.answerCallbackQuery(callbackQueryId, {
      text: '❌ Thread chat tidak ditemukan',
      show_alert: true
    });
    return;
  }
  
  let threadMessage = `<b>💬 CHAT THREAD</b>\n\n`;
  threadMessage += `<b>Thread ID:</b> <code>${chatThreadId}</code>\n`;
  threadMessage += `<b>User:</b> ${chatSession.userName}\n`;
  threadMessage += `<b>User ID:</b> <code>${chatSession.userId}</code>\n`;
  threadMessage += `<b>Status:</b> ${chatSession.status === 'active' ? '🟢 Active' : '🟡 Pending'}\n`;
  if (chatSession.adminName) {
    threadMessage += `<b>Admin:</b> ${chatSession.adminName}\n`;
  }
  threadMessage += `<b>Dibuat:</b> ${new Date(chatSession.createdAt).toLocaleString('id-ID')}\n\n`;
  
  threadMessage += `<b>📋 RIWAYAT PESAN:</b>\n\n`;
  
  if (chatSession.messages.length === 0) {
    threadMessage += `<i>Belum ada pesan</i>\n`;
  } else {
    chatSession.messages.forEach((msg, index) => {
      const time = new Date(msg.timestamp).toLocaleTimeString('id-ID', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
      threadMessage += `<b>${index + 1}. ${msg.name} (${msg.sender === 'user' ? '👤 User' : '👨‍💼 Admin'}):</b>\n`;
      threadMessage += `${msg.message}\n`;
      threadMessage += `<i>${time}</i>\n\n`;
    });
  }
  
  const keyboard = [];
  
  if (chatSession.status === 'pending' || (chatSession.adminId === user.id.toString())) {
    keyboard.push([
      { 
        text: chatSession.adminId ? '💬 Lanjut Balas' : '💬 Ambil & Balas', 
        callback_data: `cs_start_reply_${chatThreadId}` 
      }
    ]);
  }
  
  keyboard.push([
    { 
      text: '📋 Copy Thread ID', 
      callback_data: `cs_copy_thread_${chatThreadId}` 
    },
    { 
      text: '🔄 Refresh', 
      callback_data: `cs_view_thread_${chatThreadId}` 
    }
  ]);
  
  if (chatSession.adminId === user.id.toString() || owner_ids.includes(user.id.toString())) {
    keyboard.push([
      { 
        text: '❌ Tutup Thread', 
        callback_data: `cs_close_thread_admin_${chatThreadId}` 
      }
    ]);
  }
  
  keyboard.push([
    { text: '🔙 Kembali', callback_data: 'owner_cs_menu' }
  ]);
  
  await editMessage(chatId, messageId, callbackQueryId, threadMessage, {
    parse_mode: 'HTML',
    reply_markup: { inline_keyboard: keyboard },
    disable_web_page_preview: true
  });
  
  return;
}

if (data.startsWith('cs_reply_thread_')) {
  const chatThreadId = data.replace('cs_reply_thread_', '');
  
  const chatSession = global.csChatSessions?.get(chatThreadId);
  if (!chatSession) {
    await bot.answerCallbackQuery(callbackQueryId, {
      text: '❌ Thread chat tidak ditemukan',
      show_alert: true
    });
    return;
  }
  
  // Cek apakah admin ini yang menangani
  if (chatSession.adminId !== user.id.toString()) {
    await bot.answerCallbackQuery(callbackQueryId, {
      text: '❌ Hanya admin yang menangani bisa membalas',
      show_alert: true
    });
    return;
  }
  
  // Set user selection untuk admin
  const adminSelection = {
    step: 'cs_admin_reply',
    csThreadId: chatThreadId,
    targetUserId: chatSession.user.id,
    targetUserName: chatSession.userName,
    timestamp: Date.now()
  };
  userSelections.set(user.id, adminSelection);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>💬 BALAS PESAN USER</b>\n\n` +
    `<b>Thread ID:</b> <code>${chatThreadId}</code>\n` +
    `<b>User:</b> ${chatSession.userName}\n\n` +
    `<b>Kirim balasan Anda:</b>\n` +
    `<i>Ketik pesan yang ingin dikirim ke user</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '👁️ Lihat Thread', callback_data: `cs_view_thread_${chatThreadId}` }],
          [{ text: '❌ Batalkan', callback_data: `cs_cancel_reply_${chatThreadId}` }]
        ]
      }
    }
  );
  
  return;
}

if (data.startsWith('cs_copy_thread_')) {
  const chatThreadId = data.replace('cs_copy_thread_', '');
  
  await bot.answerCallbackQuery(callbackQueryId, {
    text: `Thread ID: ${chatThreadId}\n\nCopied to clipboard!`,
    show_alert: true
  });
  
  return;
}

if (data.startsWith('cs_cancel_reply_')) {
  const chatThreadId = data.replace('cs_cancel_reply_', '');
  
  // Hapus selection admin
  userSelections.delete(user.id);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>❌ BALASAN DIBATALKAN</b>\n\n` +
    `Thread ID: <code>${chatThreadId}</code>\n\n` +
    `Anda membatalkan balasan.`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '👁️ Lihat Thread', callback_data: `cs_view_thread_${chatThreadId}` }],
          [{ text: '🔙 CS Menu', callback_data: 'owner_cs_menu' }]
        ]
      }
    }
  );
  
  return;
}

if (data.startsWith('cs_close_chat_')) {
  const chatThreadId = data.replace('cs_close_chat_', '');
  
  // User menutup chat dari sisi mereka
  const chatSession = global.csChatSessions?.get(chatThreadId);
  if (chatSession) {
    chatSession.status = 'closed';
    global.csChatSessions.set(chatThreadId, chatSession);
  }
  
  // Hapus selection user
  userSelections.delete(user.id);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>✅ CHAT DITUTUP</b>\n\n` +
    `Thread ID: <code>${chatThreadId}</code>\n\n` +
    `Chat dengan CS Admin telah ditutup.\n` +
    `Terima kasih telah menghubungi kami.`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '🏠 Menu Utama', callback_data: 'main_menu' }]
        ]
      }
    }
  );
  
  return;
}
    
if (data === 'reset_database_confirm') {
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>⚠️ KONFIRMASI RESET DATABASE</b>\n\n` +
    `<b>PERINGATAN:</b>\n` +
    `• Semua data user akan dihapus\n` +
    `• Semua saldo akan direset ke 0\n` +
    `• Semua riwayat transaksi dihapus\n` +
    `• Semua voucher dihapus\n` +
    `• Backup otomatis akan dibuat\n` +
    `• Proses TIDAK BISA DIBATALKAN\n\n` +
    `Yakin ingin mereset database?`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [
            { text: '✅ Ya, Reset Sekarang', callback_data: 'reset_database_execute' },
            { text: '❌ Batalkan', callback_data: 'owner_database_menu' }
          ]
        ]
      }
    }
  );
  return;
}
    
    if (data === 'reset_database_execute') {
  await resetDatabase(chatId, user.id, messageId, callbackQueryId);
  return;
}
    
    // Tambahkan di callback handler
if (data === 'add_admin') {
  const selection = {
    step: 'add_admin_input',
    timestamp: Date.now()
  };
  userSelections.set(user.id, selection);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>➕ ADD ADMIN</b>\n\n` +
    `Kirim User ID yang ingin dijadikan admin:\n\n` +
    `Contoh: <code>123456789</code>\n\n` +
    `<i>User ID harus berupa angka</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '🔙 Admin Menu', callback_data: 'owner_admin_menu' }]
        ]
      }
    }
  );
  return;
}

if (data === 'remove_admin') {
  const selection = {
    step: 'remove_admin_input',
    timestamp: Date.now()
  };
  userSelections.set(user.id, selection);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>➖ REMOVE ADMIN</b>\n\n` +
    `Kirim User ID admin yang ingin dihapus:\n\n` +
    `Contoh: <code>123456789</code>\n\n` +
    `<i>User ID harus berupa angka</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '🔙 Admin Menu', callback_data: 'owner_admin_menu' }]
        ]
      }
    }
  );
  return;
}

// Owner Settings Callback Handlers
if (data === 'owner_settings') {
  await showOwnerSettings(chatId, user.id, messageId, callbackQueryId);
  return;
}

// Di dalam showOwnerSettings, tambahkan tombol FREE VPS Info:
if (data === 'owner_free_vps_info') {
    const freeCount = getFreeVPSCount(user.id);
    const maxFree = config.MAX_FREE_VPS_PER_OWNER || 5;
    await editMessage(chatId, messageId, callbackQueryId,
        `🎁 *REPLACE VPS FOR OWNER* 🎁
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👑 *Anda adalah OWNER*

📊 *REPLACE VPS Statistics:*
├ Total REPLACE VPS dibuat: ${freeCount}
├ Maksimal REPLACE VPS: ${maxFree}
└ Sisa kuota REPLACE VPS: ${Math.max(0, maxFree - freeCount)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ *Fitur REPLACE VPS:*
• GRATIS 100% (tanpa biaya)
• Garansi sama seperti VPS berbayar
• Untuk keperluan testing / pembelajaran
• Maksimal ${maxFree} VPS per owner

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ *Catatan:*
• REPLACE VPS tidak bisa di-refund (karena gratis)
• Jangan disalahgunakan
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        {
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [
                    [{ text: "🎁 Buat Replace VPS", callback_data: "vps_free_menu" }],
                    [{ text: "🔙 Kembali", callback_data: "owner_settings" }]
                ]
            }
        }
    );
    return;
}

if (data === 'owner_user_details') {
  await showUserDetailsMenu(chatId, user.id, messageId, callbackQueryId);
  return;
}

if (data === 'search_user_by_id') {
  await searchUserByID(chatId, user.id, messageId, callbackQueryId);
  return;
}

if (data.startsWith('user_detail_')) {
  const targetUserId = data.replace('user_detail_', '');
  await showUserDetails(user.id, targetUserId, chatId, messageId, callbackQueryId);
  return;
}

if (data === 'owner_user_balance') {
  await showUserBalanceManagement(chatId, user.id, messageId, callbackQueryId);
  return;
}

if (data === 'owner_user_history') {
  await showUserHistoryMenu(chatId, user.id, messageId, callbackQueryId);
  return;
}

if (data === 'owner_ban_management') {
  await showBanManagement(chatId, user.id, messageId, callbackQueryId);
  return;
}

if (data === 'owner_list_users') {
  await showListUsers(chatId, user.id, messageId, callbackQueryId);
  return;
}

if (data.startsWith('list_users_page_')) {
  const page = parseInt(data.replace('list_users_page_', ''));
  await showListUsers(chatId, user.id, messageId, callbackQueryId, page);
  return;
}

if (data === 'owner_database_menu') {
  await showDatabaseMenu(chatId, user.id, messageId, callbackQueryId);
  return;
}

if (data === 'owner_admin_menu') {
  await showAdminMenu(chatId, user.id, messageId, callbackQueryId);
  return;
}

if (data === 'owner_cs_menu') {
  await showCSMenu(chatId, user.id, messageId, callbackQueryId);
  return;
}

// User balance actions
if (data.startsWith('add_balance_')) {
  const targetUserId = data.replace('add_balance_', '');
  const selection = {
    step: 'add_balance',
    targetUserId: targetUserId,
    timestamp: Date.now()
  };
  userSelections.set(userId, selection);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>➕ TAMBAH SALDO USER</b>\n\n` +
    `User ID: <code>${targetUserId}</code>\n\n` +
    `Kirim jumlah saldo yang ingin ditambahkan:\n` +
    `Contoh: <code>10000</code> untuk Rp 10.000\n\n` +
    `<i>Minimal: Rp 1.000</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '🔙 Kembali', callback_data: `user_detail_${targetUserId}` }]
        ]
      }
    }
  );
  return;
}

if (data.startsWith('deduct_balance_')) {
  const targetUserId = data.replace('deduct_balance_', '');
  const selection = {
    step: 'deduct_balance',
    targetUserId: targetUserId,
    timestamp: Date.now()
  };
  userSelections.set(userId, selection);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>➖ KURANGI SALDO USER</b>\n\n` +
    `User ID: <code>${targetUserId}</code>\n\n` +
    `Kirim jumlah saldo yang ingin dikurangi:\n` +
    `Contoh: <code>5000</code> untuk Rp 5.000\n\n` +
    `<i>Maksimal: Saldo user saat ini</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '🔙 Kembali', callback_data: `user_detail_${targetUserId}` }]
        ]
      }
    }
  );
  return;
}

// Ban/Unban actions
if (data.startsWith('ban_user_')) {
  const targetUserId = data.replace('ban_user_', '');
  const selection = {
    step: 'ban_user',
    targetUserId: targetUserId,
    timestamp: Date.now()
  };
  userSelections.set(userId, selection);
  
  await editMessage(chatId, messageId, callbackQueryId,
    `<b>🚫 BAN USER</b>\n\n` +
    `User ID: <code>${targetUserId}</code>\n\n` +
    `Kirim alasan pemblokiran:\n` +
    `Contoh: <code>Melanggar rules</code>\n\n` +
    `<i>Kosongkan untuk tanpa alasan</i>`,
    {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [
            { text: '✅ Confirm Ban', callback_data: `confirm_ban_${targetUserId}` },
            { text: '❌ Cancel', callback_data: `user_detail_${targetUserId}` }
          ]
        ]
      }
    }
  );
  return;
}

if (data.startsWith('confirm_ban_')) {
  const targetUserId = data.replace('confirm_ban_', '');
  const selection = userSelections.get(userId);
  
  if (selection && selection.step === 'ban_user' && selection.targetUserId === targetUserId) {
    const reason = selection.reason || 'No reason provided';
    const success = banUser(targetUserId, reason, userId.toString());
    
    if (success) {
      await editMessage(chatId, messageId, callbackQueryId,
        `<b>✅ USER BANNED</b>\n\n` +
        `User ID: <code>${targetUserId}</code>\n` +
        `Reason: ${reason}\n` +
        `Banned by: ${user.first_name}\n` +
        `Time: ${new Date().toLocaleString('id-ID')}\n\n` +
        `<i>User telah diblokir dari bot</i>`,
        {
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [{ text: '🔙 User Details', callback_data: `user_detail_${targetUserId}` }]
            ]
          }
        }
      );
    }
  }
  return;
}
  
  if (data === 'owner_voucher_menu') {
    await showVoucherOwnerMenu(chatId, user.id, messageId, callbackQueryId);
    return;
  }
  
  if (data === 'voucher_create') {
    await showCreateVoucherStep1(chatId, user.id, messageId, callbackQueryId);
    return;
  }
  
  if (data === 'voucher_list') {
    await showVoucherList(chatId, user.id, messageId, callbackQueryId);
    return;
  }
  
  if (data === 'voucher_stats_detail') {
    await showVoucherStatsDetail(chatId, user.id, messageId, callbackQueryId);
    return;
  }
  
  if (data.startsWith('voucher_list_page_')) {
    const page = parseInt(data.replace('voucher_list_page_', ''));
    await showVoucherList(chatId, user.id, messageId, callbackQueryId, page);
    return;
  }
  
  if (data.startsWith('voucher_detail_')) {
    const voucherId = data.replace('voucher_detail_', '');
    await showVoucherDetail(chatId, user.id, voucherId, messageId, callbackQueryId);
    return;
  }
  
  if (data.startsWith('voucher_delete_')) {
    const voucherId = data.replace('voucher_delete_', '');
    await confirmDeleteVoucher(chatId, user.id, voucherId, messageId, callbackQueryId);
    return;
  }
  
  if (data.startsWith('voucher_delete_confirm_')) {
    const voucherId = data.replace('voucher_delete_confirm_', '');
    await deleteVoucher(chatId, user.id, voucherId, messageId, callbackQueryId);
    return;
  }
  
  if (data === 'create_voucher_type_percentage') {
    userSelections.set(user.id, {
        step: 'create_voucher',
        voucherData: { type: 'percentage' }
    });
    await showCreateVoucherStep2(chatId, user.id, messageId, callbackQueryId);
    return;
  }
  
  if (data === 'create_voucher_type_fixed') {
    userSelections.set(user.id, {
        step: 'create_voucher',
        voucherData: { type: 'fixed' }
    });
    await showCreateVoucherStep2(chatId, user.id, messageId, callbackQueryId);
    return;
  }
  
  if (data === 'create_voucher_nomin') {
    const selection = userSelections.get(user.id);
    if (selection && selection.voucherData) {
        selection.voucherData.min_purchase = 0;
        selection.voucherData.max_discount = null;
        selection.step = 'awaiting_voucher_limit';
        userSelections.set(user.id, selection);
        await showCreateVoucherStep4(chatId, user.id, messageId, callbackQueryId);
    }
    return;
  }
  
  if (data === 'create_voucher_custom_min') {
    const selection = userSelections.get(user.id);
    if (selection && selection.voucherData) {
        selection.step = 'awaiting_voucher_minmax';
        userSelections.set(user.id, selection);
        await sendNewMessage(chatId, 
            'Masukkan minimum pembelian dan maksimal discount:\n\nFormat: <code>min_purchase max_discount</code>\nContoh: <code>10000 5000</code>\n\nKetik "skip" untuk tanpa minimum',
            { parse_mode: 'HTML' }
        );
    }
    return;
  }
  
  if (data === 'create_voucher_back_step3') {
    const selection = userSelections.get(user.id);
    if (selection && selection.voucherData) {
        selection.step = 'awaiting_voucher_value';
        userSelections.set(user.id, selection);
        await showCreateVoucherStep2(chatId, user.id, messageId, callbackQueryId);
    }
    return;
  }
  
  if (data.startsWith('create_voucher_limit_')) {
    const limit = parseInt(data.replace('create_voucher_limit_', ''));
    const selection = userSelections.get(user.id);
    if (selection && selection.voucherData) {
        selection.voucherData.usage_limit = limit;
        selection.step = 'awaiting_voucher_final';
        userSelections.set(user.id, selection);
        await showCreateVoucherStep5(chatId, user.id, messageId, callbackQueryId);
    }
    return;
  }
  
  if (data.startsWith('create_voucher_expiry_')) {
    const days = parseInt(data.replace('create_voucher_expiry_', ''));
    const selection = userSelections.get(user.id);
    if (selection && selection.voucherData) {
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + days);
        expiryDate.setHours(23, 59, 59, 0);
        selection.voucherData.expiry = expiryDate.toISOString();
        selection.step = 'awaiting_voucher_final';
        userSelections.set(user.id, selection);
        await showCreateVoucherStep5(chatId, user.id, messageId, callbackQueryId);
    }
    return;
  }
  
  if (data === 'create_voucher_back_step4') {
    const selection = userSelections.get(user.id);
    if (selection && selection.voucherData) {
        selection.step = 'awaiting_voucher_limit';
        userSelections.set(user.id, selection);
        await showCreateVoucherStep4(chatId, user.id, messageId, callbackQueryId);
    }
    return;
  }
  
  if (data === 'create_voucher_random_code') {
    const selection = userSelections.get(user.id);
    if (selection && selection.voucherData) {
        selection.voucherData.code = generateVoucherCode();
        selection.step = 'awaiting_voucher_final';
        userSelections.set(user.id, selection);
        await sendNewMessage(chatId,
            `Kode voucher: <code>${selection.voucherData.code}</code>\n\nMasukkan deskripsi (opsional):\n\nContoh: <code>Diskon spesial untuk member</code>\n\nKetik "skip" untuk tanpa deskripsi`,
            { parse_mode: 'HTML' }
        );
    }
    return;
  }
  
  if (data === 'create_voucher_custom_code') {
    const selection = userSelections.get(user.id);
    if (selection && selection.voucherData) {
        selection.step = 'awaiting_voucher_final';
        userSelections.set(user.id, selection);
        await sendNewMessage(chatId,
            'Masukkan kode voucher dan deskripsi:\n\nFormat: <code>KODE deskripsi</code>\nContoh: <code>DISKON50 Diskon 50% spesial</code>\n\nKetik "skip skip" untuk random code tanpa deskripsi',
            { parse_mode: 'HTML' }
        );
    }
    return;
  }
  
  if (data === 'create_voucher_finalize') {
    const selection = userSelections.get(user.id);
    if (selection && selection.voucherData) {
        if (!selection.voucherData.code) {
            selection.voucherData.code = generateVoucherCode();
        }
        await finalizeVoucherCreation(chatId, user.id, messageId, callbackQueryId);
    }
    return;
  }
  
  if (data === 'create_voucher_add_desc') {
    const selection = userSelections.get(user.id);
    if (selection && selection.voucherData) {
        if (!selection.voucherData.code) {
            selection.voucherData.code = generateVoucherCode();
        }
        selection.step = 'awaiting_voucher_final';
        userSelections.set(user.id, selection);
        await sendNewMessage(chatId,
            'Masukkan deskripsi voucher (opsional):\n\nContoh: <code>Diskon spesial untuk member baru</code>\n\nKetik "skip" untuk tanpa deskripsi',
            { parse_mode: 'HTML' }
        );
    }
    return;
  }
  
  // User voucher handlers
  if (data.startsWith('apply_voucher_')) {
    const parts = data.replace('apply_voucher_', '').split('_');
    const operatorId = parts[0];
    const providerId = parts[1];
    const price = parts[2];
    
    await showVoucherInput(chatId, user.id, operatorId, providerId, price, messageId, callbackQueryId);
    return;
  }
  
  if (data.startsWith('change_voucher_')) {
    const parts = data.replace('change_voucher_', '').split('_');
    const operatorId = parts[0];
    const providerId = parts[1];
    const price = parts[2];
    
    const userSelection = userSelections.get(user.id);
    if (userSelection) {
        delete userSelection.appliedVoucher;
        userSelections.set(user.id, userSelection);
    }
    
    await showVoucherInput(chatId, user.id, operatorId, providerId, price, messageId, callbackQueryId);
    return;
  }
  
 /* if (data.startsWith('remove_voucher_')) {
    const parts = data.replace('remove_voucher_', '').split('_');
    const operatorId = parts[0];
    const providerId = parts[1];
    const price = parts[2];
    
    const userSelection = userSelections.get(user.id);
    if (userSelection) {
        delete userSelection.appliedVoucher;
        userSelections.set(userId, userSelection);
    }
    
    await showOrderConfirmation(chatId, user.id, operatorId, providerId, price, messageId, callbackQueryId);
    return;
  }*/
  
  if (data.startsWith('remove_voucher_')) {
    const parts = data.split('_');
    if (parts.length >= 5) {
        const operatorId = parts[2];
        const providerId = parts[3];
        const price = parts[4];
        await showOrderConfirmation(chatId, userId, operatorId, providerId, price, messageId, callbackQueryId);
    }
}
  
  // ========================= BACKUP CALLBACK HANDLERS =========================
  
  if (data === 'restore_menu') {
    await showBackupList(chatId, user.id, messageId, callbackQueryId);
    return;
  }
  
  if (data.startsWith('restore_view_')) {
    const backupFileName = data.replace('restore_view_', '');
    await showBackupDetail(chatId, user.id, backupFileName, messageId, callbackQueryId);
    return;
  }
  
  if (data.startsWith('restore_confirm_')) {
    const backupFileName = data.replace('restore_confirm_', '');
    await confirmRestore(chatId, user.id, backupFileName, messageId, callbackQueryId);
    return;
  }
  
  if (data.startsWith('restore_execute_')) {
    const backupFileName = data.replace('restore_execute_', '');
    await bot.deleteMessage(chatId, messageId).catch(() => {});
    await executeRestore(chatId, user.id, backupFileName);
    return;
  }
  
  if (data.startsWith('restore_download_')) {
    const backupFileName = data.replace('restore_download_', '');
    await downloadBackup(chatId, user.id, backupFileName, messageId, callbackQueryId);
    return;
  }
  
  if (data.startsWith('restore_delete_')) {
    const backupFileName = data.replace('restore_delete_', '');
    await deleteBackup(chatId, user.id, backupFileName, messageId, callbackQueryId);
    return;
  }
  
  if (data.startsWith('delete_execute_')) {
    const backupFileName = data.replace('delete_execute_', '');
    await executeDeleteBackup(chatId, user.id, backupFileName, messageId, callbackQueryId);
    return;
  }
  
  if (data.startsWith('create_backup_now')) {
    await createBackupNow(chatId, user.id, messageId, callbackQueryId);
    return;
  }
  
  if (data === 'restore_reload') {
    await reloadDataAfterRestore(chatId, user.id, messageId, callbackQueryId);
    return;
  }
  
  // ========================= MAIN MENU CALLBACK HANDLERS =========================
    
    if (data === 'main_menu') {
      await showMainMenu(chatId, user.id, user, messageId, callbackQueryId);
      return;
    }
    
    if (data === 'owner_menu') {
    await showOwnerMenu(chatId, user.id, messageId, callbackQueryId);
      return;
    }
    
    if (data === 'owner_stats') {
        const simulatedMsg = {
            ...msg,
            text: '/stats',
            from: user,
            chat: { id: chatId }
        };
        bot.emit('text', simulatedMsg);
        return;
    }
    
    if (data === 'nokos_menu') {
      await showNokosMenu(chatId, user.id, messageId, callbackQueryId, 0);
      return;
    }
    
    if (data === 'nokos_other_services') {
      await showOtherServices(chatId, user.id, messageId, callbackQueryId);
      return;
    }
    
    if (data.startsWith('nokos_service_')) {
      const serviceId = data.replace('nokos_service_', '');
      const servicesData = await getServicesCached(); 
      if (servicesData && servicesData.success) {
        const service = servicesData.data.find(s => s.service_code == serviceId);
        if (service) {
          await showCountryMenu(chatId, user.id, serviceId, service.service_name, messageId, callbackQueryId);
        }
      }
      return;
    }

    if (data === 'setpay_rumahotp') {
      if (!owner_ids.includes(userId.toString())) {
        return bot.answerCallbackQuery(callbackQueryId, {
          text: 'Hanya owner yang bisa setting',
          show_alert: true
        });
      }
      setPaymentMethod('rumahotp');
      await editMessage(chatId, messageId, callbackQueryId,
        `Metode pembayaran berhasil diubah.

Status saat ini:
Rumah OTP: Aktif
Cashify: Nonaktif

Detail sistem:
Provider: Rumah OTP
Tipe: QRIS
Auto Confirm: Ya
Biaya: Gratis

Pengubah: ${user.first_name}
Waktu: ${new Date().toLocaleTimeString('id-ID')}`,
        { 
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [
                { text: 'RUMAH OTP', callback_data: 'setpay_rumahotp' },
                { text: 'CASHIFY', callback_data: 'setpay_cashify' }
              ],
              [
                { text: 'Refresh Status', callback_data: 'setpay_refresh' }
              ]
            ]
          }
        }
      );
      return;
    }

    if (data === 'setpay_cashify') {
      if (!owner_ids.includes(user.id.toString())) {
        return bot.answerCallbackQuery(callbackQueryId, {
          text: 'Hanya owner yang bisa setting',
          show_alert: true
        });
      }
      setPaymentMethod('cashify');
      await editMessage(chatId, messageId, callbackQueryId,
        `Metode pembayaran berhasil diubah.

Status saat ini:
Rumah OTP: Nonaktif
Cashify: Aktif

Detail sistem:
Provider: Cashify.my.id
Tipe: QRIS Dynamic
E-Wallet: DANA
Auto Confirm: Ya
Biaya: Sesuai unique code

Pengubah: ${user.first_name}
Waktu: ${new Date().toLocaleTimeString('id-ID')}`,
        { 
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [
                { text: 'RUMAH OTP', callback_data: 'setpay_rumahotp' },
                { text: 'CASHIFY', callback_data: 'setpay_cashify' }
              ],
              [
                { text: 'Refresh Status', callback_data: 'setpay_refresh' }
              ]
            ]
          }
        }
      );
      return;
    }

    if (data === 'setpay_refresh') {
      if (!owner_ids.includes(user.id.toString())) {
        return bot.answerCallbackQuery(callbackQueryId, {
          text: 'Hanya owner yang bisa setting',
          show_alert: true
        });
      }
      const currentMethod = getPaymentMethod();
      const isRumahOTP = currentMethod === 'rumahotp';
      const isCashify = currentMethod === 'cashify';
      
      await editMessage(chatId, messageId, callbackQueryId,
        `Setting metode pembayaran.

Status system:
Rumah OTP: ${isRumahOTP ? 'Aktif' : 'Nonaktif'}
Cashify: ${isCashify ? 'Aktif' : 'Nonaktif'}

Informasi:
Semua deposit menggunakan metode ini
QRIS otomatis menyesuaikan
User tidak perlu pilih manual

Pilih metode yang ingin digunakan:`,
        { 
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [
                { 
                  text: isRumahOTP ? 'RUMAH OTP' : 'RUMAH OTP', 
                  callback_data: 'setpay_rumahotp' 
                },
                { 
                  text: isCashify ? 'CASHIFY' : 'CASHIFY', 
                  callback_data: 'setpay_cashify' 
                }
              ]
            ]
          }
        }
      );
      return;
    }

    if (data.startsWith('nokos_country_page_')) {
      const parts = data.replace('nokos_country_page_', '').split('_');
      const serviceId = parts[0];
      const page = parseInt(parts[1]);
      const servicesData = await getServicesCached();
      if (servicesData && servicesData.success) {
        const service = servicesData.data.find(s => s.service_code == serviceId);
        if (service) {
          await showCountryMenu(chatId, user.id, serviceId, service.service_name, messageId, callbackQueryId, page);
        }
      }
      return;
    }
    
    if (data.startsWith('nokos_server_list_')) {
      try {
        const parts = data.replace('nokos_server_list_', '').split('_');
        if (parts.length < 2) {
            throw new Error('Format data server tidak valid');
        }
        const numberId = parts[0];
        const countryName = decodeURIComponent(parts.slice(1).join('_'));
        await showServerList(chatId, user.id, numberId, countryName, messageId, callbackQueryId);
        return;
      } catch (error) {
        bot.answerCallbackQuery(callbackQueryId, {
            text: 'Error memproses pilihan server',
            show_alert: true
        }).catch(() => {});
        return;
      }
    }
    
    if (data.startsWith('nokos_server_')) {
    try {
        const parts = data.replace('nokos_server_', '').split('_');
        if (parts.length < 3) {
            throw new Error('Format data server tidak valid');
        }
        const providerId = parts[0];
        const price = parts[1];
        const rate = parts[2];
        
        const userSelection = userSelections.get(user.id) || {};
        userSelection.providerId = providerId;
        userSelection.price = price;
        userSelection.rate = rate;
        userSelections.set(user.id, userSelection);
        
        console.log(`Server selected: providerId=${providerId}, price=${price}, rate=${rate}`);
        
        await showOperatorMenu(chatId, user.id, userSelection.numberId, price, userSelection.countryName, messageId, callbackQueryId);
        return;
    } catch (error) {
        console.error('Error in nokos_server callback:', error);
        bot.answerCallbackQuery(callbackQueryId, {
            text: 'Error memilih server',
            show_alert: true
        }).catch(() => {});
        return;
    }
}
    
    if (data.startsWith('nokos_operator_')) {
    try {
        const parts = data.replace('nokos_operator_', '').split('_');
        
        // Pastikan ada cukup bagian
        if (parts.length < 3) {
            throw new Error('Format data operator tidak valid');
        }
        
        const operatorId = parts[0];
        const providerId = parts[1];
        const price = parts[2];
        
        // Debug logging
        console.log(`Operator clicked: operatorId=${operatorId}, providerId=${providerId}, price=${price}`);
        
        await showOrderConfirmation(chatId, user.id, operatorId, providerId, price, messageId, callbackQueryId);
        return;
    } catch (error) {
        console.error('Error in nokos_operator callback:', error);
        bot.answerCallbackQuery(callbackQueryId, {
            text: '❌ Error memproses operator',
            show_alert: true
        }).catch(() => {});
        return;
    }
}
    
   if (data.startsWith('nokos_confirm_')) {
    const parts = data.replace('nokos_confirm_', '').split('_');
    const numberId = parts[0];
    const providerId = parts[1];
    const operatorId = parts[2];
    const price = parts[3];
    
    // Panggil fungsi dengan parameter yang benar
    await processNokosOrder(chatId, user.id, numberId, providerId, operatorId, price, messageId, callbackQueryId, data);
    return;
}
    
    if (data.startsWith('server_prev_')) {
      const parts = data.replace('server_prev_', '').split('_');
      const numberId = parts[0];
      const countryName = decodeURIComponent(parts.slice(1, parts.length - 1).join('_'));
      const startIndex = parseInt(parts[parts.length - 1]);
      await showServerListEnhanced(chatId, user.id, numberId, countryName, messageId, callbackQueryId, startIndex);
      return;
    }
    
    if (data.startsWith('server_next_')) {
      const parts = data.replace('server_next_', '').split('_');
      const numberId = parts[0];
      const countryName = decodeURIComponent(parts.slice(1, parts.length - 1).join('_'));
      const startIndex = parseInt(parts[parts.length - 1]);
      await showServerListEnhanced(chatId, user.id, numberId, countryName, messageId, callbackQueryId, startIndex);
      return;
    }
    
    if (data.startsWith('nokos_check_')) {
      const orderId = data.replace('nokos_check_', '');
      await checkOTP(chatId, orderId, messageId, callbackQueryId);
      return;
    }
    
    if (data === 'deposit_main') {
      await showDepositMenu(chatId, user.id, messageId, callbackQueryId);
      return;
    }
    
    if (data === 'order_history') {
      await showOrderHistory(chatId, user.id, messageId, callbackQueryId);
      return;
    }
    
    if (data === 'deposit_history') {
      await showDepositHistory(chatId, user.id, messageId, callbackQueryId);
      return;
    }
    
    if (data.startsWith('deposit_status_')) {
      const depositId = data.replace('deposit_status_', '');
      await editMessage(chatId, messageId, callbackQueryId,
        'Memeriksa status deposit...',
        { parse_mode: 'HTML' }
      );
      checkDepositStatus(chatId, depositId, user.id, messageId);
      return;
    }
    
    if (data.startsWith('wait_cancel_')) {
    const orderId = data.replace('wait_cancel_', '');
    const transactions = loadTransactions();
    const order = transactions.nokos_orders?.find(o => 
        o.id === orderId || o.data?.orderId === orderId
    );
    
    if (!order) {
        await bot.answerCallbackQuery(callbackQueryId, {
            text: 'Order tidak ditemukan',
            show_alert: true
        });
        return;
    }
    
    const orderTime = new Date(order.timestamp).getTime();
    const now = Date.now();
    const threeMinutes = 3 * 60 * 1000;
    const timeLeft = threeMinutes - (now - orderTime);
    
    if (timeLeft <= 0) {
        await bot.answerCallbackQuery(callbackQueryId, {
            text: '✅ Sekarang bisa membatalkan order',
            show_alert: true
        });

        await editMessage(chatId, messageId, callbackQueryId,
            `Order ID: <code>#${orderId}</code>\n\n✅ Order sudah bisa dibatalkan.\nKlik tombol "Batal Order" untuk membatalkan.`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { 
                                text: 'Cek OTP', 
                                callback_data: `nokos_check_${orderId}` 
                            }
                        ],
                        [
                            { 
                                text: 'Order Baru', 
                                callback_data: 'nokos_menu' 
                            },
                            { 
                                text: 'Menu Utama', 
                                callback_data: 'main_menu' 
                            }
                        ]
                    ]
                }
            }
        );
    } else {
        const minutesLeft = Math.floor(timeLeft / 60000);
        const secondsLeft = Math.floor((timeLeft % 60000) / 1000);
        
        let timeText = '';
        if (minutesLeft > 0) {
            timeText = `${minutesLeft}m ${secondsLeft}s`;
        } else {
            timeText = `${secondsLeft}s`;
        }
        
        let buttonText = '';
        if (minutesLeft > 0) {
            buttonText = `${minutesLeft}m`;
        } else if (secondsLeft > 0) {
            buttonText = `${secondsLeft}s`;
        } else {
            buttonText = '0s';
        }
        
        await bot.answerCallbackQuery(callbackQueryId, {
            text: `⏳ Tunggu ${timeText} sebelum bisa membatalkan`,
            show_alert: true
        });
        
        await editMessage(chatId, messageId, callbackQueryId,
            `Order ID: <code>#${orderId}</code>\n\n⏳ Tunggu ${timeText} sebelum bisa membatalkan order.\n\nOrder masih dalam proses aktivasi nomor.`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { 
                                text: 'Cek OTP', 
                                callback_data: `nokos_check_${orderId}` 
                            },
                            { 
                                text: buttonText, 
                                callback_data: `wait_cancel_${orderId}` 
                            }
                        ],
                        [
                            { 
                                text: 'Order Baru', 
                                callback_data: 'nokos_menu' 
                            },
                            { 
                                text: 'Menu Utama', 
                                callback_data: 'main_menu' 
                            }
                        ]
                    ]
                }
            }
        );
    }
    return;
    }

    if (data.startsWith('deposit_cancel_')) {
  const depositId = data.replace('deposit_cancel_', '');
  bot.deleteMessage(chatId, messageId).catch(() => {});
  const loadingMsg = await sendNewMessage(chatId,
    'Membatalkan deposit...',
    { parse_mode: 'HTML' }
  );
  
  const paymentMethod = getPaymentMethod();
  let cancelResult;
  
  if (paymentMethod === 'cashify') {
    cancelResult = await cashifyService.cancelDeposit(depositId);
  } else {
    cancelResult = await api.cancelRumahOTPDeposit(depositId);
  }
  
  const isCashify = paymentMethod === 'cashify';
  const successCheck = isCashify ? 
    cancelResult?.success : 
    cancelResult?.success;
  
  if (successCheck) {
    const transactionType = isCashify ? 'cashify_deposits' : 'rumahotp_deposits';
    updateTransactionStatus(transactionType, depositId, 'cancelled');
    
    await editMessage(chatId, loadingMsg.message_id, null,
      `Deposit berhasil dibatalkan
      
ID Deposit: <code>${depositId}</code>
Status: Dibatalkan
Waktu: ${new Date().toLocaleTimeString('id-ID')}`,
      { 
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Deposit Lagi', callback_data: 'deposit_main' }],
            [{ text: 'Menu Utama', callback_data: 'main_menu' }]
          ]
        }
      }
    );
  } else {
    const errorMsg = cancelResult?.message || 
                    cancelResult?.error?.message || 
                    cancelResult?.error || 
                    'Gagal membatalkan deposit';
    
    await editMessage(chatId, loadingMsg.message_id, null,
      `Gagal membatalkan deposit
      
Pesan Error: ${errorMsg}
ID Deposit: <code>${depositId}</code>`,
      { 
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Coba Lagi', callback_data: 'deposit_main' }],
            [{ text: 'Menu Utama', callback_data: 'main_menu' }]
          ]
        }
      }
    );
  }
  return;
}
    
    if (data === 'refresh_maintenance') {
      const userId = userId.toString();
      const maintenance = getMaintenanceInfo();
      if (maintenance.active && !owner_ids.includes(userId)) {
        await bot.answerCallbackQuery(callbackQueryId, {
          text: 'Bot masih dalam maintenance',
          show_alert: true
        });
        return;
      }
      
      balanceCache.delete(userId);
      
      await bot.deleteMessage(chatId, messageId).catch(() => {});
      saveUser(userId);
      await showMainMenu(chatId, user.id, user, null, callbackQueryId);
      return;
    }
    
    if (data.startsWith('deposit_amount_')) {
      const amount = data.replace('deposit_amount_', '');
      userSelections.delete(user.id);
      bot.deleteMessage(chatId, messageId).catch(() => {});
      await handleRumahOTPDeposit(chatId, user.id, parseInt(amount));
      return;
    }
    
    if (data === 'deposit_custom') {
      await editMessage(chatId, messageId, callbackQueryId,
        `Deposit Custom

Kirim jumlah deposit dalam angka:
Minimal: Rp2.000
Maksimal: Rp5.000.000

Contoh: <code>25000</code>
Format: Angka saja (tanpa titik/koma)`,
        { 
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [{ text: 'Kembali', callback_data: 'deposit_main' }]
            ]
          }
        }
      );
      userSelections.set(user.id, { step: 'rumahotp_deposit_amount' });
      return;
    }
    
    bot.answerCallbackQuery(callbackQueryId, { 
      text: 'Tombol tidak dikenali', 
      show_alert: false 
    }).catch(() => {});
    
  } catch (error) {
    try {
      await sendNewMessage(chatId,
        `Terjadi kesalahan sistem.

Pesan Error: ${error.message || 'Unknown error'}
Waktu: ${new Date().toLocaleTimeString('id-ID')}

Silakan coba lagi atau hubungi admin`,
        { 
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [{ text: 'Coba Lagi', callback_data: 'main_menu' }]
            ]
          }
        }
      );
    } catch (e) {}
  }
});

bot.on("callback_query", async (query) => {
  const userId = query.from.id.toString();
  const chatId = query.message.chat.id;

  if (query.data === "check_join_again") {
    await bot.answerCallbackQuery(query.id, {
      text: "Memeriksa kembali...",
      show_alert: false
    });

    const isMember = await checkChannelMembership(userId);

    if (isMember) {
      await bot.deleteMessage(chatId, query.message.message_id).catch(() => {});
      
      await sendNewMessage(chatId, 
`<b>✅ Akses Terverifikasi</b>

<i>Informasi Verifikasi</i>
├ Status : ✅ Terverifikasi
└ Akses  : 🎊 Teridentifikasi

🔓 <b>Selamat menggunakan bot sekarang Anda sudah bisa</b>`,
        { parse_mode: 'HTML' }
      );

      const pendingCommand = userPendingCommands.get(userId);
      if (pendingCommand) {
        const simulatedMsg = {
          ...query.message,
          text: pendingCommand,
          from: query.from,
          chat: { id: chatId }
        };

        if (pendingCommand === "/start") {
          await bot.emit("text", simulatedMsg);
        } else {
          setTimeout(() => {
            bot.emit("text", simulatedMsg);
          }, 500);
        }

        userPendingCommands.delete(userId);
      } else {
        setTimeout(() => {
          bot.emit("text", {
            ...query.message,
            text: "/start",
            from: query.from,
            chat: { id: chatId }
          });
        }, 500);
      }

    } else {
      await editMessage(chatId, query.message.message_id, query.id,
`<b>❌ Tidak Termasuk Member</b>

<i>Informasi Verifikasi</i>
├ Status : ⛔ Tidak termasuk member
└ Akses  : ⛔ Terblokir

🔒 <b>Perlu Pengecekan</b>
└─ Silahkan join channel untuk mengakses fitur bot

🔰 <i>Tunggu terlebih dahulu sampai terverifikasi</i>`,
        {
          reply_markup: {
            inline_keyboard: [
              [{ 
                text: "➕ Join Channel", 
                url: `https://t.me/${channel.replace('@','')}` 
              }],
              [{ 
                text: "🔄 Verifikasi Ulang", 
                callback_data: "check_join_again" 
              }]
            ]
          },
          parse_mode: 'HTML'
        }
      );
    }
  }
});

// ========================= SERVICES CACHE =========================

// Perluas servicesCache untuk menyimpan lebih banyak data
const servicesCache = {
  data: null,
  timestamp: 0,
  ttl: 2 * 60 * 1000, // 2 menit
  loading: false,
  // Tambahkan untuk menyimpan data lain
  countries: new Map(), // Map<serviceId, {data, timestamp}>
  servers: new Map(), // Map<numberId, {data, timestamp}>
  filtered: new Map() // Untuk hasil filter
};

// Fungsi untuk membersihkan cache lama
function cleanupServicesCache() {
    const now = Date.now();
    const maxAge = 10 * 60 * 1000; // 10 menit
    
    // Clean services cache
    if (servicesCache.data && (now - servicesCache.timestamp > servicesCache.ttl)) {
        servicesCache.data = null;
    }
    
    // Clean countries cache
    for (const [key, value] of servicesCache.countries.entries()) {
        if (now - value.timestamp > maxAge) {
            servicesCache.countries.delete(key);
        }
    }
    
    // Clean servers cache
    for (const [key, value] of servicesCache.servers.entries()) {
        if (now - value.timestamp > maxAge) {
            servicesCache.servers.delete(key);
        }
    }
}

// Jalankan cleanup setiap 5 menit
setInterval(cleanupServicesCache, 5 * 60 * 1000);

async function getServicesCached(forceRefresh = false) {
  const now = Date.now();
  
  if (!forceRefresh && servicesCache.data && (now - servicesCache.timestamp < servicesCache.ttl)) {
    return servicesCache.data;
  }
  
  if (servicesCache.loading) {
    // Tunggu sampai loading selesai (maksimal 5 detik)
    let waitCount = 0;
    while (servicesCache.loading && waitCount < 50) {
      await new Promise(resolve => setTimeout(resolve, 100));
      waitCount++;
    }
    return servicesCache.data || { success: false, data: [] };
  }
  
  servicesCache.loading = true;
  
  try {
    const servicesData = await api.getServices();
    if (servicesData && servicesData.success) {
      servicesCache.data = servicesData;
      servicesCache.timestamp = now;
    }
    return servicesData;
  } catch (error) {
    console.error('Error fetching services:', error);
    return servicesCache.data || { success: false, data: [] };
  } finally {
    servicesCache.loading = false;
  }
}

// Update preloadAllData untuk memastikan data tidak corrupt

async function preloadAllData() {
  try {
    await getServicesCached();
    
    // Load balances dengan validasi
    const balances = loadBalances();
    if (balances && typeof balances === 'object') {
      Object.entries(balances).forEach(([userId, balance]) => {
        const numBalance = parseInt(balance) || 0;
        if (!isNaN(numBalance)) {
          balanceCache.set(userId, numBalance);
        }
      });
    }
    
    // Load data users dengan validasi
    const data = loadData();
    if (data.users && Array.isArray(data.users)) {
      console.log(`Loaded ${data.users.length} users from database`);
    } else {
      console.warn('Users data is corrupted, reinitializing...');
      const defaultData = { users: [], settings: { maintenance: false } };
      saveData(defaultData);
    }
    
    loadTransactions();
    loadVouchers();
  } catch (error) {
    console.error('Error in preloadAllData:', error);
  }
}

preloadAllData();

// ========================= NOTIFICATION FUNCTIONS =========================

async function notifyOrderSuccess(user, orderData, price, hasOTP = false) {
    try {
        const orderId = orderData.order_id;
        const notificationKey = `order_${orderId}_${hasOTP ? 'otp' : 'pending'}`;
        
        if (sentNotifications.has(notificationKey)) {
            return;
        }
        
        const transactions = loadTransactions();
        const order = transactions.nokos_orders?.find(o => 
            o.id === orderId || o.data?.orderId === orderId
        );
        
        let voucherInfo = '';
        if (order && order.data && order.data.voucher_code) {
            voucherInfo = `├ <b>🎫 Voucher</b>   : ${order.data.voucher_code}\n`;
            if (order.data.discount && order.data.discount > 0) {
                voucherInfo += `├ <b>🏷️ Diskon</b>    : <code>${formatCurrency(order.data.discount)}</code>\n`;
            }
        }
        
        const userId = user.id;
        const firstName = user.first_name || 'User';
        const username = user.username ? `@${user.username}` : 'Tidak ada';
        const maskedPhone = maskPhoneNumber(orderData.phone_number);     
        
        // PERBAIKAN: Gunakan harga yang benar
        // price yang diterima sudah termasuk profit
        let finalPrice = Number(price);
        
        // Jika price tidak valid, coba ambil dari order
        if (!finalPrice || finalPrice === 0) {
            finalPrice = Number(order?.data?.final_price) || Number(order?.data?.price) || 0;
        }
        
        const originalPrice = removeProfitFromPrice(finalPrice);
        const profitAmount = finalPrice - originalPrice;
        
        const formattedFinalPrice = formatCurrency(finalPrice);
        const formattedOriginalPrice = formatCurrency(originalPrice);
        
        let priceDisplay = '';
        if (profitAmount > 0 && finalPrice > 0) {
            priceDisplay = `<code>${formattedOriginalPrice}</code> → <b><code>${formattedFinalPrice}</code></b> <i>(+${formatCurrency(profitAmount)})</i>`;
        } else if (finalPrice > 0) {
            priceDisplay = `<code>${formattedFinalPrice}</code>`;
        } else {
            priceDisplay = `<code>${formattedOriginalPrice}</code>`;
        }

        if (!hasOTP || !orderData.otp_code || orderData.otp_code === '-') {
            const ownerMessage = `
<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   🔄 <b>ORDER BARU - MENUNGGU OTP</b> 🔄
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┌─────────────────────────────────
├ <b>👤 User</b>      : ${firstName}
├ <b>🆔 Username</b>  : ${username}
├ <b>🆔 User ID</b>   : <code>${userId}</code>
└─────────────────────────────────
${voucherInfo}├─────────────────────────────────
├ <b>🆔 ID Order</b>  : <code>#${orderData.order_id}</code>
├ <b>📱 Nomor</b>     : <code>${maskedPhone}</code>
├ <b>📦 Layanan</b>   : ${orderData.service}
├ <b>🌍 Negara</b>    : ${orderData.country}
├ <b>⚙️ Operator</b>  : ${orderData.operator || '-'}
├─────────────────────────────────
├ <b>💰 Harga</b>     : ${priceDisplay}
└─────────────────────────────────
├ <b>⏳ Status</b>    : <b>Menunggu OTP</b>
└ <b>📅 Waktu</b>     : ${new Date().toLocaleString('id-ID')}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`;

            await bot.sendMessage(channel_otp, ownerMessage, {
                parse_mode: 'HTML',
                disable_web_page_preview: true,
            });
            
            sentNotifications.set(notificationKey, Date.now());
            return;
        } else {
            const otpCode = orderData.otp_code;
            const formattedOTP = otpCode.length === 6 ? `${otpCode.substring(0, 3)}-${otpCode.substring(3)}` : otpCode;
            
            // PERBAIKAN: Kirimkan finalPrice yang benar
            await sendOTPToChannelWithAutoDelete(orderData, user, finalPrice, formattedOTP, voucherInfo);
            
            sentNotifications.set(notificationKey, Date.now());
        }
    } catch (error) {
        console.error('Notify Order Error:', error);
    }
}

async function notifyDepositSuccess(user, amount, depositId, newBalance) {
    try {
        const notificationKey = `deposit_${depositId}`;
        
        if (sentNotifications.has(notificationKey)) {
            return;
        }
        
        const userId = user.id;
        const firstName = user.first_name || 'User';
        const username = user.username ? `@${user.username}` : 'Tidak ada';
        const dateStr = new Date().toLocaleString('id-ID', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const channelMessage = `
<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   💰 <b>DEPOSIT BERHASIL</b> 💰
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┌─────────────────────────────────
├ <b>👤 User</b>      : ${firstName}
├ <b>🆔 Username</b>  : ${username}
├ <b>🆔 User ID</b>   : <code>${userId}</code>
└─────────────────────────────────
├ <b>🆔 ID Deposit</b>: <code>${depositId}</code>
├─────────────────────────────────
├ <b>💰 Nominal</b>   : <code>${formatCurrency(amount)}</code>
├ <b>💳 Metode</b>    : QRIS
├ <b>✨ Saldo Baru</b>: <code>${formatCurrency(newBalance)}</code>
└─────────────────────────────────
├ <b>✅ Status</b>    : <b>Sukses</b>
└ <b>📅 Tanggal</b>   : ${dateStr}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`;
        
        const keyboard = {
            inline_keyboard: [
                [
                    { 
                        text: '🛒 Order Sekarang', 
                        url: 'https://t.me/RikyshopOTP_bot'
                    },
                    { 
                        text: '💬 Support', 
                        url: `https://t.me/${channel.replace('@','')}`
                    }
                ]
            ]
        };
        
        await bot.sendMessage(channel, channelMessage, {
            parse_mode: 'HTML',
            disable_web_page_preview: true,
            reply_markup: keyboard
        });
        
        sentNotifications.set(notificationKey, Date.now());
        
    } catch (error) {}
}

setInterval(() => {
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    
    for (const [key, timestamp] of sentNotifications.entries()) {
        if (now - timestamp > oneHour) {
            sentNotifications.delete(key);
        }
    }

    for (const [key, timestamp] of orderProcessing.entries()) {
        if (now - timestamp > 5 * 60 * 1000) { 
            orderProcessing.delete(key);
        }
    }
}, 60 * 60 * 1000);

async function notifyOwnerDepositCreated(depositData, userId, amount, paymentMethod) {
    try {
        const user = await bot.getChat(userId);
        const dateStr = new Date().toLocaleString('id-ID', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const message = `
<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ⏳ <b>DEPOSIT PENDING</b> ⏳
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┌─────────────────────────────────
├ <b>👤 User</b>      : ${user.first_name}
├ <b>🆔 Username</b>  : ${user.username ? '@' + user.username : 'Tidak ada'}
├ <b>🆔 User ID</b>   : <code>${user.id}</code>
└─────────────────────────────────
├ <b>🆔 ID Deposit</b>: <code>#${depositData.id || depositData.no_inv}</code>
├─────────────────────────────────
├ <b>💰 Jumlah</b>    : <code>${formatCurrency(amount)}</code>
├ <b>💳 Metode</b>    : QRIS
├ <b>📊 Fee</b>       : <code>${formatCurrency(depositData.fee || 0)}</code>
├ <b>✨ Diterima</b>  : <code>${formatCurrency(depositData.diterima || amount)}</code>
└─────────────────────────────────
├ <b>⏳ Status</b>    : <b>Menunggu pembayaran</b>
├ <b>⏱️ Batas waktu</b>: 20 menit
└ <b>📅 Tanggal</b>   : ${dateStr}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`;

        await bot.sendMessage(channel_otp, message, { 
            parse_mode: 'HTML',
            disable_web_page_preview: true 
        });
    } catch (error) {}
}

/*function maskPhoneNumber(phoneNumber) {
    if (!phoneNumber) return '-';
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    if (cleanNumber.length <= 4) return cleanNumber;
    const visibleDigits = Math.min(4, Math.floor(cleanNumber.length / 2));
    const firstPart = cleanNumber.substring(0, visibleDigits);
    const lastPart = cleanNumber.substring(cleanNumber.length - visibleDigits);
    return `${firstPart}****${lastPart}`;
}*/
function maskPhoneNumber(phoneNumber) {
    if (!phoneNumber) return '-';
    
    // Hapus semua karakter non-digit
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    
    // Jika nomor kosong setelah dibersihkan, return '-'
    if (cleanNumber.length === 0) return '-';
    
    // Tambahkan prefix 62 dan bintang untuk sisa nomor
    const maskedPart = '*'.repeat(cleanNumber.length);
    return `62${maskedPart}`;
}

function loadUserNotifications() {
    try {
        const notificationsFile = path.join(dataDir, 'notified_users.json');
        if (!fs.existsSync(notificationsFile)) {
            return;
        }
        
        const data = JSON.parse(fs.readFileSync(notificationsFile, 'utf8'));
        data.users.forEach(userId => {
            userFirstTimeNotifications.add(userId);
        });
    } catch (error) {
        console.error('Error loading user notifications:', error);
    }
}

function saveUserNotifications() {
    try {
        const notificationsFile = path.join(dataDir, 'notified_users.json');
        const data = {
            users: Array.from(userFirstTimeNotifications),
            lastUpdated: new Date().toISOString()
        };
        fs.writeFileSync(notificationsFile, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error saving user notifications:', error);
    }
}

async function notifyNewUser(user, userBalance = 0) {
    try {
        const userId = user.id.toString();
        
        if (userFirstTimeNotifications.has(userId)) {
            return;
        }
        
        userFirstTimeNotifications.add(userId);
        
        const firstName = user.first_name || 'Tidak ada';
        const username = user.username ? `@${user.username}` : 'Tidak ada';
        
        const message = `
<blockquote>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   📋 <b>USER BARU MEMULAI BOT</b> 📋
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┌─────────────────────────────────
├ <b>🆔 User ID</b>   : <code>${userId}</code>
├ <b>📛 Username</b>  : ${username}
├ <b>👤 Nama</b>      : ${firstName}
├ <b>💰 Saldo Awal</b>: <code>${formatCurrency(userBalance)}</code>
└─────────────────────────────────
├ <b>📅 Waktu</b>     : ${new Date().toLocaleString('id-ID')}
└ <b>✅ Status</b>    : <b>User baru terdaftar</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</blockquote>`;
        
        try {
            await bot.sendMessage(channel, message, {
                parse_mode: 'HTML',
                disable_web_page_preview: true
            });
        } catch (error) {}
        
        saveUserNotifications();
        
    } catch (error) {
        console.error('Error in notifyNewUser:', error);
    }
}

// ========================= COMMAND HANDLERS =========================

bot.onText(/\/start/, withRequireJoin(async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const user = msg.from;
  const referralCode = match[1];
  
  if (!(await checkMaintenance(msg))) {
    return;
  }
  
if (referralCode) {
    const referralResult = await processReferralStart(userId, referralCode);
    if (referralResult.success) {
        await bot.sendMessage(chatId, referralResult.message, { parse_mode: 'HTML' });
    }
}
  
  const data = loadData();
  const userIdStr = String(userId);
  
  const saveResult = saveUser(userId);
  
  const userBalance = getUserBalance(userId);
  
  if (saveResult.isNewUser) {
    await notifyNewUser(user, userBalance);
  }
  
  balanceCache.delete(userIdStr);
  
  await showMainMenu(chatId, userId, user);
}));

// ==================== PERBAIKAN BROADCAST DENGAN FORWARD ====================

bot.onText(/^\/broadcast$/, async (msg) => {
  try {
    const chatId = msg.chat.id;
    const senderId = msg.from.id.toString();
    const mainOwnerId = owner_ids[0];
    
    if (senderId !== mainOwnerId) {
      return await bot.sendMessage(chatId, 
        "⛔ Akses ditolak.\n\nHanya owner utama yang dapat menggunakan command ini.",
        { parse_mode: "HTML" }
      ).catch(() => {});
    }

    if (!msg.reply_to_message) {
      return await bot.sendMessage(chatId, 
        `📢 *BROADCAST MESSAGE*

Cara penggunaan:
1. Reply pesan yang ingin di broadcast
2. Ketik command /broadcast

📌 *Mode Pengiriman:*
• Pesan akan di-FORWARD ke semua user
• Format asli pesan akan tetap terjaga
• Photo, Video, Document, Sticker, dll akan ikut terkirim

⚠️ *Pastikan pesan sudah benar sebelum dikirim!*`,
        { parse_mode: "Markdown" }
      ).catch(() => {});
    }

    const data = loadData();
    const uniqueUsers = [...new Set(data.users || [])];
    const total = uniqueUsers.length;

    if (total === 0) {
      return await bot.sendMessage(chatId, "❌ Tidak ada user yang terdaftar.", { parse_mode: "HTML" }).catch(() => {});
    }

    const processingMsg = await bot.sendMessage(chatId, 
      `📢 *MEMULAI BROADCAST*

📊 Statistik:
├ Total user: ${total}
├ Status: 🟡 Mengirim...
└ Progress: 0%

⏳ Mohon tunggu proses broadcast...`, 
      { parse_mode: "Markdown" }
    );

    const reply = msg.reply_to_message;
    let sukses = 0, gagal = 0;
    const broadcastHeader = `📢 *BROADCAST DARI ADMIN*\n\n`;

    for (let i = 0; i < uniqueUsers.length; i++) {
      const userId = uniqueUsers[i];
      try {
        // FORWARD pesan asli (tanpa edit)
        await bot.forwardMessage(userId, chatId, reply.message_id);
        
        // Kirim header terpisah (opsional, bisa dihapus jika tidak perlu)
        // Uncomment jika ingin menambahkan header:
        // await bot.sendMessage(userId, broadcastHeader, { parse_mode: "Markdown" });
        
        sukses++;
      } catch (err) {
        console.log(`Gagal forward ke user ${userId}:`, err.message);
        
        // Fallback: coba kirim sebagai pesan biasa jika forward gagal
        try {
          if (reply.text) {
            await bot.sendMessage(userId, `${broadcastHeader}${reply.text}`);
          } else if (reply.photo) {
            const fileId = reply.photo[reply.photo.length - 1].file_id;
            const caption = reply.caption ? `${broadcastHeader}${reply.caption}` : broadcastHeader;
            await bot.sendPhoto(userId, fileId, { caption: caption });
          } else if (reply.document) {
            const caption = reply.caption ? `${broadcastHeader}${reply.caption}` : broadcastHeader;
            await bot.sendDocument(userId, reply.document.file_id, { caption: caption });
          } else if (reply.video) {
            const caption = reply.caption ? `${broadcastHeader}${reply.caption}` : broadcastHeader;
            await bot.sendVideo(userId, reply.video.file_id, { caption: caption });
          } else if (reply.sticker) {
            await bot.sendSticker(userId, reply.sticker.file_id);
            await bot.sendMessage(userId, broadcastHeader, { parse_mode: "Markdown" });
          } else if (reply.animation) {
            await bot.sendAnimation(userId, reply.animation.file_id);
          } else if (reply.audio) {
            await bot.sendAudio(userId, reply.audio.file_id);
          } else if (reply.voice) {
            await bot.sendVoice(userId, reply.voice.file_id);
          } else if (reply.video_note) {
            await bot.sendVideoNote(userId, reply.video_note.file_id);
          } else {
            await bot.sendMessage(userId, `${broadcastHeader}Jenis pesan ini tidak bisa di-forward.`, { parse_mode: "Markdown" });
          }
          sukses++;
        } catch (fallbackErr) {
          gagal++;
        }
      }

      // Update progress setiap 10 user
      if (i % 10 === 0 || i === uniqueUsers.length - 1) {
        const progress = Math.round(((i + 1) / uniqueUsers.length) * 100);
        try {
          await bot.editMessageText(
            `📢 *MEMULAI BROADCAST*

📊 Statistik:
├ Total user: ${total}
├ Status: 🟡 Mengirim...
└ Progress: ${progress}%

⏳ Mohon tunggu proses broadcast...`,
            {
              chat_id: chatId,
              message_id: processingMsg.message_id,
              parse_mode: "Markdown"
            }
          );
        } catch (editError) {}
      }

      // Delay untuk menghindari rate limit
      await new Promise(r => setTimeout(r, 150));
    }

    // Hasil akhir
    const successRate = total > 0 ? Math.round((sukses / total) * 100) : 0;
    let resultMessage = `✅ *BROADCAST SELESAI*

📊 *HASIL BROADCAST:*
├ Total user: ${total}
├ ✅ Sukses: ${sukses}
├ ❌ Gagal: ${gagal}
└ 📈 Success rate: ${successRate}%

📌 *Mode:* FORWARD (pesan asli)

🕐 *Waktu selesai:* ${new Date().toLocaleString('id-ID')}`;

    try {
      await bot.editMessageText(resultMessage, {
        chat_id: chatId,
        message_id: processingMsg.message_id,
        parse_mode: "Markdown"
      });
    } catch (editError) {
      await bot.sendMessage(chatId, resultMessage, { parse_mode: "Markdown" }).catch(() => {});
    }
    
  } catch (err) {
    console.error('Broadcast error:', err);
    await bot.sendMessage(msg.chat.id, 
      `❌ *ERROR BROADCAST*\n\n${err.message || 'Terjadi kesalahan sistem'}`,
      { parse_mode: "Markdown" }
    ).catch(() => {});
  }
});

bot.onText(/^\/setpay$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();
  
  if (!owner_ids.includes(userId)) {
    return bot.sendMessage(chatId, 
      "Hanya owner yang bisa mengganti metode pembayaran",
      { parse_mode: 'HTML' }
    );
  }
  
  const currentMethod = getPaymentMethod();
  const isRumahOTP = currentMethod === 'rumahotp';
  const isCashify = currentMethod === 'cashify';   
  const message = `Setting metode pembayaran.

Status saat ini:
Rumah OTP: ${isRumahOTP ? 'Aktif' : 'Nonaktif'}
Cashify: ${isCashify ? 'Aktif' : 'Nonaktif'}

Informasi:
QRIS akan menyesuaikan metode
User tidak akan melihat perbedaan
Sistem otomatis

Klik tombol untuk mengganti:`;
  
  await bot.sendMessage(chatId, message, {
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [
          { 
            text: isRumahOTP ? 'RUMAH OTP' : 'RUMAH OTP', 
            callback_data: 'setpay_rumahotp' 
          },
          { 
            text: isCashify ? 'CASHIFY' : 'CASHIFY', 
            callback_data: 'setpay_cashify' 
          }
        ]
      ]
    }
  });
});

bot.onText(/^\/maintenance/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();
  
  if (!owner_ids.includes(userId)) {
    return bot.sendMessage(chatId, 
      "Hanya owner yang bisa menggunakan command ini",
      { parse_mode: 'HTML' }
    );
  }
  
  const text = msg.text || '';
  const args = text.trim().split(/\s+/);
  
  if (args.length === 1) {
    const maintenance = getMaintenanceInfo();
    const status = maintenance.active ? 'ON' : 'OFF';
    const reason = maintenance.reason ? `\n\nAlasan: ${maintenance.reason}` : '';
    
    return bot.sendMessage(chatId,
      `Status maintenance.

Status: ${status}${reason}

Format:
/maintenance on (reply pesan untuk alasan)
/maintenance off`,
      { parse_mode: 'HTML' }
    );
  }
  
  const command = args[1].toLowerCase();
  
  if (command === 'off') {
    setMaintenance(false);
    return bot.sendMessage(chatId,
      `Maintenance mode dimatikan.

Bot sekarang bisa digunakan oleh semua user.`,
      { parse_mode: 'HTML' }
    );
  }
  
  if (command === 'on') {
    if (!msg.reply_to_message) {
      return bot.sendMessage(chatId,
        `Reply pesan untuk alasan maintenance.

Contoh:
1. Ketik alasan maintenance (contoh: "Perbaikan server")
2. Reply pesan tersebut
3. Kirim /maintenance on`,
        { parse_mode: 'HTML' }
      );
    }
    
    const reason = msg.reply_to_message.text || 'Bot sedang dalam perbaikan';
    setMaintenance(true, reason);
    
    return bot.sendMessage(chatId,
      `Maintenance mode diaktifkan.

Alasan: ${reason}

Efek:
User biasa tidak bisa menggunakan bot
Owner masih bisa mengakses
User akan lihat pesan maintenance`,
      { parse_mode: 'HTML' }
    );
  }
  
  bot.sendMessage(chatId,
    "Format salah.\n\nGunakan: /maintenance on atau /maintenance off",
    { parse_mode: 'HTML' }
  );
});

bot.onText(/\/stats/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    
    if (!owner_ids.includes(userId.toString())) {
        await bot.sendMessage(chatId, 
            "Command ini hanya untuk owner!",
            { parse_mode: 'HTML' }
        );
        return;
    }
    
    const data = loadData();
    const balances = loadBalances();
    const transactions = loadTransactions();
    const vouchers = loadVouchers();
    
    const totalUsers = data.users?.length || 0;
    const totalOrders = transactions.nokos_orders?.length || 0;
    const cashifyDeposits = transactions.cashify_deposits?.length || 0; 
    const rumahotpDeposits = transactions.rumahotp_deposits?.length || 0;
    const totalDeposits = cashifyDeposits + rumahotpDeposits; 
    const totalVouchers = vouchers.voucher_stats.total_created || 0;
    const usedVouchers = vouchers.voucher_stats.total_used || 0;

    let totalBalance = 0;
    let usersWithBalance = 0;
    Object.values(balances).forEach(balance => {
        const amount = parseInt(balance) || 0;
        totalBalance += amount;
        if (amount > 0) usersWithBalance++;
    });
    
    let apiBalanceResult = '';
    try {
        const balanceResult = await api.getUserBalanceAPI();
        if (balanceResult && balanceResult.success) {
            const apiBalance = balanceResult.data?.balance || balanceResult.data?.saldo || 0;
            const apiCurrency = balanceResult.data?.currency || 'IDR';
            apiBalanceResult = `${formatCurrency(apiBalance)} (${apiCurrency})`;
        } else {
            apiBalanceResult = 'Gagal mengambil';
        }
    } catch (error) {
        apiBalanceResult = 'Gagal mengambil';
    }
    
    const message = `📊 <b>STATISTIK BOT</b>

<b>📱 User Statistics:</b>
├ Total users: ${totalUsers}
├ User dengan saldo: ${usersWithBalance}
└ User tanpa saldo: ${totalUsers - usersWithBalance}

<b>💰 Financial Statistics:</b>
├ Total saldo bot: ${formatCurrency(totalBalance)}
├ Saldo API: ${apiBalanceResult}
├ Total discount voucher: ${formatCurrency(vouchers.voucher_stats.total_discount || 0)}
├ Rata-rata saldo/user: ${formatCurrency(totalUsers > 0 ? Math.round(totalBalance / totalUsers) : 0)}
└ User terbanyak saldo: ${getTopUserBalance(balances)}

<b>🔄 Transaction Statistics:</b>
├ Total order: ${totalOrders}
├ Total deposit: ${totalDeposits}
├ └ Cashify: ${cashifyDeposits} 
├ └ Rumah OTP: ${rumahotpDeposits}
├ Total voucher: ${totalVouchers}
├ └ Digunakan: ${usedVouchers}
└ Success rate: ${totalOrders > 0 ? Math.round((totalOrders / (totalOrders + totalDeposits)) * 100) : 0}%

<b>📈 Today's Activity:</b>
${getTodayStats(transactions)}

<b>⏰ System:</b>
└ Update terakhir: ${new Date().toLocaleString('id-ID')}`;
    
    await bot.sendMessage(chatId, message, {
        parse_mode: 'HTML',
        disable_web_page_preview: true
    });
});

function getTopUserBalance(balances) {
    let topUserId = null;
    let topBalance = 0;
    
    Object.entries(balances).forEach(([userId, balance]) => {
        const amount = parseInt(balance) || 0;
        if (amount > topBalance) {
            topBalance = amount;
            topUserId = userId;
        }
    });
    
    return topUserId ? `${topUserId} (${formatCurrency(topBalance)})` : 'Tidak ada';
}

bot.onText(/^\/voucher/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id.toString();
    
    if (!owner_ids.includes(userId)) {
        return bot.sendMessage(chatId,
            "⛔ Akses Ditolak\n\nHanya owner yang bisa menggunakan command ini.",
            { parse_mode: 'HTML' }
        );
    }
    
    const text = msg.text || '';
    const args = text.trim().split(/\s+/);
    
    if (args.length === 1) {
        await showVoucherOwnerMenu(chatId, userId);
        return;
    }
    
    const subCommand = args[1].toLowerCase();
    
    if (subCommand === 'create') {
        await showCreateVoucherStep1(chatId, userId);
        return;
    }
    
    if (subCommand === 'list') {
        await showVoucherList(chatId, userId);
        return;
    }
    
    if (subCommand === 'stats') {
        await showVoucherStatsDetail(chatId, userId);
        return;
    }
    
    if (subCommand === 'quick') {
        if (args.length < 4) {
            return bot.sendMessage(chatId,
                `<b>❌ FORMAT SALAH</b>\n\n` +
                `Format: <code>/voucher quick [type] [value] [min] [max] [limit] [expiry] [code]</code>\n\n` +
                `Contoh: <code>/voucher quick percentage 10 10000 5000 10 31-12-2024 DISKON10</code>\n` +
                `Contoh: <code>/voucher quick fixed 5000 0 0 1 0 QUICK5K</code>`,
                { parse_mode: 'HTML' }
            );
        }
        
        const type = args[2]; // percentage or fixed
        const value = parseInt(args[3]);
        const minPurchase = parseInt(args[4]) || 0;
        const maxDiscount = args[5] !== '0' ? parseInt(args[5]) : null;
        const limit = parseInt(args[6]) || 1;
        let expiry = null;
        let code = args[8] || generateVoucherCode();
        
        if (args[7] && args[7] !== '0') {
            const dateParts = args[7].split('-');
            if (dateParts.length === 3) {
                const day = parseInt(dateParts[0]);
                const month = parseInt(dateParts[1]) - 1;
                const year = parseInt(dateParts[2]);
                
                if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
                    expiry = new Date(year, month, day, 23, 59, 59).toISOString();
                }
            }
        }
        
        const voucherData = {
            type: type,
            value: value,
            min_purchase: minPurchase,
            max_discount: maxDiscount,
            usage_limit: limit,
            expiry: expiry,
            code: code,
            created_by: userId
        };
        
        const voucher = createVoucher(voucherData);
        
        if (voucher) {
            await bot.sendMessage(chatId,
                `<b>✅ VOUCHER BERHASIL DIBUAT</b>\n\n` +
                `<b>Kode:</b> <code>${voucher.code}</code>\n` +
                `<b>Tipe:</b> ${voucher.type === 'percentage' ? 'Persentase' : 'Fixed Amount'}\n` +
                `<b>Nilai:</b> ${voucher.type === 'percentage' ? `${voucher.value}%` : formatCurrency(voucher.value)}\n` +
                `<b>Status:</b> ✅ Aktif`,
                { parse_mode: 'HTML' }
            );
        }
        return;
    }
});

bot.onText(/^\/restore(\s|$)/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();
  
  if (!owner_ids.includes(userId)) {
    return bot.sendMessage(chatId,
      "⛔ Akses Ditolak\n\nHanya owner yang bisa menggunakan command ini.",
      { parse_mode: 'HTML' }
    );
  }
  
  const text = msg.text || '';
  const args = text.trim().split(/\s+/);
  
  if (args.length === 1) {
    await showBackupList(chatId, userId);
    return;
  }
  
  const backupFileName = args[1];
  
  if (!backupFileName || !backupFileName.startsWith('backup_') || !backupFileName.endsWith('.zip')) {
    return bot.sendMessage(chatId,
      `<b>❌ NAMA FILE TIDAK VALID</b>\n\n` +
      `Format nama file backup harus:\n` +
      `<code>backup_YYYY-MM-DD_HH-MM-SS.zip</code>\n\n` +
      `Gunakan <code>/restore</code> untuk melihat daftar backup yang tersedia.`,
      { parse_mode: 'HTML' }
    );
  }
  
  await executeRestore(chatId, userId, backupFileName);
});

bot.onText(/^\/deletebackup(\s|$)/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();
  
  if (!owner_ids.includes(userId)) {
    return bot.sendMessage(chatId,
      "⛔ Akses Ditolak\n\nHanya owner yang bisa menggunakan command ini.",
      { parse_mode: 'HTML' }
    );
  }
  
  const text = msg.text || '';
  const args = text.trim().split(/\s+/);
  
  if (args.length < 2) {
    return bot.sendMessage(chatId,
      `<b>❌ FORMAT SALAH</b>\n\n` +
      `Format: <code>/deletebackup [nama_file]</code>\n` +
      `Contoh: <code>/deletebackup backup_2024-01-15_10-30-00.zip</code>\n\n` +
      `Gunakan <code>/restore</code> untuk melihat daftar backup.`,
      { parse_mode: 'HTML' }
    );
  }
  
  const backupFileName = args[1];
  const backupDir = path.join(__dirname, 'backup');
  const backupPath = path.join(backupDir, backupFileName);
  
  if (!fs.existsSync(backupPath)) {
    return bot.sendMessage(chatId,
      `<b>❌ FILE TIDAK DITEMUKAN</b>\n\n` +
      `File backup tidak ditemukan:\n` +
      `<code>${backupFileName}</code>\n\n` +
      `Pastikan file ada di directory:\n` +
      `<code>${backupDir}</code>`,
      { parse_mode: 'HTML' }
    );
  }
  
  const stats = fs.statSync(backupPath);
  const fileSize = (stats.size / 1024).toFixed(2);
  
  try {
    fs.unlinkSync(backupPath);
    
    await bot.sendMessage(chatId,
      `<b>✅ FILE TERHAPUS</b>\n\n` +
      `<b>File:</b> <code>${backupFileName}</code>\n` +
      `<b>Ukuran:</b> ${fileSize} KB\n` +
      `<b>Waktu:</b> ${new Date().toLocaleString('id-ID')}\n\n` +
      `<i>File backup telah dihapus permanen</i>`,
      {
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: '📁 Lihat Backup Lain', callback_data: 'restore_menu' }]
          ]
        }
      }
    );
    
  } catch (error) {
    await bot.sendMessage(chatId,
      `<b>❌ GAGAL MENGHAPUS</b>\n\n` +
      `Terjadi kesalahan:\n\n` +
      `<code>${error.message}</code>`,
      { parse_mode: 'HTML' }
    );
  }
});

function getTodayStats(transactions) {
    const today = new Date().toISOString().split('T')[0];
    let todayOrders = 0;
    let todayDeposits = 0;
    let todayDepositAmount = 0;
    
    if (transactions.nokos_orders) {
        todayOrders = transactions.nokos_orders.filter(order => {
            const orderDate = new Date(order.timestamp).toISOString().split('T')[0];
            return orderDate === today;
        }).length;
    }
    
    ['cashify_deposits', 'rumahotp_deposits'].forEach(type => { 
        if (transactions[type]) {
            const todayDepositsData = transactions[type].filter(deposit => {
                const depositDate = new Date(deposit.timestamp).toISOString().split('T')[0];
                return depositDate === today;
            });
            
            todayDeposits += todayDepositsData.length;
            todayDepositsData.forEach(deposit => {
                todayDepositAmount += parseInt(deposit.data?.amount || deposit.data?.total || 0);
            });
        }
    });
    
    return `├ Order hari ini: ${todayOrders}\n├ Deposit hari ini: ${todayDeposits}\n└ Total deposit hari ini: ${formatCurrency(todayDepositAmount)}`;
}

async function addBalanceAdmin(chatId, adminId, commandText) {
    try {
        const parts = commandText.split(' ');
        if (parts.length < 3) {
            await bot.sendMessage(chatId,
                `Format salah.

Format: /addsaldo [user_id] [jumlah]
Contoh: /addsaldo 123456789 20000

Catatan:
User ID harus berupa angka
Jumlah minimal Rp 1.000`,
                { parse_mode: 'HTML' }
            );
            return;
        }

        const targetUserId = parts[1];
        const amount = parseInt(parts[2]);
        const userIdValidation = validateUserId(targetUserId);
        if (!userIdValidation.valid) {
            await bot.sendMessage(chatId,
                `User ID tidak valid: ${userIdValidation.error}

User ID yang dimasukkan: ${targetUserId}`,
                { parse_mode: 'HTML' }
            );
            return;
        }

        const amountValidation = validateAmount(amount);
        if (!amountValidation.valid || amountValidation.amount < 1000) {
            await bot.sendMessage(chatId,
                `Jumlah tidak valid: ${amountValidation.error || 'Minimal Rp 1.000'}

Jumlah yang dimasukkan: ${formatCurrency(amount)}`,
                { parse_mode: 'HTML' }
            );
            return;
        }

        const numAmount = amountValidation.amount;

        if (numAmount > 5000000) {
            await bot.sendMessage(chatId,
                `Jumlah terlalu besar.

Maksimal penambahan saldo: Rp 5,000,000
Jumlah yang dimasukkan: ${formatCurrency(numAmount)}`,
                { parse_mode: 'HTML' }
            );
            return;
        }

        const data = loadData();
        if (!data.users) data.users = [];
        
        const userExists = data.users.some(id => id === targetUserId);
        if (!userExists) {
            data.users.push(targetUserId);
            saveData(data);
        }
        
        balanceCache.delete(targetUserId);
        
        const oldBalance = getUserBalance(targetUserId);
        const success = addUserBalance(targetUserId, numAmount);
        const newBalance = getUserBalance(targetUserId);

        if (!success) {
            await bot.sendMessage(chatId,
                `Gagal menambah saldo.

Terjadi kesalahan sistem saat menambah saldo
User ID: ${targetUserId}
Jumlah: ${formatCurrency(numAmount)}`,
                { parse_mode: 'HTML' }
            );
            return;
        }

        await bot.sendMessage(chatId,
            `Saldo berhasil ditambahkan.

Detail transaksi:
User ID: ${targetUserId}
Jumlah: ${formatCurrency(numAmount)}
Saldo lama: ${formatCurrency(oldBalance)}
Saldo baru: ${formatCurrency(newBalance)}
Admin: ${adminId}

Notifikasi telah dikirim ke user`,
            { parse_mode: 'HTML' }
        );

        try {
            const user = await bot.getChat(targetUserId);
            await bot.sendMessage(targetUserId,
                `Saldo Anda telah ditambahkan.

Detail penambahan:
Jumlah: ${formatCurrency(numAmount)}
Saldo lama: ${formatCurrency(oldBalance)}
Saldo baru: ${formatCurrency(newBalance)}

Saldo telah berhasil ditambahkan oleh Admin
Terima kasih telah menggunakan layanan kami!`,
                { parse_mode: 'HTML' }
            );
        } catch {
            await bot.sendMessage(chatId,
                `Peringatan.

Saldo berhasil ditambahkan ke user ID: ${targetUserId}
Namun tidak dapat mengirim notifikasi ke user (mungkin belum pernah start bot)`,
                { parse_mode: 'HTML' }
            );
        }

    } catch (error) {
        await bot.sendMessage(chatId,
            `Terjadi kesalahan.

Gagal memproses perintah /addsaldo
Silakan coba lagi atau hubungi developer`,
            { parse_mode: 'HTML' }
        );
    }
}

bot.onText(/^\/addsaldo(\s|$)/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id.toString();
    
    if (!owner_ids.includes(userId)) {
        await bot.sendMessage(chatId,
            `Akses ditolak.

Command ini hanya untuk Admin
Silakan hubungi Admin untuk bantuan`,
            { parse_mode: 'HTML' }
        );
        return;
    }
    
    await addBalanceAdmin(chatId, userId, msg.text);
});

// ========================= AUTO BACKUP =========================

// Fungsi untuk membersihkan file .backup_ di folder database
function cleanDatabaseBackupFiles() {
    try {
        const dataDir = path.join(__dirname, 'database');
        if (!fs.existsSync(dataDir)) return;
        
        const files = fs.readdirSync(dataDir);
        let deletedCount = 0;
        
        for (const file of files) {
            // Hapus semua file .backup_ (ini file sisa dari safeWriteJSON)
            if (file.includes('.backup_')) {
                const filePath = path.join(dataDir, file);
                fs.unlinkSync(filePath);
                deletedCount++;
                console.log(`Deleted old backup file: ${file}`);
            }
        }
        
        if (deletedCount > 0) {
            console.log(`Cleaned up ${deletedCount} old backup files from database folder`);
        }
    } catch (error) {
        console.error('Error cleaning database backup files:', error);
    }
}

// Jalankan pembersihan setiap 1 jam
setInterval(cleanDatabaseBackupFiles, 60 * 60 * 1000);

// Jalankan sekali saat start
setTimeout(cleanDatabaseBackupFiles, 5000);

async function autoBackupTransactions(eventType, data = {}) {
    try {
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0];
        const timeStr = now.getHours().toString().padStart(2, '0') + '-' + 
                       now.getMinutes().toString().padStart(2, '0') + '-' +
                       now.getSeconds().toString().padStart(2, '0');
        
        const backupDir = path.join(__dirname, 'backup');
        if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir, { recursive: true });
        }
        
        const dataDir = path.join(__dirname, 'database');
        
        // Daftar LENGKAP semua file JSON yang harus di-backup
        const expectedFiles = [
            'users.json', 'balances.json', 'transactions.json', 
            'settings.json', 'vouchers.json', 'scripts.json', 
            'script_orders.json', 'banned_users.json', 
            'referrals.json', 'notified_users.json',
            'vps_orders.json', 'free_vps_orders.json',
            'panel_orders.json', 'panel_servers.json',
            'price_history.json', 'vps_warranty.json'
        ];
        
        let backupFiles = [];
        
        if (fs.existsSync(dataDir)) {
            const allFiles = fs.readdirSync(dataDir);
            
            for (const expectedFile of expectedFiles) {
                if (allFiles.includes(expectedFile)) {
                    const filePath = path.join(dataDir, expectedFile);
                    if (fs.statSync(filePath).size > 0) {
                        backupFiles.push({
                            name: expectedFile,
                            file: filePath
                        });
                    }
                }
            }
            
            const otherFiles = allFiles.filter(file => 
                file.endsWith('.json') && 
                !file.includes('.backup_') && 
                !expectedFiles.includes(file)
            );
            
            for (const otherFile of otherFiles) {
                const filePath = path.join(dataDir, otherFile);
                if (fs.statSync(filePath).size > 0) {
                    backupFiles.push({
                        name: otherFile,
                        file: filePath
                    });
                }
            }
        }
        
        if (backupFiles.length === 0) {
            console.log('No JSON files found in database folder, creating empty backup');
            const backupFileName = `backup_${dateStr}_${timeStr}.zip`;
            const backupPath = path.join(backupDir, backupFileName);
            const output = fs.createWriteStream(backupPath);
            const archive = archiver('zip', { zlib: { level: 9 } });
            
            output.on('close', () => {
                console.log(`Empty backup created: ${backupFileName}`);
            });
            
            archive.pipe(output);
            await archive.finalize();
            return;
        }
        
        const backupFileName = `backup_${dateStr}_${timeStr}.zip`;
        const backupPath = path.join(backupDir, backupFileName);
        
        const output = fs.createWriteStream(backupPath);
        const archive = archiver('zip', { zlib: { level: 9 } });
        
        output.on('close', async () => {
            const eventMessages = {
                'deposit_success': 'Deposit Sukses',
                'deposit_pending': 'Deposit Pending',
                'order_success': 'Order Sukses',
                'order_cancelled': 'Order Dibatalkan',
                'order_expired': 'Order Expired',
                'balance_added': 'Saldo Ditambahkan',
                'balance_deducted': 'Saldo Dikurangi',
                'voucher_created': 'Voucher Dibuat',
                'voucher_used': 'Voucher Digunakan',
                'script_added': 'Script Ditambahkan',
                'script_ordered': 'Script Terjual',
                'manual_backup': 'Backup Manual',
                'auto_backup': 'Backup Otomatis',
                'pre_reset': 'Backup Pra-Reset',
                'vps_purchased': 'VPS Dibeli',
                'free_vps_created': 'Replace Vps Dibuat',
                'panel_purchased': 'Panel Dibeli',
                'admin_panel_purchased': 'Admin Panel Dibeli'
            };
            
            const eventMessage = eventMessages[eventType] || 'Event Sistem';
            const fileSize = (archive.pointer() / 1024).toFixed(2);
            const fileSizeMB = (archive.pointer() / (1024 * 1024)).toFixed(2);
            const sizeDisplay = fileSizeMB > 1 ? `${fileSizeMB} MB` : `${fileSize} KB`;
            
            // Buat daftar file (pakai bullet points, bukan karakter khusus)
            let fileListText = '';
            backupFiles.forEach((file, idx) => {
                fileListText += `• ${file.name}\n`;
            });
            
            // Gunakan HTML entity untuk karakter aman
            const caption = `<b>📁 BACKUP DATABASE</b>

<b>📋 Event:</b> ${eventMessage}
<b>📁 File:</b> ${backupFileName}
<b>📦 Size:</b> ${sizeDisplay}
<b>📊 Files:</b> ${backupFiles.length} file
<b>🕐 Waktu:</b> ${now.toLocaleString('id-ID')}

<b>📄 Isi Backup:</b>
${fileListText}

⚠️ <i>Simpan file ini dengan aman!</i>`;
            
            for (const ownerId of owner_ids) {
                try {
                    await bot.sendDocument(ownerId, backupPath, {
                        caption: caption,
                        parse_mode: 'HTML'
                    });
                    console.log(`✅ Backup sent to owner ${ownerId}`);
                } catch (error) {
                    console.error(`Failed to send backup to owner ${ownerId}:`, error.message);
                    // Coba kirim tanpa caption jika gagal
                    try {
                        await bot.sendDocument(ownerId, backupPath);
                        console.log(`✅ Backup sent to owner ${ownerId} (without caption)`);
                    } catch (err) {
                        console.error(`Failed to send backup to owner ${ownerId} even without caption:`, err.message);
                    }
                }
            }
            
            // Hapus backup lama (max 15 file)
            const maxBackups = 15;
            const files = fs.readdirSync(backupDir)
                .filter(f => f.startsWith('backup_') && f.endsWith('.zip'))
                .map(f => ({
                    name: f,
                    path: path.join(backupDir, f),
                    mtime: fs.statSync(path.join(backupDir, f)).mtime.getTime()
                }))
                .sort((a, b) => b.mtime - a.mtime);
            
            if (files.length > maxBackups) {
                for (let i = maxBackups; i < files.length; i++) {
                    fs.unlinkSync(files[i].path);
                    console.log(`Deleted old backup: ${files[i].name}`);
                }
            }
        });
        
        archive.on('error', (err) => {
            console.error('Backup error:', err);
        });
        
        archive.pipe(output);
        
        let backedUpCount = 0;
        for (const file of backupFiles) {
            if (fs.existsSync(file.file)) {
                archive.file(file.file, { name: file.name });
                backedUpCount++;
                console.log(`Added to backup: ${file.name}`);
            }
        }
        
        await archive.finalize();
        console.log(`Backup created: ${backupFileName} with ${backedUpCount} files`);
        
    } catch (error) {
        console.error('Auto backup error:', error);
    }
}

setInterval(() => {
    autoBackupTransactions('auto_backup', {});
}, 7200000);

// ========================= PRICE MONITORING =========================

setInterval(monitorSpecificPrices, 15 * 60 * 1000); 
setInterval(monitorStockLevels, 30 * 60 * 1000);
scheduleDailySummary();

async function monitorSpecificPrices() {
  try {
    if (isCheckingPrices) return;
    isCheckingPrices = true;
    
    const servicesData = await getServicesCached();
    
    if (!servicesData || !servicesData.success) {
      isCheckingPrices = false;
      return;
    }

    const services = servicesData.data;
    const targetServices = [];
    
    for (const service of services) {
      const serviceName = service.service_name.toLowerCase();
      
      if (serviceName.includes('whatsapp') || serviceName.includes('telegram')) {
        targetServices.push(service);
      }
      
      if (targetServices.length >= 2) break;
    }
    
    for (const service of targetServices) {
      await checkServiceIndonesia(service);
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
    
    isCheckingPrices = false;
  } catch (error) {
    isCheckingPrices = false;
  }
}

async function checkServiceIndonesia(service) {
  try {
    const countriesData = await api.getCountries(service.service_code);
    
    if (!countriesData || !countriesData.success) {
      return;
    }

    const countries = countriesData.data || [];
    
    for (const country of countries) {
      const countryName = country.name.toLowerCase();
      
      if (!countryName.includes('indonesia') && !countryName.includes('indo')) {
        continue;
      }
      
      if (!country.pricelist || country.pricelist.length === 0) {
        continue;
      }

      const cacheKey = `${service.service_code}_${country.number_id}`;
      const currentPrices = country.pricelist.map(server => ({
        provider_id: server.provider_id,
        price: server.price,
        rate: server.rate,
        stock: server.stock
      }));

      const previousPrices = priceCache.get(cacheKey);
      
      priceCache.set(cacheKey, currentPrices);
      
      if (previousPrices) {
        const changes = detectPriceChanges(previousPrices, currentPrices, service, country);
        if (changes.length > 0) {
          await notifyPriceChanges(changes, service, country);
        }
      } else {
        priceCache.set(cacheKey, currentPrices);
      }
    }
    
  } catch (error) {}
}

function detectPriceChanges(oldPrices, newPrices, service, country) {
  const changes = [];
  const notificationKey = `${service.service_code}_${country.number_id}`;
  const lastNotified = lastNotificationTime.get(notificationKey) || 0;
  const now = Date.now();
  
  if (now - lastNotified < 60 * 60 * 1000) {
    return changes;
  }

  for (let i = 0; i < Math.min(oldPrices.length, newPrices.length); i++) {
    const oldPrice = oldPrices[i];
    const newPrice = newPrices[i];
    
    if (oldPrice && newPrice && oldPrice.price !== newPrice.price) {
      const changeAmount = Math.abs(newPrice.price - oldPrice.price);
      const minChange = 500;
      
      if (changeAmount >= minChange) {
        const changePercent = ((newPrice.price - oldPrice.price) / oldPrice.price * 100).toFixed(1);
        
        changes.push({
          service: service.service_name,
          country: country.name,
          server: i + 1,
          oldPrice: oldPrice.price,
          newPrice: newPrice.price,
          change: parseInt(newPrice.price) - parseInt(oldPrice.price),
          changePercent: changePercent,
          rate: newPrice.rate,
          stock: newPrice.stock
        });
      }
    }
  }
  
  if (changes.length > 0) {
    lastNotificationTime.set(notificationKey, now);
  }
  
  return changes;
}

async function notifyPriceChanges(changes, service, country) {
  try {
    if (changes.length === 0) return;
    
    const priceDownChanges = changes.filter(c => c.change < 0);
    const priceUpChanges = changes.filter(c => c.change > 0);
    
    if (priceDownChanges.length === 0 && priceUpChanges.length === 0) return;
    
    let message = ``;
    
    if (priceDownChanges.length > 0) {
      message += `🟢 <b>HARGA TURUN!</b>\n\n`;
    } else if (priceUpChanges.length > 0) {
      message += `🔴 <b>HARGA NAIK!</b>\n\n`;
    }
    
    message += `<b>${service.service_name} - ${country.name}</b>\n\n`;
    
    if (priceDownChanges.length > 0) {
      message += `<b>💰 HARGA TURUN:</b>\n`;
      priceDownChanges.forEach(change => {
        const discount = Math.abs(change.change);
        message += `• Server ${change.server}: Rp${change.oldPrice.toLocaleString('id-ID')} → <b>Rp${change.newPrice.toLocaleString('id-ID')}</b>\n`;
        message += `  🔻 Turun Rp${discount.toLocaleString('id-ID')} (${Math.abs(change.changePercent)}%)\n`;
        message += `  📊 Rate: ${change.rate}% | 📦 Stok: ${change.stock}\n\n`;
      });
    }
    
    if (priceUpChanges.length > 0) {
      message += `<b>📈 HARGA NAIK:</b>\n`;
      priceUpChanges.forEach(change => {
        const increase = Math.abs(change.change);
        message += `• Server ${change.server}: Rp${change.oldPrice.toLocaleString('id-ID')} → <b>Rp${change.newPrice.toLocaleString('id-ID')}</b>\n`;
        message += `  🔺 Naik Rp${increase.toLocaleString('id-ID')} (${Math.abs(change.changePercent)}%)\n`;
        message += `  📊 Rate: ${change.rate}% | 📦 Stok: ${change.stock}\n\n`;
      });
    }
    
    message += `<i>Update: ${new Date().toLocaleString('id-ID')}</i>`;
    
    await bot.sendMessage(channel, message, {
      parse_mode: 'HTML',
      disable_web_page_preview: true
    });
    
    savePriceChangeHistory({
      service: service.service_name,
      country: country.name,
      changes: changes,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {}
}

function savePriceChangeHistory(data) {
  try {
    const historyFile = path.join(dataDir, 'price_history.json');
    let history = [];
    
    if (fs.existsSync(historyFile)) {
      history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
    }
    
    history.unshift(data);
    
    if (history.length > 50) {
      history = history.slice(0, 50);
    }
    
    fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));
  } catch (error) {}
}

async function monitorStockLevels() {
  try {
    const servicesData = await getServicesCached();
    
    if (!servicesData || !servicesData.success) {
      return;
    }

    const services = servicesData.data;
    
    for (const service of services) {
      const serviceName = service.service_name.toLowerCase();
      
      if (!serviceName.includes('whatsapp') && !serviceName.includes('telegram')) {
        continue;
      }
      
      const countriesData = await api.getCountries(service.service_code);
      
      if (!countriesData || !countriesData.success) {
        continue;
      }

      const countries = countriesData.data || [];
      
      for (const country of countries) {
        const countryName = country.name.toLowerCase();
        
        if (!countryName.includes('indonesia') && !countryName.includes('indo')) {
          continue;
        }
        
        if (!country.pricelist) continue;
        
        if (country.stock_total < 5) {
          await notifyLowStock(service, country);
        }
      }
    }
    
  } catch (error) {}
}

async function notifyLowStock(service, country) {
  try {
    const cacheKey = `lowstock_${service.service_code}_${country.number_id}`;
    const lastNotified = lastNotificationTime.get(cacheKey) || 0;
    const now = Date.now();
    
    if (now - lastNotified < 4 * 60 * 60 * 1000) {
      return;
    }
    
    const message = `⚠️ <b>STOK MENIPIS!</b>\n\n` +
                   `<b>Layanan:</b> ${service.service_name}\n` +
                   `<b>Negara:</b> ${country.name}\n` +
                   `<b>Stok Tersisa:</b> ${country.stock_total}\n\n` +
                   `<i>Segera tambah stok!</i>`;
    
    await bot.sendMessage(channel, message, {
      parse_mode: 'HTML',
      disable_web_page_preview: true
    });
    
    lastNotificationTime.set(cacheKey, now);
    
  } catch (error) {}
}

async function sendDailyPriceSummary() {
  try {
    const servicesData = await getServicesCached();
    
    if (!servicesData || !servicesData.success) {
      return;
    }

    const services = servicesData.data;
    const targetServices = [];
    
    for (const service of services) {
      const serviceName = service.service_name.toLowerCase();
      
      if (serviceName.includes('whatsapp') || serviceName.includes('telegram')) {
        targetServices.push(service);
      }
      
      if (targetServices.length >= 2) break;
    }
    
    if (targetServices.length === 0) return;
    
    let message = `📊 <b>REKAP HARGA HARIAN</b>\n\n`;
    message += `<i>${new Date().toLocaleDateString('id-ID', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })}</i>\n\n`;
    
    for (const service of targetServices) {
      const countriesData = await api.getCountries(service.service_code);
      
      if (!countriesData || !countriesData.success || !countriesData.data.length) {
        continue;
      }
      
      const indonesiaCountry = countriesData.data.find(c => 
        c.name.toLowerCase().includes('indonesia') || c.name.toLowerCase().includes('indo')
      );
      
      if (!indonesiaCountry || !indonesiaCountry.pricelist || !indonesiaCountry.pricelist.length) continue;
      
      const server = indonesiaCountry.pricelist[0];
      
      message += `<b>${service.service_name} - Indonesia</b>\n`;
      message += `💰 Rp${server.price.toLocaleString('id-ID')}\n`;
      message += `📊 Rate: ${server.rate}%\n`;
      message += `📦 Stok: ${indonesiaCountry.stock_total}\n`;
      message += `📡 Server: ${indonesiaCountry.pricelist.length}\n\n`;
    }
    
    message += `<i>Pantau terus @${channel.replace('@', '')} untuk update harga!</i>`;
    
    await bot.sendMessage(channel, message, {
      parse_mode: 'HTML',
      disable_web_page_preview: true
    });
    
  } catch (error) {}
}

function scheduleDailySummary() {
  const now = new Date();
  const target = new Date();
  target.setHours(9, 0, 0, 0);
  
  if (now > target) {
    target.setDate(target.getDate() + 1);
  }
  
  const timeUntilTarget = target.getTime() - now.getTime();
  
  setTimeout(() => {
    sendDailyPriceSummary();
    setInterval(sendDailyPriceSummary, 24 * 60 * 60 * 1000);
  }, timeUntilTarget);
}

// ========================= ORDER HISTORY =========================

async function showOrderHistory(chatId, userId, messageId, callbackQueryId) {
    try {
        const transactions = loadTransactions();
        const allOrders = transactions.nokos_orders || [];
        const userOrders = allOrders.filter(order => 
            String(order.userId) === String(userId)
        );
        
        const completedOrders = userOrders.filter(order => 
            order.status === 'completed' || 
            order.status === 'cancelled' || 
            order.status === 'expired'
        );
        
        if (completedOrders.length === 0) {
            await editMessage(chatId, messageId, callbackQueryId,
                'Riwayat Order\n\nBelum ada riwayat order yang selesai.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Buat Order', callback_data: 'nokos_menu' }],
                            [{ text: 'Menu Utama', callback_data: 'main_menu' }]
                        ]
                    }
                }
            );
            return;
        }

        const recentOrders = completedOrders.slice(-15).reverse();
        
        let message = '<b>📋 Riwayat Order Anda</b>\n';
        message += `Total Order Anda: ${completedOrders.length}\n\n`;
        
        recentOrders.forEach((order, index) => {
            const orderData = order.data;
            const date = new Date(order.timestamp).toLocaleString('id-ID');
            const maskedPhone = maskPhoneNumber(orderData.phoneNumber);
            
            let statusText = '';
            if (order.status === 'completed') {
                statusText = '✅ Sukses';
            } else if (order.status === 'cancelled') {
                statusText = '❌ Dibatalkan';
            } else if (order.status === 'expired') {
                statusText = '⏱️ Expired';
            } else {
                statusText = order.status || 'unknown';
            }
            
            message += `<b>${index + 1}. ${orderData.service || 'Nokos'}</b>\n`;
            message += `ID: <code>#${orderData.orderId}</code>\n`;
            message += `Nomor: ${maskedPhone}\n`;
            message += `Harga: ${formatCurrency(orderData.price || 0)}\n`;
            
            if (orderData.discount && orderData.discount > 0) {
                message += `Diskon: ${formatCurrency(orderData.discount)}\n`;
                if (orderData.voucher_code) {
                    message += `Voucher: ${orderData.voucher_code}\n`;
                }
            }
            
            message += `Status: ${statusText}\n`;
 
            if (orderData.otp_code && orderData.otp_code !== '-' && orderData.otp_code !== '') {
                message += `OTP: <code>${orderData.otp_code}</code>\n`;
            }
            
            message += `Tanggal: ${date}\n\n`;
        });

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Order Baru', callback_data: 'nokos_menu' },
                        { text: 'Refresh', callback_data: 'order_history' }
                    ],
                    [
                        { text: 'Menu Utama', callback_data: 'main_menu' }
                    ]
                ]
            }
        });

    } catch (error) {
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Error\n\nGagal memuat riwayat order.',
            { 
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Coba Lagi', callback_data: 'order_history' }]
                    ]
                }
            }
        );
    }
}

// ========================= DEPOSIT HISTORY =========================

async function showDepositHistory(chatId, userId, messageId, callbackQueryId) {
    try {
        const transactions = loadTransactions();
        const allDeposits = [];
        
        if (transactions.rumahotp_deposits) {
            const userRumahOTP = transactions.rumahotp_deposits.filter(deposit => 
                String(deposit.userId) === String(userId)
            );
            allDeposits.push(...userRumahOTP);
        }
        
        if (transactions.cashify_deposits) { 
            const userCashify = transactions.cashify_deposits.filter(deposit => 
                String(deposit.userId) === String(userId)
            );
            allDeposits.push(...userCashify);
        }
        
        const successfulDeposits = allDeposits.filter(deposit => 
            deposit.status === 'success' || deposit.status === 'paid'
        );
        
        successfulDeposits.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        
        if (successfulDeposits.length === 0) {
            await editMessage(chatId, messageId, callbackQueryId,
                '💰 Riwayat Deposit\n\nBelum ada riwayat deposit yang sukses.',
                { 
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Deposit', callback_data: 'deposit_main' }],
                            [{ text: 'Menu Utama', callback_data: 'main_menu' }]
                        ]
                    }
                }
            );
            return;
        }

        const recentDeposits = successfulDeposits.slice(0, 15);
        
        let message = '<b>💰 Riwayat Deposit Anda</b>\n';
        message += `Total Deposit Anda: ${successfulDeposits.length}\n\n`;
        
        recentDeposits.forEach((deposit, index) => {
            const depositData = deposit.data;
            const date = new Date(deposit.timestamp).toLocaleString('id-ID');
            
            let method = 'QRIS';
            if (depositData.method) {
                method = depositData.method;
            } else if (depositData.qr_string) {
                method = 'QRIS';
            }
            
            message += `<b>${index + 1}. Deposit ${formatCurrency(depositData.amount || depositData.total || 0)}</b>\n`;
            message += `ID: <code>#${depositData.id}</code>\n`;
            message += `Jumlah: ${formatCurrency(depositData.amount || depositData.total || 0)}\n`;
            message += `Diterima: ${formatCurrency(depositData.diterima || depositData.amount || 0)}\n`;
            message += `Biaya: ${formatCurrency(depositData.fee || 0)}\n`;
            message += `Metode: ${method}\n`;
            message += `Tanggal: ${date}\n\n`;
        });

        await editMessage(chatId, messageId, callbackQueryId, message, {
            parse_mode: 'HTML',
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Deposit Lagi', callback_data: 'deposit_main' },
                        { text: 'Refresh', callback_data: 'deposit_history' }
                    ],
                    [
                        { text: 'Menu Utama', callback_data: 'main_menu' }
                    ]
                ]
            }
        });

    } catch (error) {
        await editMessage(chatId, messageId, callbackQueryId,
            '❌ Error\n\nGagal memuat riwayat deposit.',
            { 
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Coba Lagi', callback_data: 'deposit_history' }]
                    ]
                }
            }
        );
    }
}

bot.onText(/^\/finduser(\s|$)/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();
  
  if (!owner_ids.includes(userId)) {
    return bot.sendMessage(chatId,
      "⛔ Akses Ditolak\n\nHanya owner yang bisa menggunakan command ini.",
      { parse_mode: 'HTML' }
    );
  }
  
  const text = msg.text || '';
  const args = text.trim().split(/\s+/);
  
  if (args.length < 2) {
    return bot.sendMessage(chatId,
      `<b>🔍 FIND USER</b>\n\n` +
      `Format: <code>/finduser [user_id|@username|banned]</code>\n\n` +
      `Examples:\n` +
      `• <code>/finduser 123456789</code>\n` +
      `• <code>/finduser @username</code>\n` +
      `• <code>/finduser banned</code>\n\n` +
      `<i>User must have started the bot before</i>`,
      { parse_mode: 'HTML' }
    );
  }
  
  const searchTerm = args[1];
  
  // Simulasikan callback untuk search
  const simulatedCallback = {
    data: 'search_user_quick',
    from: msg.from,
    message: msg,
    id: 'manual_search_' + Date.now()
  };
  
  // Set selection untuk search
  const selection = {
    step: 'search_user_quick',
    timestamp: Date.now()
  };
  userSelections.set(userId, selection);
  
  // Handle search
  if (searchTerm.toLowerCase() === 'banned') {
    const bannedUsers = loadBannedUsers();
    const activeBans = bannedUsers.filter(u => u.status === 'banned');
    
    if (activeBans.length === 0) {
      return bot.sendMessage(chatId,
        'No banned users found.',
        { parse_mode: 'HTML' }
      );
    }
    
    let message = `<b>🚫 BANNED USERS LIST</b>\n\n`;
    message += `<b>Total:</b> ${activeBans.length} users\n\n`;
    
    activeBans.slice(0, 10).forEach((ban, index) => {
      const banDate = new Date(ban.bannedAt).toLocaleDateString('id-ID');
      message += `<b>${index + 1}. User ${ban.userId.substring(0, 8)}...</b>\n`;
      message += `├ Reason: ${ban.reason || 'No reason'}\n`;
      message += `├ Banned by: ${ban.bannedBy || 'System'}\n`;
      message += `└ Date: ${banDate}\n\n`;
    });
    
    if (activeBans.length > 10) {
      message += `... and ${activeBans.length - 10} more\n`;
    }
    
    const keyboard = [];
    
    // Tambahkan tombol untuk 5 banned user pertama
    activeBans.slice(0, 5).forEach((ban, index) => {
      keyboard.push([
        { 
          text: `${index + 1}. ${ban.userId.substring(0, 8)}...`, 
          callback_data: `user_manage_${ban.userId}` 
        }
      ]);
    });
    
    keyboard.push([
      { text: '🚫 Ban Manager', callback_data: 'owner_ban_manager' },
      { text: '👥 User Manager', callback_data: 'owner_user_manager' }
    ]);
    
    return bot.sendMessage(chatId, message, {
      parse_mode: 'HTML',
      reply_markup: { inline_keyboard: keyboard }
    });
  }
  
  // Cari user berdasarkan ID
  if (/^\d+$/.test(searchTerm)) {
    const targetUserId = searchTerm;
    const data = loadData();
    
    if (!data.users?.includes(targetUserId)) {
      return bot.sendMessage(chatId,
        `User <code>${targetUserId}</code> not found in system.\n\n` +
        `User may not have started the bot yet.`,
        {
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [
                { text: '➕ Add to System', callback_data: `force_add_user_${targetUserId}` },
                { text: '🔍 Search Again', callback_data: 'search_user_quick' }
              ]
            ]
          }
        }
      );
    }
    
    return showUserManageDetail(chatId, userId, targetUserId);
  }
  
  // Jika username
  if (searchTerm.startsWith('@')) {
    return bot.sendMessage(chatId,
      `Please use User ID instead of username.\n\n` +
      `You can get User ID from @userinfobot`,
      { parse_mode: 'HTML' }
    );
  }
  
  return bot.sendMessage(chatId,
    'Invalid search term. Please provide User ID (numbers only).',
    { parse_mode: 'HTML' }
  );
});

bot.onText(/\/endcs/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    
    await endCSChat(chatId, userId, null, null, false);
});

// Tambahkan command untuk mengatur keuntungan
bot.onText(/^\/setprofit(\s+(\d+))?$/, async (msg, match) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id.toString();
    
    if (!owner_ids.includes(userId)) {
        return bot.sendMessage(chatId,
            "⛔ Akses Ditolak\n\nHanya owner yang bisa menggunakan command ini.",
            { parse_mode: 'HTML' }
        );
    }
    
    const newProfit = match[2] ? parseInt(match[2]) : null;
    
    if (!newProfit || isNaN(newProfit) || newProfit < 0) {
        const currentProfit = Number(config.UNTUNG_NOKOS) || 0;
        return bot.sendMessage(chatId,
            `<b>⚙️ PENGATURAN KEUNTUNGAN NOKOS</b>\n\n` +
            `Keuntungan saat ini: <b>${formatCurrency(currentProfit)}</b>\n\n` +
            `Format: <code>/setprofit [jumlah]</code>\n` +
            `Contoh: <code>/setprofit 10000</code>\n\n` +
            `<i>Nilai minimal: 0 (tanpa keuntungan)</i>`,
            { parse_mode: 'HTML' }
        );
    }
    
    // Update config (perlu restart bot)
    try {
        const configPath = path.join(__dirname, 'config.js');
        let configContent = fs.readFileSync(configPath, 'utf8');
        
        // Update atau tambahkan UNTUNG_NOKOS
        if (configContent.includes('UNTUNG_NOKOS:')) {
            configContent = configContent.replace(
                /UNTUNG_NOKOS:\s*\d+/,
                `UNTUNG_NOKOS: ${newProfit}`
            );
        } else {
            // Tambahkan di akhir module.exports
            configContent = configContent.replace(
                /};?\s*$/,
                `    UNTUNG_NOKOS: ${newProfit},\n};`
            );
        }
        
        fs.writeFileSync(configPath, configContent);
        
        // Update global variable
        config.UNTUNG_NOKOS = newProfit;
        
        await bot.sendMessage(chatId,
            `<b>✅ KEUNTUNGAN BERHASIL DIUBAH</b>\n\n` +
            `Keuntungan baru: <b>${formatCurrency(newProfit)}</b>\n\n` +
            `<i>Perubahan akan aktif untuk order selanjutnya</i>`,
            { parse_mode: 'HTML' }
        );
        
    } catch (error) {
        await bot.sendMessage(chatId,
            `❌ Gagal mengubah keuntungan.\n\nError: ${error.message}`,
            { parse_mode: 'HTML' }
        );
    }
});

// ========================= INITIALIZATION =========================

loadUserNotifications();

setInterval(saveUserNotifications, 30 * 60 * 1000);

// Fungsi untuk membersihkan sesi yang rusak
function cleanupUserSessions() {
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    
    for (const [userId, session] of userSelections.entries()) {
        if (session.lastActivity && (now - session.lastActivity > oneHour)) {
            userSelections.delete(userId);
            console.log(`Cleaned up stale session for user ${userId}`);
        }
    }
}

// Tambahkan di bagian interval cleaning
setInterval(() => {
    cleanExpiredOrdersWithRefund();
}, 60 * 1000); // Check every minute

function cleanExpiredOrdersWithRefund() {
    try {
        const transactions = loadTransactions();
        const now = Date.now();
        
        if (transactions.nokos_orders) {
            transactions.nokos_orders = transactions.nokos_orders.filter(order => {
                const orderTime = new Date(order.timestamp).getTime();
                const fiveMinutes = 5 * 60 * 1000;
                const fifteenMinutes = 15 * 60 * 1000;
                
                // Hapus order yang sudah lebih dari 15 menit dan sudah selesai/refunded
                if ((order.status === 'completed' || order.status === 'auto_refunded') && 
                    (now - orderTime > fifteenMinutes)) {
                    return false;
                }
                
                // Hapus order pending/active yang lebih dari 15 menit
                if ((order.status === 'pending' || order.status === 'active') && 
                    (now - orderTime > fifteenMinutes)) {
                    return false;
                }
                
                return true;
            });
            
            saveTransactions(transactions);
        }
    } catch (error) {
        console.error('Error cleaning orders:', error);
    }
}

// Command untuk menghapus pesan OTP secara manual (hanya untuk owner)
bot.onText(/^\/deleteotp(\s+(\d+))?$/, async (msg, match) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id.toString();
    
    if (!owner_ids.includes(userId)) {
        return bot.sendMessage(chatId,
            "⛔ Akses Ditolak\n\nHanya owner yang bisa menggunakan command ini.",
            { parse_mode: 'HTML' }
        );
    }
    
    const messageId = match[2] ? parseInt(match[2]) : null;
    
    if (!messageId) {
        // Tampilkan daftar pesan OTP aktif
        if (channelOTPMessages.size === 0) {
            return bot.sendMessage(chatId,
                "Tidak ada pesan OTP aktif saat ini.",
                { parse_mode: 'HTML' }
            );
        }
        
        let message = "📋 <b>DAFTAR PESAN OTP AKTIF</b>\n\n";
        for (const [msgId, data] of channelOTPMessages.entries()) {
            const timeLeft = Math.round((data.timestamp + 5*60*1000 - Date.now()) / 1000);
            message += `• Message ID: <code>${msgId}</code>\n`;
            message += `  Order ID: ${data.orderId}\n`;
            message += `  ⏱️ Hapus dalam: ${timeLeft} detik\n\n`;
        }
        
        message += `Gunakan <code>/deleteotp [message_id]</code> untuk menghapus manual.`;
        
        return bot.sendMessage(chatId, message, {
            parse_mode: 'HTML'
        });
    }
    
    const success = await deleteOTPMessageManually(messageId);
    
    if (success) {
        bot.sendMessage(chatId,
            `✅ Pesan OTP dengan ID <code>${messageId}</code> berhasil dihapus.`,
            { parse_mode: 'HTML' }
        );
    } else {
        bot.sendMessage(chatId,
            `❌ Gagal menghapus pesan OTP dengan ID <code>${messageId}</code>.\n\nPesan mungkin sudah tidak ada atau sudah dihapus.`,
            { parse_mode: 'HTML' }
        );
    }
});

bot.onText(/^\/refstats$/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id.toString();
    
    if (!owner_ids.includes(userId)) {
        return bot.sendMessage(chatId, "⛔ Akses Ditolak", { parse_mode: 'HTML' });
    }
    
    const referrals = loadReferrals();
    const totalUsers = Object.keys(referrals.users).length;
    const usersWithReferral = Object.values(referrals.users).filter(u => u.referredBy).length;
    
    let message = `<b>📊 STATISTIK REFERRAL</b>\n\n`;
    message += `<b>📈 Overview:</b>\n`;
    message += `├ Total User Referral: ${totalUsers}\n`;
    message += `├ User dengan Referrer: ${usersWithReferral}\n`;
    message += `├ Total Bonus Diberikan: ${formatCurrency(referrals.stats.totalBonusGiven)}\n`;
    message += `├ ├ Bonus Share: ${formatCurrency(referrals.stats.totalShareBonus)}\n`;
    message += `├ └ Bonus Klaim: ${formatCurrency(referrals.stats.totalClaimBonus)}\n`;
    message += `└ Total Transaksi Bonus: ${referrals.transactions.length}\n\n`;
    
    // Top 5 referrer
    const topReferrers = Object.entries(referrals.users)
        .map(([id, data]) => ({ id, totalReferrals: data.totalReferrals, totalEarned: data.totalEarned }))
        .sort((a, b) => b.totalReferrals - a.totalReferrals)
        .slice(0, 5);
    
    if (topReferrers.length > 0) {
        message += `<b>🏆 Top 5 Referrer:</b>\n`;
        topReferrers.forEach((ref, index) => {
            message += `${index + 1}. User ${ref.id.substring(0, 8)}... - ${ref.totalReferrals} referral (${formatCurrency(ref.totalEarned)})\n`;
        });
    }
    
    await bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
});

bot.onText(/^\/batalscript$/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id.toString();
    
    if (activeScriptDeposit[userId]) {
        const deposit = activeScriptDeposit[userId];
        await cancelScriptDeposit(chatId, userId, deposit.kodeTrx);
    } else {
        await bot.sendMessage(chatId, '❌ Tidak ada transaksi script aktif.', { parse_mode: 'HTML' });
    }
});

// Tambahkan command ini untuk diagnostic dan recovery

bot.onText(/^\/checkdb$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();
  
  if (!owner_ids.includes(userId)) {
    return bot.sendMessage(chatId, "⛔ Akses Ditolak", { parse_mode: 'HTML' });
  }
  
  const data = loadData();
  const balances = loadBalances();
  
  let message = `<b>📊 DATABASE STATUS</b>\n\n`;
  message += `<b>users.json:</b>\n`;
  message += `├ Exist: ${fs.existsSync(datafile) ? '✅' : '❌'}\n`;
  message += `├ Size: ${fs.existsSync(datafile) ? (fs.statSync(datafile).size + ' bytes') : '0'}\n`;
  message += `└ Total users: ${data.users?.length || 0}\n\n`;
  
  message += `<b>balances.json:</b>\n`;
  message += `├ Exist: ${fs.existsSync(balanceFile) ? '✅' : '❌'}\n`;
  message += `└ Total entries: ${Object.keys(balances).length}\n\n`;
  
  // Tampilkan 10 user terakhir
  if (data.users && data.users.length > 0) {
    message += `<b>Last 10 users:</b>\n`;
    data.users.slice(-10).forEach((uid, i) => {
      const balance = balances[uid] || 0;
      message += `${i+1}. ${uid} (${formatCurrency(balance)})\n`;
    });
  } else {
    message += `<b>⚠️ No users found in database!</b>\n`;
  }
  
  await bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
});

bot.onText(/^\/fixdb$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();
  
  if (!owner_ids.includes(userId)) {
    return bot.sendMessage(chatId, "⛔ Akses Ditolak", { parse_mode: 'HTML' });
  }
  
  // Cari backup terbaru
  const backupFiles = fs.readdirSync(dataDir)
    .filter(f => f.endsWith('.backup_') && (f.startsWith('users.json') || f.startsWith('balances.json')));
  
  if (backupFiles.length === 0) {
    return bot.sendMessage(chatId, "❌ Tidak ada backup ditemukan.", { parse_mode: 'HTML' });
  }
  
  // Group by original file
  const userBackups = backupFiles.filter(f => f.startsWith('users.json.backup_')).sort().reverse();
  const balanceBackups = backupFiles.filter(f => f.startsWith('balances.json.backup_')).sort().reverse();
  
  let restored = false;
  
  if (userBackups.length > 0) {
    const latestUserBackup = path.join(dataDir, userBackups[0]);
    fs.copyFileSync(latestUserBackup, datafile);
    restored = true;
    await bot.sendMessage(chatId, `✅ Restored users.json from ${userBackups[0]}`, { parse_mode: 'HTML' });
  }
  
  if (balanceBackups.length > 0) {
    const latestBalanceBackup = path.join(dataDir, balanceBackups[0]);
    fs.copyFileSync(latestBalanceBackup, balanceFile);
    restored = true;
    await bot.sendMessage(chatId, `✅ Restored balances.json from ${balanceBackups[0]}`, { parse_mode: 'HTML' });
  }
  
  if (restored) {
    // Clear cache
    balanceCache.clear();
    await bot.sendMessage(chatId, "✅ Database restored! Use /checkdb to verify.", { parse_mode: 'HTML' });
  } else {
    await bot.sendMessage(chatId, "❌ No valid backups found.", { parse_mode: 'HTML' });
  }
});

bot.onText(/^\/batalkanvps$/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id.toString();
    
    if (activeVPSSession[userId]) {
        const session = activeVPSSession[userId];
        await cancelVPSTransaction(chatId, userId, session.kodeTrx, null, null);
    } else {
        await bot.sendMessage(chatId, '❌ Tidak ada transaksi VPS aktif.\n\nGunakan /vps untuk membeli VPS.', { parse_mode: 'HTML' });
    }
});

// ==================== COMMAND /install (PUBLIC ACCESS) ====================

bot.onText(/^\/install$/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const from = msg.from;
    
    if (isMaintenance() && !owner_ids.includes(userId.toString())) {
        return bot.sendMessage(chatId, 
            '⚠️ Bot sedang dalam maintenance. Silakan coba lagi nanti.',
            { parse_mode: 'HTML' }
        );
    }
    
    const existing = pendingInstalls.get(userId);
    if (existing && Date.now() - existing.timestamp < 60 * 60 * 1000) {
        return bot.sendMessage(chatId,
            `<blockquote>⚠️ <b>INSTALASI SEDANG BERJALAN</b>

Anda memiliki sesi instalasi aktif.

Step saat ini: ${existing.step || 'menunggu data'}

⚠️ Ketik /cancelinstall untuk membatalkan</blockquote>`,
            { parse_mode: 'HTML' }
        );
    }
    
    if (existing) pendingInstalls.delete(userId);
    
    pendingInstalls.set(userId, {
        command: 'installpanel',
        step: 'select_type',
        data: {},
        timestamp: Date.now()
    });
    
    const options = {
        reply_markup: {
            inline_keyboard: [
                [{ text: '📡 INSTALL PANEL (Panel + Wings)', callback_data: 'install_type_panel' }],
                [{ text: '🖥️ INSTALL WINGS ONLY', callback_data: 'install_type_wings' }],
                [{ text: '❌ BATAL', callback_data: 'install_type_cancel' }]
            ]
        }
    };
    
    await bot.sendMessage(chatId, 
        `<blockquote>⚡ <b>MENU INSTALASI PTERODACTYL</b>

Pilih jenis instalasi yang diinginkan:

<b>📡 INSTALL PANEL (Panel + Wings)</b>
• Install Pterodactyl Panel + Wings
• Membutuhkan domain panel dan node
• RAM minimal 2GB

<b>🖥️ INSTALL WINGS ONLY</b>
• Install Wings saja
• Hanya membutuhkan domain node
• Panel harus sudah terinstall

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ <b>PERSYARATAN:</b>
• VPS Ubuntu 20.04/22.04
• Domain sudah diarahkan ke IP VPS
• Port 22, 80, 443 terbuka
• RAM minimal 2GB (4GB disarankan)

💡 Ketik /cancelinstall untuk membatalkan</blockquote>`,
        { parse_mode: 'HTML', ...options }
    );
});

// ==================== COMMAND /cancelinstall ====================

bot.onText(/^\/cancelinstall$/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    
    const pending = pendingInstalls.get(userId);
    if (!pending || pending.command !== 'installpanel') {
        return bot.sendMessage(chatId,
            '❌ Tidak ada sesi instalasi aktif.',
            { parse_mode: 'HTML' }
        );
    }
    
    pendingInstalls.delete(userId);
    
    await bot.sendMessage(chatId,
        `<blockquote>✅ <b>INSTALASI DIBATALKAN</b>

Sesi instalasi telah dihapus.

Gunakan /install untuk memulai kembali.</blockquote>`,
        { parse_mode: 'HTML' }
    );
});

// ==================== COMMAND /subdo (REDIRECT KE MENU) ====================

bot.onText(/^\/subdo$/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    
    // Redirect ke menu subdomain
    await showSubdomainMenu(chatId, userId, null, null);
});

bot.onText(/^\/subdomain$/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    
    // Redirect ke menu subdomain
    await showSubdomainMenu(chatId, userId, null, null);
});

// Tambahkan fungsi cleanup di interval
setInterval(() => {
  try {
    if (global.csChatSessions) {
      const now = Date.now();
      const oneWeek = 7 * 24 * 60 * 60 * 1000;
      
      for (const [threadId, session] of global.csChatSessions.entries()) {
        const sessionTime = new Date(session.createdAt).getTime();
        
        // Hapus session yang sudah lebih dari 1 minggu dan status closed
        if (session.status === 'closed' && (now - sessionTime > oneWeek)) {
          global.csChatSessions.delete(threadId);
        }
        
        // Auto close pending sessions yang lebih dari 24 jam
        if (session.status === 'pending' && (now - sessionTime > 24 * 60 * 60 * 1000)) {
          session.status = 'closed';
          global.csChatSessions.set(threadId, session);
        }
      }
    }
  } catch (error) {
    console.error('Error cleaning CS sessions:', error);
  }
}, 60 * 60 * 1000); // Jalankan setiap 1 jam

// Jadwalkan cleanup setiap 30 menit
setInterval(cleanupUserSessions, 30 * 60 * 1000);

// Di bagian bawah file, setelah inisialisasi lainnya
setInterval(async () => {
    await notifyStockStatus();
}, 120 * 60 * 1000); // Cek setiap 1 jam

process.on('SIGINT', () => {
    saveUserNotifications();
    process.exit(0);
});

process.on('SIGTERM', () => {
    saveUserNotifications();
    process.exit(0);
});

// Tambahkan di bagian process handlers (sekitar baris 9940)
process.on('SIGINT', () => {
    // Bersihkan semua timeout sebelum exit
    for (const [messageId, data] of channelOTPMessages.entries()) {
        clearTimeout(data.deleteTimeout);
    }
    channelOTPMessages.clear();
    
    saveUserNotifications();
    process.exit(0);
});

process.on('SIGTERM', () => {
    // Bersihkan semua timeout sebelum exit
    for (const [messageId, data] of channelOTPMessages.entries()) {
        clearTimeout(data.deleteTimeout);
    }
    channelOTPMessages.clear();
    
    saveUserNotifications();
    process.exit(0);
});

console.log('Bot telah dimulai!');

// ==================== AUTO UPDATE GITHUB FEATURE ====================
const Owner = "animationarmufa-oss";
const Repo = "DarkRelay-update-premium";
const Branch = "main";

const GITHUB_API = `https://api.github.com/repos/${Owner}/${Repo}/commits/${Branch}`;
let lastCommitSha = null;

async function getRepoFiles(dir = "") {
  const url = `https://api.github.com/repos/${Owner}/${Repo}/contents/${dir}?ref=${Branch}`;
  const res = await axios.get(url);

  let files = [];

  for (const item of res.data) {
    if (item.type === "file") {
      files.push(item);
    } else if (item.type === "dir") {
      const sub = await getRepoFiles(item.path);
      files = files.concat(sub);
    }
  }

  return files;
}

async function checkGithubUpdate(bot) {
  try {
    const res = await axios.get(GITHUB_API);
    const latestSha = res.data.sha;

    if (!lastCommitSha) {
      lastCommitSha = latestSha;
      return;
    }

    if (latestSha !== lastCommitSha) {
      lastCommitSha = latestSha;

      const message = `
🚀 UPDATE TERBARU TELAH TIBA!

📦 Repo sudah di update
⚡ Ketik /update untuk update terbaru
      `;

      const owners = Array.isArray(owner_ids) ? owner_ids : [owner_ids];

      for (const owner of owners) {
        try {
          await bot.sendMessage(owner, message);
        } catch (e) {
          console.log("❌ Gagal kirim notif update:", e.message);
        }
      }

      console.log("✅ Update terdeteksi & notif terkirim");
    }
  } catch (err) {
    console.log("❌ Gagal cek update:", err.message);
  }
}

async function downloadFile(file) {
  const localPath = path.join(__dirname, file.path);
  const dir = path.dirname(localPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const existed = fs.existsSync(localPath);

  const response = await axios({
    url: file.download_url,
    method: "GET",
    responseType: "stream",
  });

  const writer = fs.createWriteStream(localPath);
  response.data.pipe(writer);

  await new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });

  return existed ? "updated" : "new";
}

bot.onText(/^\/update$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id.toString();

  if (!owner_ids.includes(userId)) {
    return bot.sendMessage(chatId, "❌ Command ini hanya untuk owner.");
  }

  try {
    await bot.sendMessage(chatId, "🔄 Mengambil file dari GitHub...");

    const files = await getRepoFiles();

    const updated = [];
    const added = [];

    for (const file of files) {
      const result = await downloadFile(file);

      if (result === "updated") updated.push(file.path);
      if (result === "new") added.push(file.path);
    }

    let msgText = "✅ Update selesai!\\n\\n";

    if (updated.length) {
      msgText += "📥 File diperbarui\\n";
      msgText += updated.map(v => `• ${v}`).join("\\n") + "\\n\\n";
    }

    if (added.length) {
      msgText += "🆕 File baru\\n";
      msgText += added.map(v => `• ${v}`).join("\\n");
    }

    await bot.sendMessage(chatId, msgText);

    await bot.sendMessage(chatId, "♻️ Bot restart...");

    setTimeout(() => process.exit(0), 3000);

  } catch (err) {
    console.error(err);
    await bot.sendMessage(chatId, "❌ Update gagal: " + err.message);
  }
});

// Auto check update setiap 2 menit
setInterval(() => {
  checkGithubUpdate(bot);
}, 120000);

// Init pertama kali
checkGithubUpdate(bot);

// ==================== END AUTO UPDATE FEATURE ====================

