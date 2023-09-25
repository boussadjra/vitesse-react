import Button from '@/components/core/Button';
import Dashboard from '@/layouts/DashboardLayout';
import DemoSection from '@/components/app/DemoSection';
import { t } from 'i18next';

export default function Buttons() {
  const btnColors = ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'] as const;
  return (
    <Dashboard>
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-full p-4">
          <h1 className="text-3xl font-bold ">{t('demo.components.btns.buttons')} :</h1>

          <article className="grid gap-8">
            <DemoSection title={`${t('demo.components.btns.solid')} :`}>
              {btnColors.map((color) => (
                <Button key={color} color={color} variant="solid" className="m-1">
                  {color}
                </Button>
              ))}
            </DemoSection>

            <DemoSection title={`${t('demo.components.btns.outline')} :`}>
              {btnColors.map((color) => (
                <Button key={color} color={color} variant="outline" className="m-1">
                  {color}
                </Button>
              ))}
            </DemoSection>

            <DemoSection title={`${t('demo.components.btns.link')} :`}>
              {btnColors.map((color) => (
                <Button key={color} color={color} variant="link" className="m-1">
                  {color}
                </Button>
              ))}
            </DemoSection>

            <DemoSection title={`${t('demo.components.btns.prependIcon')} :`}>
              <Button color="primary" variant="solid" className="m-1" prependIcon="i-solar-download-square-linear">
                {t('common.download')}
              </Button>
            </DemoSection>

            <DemoSection title={`${t('demo.components.btns.appendIcon')} :`}>
              <Button
                color="secondary"
                variant="solid"
                className="m-1"
                size="lg"
                appendIcon="i-solar-arrow-right-linear rtl:i-solar-arrow-left-linear"
              >
                {t('common.getStarted')}
              </Button>
            </DemoSection>
          </article>
        </div>
      </div>
    </Dashboard>
  );
}
