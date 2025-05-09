
import { Card, CardContent } from "@/components/ui/card";
import { certificates } from "./EducationData";

const CertificatesTab = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {certificates.map((cert, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col sm:flex-row">
              <div className="bg-theme-blue text-white p-6 sm:w-1/4 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-bold">{cert.issued}</p>
                  <p className="text-xs text-theme-accent">{cert.expires ? `Expires: ${cert.expires}` : 'No Expiration'}</p>
                </div>
              </div>
              <div className="p-6 sm:w-3/4">
                <h3 className="font-bold mb-1">{cert.name}</h3>
                <p className="text-theme-light-blue text-sm mb-3">{cert.organization}</p>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
                {cert.credentialId && (
                  <p className="mt-2 text-xs">
                    <span className="font-medium">Credential ID:</span> {cert.credentialId}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CertificatesTab;
