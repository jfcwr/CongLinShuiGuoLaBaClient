module conglinshuiguo {
    /**
     * 特效生成器
     */
    export class EffectCreate {
        private static m_Instance: EffectCreate;
        public static get Instance() {
            if (this.m_Instance == null) {
                this.m_Instance = new EffectCreate();
            }
            return this.m_Instance;
        }

        constructor() {
        }

        public destroy() {
            EffectCreate.m_Instance = null;
        }

      

     
    }
}
