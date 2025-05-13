
import { Card, CardContent } from "@/components/ui/card";
import { certificates } from "./EducationData";
import CertificateViewer from "./CertificateViewer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const CertificatesTab = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {certificates.map((cert, index) => (
        <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-all dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-0">
            <div className="flex flex-col sm:flex-row">
              <div className="bg-theme-blue dark:bg-gray-700 text-white p-6 sm:w-1/4 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-bold">{cert.issued}</p>
                  <p className="text-xs text-theme-accent">{cert.expires ? `Expires: ${cert.expires}` : 'No Expiration'}</p>
                </div>
              </div>
              <div className="p-6 sm:w-3/4">
                <h3 className="font-bold mb-1 dark:text-white">{cert.name}</h3>
                <p className="text-theme-light-blue text-sm mb-3 dark:text-gray-300">{cert.organization}</p>
                <p className="text-sm text-muted-foreground dark:text-gray-400">{cert.description}</p>
                {cert.credentialId && (
                  <p className="mt-2 text-xs dark:text-gray-300">
                    <span className="font-medium">Credential ID:</span> {cert.credentialId}
                  </p>
                )}
                
                <div className="mt-4 flex gap-2">
                  <CertificateViewer certificate={cert} />
                  
                  {cert.certificateUrl && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex items-center gap-1 text-xs dark:text-white dark:hover:bg-gray-700"
                      asChild
                    >
                      <a 
                        href={cert.certificateUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Verify
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CertificatesTab;
